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
  if(clicks < 5){

    console.log(event.target.id);
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
  var div = document.getElementById('table-container');
  var tr;
  var td;
  var i = 0;
  while(i < products.length) {
    tr = document.createElement('tr');
    td = document.createElement('td');
    td.textContent = products[i].name;
    tr.appendChild(td);
    for(var j = 0; j < 2; j++) {
      td = document.createElement('td');
      td.textContent = products[i].numTimesChosen;
      tr.appendChild(td);
    }
    div.appendChild(tr);
    i++;
  }
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
    var rand = randomNumberGenerator(products.length);
    currentProduct = products[rand];
    if(!currentProduct.wasDisplayed) {
      products[rand].numTimesChosen++;
      image.setAttribute('src', currentProduct.filePath);
      image.setAttribute('xml:id', rand);
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

  var imagesLiOne = document.createElement('li');
  imagesLiOne.appendChild(imageSourceSet(imageOne));
  imagesUl.appendChild(imagesLiOne);

  var imagesLiTwo = document.createElement('li');
  imagesLiTwo.appendChild(imageSourceSet(imageTwo));
  imagesUl.appendChild(imagesLiTwo);

  var imagesLiThree = document.createElement('li');
  imagesLiThree.appendChild(imageSourceSet(imageThree));
  imagesUl.appendChild(imagesLiThree);

  imagesContainer.appendChild(imagesUl);
}

function randomNumberGenerator(max) {
  return Math.floor(Math.random() * max);
}

main();
