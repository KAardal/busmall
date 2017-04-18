'use strict';

var products = [];
var clicks = 0;

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
  if(clicks < 25){
    event.numTimesChosen += 1;
    wasDisplayedReset();

    var imgOne = document.getElementById('image-one');
    imageSourceSet(imgOne);

    var imgTwo = document.getElementById('image-two');
    imageSourceSet(imgTwo);

    var imgThree = document.getElementById('image-three');
    imageSourceSet(imgThree);
    clicks++;
  } else {
    tableDataGenerate();
  }
}

function tableDataGenerate() {

}

function productsArrayCreate() {
  var imageNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

  for(var i = 0; i < imageNames.length; i++) {
    console.log(imageNames[i]);
    products.push(new Product(imageNames[i]));
  }
}

function imageSourceSet(image) {
  var currentProduct;
  var i = 0;
  while(i < 1) {
    currentProduct = products[randomNumberGenerator(products.length)];
    if(!currentProduct.wasDisplayed) {
      image.setAttribute('src', currentProduct.filePath);
      currentProduct.wasDisplayed = true;
      image.addEventListener('click', handleProductClick);
      i++;
    }
  }
  return image;
}

function wasDisplayedReset() {
  for (var i = 0; i < products.length; i++) {
    products[i].wasDisplayed = false;
  }
}

function productsDisplay() {
  var imagesContainer = document.getElementById('images-container');

  var imagesUl = document.createElement('ul');
  imagesUl.setAttribute('id', 'images-ul');

  var imagesLi = document.createElement('li');
  imagesLi.setAttribute('id', 'images-li');

  var imageOne = document.createElement('img');
  imageOne.setAttribute('id', 'image-one');

  var imageTwo = document.createElement('img');
  imageTwo.setAttribute('id', 'image-two');

  var imageThree = document.createElement('img');
  imageThree.setAttribute('id', 'image-three');

  imagesLi = document.createElement('li');
  imagesLi.appendChild(imageSourceSet(imageOne));
  imagesUl.appendChild(imagesLi);

  imagesLi = document.createElement('li');
  imagesLi.appendChild(imageSourceSet(imageTwo));
  imagesUl.appendChild(imagesLi);

  imagesLi = document.createElement('li');
  imagesLi.appendChild(imageSourceSet(imageThree));
  imagesUl.appendChild(imagesLi);

  imagesContainer.appendChild(imagesUl);
}

function randomNumberGenerator(max) {
  return Math.floor(Math.random() * max);
}

main();
