this.valueA = 'a';
console.log(valueA)

valueB = 'b';
console.log(this.valueB);

valueC = 'c';
console.log(valueC)

function checkThis(){
  console.log(this)
}

function checkThis2(){
  "use strict";
  console.log(this)
}
checkThis();
checkThis2();

function Product(name, price){
  this.name = name;
  this.price = price;
}
const product1 = Product('가방', 2000);
console.log(window.name);
console.log(window.price);
console.log(window)