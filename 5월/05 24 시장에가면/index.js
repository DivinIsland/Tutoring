const inputText = document.querySelector('#inputText');
const result = document.querySelector('#result');

const config = {
  wordList: [],
  failCount: 0
}


inputText.addEventListener('keyup', function (e) {

  if (e.key === "Enter") {
    const target = e.target;
    const targetValue = target.value.trim();

    console.log(targetValue,'targetValue')
    

    const curryFormat = {
      target: result,
      input: target,
      list: config.wordList
    }

    const curryDataDrawing = dataDrawing(curryFormat);




    if (config.wordList.length === 0) {
      
      

      curryDataDrawing(targetValue);

    } else {
      const inputList = targetValue.split(',').map(item => item.trim())
      const compareList = inputList.slice(0, inputList.length - 1);
      console.log(compareList, 'compareList')

      const isEqualList = config.wordList.every((item, idx) => {
        return item === compareList[idx];
      });

      if (isEqualList) {
        const lastWord = inputList[inputList.length - 1];
        
          
        curryDataDrawing(lastWord);


      } else {

        if (config.failCount >= 3) {
          alert('you are a loser');
          window.close();
          return;
        }

        alert('Incorret!');
        alert(`남은 기회는 ${3 - config.failCount} 입니다.`);
        config.failCount++;

        target.value = "";
      }


    }


  }

})


function dataDrawing(config){
  const { target, input, list} = config;
  

    return function(value){
      list.push(value);
      input.value = "";
      target.innerHTML = list;
      $(target)
        .show()
        .fadeOut(1000);
    }

}