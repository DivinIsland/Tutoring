// const firstValue = document.querySelector('#first');
// const secondValue = document.querySelector('#second');
const firstElem = document.querySelector('#first');
const secondElem = document.querySelector('#second');
const button = document.querySelector('#click');

const result = document.querySelector('#result');

button.addEventListener('click', () => {
    result.textContent = "";
    // const checkValue = valueCheck();
    const checkFirst = valueCheck(firstElem);
    const checkSecond = valueCheck(secondElem);

    if (checkFirst && checkSecond){
        const calFormat = {
            first : firstElem.value,
            second: secondElem.value
        };

        const resultValue = calculate(calFormat);

        result.textContent = resultValue;

    }else{
        alert("값을 정확히 입력하세요.")
                
    }

});







