var myObject = {
  name: "foo",
  sayName: function () {
    console.log(this.name);
  },
};

var otherObject = {
  name: "bar",
};

otherObject.sayName = myObject.sayName;

myObject.sayName();
otherObject.sayName();

console.clear();

var foo = "i'm foo";

console.log(foo);
console.log(window.foo);

console.clear();

var value = 100;

var myObject = {
  value: 1,
  func1: function () {
    var that = this;
    that.value += 1;
    console.log("func1() called. this.value : " + this.value);

    func2 = function () {
      that.value += 1;
      console.log("func2() called. this.value : " + that.value);

      func3 = function () {
        that.value += 1;
        console.log("func3() called. this.value : " + that.value);
      };

      func3();
    };
    func2();
  },
};

myObject.func1();

console.clear();
