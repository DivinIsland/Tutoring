const inputNumber = document.querySelector('#input-num');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const multiplyBtn = document.querySelector('#multiply');
const divisionBtn = document.querySelector('#division');
const clearBtn = document.querySelector('#clear-btn')
const numberArray = [0];
const result = document.querySelector('#result');


plusBtn.addEventListener('click', () => {
    numberArray.push(
        numberArray[0] + +inputNumber.value
    );
    numberArray.shift();

    result.textContent = numberArray[0];    

})

minusBtn.addEventListener('click', () => {
    numberArray.push(
        numberArray[0] - +inputNumber.value
    );
    numberArray.shift();

    result.textContent = numberArray[0];    

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




