class Car {
  constructor() {
    this.car = {};
  }

  info(obj) {
    const { brand, model } = obj;

    const car = this.car;

    car.brand = brand;
    car.model = model;
  }
}

const myCar = new Car();
const wifeCar = new Car();

const infoFormat = {
  brand: "Hyundai",
  model: "Genesis",
};

myCar.info(infoFormat);

console.log(myCar);
