//5 값과 변수

var name = "Peter";
var number = 200;
var isTrue = true;
var nothing = null;
var empty = undefined;
var list = [];
var ref = {};
var func = function(){}

//6 js문장 배우기

function greeting(){
  "hello"
  "Chloe" + 3
  greeting()
}

// greeting(if(true) { 
//   console.log("It is not acceptable");
// })



//7 주석처리 pass

//8 자료형 이해하기

var x = 5;
var y = 'five';
var isTrue = true;
var empty = null;
var nothing;
var sym = Symbol('me');

var item = {
  price : 5000,
  count : 10
};

var fruits = ['apple', 'orange', 'kiwi'];

var addFruit = function (fruit) {
  fruits.push(fruit);
}

addFruit('watermelon');

console.log(fruits);

//9

//10

//11

//12

//13

//14

//15

//16

//17

//18

// 19

var value = null;

console.log(value);

console.log(typeof value);

var value;

console.log(value);

console.log(typeof value);

console.clear();

// 20

var cart = [
  { name: '옷', price: 2000 },
  { name: '가방', price: 1000 }
];

var numOfItems = `카트에 ${cart.length}개의 아이템이 있습니다`;
var cartTable =
  `<ul>
<li>품목 : ${cart[0].name}, 가격 : ${cart[0].price}</li>
<li>품목 : ${cart[1].name}, 가격 : ${cart[1].price}</li>
</ul>`

console.log(numOfItems);
console.log(cartTable);

var personName = 'harin';
var helloString = 'hello ' + personName;
var helloTemplateString = `hello ${personName}`;

console.log(helloString === helloTemplateString);

console.log(helloString, helloTemplateString)
console.log(typeof helloTemplateString);

console.clear();

// 21

var x = 10;
x += 5;
x *= 2;

console.log(x);

var y = 10;

y -= 5;
y /= 5;

console.log(y)

console.log(15 % 4);
console.log(3 ** 3);
console.log(+10);
console.log(-10);

var value = 10;
++value;
--value;
console.log(value);

console.clear();

// 22

console.log(5 == 5);
console.log("5" == 5);
console.log(5 == '5')
console.log(5 != 1)
console.log(5 != "1");
console.log(5 != 5);
console.log(5 === 5)
console.log(5 === "5")
console.log(5 !== 10)
console.log(5 !== "5");

console.clear();

console.log(5 > 3)
console.log(5 < 3)
console.log(5 <= 6)
console.log(5 >= 5)

console.clear();

 // 23
console.log(true && true);
console.log(true && false);
console.log('문장' == '문장' && 5 == 5);
console.log(5 == 5 && '다른 문장 1' == '다른 문장 2');

console.log( true || false, '||');
console.log( false || false);
console.log('문장' == '문장' || 5 == 10)

console.log(!true, "NOT")
console.log(!false);
console.log(!5);
console.log(!'문장')
console.log(!!5)
console.log(!!'문장');


var trueArray = [3, 10, '문자', true, [1,2,3], {tom:'boy'}, function(){}];

for(i=0; i<trueArray.length; i++){
  console.log(!!trueArray[i]);
}

var falseArray= [false, 0, -0, "", NaN, null, undefined]

for(j=0; j<falseArray.length; j++){
  console.log(!!falseArray[j]);
}

console.clear();

 //24



 //25

 //26

 //27

//28

//29

//30

//31

//32

//33

//34

//35

//36

//37

//38

//39

//40

//41

//42

//43

//44

//45

//46

//47

//48

//49

//50

//51

//52

//53

//54

//55

//56

//57

//58

//59