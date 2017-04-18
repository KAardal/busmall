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

  var resultsContainer = document.getElementById('results-container');
  var resultsUl = document.createElement('ul');
  resultsUl.setAttribute('id', 'results-ul');
  var resultsLi;
  for(var i = 0; i < products.length; i++) {
    resultsLi = document.createElement('li');
    resultsLi.textContent = products[i].timesChosen + ' votes for ' + products[i].name;
    resultsUl.appendChild(resultsLi);
  }
  resultsContainer.appendChild(resultsUl);
}

main();
