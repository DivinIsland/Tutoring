const firstValue = document.querySelector('#first');
const secondValue = document.querySelector('#second');
const button = document.querySelector('#click');

const result = document.querySelector('#result');

button.addEventListener('click', () => {
    result.textContent = "";
    const checkValue = valueCheck();

    if(checkValue){
        const resultValue = calculate();

        result.textContent = resultValue;

    }else{
        alert("값을 정확히 입력하세요.")
                
    }

});







