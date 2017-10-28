'use strict';
console.log('Test to make sure JS is connected');

//Stores all products
Product.allProducts = [];

function Product(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.total = 0;
  this.displayTotal = 0;
  Product.allProducts.push(this);
};

//All the product names, file paths, and id
new Product('Bag', 'img/bag.jpg');
new Product('Banana', 'img/banana.jpg');
new Product('Bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('Breakfast', 'img/breakfast.jpg');
new Product('Bubble Gum', 'img/bubblegum.jpg');
new Product('Chair', 'img/chair.jpg');
new Product('Cthulhu', 'img/cthulhu.jpg');
new Product('Dog Duck', 'img/dog-duck.jpg');
new Product('Dragon', 'img/dragon.jpg');
new Product('Pen', 'img/pen.jpg');
new Product('Pet Sweep', 'img/pet-sweep.jpg');
new Product('Scissors', 'img/scissors.jpg');
new Product('Shark', 'img/shark.jpg');
new Product('Sweep', 'img/sweep.png');
new Product('Tauntaun', 'img/tauntaun.jpg');
new Product('Unicorn', 'img/unicorn.jpg');
new Product('USB', 'img/usb.gif');
new Product('Water Can', 'img/water-can.jpg');
new Product('Wine Glass', 'img/wine-glass.jpg');

//Stores previous random generated numbers
var previousNumbers = [];

var imgBox = document.getElementById('image-box');
function randomImg() {
  // All numbers are equal so the do while loop with activate
  var idOne = 0;
  var idTwo = 0;
  var idThree = 0;
  console.log('first pre numbers: ' + previousNumbers);
    // run this loop until numbers do not match previous numbers, or eachother
  do {
    var idOne = Math.floor(Math.random() * Product.allProducts.length);
  } while(idOne === idThree || idOne === idTwo || previousNumbers.includes(idOne));
  console.log(idOne);

  do {
    var idTwo = Math.floor(Math.random() * Product.allProducts.length);
  } while(idTwo === idOne || idTwo === idThree || previousNumbers.includes(idTwo));
  console.log(idTwo);

  do {
    var idThree = Math.floor(Math.random() * Product.allProducts.length);
  } while(idThree === idOne || idThree === idTwo || previousNumbers.includes(idThree));
  console.log(idThree);

//store new random numbers into an array
  var newNumbers = [idOne, idTwo, idThree];
  console.log('New Numbers ' + newNumbers);

  function upDisplayTotal() {
    var display = Product.allProducts[randomIndex].displayTotal;
    display++;
  };

  for( var i = 0; i < 3; i++) {
    var randomIndex = newNumbers[i];
    var imgEl = document.createElement('img');
    imgEl.name = Product.allProducts[randomIndex].name;
    imgEl.src = Product.allProducts[randomIndex].filepath;
    imgBox.appendChild(imgEl);
    upDisplayTotal();
    console.log('Display total for ' + Product.allProducts[randomIndex].name + ' is ' + Product.allProducts[randomIndex].displayTotal);
    console.log('Total is: ' + Product.allProducts[randomIndex].total);
  };


  function vote() {
    var vote = Product.allProducts[randomIndex].total;
    vote++;
  };

  Product.allProducts[randomIndex].src.addEventListener('click', vote);

  previousNumbers = newNumbers.slice(0);
  console.log('Prev: ' + previousNumbers);
};
randomImg();

//Clears last 3 images from the site
function clearRow(){
  document.getElementById('image-box').innerHTML = "";
};

imgBox.addEventListener('click', clearRow);
imgBox.addEventListener('click', randomImg);
