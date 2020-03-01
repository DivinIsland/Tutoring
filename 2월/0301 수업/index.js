document.getElementById('demo').innerHTML='hell';
//도큐먼트 안의 demo라는 이름을 가진 엘리먼트를 가져옴


// alert('hello');
console.log('world');

console.log(0.1+0.2);

let x,y,z;
x = 5;
y = 10;
z= x + y;

let a ='hello';



console.log(x,y,z,a);

console.log(a + x)

console.log(''+x);

console.log(
  5%2
);

let lastName="Chris";
let FirstName="Brown";

console.log(
lastName+FirstName
);

//

/* 
asd
asd
여러줄주석
*/

console.clear();




let world=10;

world=20;

console.log(world);

console.log(
  2 ** 10
);
let n = 1;

console.log(
  n++
);

console.log(
  n
);

//산술연산자

let na=5;



console.clear();

na **=2;

console.log(na);


//할당연산자




//비교 연산자
// ==, 

console.log(5=='5');

console.log(5 === '5');

console.log(5 != '5');
console.log(5 !== '5');
console.log(5>10);
console.log(5 < 10);

console.clear();

console.log(
  5>10, 5<10, 5>=5, 5<=5
)

//논리연산자

console.log(
  5>10 && 10
);

let zero=0;

console.log(
  !zero
);

//유형연산자

console.log(
  typeof 'hello', typeof 10, typeof [],
  typeof null, typeof {}
);

console.log(
 
  )

  console.clear();


  function hello(num1, num2, num3){ //num은 파라미터(인자)
    console.log(arguments); //arguments는 인자들의
    //집합
    return num3*(num1+10+num2) || '1';
  }


  console.log(
    hello(5, 52, 35) //5는 인수
  );

  let car={
  type:'Benz', 
  model:'350', 
  color:'white',
  fullmodelname(model){
    // return this.type + 'CLS' + this.model + '-' + this.color
    return `${this.type} CLS ${model || this.model} - ${this.color}`;
  }
};
//키와 밸류로 나누어짐
//key:value;

  console.log(
  car['type'],
  car['color'],
  car['model'],
  car.type
  );

  //객체 내부 함수는 메소드

console.log(
  car.fullmodelname()
);


//이벤트

//문자열

console.log("The character \\ is called backslash");
console.log("The character \b is called backslash");
console.log("The character \n is called backslash");
console.log("The character \t is called backslash");
console.log("The character \v is called backslash");

console.clear()
//method
console.log(
  String
)

function hello(){}

let object1={};
object1.hello='world';
console.log(
  object1.hello
)

hello.world="programming";

console.log(hello)

console.dir(
  hello
)

console.dir(
  String
)

console.log(
  'hello'.repeat(2)
)

let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let txtLength = txt.length;
console. log(txtLength);

let str = "Please locate where locate 'locate' occurs!";
let getIndex = str.indexOf('locate',8);
let getLastIndex=str.lastIndexOf('locate');

console.log(getIndex);
console.log(getLastIndex);

let newSliceStr=str.slice(-1)
console.log(
newSliceStr
)

let newSubString = str.substring(0,)

console.log(
  newSubString
)