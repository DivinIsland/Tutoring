function ex30() {
  var address = "Seoul";

  var members = {};

  var addFamily = function (age, name, role) {
    this.members[role] = { age, name };
  };

  var getHeadCount = function () {
    return Object.keys(this.members).length;
  };

  var family = { address, members, addFamily, getHeadCount };

  family.addFamily(30, "abcd", "abcg");
  family.addFamily(20, "abce", "abch");
  family.addFamily(10, "abcf", "abci");

  console.log(family.getHeadCount());
  console.log(family);
}

// ex30();

function ex31() {
  var obj = {};
  for (var i = 0; i < 4; i++) {
    obj["key" + i] = i;
  }
  console.log(obj);

  var profile = "chloe:30";

  var person = {
    [profile]: true,
    [profile.split(":")[0]]: profile.split(":")[1],
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

  console.log(`b >>> ${b}`);
  console.log(`c >>> ${c}`);
  console.log(`rest >>> ${rest}`);

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
  const hello = Symbol("hello");

  console.log(Number(3) === Number(3));
  console.log(Symbol("symbol") === Symbol("symbol"));
  console.log(Symbol() === Symbol());
  console.log(typeof Symbol());

  const nationility = Symbol("nationility");
  const user = {
    name: "jay",
  };

  user[nationility] = "korean";
  console.log(user[nationility]);

  for (let key in user) {
    console.log(key);
    console.log(user[key]);
  }

  console.log(Object.keys(user));
  console.log(Object.getOwnPropertyNames(user));
  console.log(JSON.stringify(user));

  const symbolProperties = Object.getOwnPropertySymbols(user);
  console.log(symbolProperties);
  console.log(user[symbolProperties[0]]);
}
//  ex33();

function ex34() {
  var greeting_expression = function (name) {
    console.log("Hi, " + name);
  };

  function greeting_declaration(name) {
    console.log("Hi, " + name);
  }

  greeting_expression("YG");
  greeting_declaration("YG");
}
//  ex34();

function ex35() {
  function checkNumber(val) {
    if (typeof val !== "number") throw "유효하지 않은 값입니다.";
    console.log("숫자형으로 확인 되었습니다.");
  }

  try {
    checkNumber(100);
    checkNumber("aa");
  } catch (e) {
    console.log(`에러발생 >>> ${e}`);
  } finally {
    console.log("완료");
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
    console.log(newArr.indexOf("b"));
    console.log(arguments.indexOf("b"));
  }

  testArg("a", "b");
}
// ex36();

function ex37() {
  function drawChart(width = 200, height = 400) {
    console.log(`${width} * ${height} 차트를 그립니다.`);
  }

  drawChart(100);

  drawChart();

  function drawChart2(width = 200, height = width / 2) {
    console.log(`${width} * ${height} 차트를 그립니다.`);
  }

  drawChart2(300);
  drawChart2();
}
// ex37();

function ex38() {
  function sum(...args) {
    var total = 0;
    for (var i = 0; i < args.length; i++) {
      total += args[i];
    }

    console.log(args.indexOf(1));
    return total;
  }

  console.log(sum(1, 2, 4));

  function sum2(a, b, ...others) {
    var total = a + b;
    for (var i = 0; i < others.length; i++) {
      total += others[i];
    }
    return total;
  }

  console.log(sum2(1, 2));
  console.log(sum2(1, 2, 3, 4));
}
// ex38();

function ex39() {
  var a = 10;

  console.log(a);

  function print() {
    var b = 20;
    var c;
    if (true) {
      c = 30;
    }
    console.log(c);
  }

  print();

  var a = "global";

  console.log(a);

  function print1() {
    console.log(a);
  }

  function print2() {
    a = "local";
    print1();
  }

  print1();
  print2();
  console.log(a);
}
// ex39();

function ex40() {
  hello();
  function hello() {
    console.log("hi");
  }
}
// ex40();

function ex41() {
  if (true) {
    var functionScopeValue = "global";
    let blockScopeValue = "local";
  }

  console.log(functionScopeValue);
  // console.log(blockScopeValue);

  let value = "바깥값";

  if (true) {
    console.log(value);
    let value = "안쪽값";
  }
}
// ex41();

function ex42() {
  const constUser = { name: "c", age: 27 };
  console.log(constUser.name, constUser.age);

  constUser.name = "hi";
  constUser.age = 30;

  console.log(constUser.name, constUser.age);
}

// ex42();

function ex43() {
  var person = "aa";

  function print() {
    var person2 = "bb";

    function innerPrint() {
      console.log(person);
      console.log(person2);
    }

    innerPrint();
    console.log("print finished");
  }

  print();

  console.log("finished");
}
// ex43();

function ex44() {
  function createCounterClosure() {
    let count = 0;

    return {
      increase: function () {
        count++;
      },

      getCount: function () {
        return count;
      },
    };
  }

  const counter1 = createCounterClosure();
  const counter2 = createCounterClosure();

  counter1.increase();
  counter1.increase();
  console.log(counter1.getCount());

  counter2.increase();
  console.log(counter2.getCount());
}
// ex44();

function ex45() {
  var user = {
    name: "aa",
  };

  let descriptor = Object.getOwnPropertyDescriptor(user, "name");
  console.log(descriptor);

  let user2 = {};

  Object.defineProperty(user2, "name", {
    value: "hi",
    enumerable: true,
    configurable: true,
    writable: false,
  });

  console.log(user2.name);
  user2.name = "bbo";
  console.log(user2.name);

  let user3 = {
    name: "aa",
    toString() {
      return this.name;
    },
  };

  Object.defineProperty(user3, "toString", {
    enumerable: false,
  });

  for (key in user3) {
    console.log(key, user3[key]);
  }

  let user4 = {};
  Object.defineProperty(user4, "name", {
    value: "aa",
    configurable: false,
  });

  delete user4.name;

  console.log(user4);

  Object.defineProperty(user4, "name", {
    writable: false,
  });
}
// ex45();

function ex46() {
  let user = {};
  Object.defineProperty(user, "age", {
    get: function () {
      return this._age;
    },

    set: function (age) {
      if (age < 0) {
        console.error("WTF?");
      } else {
        this._age = age;
      }
    },
    enumerable: true,
  });

  user.age = 10;
  console.log(user.age);
  user.age = -1;

  let user2 = {
    get name() {
      return this._name;
    },
    set name(val) {
      if (val.length < 3) {
        throw new Error("3 letter");
      }
      this._name = val;
    },
  };

  user2.name = "harin";
  console.log(user2.name);
  user2.name = "ha";
}
// ex46();

function ex47() {
  const double = (x) => x + x;
  console.log(double(4));

  const add = (a, b) => a + b;
  console.log(add(4, 5));

  const printArguments = () => {
    console.log(arguments);
  };

  printArguments(1, 2, 3);

  const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
      console.log(args[i]);
    }
    return total;
  };
  console.log(sum(1, 2, 3, 4, 5, 6, 7, 9));

  setTimeout(() => {
    console.log("화살표 함수!");
  }, 1000);
}
// ex47();

