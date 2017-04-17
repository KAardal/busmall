'use strict';

function main(){
  productsDisplay(productsArrayCreate());
}

function Product(name) {
  this.name = name;
  this.filePath = 'assets/' + name;
  this.numTimesChosen = 0;
  this.wasDisplayed = false;
}

function handleProductClick(event) {
  event.numTimesChosen += 1;

  var container = document.getElementById('images-container');
  var ul = document.getElementById('images-ul');
  container.remove(ul);

  productsDisplay();
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

function productsDisplay(products) {
  var imagesContainer = document.getElementById('images-container');
  var imagesUl = document.createElement('ul');
  imagesUl.setAttribute('id', 'images-ul');
  var imagesLi = document.createElement('li');
  var image = document.createElement('img');
  var currentProduct;
  var i = 0;
  while(i < 3) {
    currentProduct = products[randomNumberGenerator(products.length)];
    if(!currentProduct.wasDisplayed) {
      imagesLi = document.createElement('li');
      image = document.createElement('img');
      image.setAttribute('src', currentProduct.filePath);
      imagesLi.appendChild(image);
      imagesUl.appendChild(imagesLi);
      currentProduct.wasDisplayed = true;
      image.addEventListener('click', handleProductClick);
      i++;
    }
  }
  imagesContainer.appendChild(imagesUl);
}

main();
