var products = document.getElementById('products');
var results = document.getElementById('results');
var h3El = document.createElement('h3');
h3El.textContent = ('Results');
products.appendChild(h3El);
for(var l = 0; l < Product.allProducts.length; l++){
  var liEl = document.createElement('li');
  liEl.textContent = Product.allProducts[l].name + ': ' + Product.allProducts[l].votes + ' votes';
  console.log(liEl);
  products.appendChild(liEl);
