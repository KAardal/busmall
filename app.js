'use strict';

function Product(name) {
  this.name = name;
  this.filePath = 'assets/' + name;
  this.numTimesChosen = 0;
  this.wasDisplayed = false;
}

function productsArrayCreate() {
  var imageNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

  var products = [];

  for(var i = 0; i < imageNames.length; i++) {
    console.log(imageNames[i]);
    products.push(new Product(imageNames[i]));
  }
  return products;
}

function randomNumberGenerator(max) {
  return Math.floor(Math.random() * max);
}

var products = productsArrayCreate();
var imagesContainer = document.getElementById('images-container');
var image = document.createElement('img');

var random = randomNumberGenerator(products.length);
console.log(random);

image.setAttribute('src', products[random].filePath);
imagesContainer.appendChild(image);
