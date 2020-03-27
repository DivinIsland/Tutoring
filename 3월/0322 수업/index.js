
var arr = [
  { type: "Volvo", year: 2019 },
  { type: "BMW", year: 2020 },
  { type: "Benz", year: 2020 },
  { type: "TOYOTA", year: 2017 }
];

var arr1 = [
  { type: "현대", year: 2019 },
  { type: "시보레", year: 2020 },
  { type: "대우", year: 2020 },
  { type: "르노", year: 2017 }
];






var makenewlist = arr => {
  var arr_map = arr.map(item => {
    item.year = item.year - 1;
    return item;
  });


  arr_map.forEach(item => {
    arr_map.push({
      type: `new_${item.type}`,
      year: item.year + 1
    })
  })
  return arr_map;

}

console.log(
  makenewlist(arr1)
)

console.clear()

var gogodan = dan => {
  var res = ""

  for (let j = dan; j < 10; j++) {

    for (let i = 1; i < 10; i++) {
      res += `${j} * ${i} = ${j * i}\n`
    }
    res += `\n`
  }
  return res;
}

console.log(
  gogodan(3)
)


console.clear();

var d = new Date();
var week = ['일', '월', '화', '수', '목', '금', '토']

console.log(
  d.getDay()

);

console.log(
  week[d.getDay()] + '요일'
)

console.log(
  moment().format('YYYY DD MM, hh:mm:ss')
)

console.log(
  Math.PI
)

console.log(
  Math.pow(2, 10)
)

console.log(
  Math.sqrt(16)
)

console.log(
  Math.ceil(4.5)
)

console.log(
  Math.floor(2.9)
)

console.log(
  Math.min(0, 150, 30, -8, 200)
)

console.log(
  Math.max(0, 150, 20, -8, 30)
)

console.log(
  Math.abs(-120)
)

//NOTE:

//False : 0, "", undefined, null, false, NaN
//TRUE : not False

console.log(
  1 === '1'
)

var cond = 4;

if (cond === 5) {
  console.log('hi')
}
else {
  console.log('no')
}

console.clear()


document.getElementById('btn').addEventListener('click', function (e) {
  var loop = true;

  while (loop) {

    var name = prompt("이름을 입력하세요.");
    var iscancel = name === null;
    var master = "master";
    var nullval = "";

    if (iscancel) {
      loop = false;
    }

    if (name === master) {
      console.log("Welcome, Master!")
      loop = false;
    }

    else if (name === master) {
      console.log("마스터가 아닙니다.")

    }
    else if (name === nullval) {
      console.log("입력을 하세요.")
    }

  }
});

document.getElementById('btn').addEventListener('click', function (e) {
  let isLoop = true;
  while (isLoop) {
    const propmtName = prompt('이름을 입력해주십시오.');
    const isNotNull = propmtName !== null;
    const isNameMaster = propmtName === 'master';
    if (isNotNull) {
      if (isNameMaster) {
        alert(`환영합니다. ${propmtName}님`);
        isLoop = false;
      } else {
        alert('이름을 확인해주세요.');
      }
    } else {
      isLoop = false;
    }
  }
});

console.clear()

switch (13) {
  case 0: {
    break;
  }

  case 10: {
    console.log('10')
    break;
  }

  case 12: {
    console.log('12')
    break;
  }
  default: {
    console.log('default');
  }
}


var number = 10;
for(;number--;){
  console.log(number)
}

console.clear();

var person = { fname: "John", lname: "Doe", age: 25 };

for(var key in person){
  console.log(key, person[key])
}

console.clear()

var cars = ['BMW', 'Volvo', 'Mini'];

for(var x of cars){
  console.log(x)
}

console.clear()

var regName= /[11]/;
var result = regName.test('hell world!');

console.log(result)

console.clear()

function regEmail(value) {
  var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return regExp.test(value)
}

document.getElementById('emailbtn').addEventListener('click', function(){
  
var emailinputvalue = document.getElementById('email').value;

var isregemail = regEmail(emailinputvalue);

if(isregemail){
  console.log('email 정규식 통과')
}
else{
  alert('email을 확인 해 주세요.')
}
})