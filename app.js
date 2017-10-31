'use strict';
Product.allProducts = [];

function Product(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.votes = [];
  this.displayTotal = [];
  Product.allProducts.push(this);
};

new Product('Bag', 'img/bag.jpg');
new Product('Banana', 'img/banana.jpg');
new Product('Bathroom', 'img/bathroom.jpg');
new Product('Boots', 'img/boots.jpg');
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

var previousNumbers = [];

var clicks = 0;

function randomImg() {
  if (clicks < 24) {
    var idOne = 0;
    var idTwo = 0;
    var idThree = 0;

    do {
      var idOne = Math.floor(Math.random() * Product.allProducts.length);
    } while(idOne === idThree || idOne === idTwo || previousNumbers.includes(idOne));

    do {
      var idTwo = Math.floor(Math.random() * Product.allProducts.length);
    } while(idTwo === idOne || idTwo === idThree || previousNumbers.includes(idTwo));

    do {
      var idThree = Math.floor(Math.random() * Product.allProducts.length);
    } while(idThree === idOne || idThree === idTwo || previousNumbers.includes(idThree));

    var newNumbers = [idOne, idTwo, idThree];

    for( var i = 0; i < 3; i++) {
      var randomIndex = newNumbers[i];
      var imgEl = document.getElementById([i]);
      imgEl.name = Product.allProducts[randomIndex].name;
      Product.allProducts[randomIndex].displayTotal.push('I');
      imgEl.src = Product.allProducts[randomIndex].filepath;
    };
    previousNumbers = newNumbers.slice(0);
  }
  if (clicks === 24){
    var products = document.getElementById('products');
    var results = document.getElementById('results');
    var h3El = document.createElement('h3');
    h3El.textContent = ('Results');
    products.appendChild(h3El);
    for(var l = 0; l < Product.allProducts.length; l++){
      var liEl = document.createElement('li');
      liEl.textContent = Product.allProducts[l].name + ' was viewed ' + Product.allProducts[l].displayTotal.length + ' times and voted on ' + Product.allProducts[l].votes.length + ' times.';
      products.appendChild(liEl);
    }
  }
};
randomImg();

var imgElOne = document.getElementById(0);
var imgElTwo = document.getElementById(1);
var imgElThree = document.getElementById(2);

imgElOne.addEventListener('click', function() {Product.allProducts[previousNumbers[0]].votes.push('I'); });
imgElTwo.addEventListener('click', function() {Product.allProducts[previousNumbers[1]].votes.push('I'); });
imgElThree.addEventListener('click', function() {Product.allProducts[previousNumbers[2]].votes.push('I'); });
imgElOne.addEventListener('click', randomImg);
imgElTwo.addEventListener('click', randomImg);
imgElThree.addEventListener('click', randomImg);
imgElOne.addEventListener('click', count);
imgElTwo.addEventListener('click', count);
imgElThree.addEventListener('click', count);

function count(){
  clicks++;
};
