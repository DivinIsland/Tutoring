function ex30() {

  var address = 'Seoul';

  var members = {};

  var addFamily = function (age, name, role) {
    this.members[role] = { age, name };
  };

  var getHeadCount = function () {
    return Object.keys(this.members).length;
  };

  var family = { address, members, addFamily, getHeadCount };

  family.addFamily(30, 'abcd', 'abcg');
  family.addFamily(20, 'abce', 'abch');
  family.addFamily(10, 'abcf', 'abci');

  console.log(family.getHeadCount());
  console.log(family);

}

// ex30();



function ex31() {
  var obj = {};
  for (var i = 0; i < 4; i++) {
    obj['key' + i] = i;
  }
  console.log(obj);

  var profile = 'chloe:30';

  var person = {
    [profile]: true,
    [profile.split(':')[0]]: profile.split(':')[1]
  };

  console.log(person);

}
// ex31();



function ex32() {
  // var obj = {a:1, b:2, c:30, d:44, e:5};

  // var {a,c} = obj;

  // console.log(` a >>> ${a}`)
  // console.log(` c >>> ${c}`)

  // var {a:newA=10, f:newF=5} = obj;

  // console.log(`newA >>> ${newA}`)
  // console.log(`newF >>> ${newF}`)


  var arr = [1, 2, 30, 44, 5];

  var [b, c, ...rest] = arr;

  console.log(`b >>> ${b}`)
  console.log(`c >>> ${c}`)
  console.log(`rest >>> ${rest}`)

  var [a = 10, f = 9] = [1];

  console.log(`a >>> ${a}`);
  console.log(`f >>> ${f}`);

  [a, f] = [f, a];

  console.log(`a >>> ${a}`);
  console.log(`f >>> ${f}`);

  function getArr() {
    return [11, 2, 3, 4, 5, 26];
  }

  [a, , , , , f] = getArr();

  console.log(`a >>> ${a}`);
  console.log(`f >>> ${f}`);



}
//  ex32();





function ex33() {

  const symbol = Symbol();
  const hello = Symbol('hello');

  console.log(Number(3) === Number(3));
  console.log(Symbol('symbol') === Symbol('symbol'));
  console.log(Symbol() === Symbol());
  console.log(typeof Symbol());

  const nationility = Symbol('nationility');
  const user = {
    name: 'jay'
  }

  user[nationility] = 'korean';
  console.log(user[nationility]);

  for (let key in user) {
    console.log(key);
    console.log(user[key]);
  }

  console.log(Object.keys(user))
  console.log(Object.getOwnPropertyNames(user));
  console.log(JSON.stringify(user));

  const symbolProperties = Object.getOwnPropertySymbols(user);
  console.log(symbolProperties);
  console.log(user[symbolProperties[0]]);

}
//  ex33();





function ex34() {

  var greeting_expression = function (name) {
    console.log('Hi, ' + name);

  }

  function greeting_declaration(name) {
    console.log('Hi, ' + name);
  }

  greeting_expression('YG');
  greeting_declaration('YG');

}
//  ex34();





function ex35() {


  function checkNumber(val) {
    if (typeof val !== 'number') throw '유효하지 않은 값입니다.';
    console.log('숫자형으로 확인 되었습니다.');
  }

  try {
    checkNumber(100);
    checkNumber('aa');

  } catch (e) {
    console.log(`에러발생 >>> ${e}`);
  } finally {
    console.log('완료');
  }




}
// ex35();





function ex36() {

  function sum() {
    var total = 0;
    for (i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    console.log(arguments instanceof Array);
    return total;
  }

  var sumOf1to3 = sum(1, 2, 3);
  console.log(sumOf1to3);

  function testArg() {
    var newArr = Array.prototype.slice.call(arguments);
    console.log(newArr);
    console.log(newArr.indexOf('b'));
    console.log(arguments.indexOf('b'));
  }

  testArg('a', 'b');


}
// ex36();





function ex37() {
  function drawChart(width=200, height=400){
    console.log(`${width} * ${height} 차트를 그립니다.`);
  }

  drawChart(100);

  drawChart();

  function drawChart2(width = 200, height = width/2){
    console.log(`${width} * ${height} 차트를 그립니다.`);
  }

  drawChart2(300);
  drawChart2();

  

}
// ex37();





function ex38() {

  function sum(...args){

  var total = 0;
  for(var i = 0; i < args.length; i++){
    total += args[i];
  }

  console.log(args.indexOf(1))
  return total;
  }

  console.log(sum(1,2,4));

  function sum2(a,b, ...others){
    var total = a+b;
    for(var i = 0; i < others.length; i++){
      total += others[i];
    }
    return total;

  }

  console.log(sum2(1,2));
  console.log(sum2(1,2,3,4));

}
// ex38();





function ex39() {
  var a = 10;
  console.log(a);

  function print(){
    var b = 20;
    if(true){
      var c = 30;
    }
    console.log(c);
  }

  print();

  


  var a = "global";

  console.log(a)

  function print1(){
    console.log(a);
  }

  function print2(){
    var a = "local";
    print1();
  }

  print1();
  print2();

}
// ex39();








