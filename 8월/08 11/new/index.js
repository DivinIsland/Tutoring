function ex36() {
  function sum() {
    let total = 0;

    console.log(arguments);

    for (i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }

    console.log(`Total : ${total}`);
  }

  sum(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
}

// ex36();

function ex49() {
  function Teacher(obj) {
    const { name, age, subject } = obj;

    this.name = name;
    this.age = age;
    this.subject = subject;

    this.teach = function (student) {
      console.log(`${student}에게 ${this.subject}를 가르칩니다!`);
    };
  }

  const teacherFormat = {
    name: "최율겸",
    age: "27",
    subject: "과학",
  };
  const teacherInfo = new Teacher(teacherFormat);
  teacherInfo.teach("문민정");

  console.log(teacherInfo);
} //ex49

// ex49();

function ex51() {
  class Cart {
    constructor() {
      this.store = {};
    }

    add(product) {
      this.store[product.id] = product;
    }

    get(id) {
      return this.store[id];
    }
  }

  const cart1 = new Cart();

  cart1.add({ id: 1, name: "notebook" });
  console.log(cart1.store);

  const p = cart1.get(1);
  console.log(p);
} //ex51

// ex51();

function mycar(info) {
  class CarOrder {
    constructor() {
      this.mycar = {};
    }

    info(obj) {
      const { brand, model } = obj;
      console.log();
      const mycar = this.mycar;
      mycar.brand = brand;
      mycar.model = model;
    }

    addOption() {
      const { color, wheel, watch, flower, book } = arguments[0];

      this.mycar.option = {
        color,
        wheel,
        watch,
        flower,
        book,
      };
    }
  }

  const orderInfo = {
    brand: "Hyundai",
    model: "Genesis",
  };

  const optionInfo = {
    color: "silver",
    wheel: "diamond",
    watch: "Rolex",
    flower: "hydrangea",
    book: "The Millionaire Fastlane",
  };

  const firstCar = new CarOrder();
  firstCar.info(orderInfo);
  firstCar.addOption(optionInfo);

  console.log(firstCar);
}

mycar();
