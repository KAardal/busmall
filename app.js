'use strict';

var clicksRemaining = 5;
var productsCurrent = [];
var productsLast = [];
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

function main(){

  try{
    products = JSON.parse(localStorage.product);
  } catch(e) {
    //do nothing
  }
  getImages();
}

function Product(name, filePath) {

  this.name = name;
  this.filePath = 'assets/' + filePath;
  this.timesChosen = 0;
  this.timesDisplayed = 0;
}



function randomNumberGenerator(max) {

  return Math.floor(Math.random() * max.length);
}

function handleProductClick(event) {

  var el = document.getElementById('images-container');
  el.textContent = '';

  if(clicksRemaining > 0){

    productsCurrent[event.target.id].timesChosen++;

    clicksRemaining--;
    getImages();
  } else {

    products = products.concat(productsCurrent);
    products = products.concat(productsLast);
    try{
      localStorage.setItem(JSON.stringify(products));
    } catch (e) {
      //do nothing
    }

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
  var resultsChart = {

    labels: [],

    datasets: [{
      label: '# of Votes',

      data: [],

      backgroundColor: [
        '#FFDBE5', '#7A4900', '#0000A6', '#63FFAC', '#B79762',
        '#004D43', '#8FB0FF', '#997D87', '#5A0007', '#809693',
        '#FFAA92', '#1B4400', '#4FC601', '#3B5DFF', '#4A3B53',
        '#FF2F80', '#61615A', '#BA0900', '#6B7900', '#00C2A0'],

      borderColor: [],

      borderWidth: 1,
    },

    {
      label: '% of votes',

      data: [],

      backgroundColor: [
        '#FFDBE5', '#7A4900', '#0000A6', '#63FFAC', '#B79762',
        '#004D43', '#8FB0FF', '#997D87', '#5A0007', '#809693',
        '#FFAA92', '#1B4400', '#4FC601', '#3B5DFF', '#4A3B53',
        '#FF2F80', '#61615A', '#BA0900', '#6B7900', '#00C2A0'],

      borderColor: [],

      borderWidth: 1,
    }],

    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  };

  var currentPhoto;
  for(var i=0; i< products.length; i++){
    currentPhoto = products[i];
    resultsChart.labels.push(currentPhoto.name);
    resultsChart.datasets[0].data.push(currentPhoto.timesChosen);
    resultsChart.datasets[1].data.push((currentPhoto.timesChosen/currentPhoto.timesDisplayed)*100);
  }

  new Chart(ctx, {
    type: 'bar',
    data: resultsChart,
  });
}

main();
