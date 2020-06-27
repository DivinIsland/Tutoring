function ex51() {

  class Cart {
    constructor() {
      this.store = {};
    }

    addProduct(product) {
      this.store[product.id] = product;
    }

    getProduct(id) {
      return this.store[id]
    }
  }
  const cart1 = new Cart();

  cart1.addProduct({
    id: 1,
    name: '노트북'
  })
  console.log(cart1.store)

  const p = cart1.getProduct(1);
  console.log(p)

}//ex51

// ex51();

function ex52() {

  class Chart {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }

    drawLine(){
      console.log('draw line');
      console.log(this)
    }
  }

  class BarChart extends Chart{
    constructor(width, height){
      super(width, height)
    }
    draw(){
      this.drawLine();
      console.log(`draw ${this.width} * ${this.height} barChart`);
    }
  }

  const barchart1 = new BarChart(100, 100);
  barchart1.draw();
}

// ex52();

function ex53(){

  class Product {
    static build(name, price){
      const id = Math.floor(Math.random() * 1000);
      return new Product(id, name, price);
    }

    static getTaxPrice(product){
      return (product.price * 0.1) + product.price;
    }

    constructor(id, name, price){
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }

  class DeposableProduct extends Product{
    depose(){
      this.deposed = true;
    }
  }
  const gum = Product.build('껌', 1000);
  console.log(gum)

  const clothes = new DeposableProduct(1, '옷', 2000);
  const taxPrice = DeposableProduct.getTaxPrice(clothes);
  console.log(taxPrice);
  
}//ex53
ex53();