const result = document.querySelector('#show-word')
const inputWord = document.querySelector('#input-word');
const inputBtn = document.querySelector('#word-btn')

const wordArray = ['바나나'];



inputBtn.addEventListener('click', () => {

    const resultLength = wordArray[0].length;
    const inputLength = inputWord.value.length;
    const resultLast = wordArray[0].slice(resultLength - 1, resultLength);
    const inputFirst = inputWord.value.slice(0, 1);

    if (resultLast === inputFirst) {
        wordArray.pop();
        wordArray.push(inputWord.value);
        result.textContent = wordArray;
        inputWord.value = "";

    } else {
        alert('끝말잇기를 하세요.')
        inputWord.value = "";
    }

})








