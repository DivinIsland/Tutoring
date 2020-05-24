const inputNumber = document.querySelector('#input-num');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const multiplyBtn = document.querySelector('#multiply');
const divisionBtn = document.querySelector('#division');
const clearBtn = document.querySelector('#clear-btn')
const numberArray = [0];
const result = document.querySelector('#result');

const calBtn = document.querySelector("#calBtn");

const config={
    numberList:[],
    condition:""
}

function dataDrawing(config){
    const { list,condition,target } = config;
    const tmp = list.map(item=>item + condition).join("");
    target.innerHTML = tmp ;
}

// inputNumber.addEventListener("keyup",function(e){
//     result.textContent = +e.target.value
// })

plusBtn.addEventListener('click', () => {
    // numberArray.push(
    //     numberArray[0] + +inputNumber.value
    // );
    // numberArray.shift();

    // result.textContent = numberArray[0];

    config.numberList.push(+inputNumber.value);
    config.condition = "+";
    inputNumber.value = "";

    const drawForamt ={
        list:config.numberList,
        condition:"+",
        target:result
    }
    dataDrawing(drawForamt);

});


calBtn.addEventListener('click',function(e){
    config.numberList.push(+inputNumber.value);
    inputNumber.value ="";
    let tmp;

    if(config.condition === "+"){
        tmp = config.numberList.reduce((x,y)=>x+y,0);
    }
    if(config.condition === "-"){
        tmp = config.numberList[0] - config.numberList[1];
    }
    result.textContent = tmp;
});



minusBtn.addEventListener('click', () => {
    // numberArray.push(
    //     numberArray[0] - +inputNumber.value
    // );
    // numberArray.shift();

    // result.textContent = numberArray[0];    

    config.numberList.push(+inputNumber.value);
    config.condition = "-";
    inputNumber.value = "";

})

multiplyBtn.addEventListener('click', () => {
    numberArray.push(
        numberArray[0] * +inputNumber.value
    );
    numberArray.shift();

    result.textContent = numberArray[0];    

})

divisionBtn.addEventListener('click', () => {
    numberArray.push(
        numberArray[0] / +inputNumber.value
    );
    numberArray.shift();

    result.textContent = numberArray[0];    

})

clearBtn.addEventListener('click', () =>{
    result.textContent = "";
    inputNumber.value = "";
    numberArray[0] = 0;
})




