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

function imageSourceSet(image, products) {
  var currentProduct;
  var i = 0;
  while(i < 1) {
    currentProduct = products[randomNumberGenerator(products.length)];
    if(!currentProduct.wasDisplayed) {
      image = document.createElement('img');
      image.setAttribute('src', currentProduct.filePath);
      currentProduct.wasDisplayed = true;
      image.addEventListener('click', handleProductClick);
      i++;
    }
  }
  return image;
}

function productsDisplay(products) {
  var imagesContainer = document.getElementById('images-container');
  var imagesUl = document.createElement('ul');
  imagesUl.setAttribute('id', 'images-ul');
  var imagesLi = document.createElement('li');
  var imageOne = document.createElement('img');
  imageOne.setAttribute('id', 'image-one');
  var imageTwo = document.createElement('img');
  imageTwo.setAttribute('id', 'image-two');
  var imageThree = document.createElement('img');
  imageThree.setAttribute('id', 'image-three');

  imagesLi = document.createElement('li');
  imagesLi.appendChild(imageSourceSet(imageOne, products));
  imagesUl.appendChild(imagesLi);

  imagesLi = document.createElement('li');
  imagesLi.appendChild(imageSourceSet(imageTwo, products));
  imagesUl.appendChild(imagesLi);

  imagesLi = document.createElement('li');
  imagesLi.appendChild(imageSourceSet(imageThree, products));
  imagesUl.appendChild(imagesLi);

  imagesContainer.appendChild(imagesUl);
}

main();
