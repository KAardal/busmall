'use strict';

function Product(name) {
  this.name = name;
  this.filePath = 'assets/' + name;
  this.wasDisplayed = 0;
  this.numTimesChosen = 0;
}

var imageNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

var products = [];

for(var i = 0; i < imageNames.length; i++) {
  console.log(imageNames[i]);
  products.push(new Product(imageNames[i]));
}

var imagesContainer = document.getElementById('images-container');
var image = document.createElement('img');
image.setAttribute('src', products[0].filePath);
imagesContainer.appendChild(image);
