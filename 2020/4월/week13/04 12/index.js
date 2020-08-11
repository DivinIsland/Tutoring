function count(){
  let number = 0;
  return function add(){
    number ++;
    return number;
  }
}

let upCount = count();

console.log(
upCount()
)

console.log(
  upCount()
)

console.log(
  upCount()
)

console.clear()
// NOTE: 클로저


function attitude(original, replacement){
  return function(source){
    return source.replace(original, replacement)
  }
}

var snakify = attitude(/millenials/ig, "Snake People");

console.log(snakify("The Millenials are always up to something."));

console.clear()
// NOTE: 고차함수


function increase(count){
  console.log(count);
  count ++;
  if(count > 10){
    return;
  }
  increase(count);
}

increase(0)

console.clear()
// NOTE: 재귀


var map1 = new Map();

var obj1 = {
  a:1,
  b:1,
  c:1
};
var obj2 = {b:10};

map1.set(obj1, "User")
map1.set(obj2, "User")


for(let value of map1.entries()){
  console.log(value);
}

// console.log(
//   map1.keys() 
// )

// console.log(
//   map1.values()
// )

// console.log(
//   map1.entries()
// )

console.clear()

for (let data of map1.entries()) {
  
  console.log(data[0]);
  console.log(data[1]);
}

console.clear()

var set1 = new Set();

set1.add('hello')
set1.add('world')

// console.log(set1.keys())

// NOTE: set, map


for(let data of set1.values()){
  console.log(data)
}

console.clear()

var promise1 = new Promise(function(resolve, reject){
setTimeout(()=>{
  resolve('hello');
},3000);
})

  

promise1.then(function(data){
  console.log(data, 'promise result')
})

promise1.then(function (data) {
  console.log(data, 'promise result1')
})

function promise2(initData){
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
      resolve(initData);
    }, 1000);
  })
};

function promise3(initData) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(initData+10);
    }, 1000);
  })
};

promise2(50)
.then(promise3)
.then(function(data){
  console.log(data+10);
})

// NOTE: callBack, Promise



async function test(){
  var data = await dataComunication();
}

function* gen(){
  
}


console.clear()
// NOTE: Generator