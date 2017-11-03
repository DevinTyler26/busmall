'use strict';
Product.allProducts = [];

function Product(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.votes = 0;
  this.displayTotal = 0;
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
      Product.allProducts[randomIndex].displayTotal += 1;
      imgEl.src = Product.allProducts[randomIndex].filepath;
    };
    previousNumbers = newNumbers.slice(0);
  }

  var dataVotes = [];
  var labelProducts = [];

  if (clicks === 24){
    imgElOne.removeEventListener('click', function() {Product.allProducts[previousNumbers[0]].votes += 1;});
    imgElTwo.removeEventListener('click', function() {Product.allProducts[previousNumbers[1]].votes += 1;});
    imgElThree.removeEventListener('click', function() {Product.allProducts[previousNumbers[2]].votes += 1;});
    imgElOne.removeEventListener('click', randomImg);
    imgElTwo.removeEventListener('click', randomImg);
    imgElThree.removeEventListener('click', randomImg);
    imgElOne.removeEventListener('click', function() {clicks++;});
    imgElTwo.removeEventListener('click', function() {clicks++;});
    imgElThree.removeEventListener('click', function() {clicks++;});
    var products = document.getElementById('products');
    var results = document.getElementById('results');
    var h3El = document.createElement('h3');
    h3El.textContent = ('Results');
    products.appendChild(h3El);
    for(var l = 0; l < Product.allProducts.length; l++){
      var liEl = document.createElement('li');
      liEl.textContent = Product.allProducts[l].name + ' was viewed ' + Product.allProducts[l].displayTotal + ' times and voted on ' + Product.allProducts[l].votes + ' times.';
      products.appendChild(liEl);
    }
    function countVotes(){
      for (var i = 0; i < Product.allProducts.length; i++) {
        var votes = Product.allProducts[i].votes;
        dataVotes.push(votes);
      }
    };
    countVotes();

    function graphNames() {
      for (var i = 0; i < Product.allProducts.length; i++) {
        var names = Product.allProducts[i].name
        labelProducts.push(names);
      }
    };
    graphNames();

  var ctx = document.getElementById('graph').getContext('2d');

  var myGraph = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelProducts,
      datasets: [{
        label: '# of Votes',
        data: dataVotes,
        backgroundColor: labelProducts
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

};
randomImg();

var imgElOne = document.getElementById(0);
var imgElTwo = document.getElementById(1);
var imgElThree = document.getElementById(2);

imgElOne.addEventListener('click', function() {Product.allProducts[previousNumbers[0]].votes += 1;});
imgElTwo.addEventListener('click', function() {Product.allProducts[previousNumbers[1]].votes += 1;});
imgElThree.addEventListener('click', function() {Product.allProducts[previousNumbers[2]].votes += 1;});
imgElOne.addEventListener('click', randomImg);
imgElTwo.addEventListener('click', randomImg);
imgElThree.addEventListener('click', randomImg);
imgElOne.addEventListener('click', function() {clicks++;});
imgElTwo.addEventListener('click', function() {clicks++;});
imgElThree.addEventListener('click', function() {clicks++;});