function ex48() {
  // const teacherJay = {
  //   name :'J',
  //   age : 30,
  //   teachJavascript : function(student){
  //     student.gainExp();
  //   }
  // }

  // const studentBbo = {
  //   name : 'Bbo',
  //   age : 20,
  //   exp : 0,
  //   gainExp : function(){
  //     this.exp++;
  //   }
  // }

  // console.log(studentBbo.exp);
  // teacherJay.teachJavascript(studentBbo);
  // console.log(studentBbo.exp);

  const studentProto = {
    gainExp: function () {
      this.exp++;
    },
  };

  const harin = {
    name: "하린",
    age: 10,
    exp: 0,
    __proto__: studentProto,
  };

  const Bbo = {
    name: "Bbo",
    age: 20,
    exp: 10,
    __proto__: studentProto,
  };

  Bbo.gainExp();
  harin.gainExp();
  harin.gainExp();

  console.log(harin);
  console.log(Bbo);
}
// ex48();

function ex49() {
  function Teacher(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    console.log(this, name, "hello");

    this.teach = function (student) {
      console.log(`${student}에게 ${subject}를 가르칩니다.`);
    };
  }

  const jay = new Teacher("c", 30, "js");
  /**
   * 1. 함수가 실행이 됩니다.
   * 2. new 키워드를 확인하면,
   * 3. 함수가 객체로 실행이 됩니다.
   * 4. 객체로 변하면서, this 변화된 객체인 자기 자신을 가르킵니다.
   * 5. 자기자신의 {}객체 의 닷노테이션으로 매개변수들이 들어갑니다.
   * 6. 예를들어 const Teacher = {};
   * Teacher.name = "c";
   * {...}
   * 이런식으로 진행이 됩니다.
   */

  console.log(jay);
  jay.teach("mmj");

  console.log(jay.constructor);
  console.log(jay instanceof Teacher);

  const jay2 = Teacher("jay", 30, "js");
  /**
   * 기본적으로 함수 내에서의 this는 외부 렉시컬 스코프의 객체를 가리킵니다.
   * 함수의 외부 렉시컬 스코프의 객체는 window object이므로,
   * window.name = "Jay" 이런식으로 들어가게 됩니다.
   */
  console.log(jay2);

  console.log(age);
  console.log(name);
  console.log(subject);
}
// ex49();

function ex50() {
  function Storage() {
    this.dataStore = {};
  }
  Storage.prototype.put = function (key, data) {
    this.dataStore[key] = data;
  };
  Storage.prototype.getData = function (key) {
    return this.dataStore[key];
  };

  const productStorage = new Storage();
  productStorage.put("id1001", { name: "키보드", price: 2000 });
  console.log(productStorage.getData("id1001"));

  function removableStorage() {
    Storage.call(this);
  }
  removableStorage.prototype = Object.create(Storage.prototype);
  removableStorage.prototype.removeAll = function () {
    this.dataStore = {};
  };

  const productStorage2 = new removableStorage();
  productStorage2.put("id001", { name: "키보드", price: 2000 });
  productStorage2.removeAll();
  const item2 = productStorage2.getData("id001");
  console.log(item2);
}
// ex50();

function ex96() {
  const arr2 = ["가", "가나", "나", "다", "라", "마", "바", "가정", "가수"];
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const filteredTwo = arr.filter((a) => {
    console.log(`현재 위치의 값은 ${a} 입니다.`);
    return a % 2 === 0;
  });

  console.log(filteredTwo);

  const filteredThree = arr.filter((a) => a % 3 === 0);
  console.log(filteredThree);

  const filteredArr = arr2.filter((item) => {
    return item.indexOf("가") !== -1;
  });

  console.log(filteredArr);
}

ex96();
