'use strict';

var clicksRemaining = 25;

function main(){

  getImages();
}

function Product(name, filePath) {

  this.name = name;
  this.filePath = 'assets/' + filePath;
  this.timesChosen = 0;
  this.timesDisplayed = 0;
}

var products = [

  new Product('bag', 'bag.jpg'),
  new Product('banana', 'banana.jpg'),
  new Product('bathroom', 'bathroom.jpg'),
  new Product('boots', 'boots.jpg'),
  new Product('breakfast', 'breakfast.jpg'),
  new Product('bubblegum', 'bubblegum.jpg'),
  new Product('chair', 'chair.jpg'),
  new Product('cthulhu', 'cthulhu.jpg'),
  new Product('dog-duck', 'dog-duck.jpg'),
  new Product('dragon', 'dragon.jpg'),
  new Product('pen', 'pen.jpg'),
  new Product('pet-sweep', 'pet-sweep.jpg'),
  new Product('scissors', 'scissors.jpg'),
  new Product('shark', 'shark.jpg'),
  new Product('sweep', 'sweep.png'),
  new Product('tauntuan', 'tauntaun.jpg'),
  new Product('unicorn', 'unicorn.jpg'),
  new Product('usb', 'usb.gif'),
  new Product('water-can', 'water-can.jpg'),
  new Product('wine-glass', 'wine-glass.jpg'),
];

var productsCurrent = [];
var productsLast = [];

function randomNumberGenerator(max) {

  return Math.floor(Math.random() * max.length);
}

function handleProductClick(event) {

  if(clicksRemaining > 0){
    productsCurrent[parseInt(event.target.id)].timesChosen++;
    var el = document.getElementById('images-container');
    el.textContent = '';
    clicksRemaining--;
    getImages();
  } else {
    products = products.concat(productsCurrent);
    products = products.concat(productsLast);
    getResults();
  }
}

function getImages() {

  products = products.concat(productsLast);
  productsLast = productsCurrent;
  productsCurrent = [];

  var image = products.splice(randomNumberGenerator(products), 1);
  productsCurrent = productsCurrent.concat(image);
  image = products.splice(randomNumberGenerator(products), 1);
  productsCurrent = productsCurrent.concat(image);
  image = products.splice(randomNumberGenerator(products), 1);
  productsCurrent = productsCurrent.concat(image);

  imageDisplay(productsCurrent);
}

function imageDisplay(list) {

  var imagesContainer = document.getElementById('images-container');
  var imagesUl = document.createElement('ul');
  imagesUl.setAttribute('id', 'images-ul');

  var imagesLi;
  var image;
  for(var i = 0; i < list.length; i++) {

    imagesLi = document.createElement('li');
    image = setSource(list, i);
    imagesLi.addEventListener('click', handleProductClick);

    imagesLi.appendChild(image);
    imagesUl.appendChild(imagesLi);
    productsCurrent[i].timesDisplayed++;
  }

  imagesContainer.appendChild(imagesUl);
}

function setSource(list, num){

  var image = document.createElement('img');
  image.setAttribute('id', num);
  image.setAttribute('src', list[num].filePath);
  image.setAttribute('alt', list[num].name);
  return image;
}

function getResults() {

  var ctx = document.getElementById('results-chart');

  var resultsChart = new Chart(ctx, {

    type: 'bar',
    data: {
      labels: [products[0].name, products[1].name, products[2].name, products[3].name, products[4].name, products[5].name, products[6].name, products[7].name, products[8].name, products[9].name, products[10].name, products[11].name, products[12].name, products[13].name, products[14].name, products[15].name, products[16].name, products[17].name, products[18].name, products[19].name,],

      datasets: [{
        label: '# of Votes',
        data: [products[0].timesChosen, products[1].timesChosen, products[2].timesChosen, products[3].timesChosen, products[4].timesChosen, products[5].timesChosen, products[6].timesChosen, products[7].timesChosen, products[8].timesChosen, products[9].timesChosen, products[10].timesChosen, products[11].timesChosen, products[12].timesChosen, products[13].timesChosen, products[14].timesChosen, products[15].timesChosen, products[16].timesChosen, products[17].timesChosen, products[18].timesChosen, products[19].timesChosen,],
        backgroundColor: [
          '#FFDBE5', '#7A4900', '#0000A6', '#63FFAC', '#B79762', '#004D43', '#8FB0FF', '#997D87',
          '#5A0007', '#809693', '#FEFFE6', '#1B4400', '#4FC601', '#3B5DFF', '#4A3B53', '#FF2F80',
          '#61615A', '#BA0900', '#6B7900', '#00C2A0', '#FFAA92',
        ],
        borderColor: [

        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}

main();
