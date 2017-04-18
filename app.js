'use strict';

var clicksRemaining = 5;

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
    console.log(event.target);
    getImages();
  }
}

function getImages() {

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

  var liOne = document.createElement('li');
  var imageOne = document.createElement('img');
  imageOne.setAttribute('id', 'img-1');
  imageOne.setAttribute('src', list[0].filePath);
  imageOne.setAttribute('alt', list[0].name);
  liOne.appendChild(imageOne);
  imagesUl.appendChild(liOne);

  var liTwo = document.createElement('li');
  var imageTwo = document.createElement('img');
  imageTwo.setAttribute('id', 'img-2');
  imageTwo.setAttribute('src', list[1].filePath);
  imageTwo.setAttribute('alt', list[1].name);
  liTwo.appendChild(imageTwo);
  imagesUl.appendChild(liTwo);

  var liThree = document.createElement('li');
  var imageThree = document.createElement('img');
  imageThree.setAttribute('id', 'img-3');
  imageThree.setAttribute('src', list[2].filePath);
  imageThree.setAttribute('alt', list[2].name);
  liThree.appendChild(imageThree);
  imagesUl.appendChild(liThree);

  imagesContainer.appendChild(imagesUl);
}

main();
