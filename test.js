// All numbers are equal
var idOne = 0;
var idTwo = 0;
var idThree = 0;
var randomIndex = [];
  // run this loop until numberOne is different than numberThree
do {
  var idOne = Math.floor(Math.random() * Product.allProducts.length);
} while(idOne === idThree || idOne === idTwo);
randomIndex.push(idOne);
console.log(idOne);

do {
  var idTwo = Math.floor(Math.random() * Product.allProducts.length);
} while(idTwo === idOne || idTwo === idThree);
randomIndex.push(idTwo);
console.log(idTwo);

do {
  var idThree = Math.floor(Math.random() * Product.allProducts.length);
} while(idThree === idOne || idThree === idTwo);
randomIndex.push(idThree);
console.log(idThree);
console.log(randomIndex);
