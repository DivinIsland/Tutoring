console.log('hello world')

// let resultConfirm = confirm('게임을 시작?');

// if(resultConfirm){
//   let question1 = prompt('당신의 나이는 몇살입니까?');
//   document.body.append(`${question1}세 입니다.`)
// }

// console.log(resultConfirm)

var arr = ['바나나', '포도', '딸기', '사과', '배', '망고']; //var는 쓰면 안됨.

console.log(arr[4]);

console.log(arr.length);

console.log(arr[arr.length-1]);

console.clear()

//초기값
//조건식
//증감식
for(let i=0; i<arr.length; i+=1){
  console.log(arr[i]);
}

console.clear()

var i=0;

while(i < 10){
  console.log(i);
  i++;
}

console.log(i);

console.clear();

var i=0;
do{
  console.log(i);
 }while(false){
   i++;
   console.log(i);
 }

 console.clear();

 arr.forEach(function(item){
console.log(item);
 })

 for(let i=0; i<arr.length; i++){
   arr[i]=`과일_${arr[i]}`
 };
 console.log(arr);

 const newlist = arr.map(function(item){
   console.log(item);
   return `새로운_${item}`
 });

 console.log(newlist);

 var arr = [5,3,1,2,4,2,0,5,4,3,2,1,5,3,4,2,1,9,11];

 console.log(
   arr.sort((a,b)=>b-a)
   );

   console.clear()

var arr = ['바나나', '포도', '딸기', '사과', '배', '망고']; //var는 쓰면 안됨.

// function test(num){
// return num;
// }

let test= (num) => num;

console.log(
test(10)
)


var text ='<ul>';

arr.forEach( item => {
  text += `<li>${item}</li>`
}
)

text += '</ul>'

console.log(text)

// document.body.innerHTML = text;

var arr=[1,2,3,[5,5,5]];

var arr=[1,2,3,{title:10}];

arr.unshift(15);
arr.push(20);
arr.shift();
arr.pop();

arr[1]=5;

var arr=new Array(1,2,3); //bad way
var arr= [1,2,3]; //good way


console.log(arr);

console.log(
  Array.isArray(arr)
)

var arr = ['바나나', '포도', '딸기', '사과', '배', '망고']; //var는 쓰면 안됨.

//바나나, 포도, 사과, 메론, 수박, 배

console.log(
  arr.join("\n")
);

console.clear()

var arr = ['바나나', '포도', '딸기', '사과', '배', '망고']; //var는 쓰면 안됨.

console.log(
  arr.splice(2,0,['레몬'])
)

var arr1=['철수', '영희'];
var arr2=['기철', '기영'];
var arr3=['루피', '샹크스'];


console.log(
  arr1, arr2
  )

console.log(
  arr1.concat(arr2, ['이누야샤'], arr3)
)

console.clear()

var arr = ['바나나', '포도', '딸기', '사과', '배', '망고']; //var는 쓰면 안됨.


console.log(
  arr.slice(1,2), arr
)

var arr = [2,3,4,2,6,3,3,2,1,54,2,3,4,];

console.log(
    arr.sort((a,b)=>a-b).reverse().map(item=>item+5).reverse()
  );

  var arr = [
    {type:"Volvo", year:2019},
    {type:"BMW", year:2019},
    {type:"Benz", year:2019},
    {type:"Hyundie", year:1995}
  ]

  console.log(
    arr
  )

  for(let i =0; i<arr.length; i++){
    console.log(arr[i].year)
  }

  var cc_arr=[500, 1000, 1500, 2000]
  
  var cc = arr.map((item,index)=>{
    console.log(index)
    item.cc = cc_arr[index];
    return item;
  }
  )

  console.log(
    arr
  )

  var new_filterlist = cc_arr.filter(item=>item > 1000);

  console.log(
    new_filterlist
  )

  var new_filterlist_list = cc.filter(item=>item.cc > 1000);
  console.log(
    new_filterlist_list
  )

  new_filterlist_list.forEach(item=>{
    let div= document.createElement('div');
    div.append(`차량 : ${item.type}, 연식 : ${item.year}, 배기량 : ${item.cc}`);

    div.classList.add(`car`);
    document.getElementById('carBox').append(div);
  });

console.clear();

  var arr = [45,4,9,16,25];
  var new_list = arr.reduce((a,b)=>{
    console.log(a,b);
    a[`test${b}`] = b;
    return a
  },{});

  console.log(new_list);

  console.clear()

  let text1 = (n) => n;

  console.log(
    text1(510)
  );

  console.clear()

  let func1 = (n) => n+50;

  console.log(
    'Result :', func1(50)
  )

  var pro2_arr = [5,10,80,1,2,3,4];
  
  
  let func2 = (arr) => arr.filter(item=>item%2==0).map(item=>item+50)


  console.log(
    func2(pro2_arr)
  )
console.clear()
  var arr = [
  { name: "철수", age: 19, hobby: 'coding' },
  { name: "영희", age: 21, hobby: '' },
  { name: "기철", age: 20, hobby: 'baseball' },
];
var test1 = arr => {
  var arr_filter = arr.filter(item=>item.age>=20);
  var arr_map = arr_filter.map(item=>{
    if(item.hobby.length){
      item.hobby = [item.hobby].concat(['movie']);
    }
    else{
      item.hobby='movie';
    }
    
    
    return item;
    
    // return item.hobby + ", movie";
  });
  return arr_map
}

console.log(
  test1(arr)
  );

// 함수로 들어온 배열의 객체의 요소중 나이가 20 이상인 요소들로 배열을 만든 후,
// 해당 배열의 hobby에 movie를 추가해주고 hobby가 2개이상할때 hobby를 배열로 만들어준다,
// 그렇게 만들어진 새로운 배열을 반환한다.


console.clear()

var arr=[1>0, 10>5, 5<10];

console.log(
  arr.every(item=> item>2)
);

console.log(
  arr.some(item => item > 1)
);

if(arr.every(item=>item)){
console.log('모든 조건 합격')
  console.log('로그인 성공')
}else{
  alert('정보를 확인해주세요.');
}

var usernameInput = document.getElementById('username');
var loginBtn = document.getElementById('btn');
var passwordInput = document.getElementById('password');

loginBtn.addEventListener('click', function(){
  console.log(usernameInput.value);
  var arr=[usernameInput.value.length > 0, passwordInput.value.length > 0];

  if(arr.every(item=>item)){
    alert('로그인에 성공하였습니다.');
    window.location.href = './mypage.html'
    }else{
      alert('아이디, 비밀번호를 확인해주세요.');
    }
})


var arr = ['바나나', '포도', '사과', '메론', '수박', '배', '메론'];

console.log(
  arr.slice(arr.indexOf('메론'), arr.indexOf('배'))
);

var arr=[1,2,3,4,5]
var find_arr = arr.find(item=>{
  return item > 3;
})

console.log(find_arr)