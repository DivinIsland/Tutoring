
function clock(){
  const date= new Date();
  return `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
}

setInterval(()=>{
const currentTime = clock();
document.getElementById('clock').innerHTML = currentTime;
}, 1000);



class Person{
  constructor(props, getName){
    console.log(props);
    this.hello = props
    this.name = getName;
  }
}

console.log(
new Person('hello', '율겸')
)

console.clear();

function myFunction(){
  console.log(this);
}

console.log(myFunction());

function myFunctionCall(args){
  // console.log(this,args);
  this.testFunction(args);
}

var myObject = {
  name : 'cyg',
  myMethod: function(){
    console.log(this);
    console.log(
      this.name
    );
  },
  myCallFunction : myFunction,
  testFunction: function(a){
    console.log('testfunction', a);
  },
  layerFunction1(){
    let self = this;
    return function(){
      console.log(self);
      console.log(this);
    }
  },
  layerFunction2() {
    let self = this;
    return () => {
      console.log(self);
      console.log(this);
      return () => {
        console.log(this);
      }
    }
  }
}

myObject.myMethod()
myObject.myCallFunction()

const myBindFunction = myFunction.bind(myObject);
myBindFunction()

myFunctionCall.call(myObject, 'hello')

console.clear()

// myObject.layerFunction1()();
myObject.layerFunction2()()();

console.clear()

function Student(name, age){
  this.name = name;
  this.age = age;
}

Student.prototype.hello = function(){
  console.log('hello')
}

var first = new Student('John', 26)
console.log(first)
first.hello()

console.log(
first.__proto__ === Student.prototype
);

console.clear();

const obj = {};

console.log(
  Object.create({})
)

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const result = Object.assign(target, source);

console.log(result)

console.clear();

var arr = ['hello', 1, 2, 3, 'world'];

var new_arr = arr.map(item=>item+"_wow")

console.log(new_arr)

var new_filter_arr = arr.filter(item=> typeof item === 'string');

var new_reduce_arr = arr.reduce((x,y)=>{

x[y] = 'hello';
return x;
},{})

console.log(new_filter_arr)
console.log(new_reduce_arr)

var test = 10;

function add(x,y){ //순수함수
  return x+y;
}

function add1(x,y){ //부수효과
  test++;
  return x+y;
}