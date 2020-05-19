// 16

function ex16() {
  console.log(Infinity);
  console.log(1 / Infinity);
  console.log(0 / 0);
  console.log(Infinity - Infinity);
  console.log(0 / '말도 안되는 값');
}

// ex16();


// 17

function ex17() {
  console.log("I'm in JEJU");
  console.log('Sewha ocean is wonderful');
  console.log(`Have you ever eaten Makgeolli?`);
  console.log("This is the first line \nAnd this is the second");
}

// ex17();

// 18

function ex18() {
  console.log(7 > 3);
  console.log(7 < 3);
}

// ex18();

//19
function ex19() {
  var value = null;

  console.log(value);
  console.log(typeof value);

  var value = Object;
  console.log(value)
  console.log(typeof value);
}

// ex19();

// 20

function ex20() {
  var cart = [
    { name: '옷', price: 2000 },
    { name: '가방', price: 1000 }
  ];

  var numOfItmes = `카트에 ${cart.length}개의 아이템이 있습니다.`;
  var cartTable =
    `<ul>
  <li>품목 : ${cart[0].name}, 가격 : ${cart[0].price}</li>
  <li>품목 : ${cart[1].name}, 가격 : ${cart[1].price}</li>
  </ul>`

  console.log(numOfItmes);
  console.log(cartTable);


  var personName = 'harin';
  var helloString = 'hello ' + personName;

  var helloTemplateString = `hello ${personName}`;

  console.log(helloString === helloTemplateString);
  console.log(typeof helloTemplateString);
}

// ex20();


// 21

function ex21() {
  var x = 10;
  x += 5;
  x *= 2;

  console.log(x)

  var y = 10;
  y -= 5;
  y /= 5;

  console.log(y);

  console.log(15 % 4)
  console.log(3 ** 3)
  console.log(+10)
  console.log(-10)
  var value = 10;
  ++value;
  --value;
  console.log(value);
}

// ex21();

// 22

function ex22() {
  console.log(5 == 5);
  console.log("5" == 5)
  console.log(5 == '5')
  console.log(5 != 1)
  console.log(5 != "1")
  console.log(5 != "5")
  console.log(5 === 5)
  console.log(5 === "5")
  console.log(5 !== 10)
  console.log(5 !== "5")

  console.log(5 > 3);
  console.log(5 < 3)
  console.log(5 <= 6)
  console.log(5 >= 5)

}

// ex22();


// 23

function ex23() {
  console.log(true && true);
  console.log(true && false)
  console.log('문장' == '문장' && 5 == 5);
  console.log(5 == 5 && '다른문장 1' == '다른문장 2');

  console.log(true || false);
  console.log(false || false);
  console.log('문장' == '문장' || 5 == 10)

  console.log(!true);
  console.log(!false)
  console.log(!5)
  console.log(!'문장')
  console.log(!!5)
  console.log(!!'문장')
}

// ex23();

// 24

function ex24() {
  var condition = 5 > 10;
  condition ? console.log('Left') : console.log('Right')

  var result = condition ? (
    console.log("첫번째 표현식"),
    "표현식1"
  ) : (
      console.log("두번째 표현식"),
      "표현식2"
    );
  console.log(result)
}

// ex24();

// 25

function ex25() {
  console.log(14 & 11);
  console.log(~14)
  console.log(14 | 11)
  console.log(14 ^ 11)
  console.log(2 << 2)
  console.log(14 >> 1)
  console.log(14 >>> 2)

  var num = 50;
  console.log(
    num.toString(2)
  )


}
// ex25();


// 26

function ex26() {
  console.log("5" + 1)
  console.log("5" - 1)
  console.log("5" * 2)
  console.log("There is " + 5);
  console.log("Five" * 2)

  console.log("- 연산자를 활용한 자료형 변환")
  var str = 5 + "1";
  console.log(str)
  console.log(typeof str)

  var num = +str;
  console.log(num);
  console.log(typeof num);

  console.log("- 함수를 활용한 자료형 변환")
  str = String(num);
  console.log(str)
  console.log(typeof str)

  num = Number(str);
  console.log(num);
  console.log(typeof num)

}

// ex26();


// 27

function ex27() {
  var arr = [1, 2, 3, 4, 5];

  console.log(arr.length)
  console.log(arr[0]);
  console.log(arr[2]);
  console.log(arr[8]);

  var obj = { name: "cyg", age: 27, gender: 'male' };

  for (key in obj) {
    console.log(key)
    console.log(obj[key])


  }
}



// ex27();

// 28

function ex28() {


  var family = {
    'address': 'seoul',
    members: {},
    addFamily: function (age, name, role) {
      this.members[role] = {
        age: age,
        name: name
      };

    },

    getHeadCount: function () {
      return Object.keys(this.members).length;
    }
  };

  family.addFamily(27,'cyg','man');
  family.addFamily(26,'mmj','girl')

  console.log(family.getHeadCount());
  console.log(family)


}

// ex28();


// 29

function ex29(){


} //29

ex29();


