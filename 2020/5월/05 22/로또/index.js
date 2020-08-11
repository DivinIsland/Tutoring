const startBtn = document.querySelector('#startBtn');
const decideBtn = document.querySelector('#decideBtn');
const numRound = document.querySelector('#numRound');
const lottoResult = document.querySelector('#lotto_result')


var i = 0;
const saveNum = [];

const number = [];
for (let i = 1; i <= 45; i++) {
  number.push(i)
}



startBtn.addEventListener('click', () => {
  setInterval(function () {
    const ranNum = Math.floor(Math.random() * number.length);
    numRound.textContent = ranNum;
  }, 10)

});


decideBtn.addEventListener('click', () => {
  const ranNum = Math.floor(Math.random() * number.length);




  if (saveNum.length < 7) {
    saveNum[i] = ranNum;    
    i += 1;

    if(saveNum.length === 7){
      saveNum.sort(function (a, b) {
        return a - b;
      });
      lottoResult.textContent = `이번주 로또 번호는 ${saveNum} 입니다.`
    }

  }


})

