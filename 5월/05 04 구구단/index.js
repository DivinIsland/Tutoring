const inputDan = document.querySelector('#inputDan');
const inputRows = document.querySelector('#inputRows');
const inputSubmitBtn = document.querySelector('#inputSubmitBtn');
const inputResult = document.querySelector('#inputResult');
const inputForm = document.querySelector('#inputForm');

/**
 * NOTE: 데이터를 입력받는 이벤트
 */

inputForm.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const danValue = +inputDan.value;
  const rowsValue = +inputRows.value;
  
  
  const submitObj = {
    danValue, rowsValue
  }
  
  

  if(isNaN(submitObj.danValue) || isNaN(submitObj.rowsValue)){
    alert('Please enter only number')
    return ;
  }
  
  if(submitObj.danValue===0 || submitObj.rowsValue===0){
    alert("Please enter your data")
    return ;
  }
  
  dataSubmit(submitObj);
  
})


/**
 * NOTE: inputForm을 submit할때 동작하는 함수입니다.
 * @param {Object} config 
 */

function dataSubmit(config) {
  const {danValue, rowsValue} = config;
  
  const dataObj = {
    dan: danValue,
    rows: rowsValue
  }
  
  const resultData = dataOutput(dataObj);
  const drawObj = {
    target: inputResult,
    data: resultData
  };
  
  dataDrawing(drawObj);
}



/**
 * NOTE: 인자로 받은 element object를 비워줍니다
 * @param {element object} target 
 */
function dataReset(target) {
  target.innerHTML = "";
}



/**
 * NOTE: 단과 행을 넣었을때 데이터를 출력해주는 함수
 * @param {object} config 
 */
function dataOutput(config) {
  
  const { dan, rows } = config;
  
  const rowsList = [];
  
  for (let i = 1; i <= rows; i++) {
    const pushFormat = {
      row: i,
      value: dan * i
    }
    rowsList.push(pushFormat)
  }
  
  
  const resultOjb = {
    [dan]: rowsList
  }
  return resultOjb;
  
}
/**
 * NOTE: document에 넣을 target 키값과, dataOutput에서 만들어진 결과를 data 키값으로 넣습니다.
 * @param {object} config 
 */
function dataDrawing(config) {
  const { target, data} = config;
  target.innerHTML = "";
  dataReset(target);
  
  
  
  const boxElem = document.createElement('div');
  boxElem.className = "result_row_box";

  
  
  
  for(keyName in data){
    const danName = keyName;
    const danValue = data[keyName];
    for(let i = 0; i <danValue.length; i++){
      
      const rowValue = danValue[i];
      
      const rowElem = document.createElement('div');
      
      rowElem.className = "result_row";
      rowElem.textContent = `${danName} * ${rowValue.row} = ${rowValue.value}`
      
      
      boxElem.append(rowElem)
      
    }
    target.append(boxElem)
  }
  
  
  
}
    // inputDan.addEventListener('keyup', function (event) {
    //   // console.log(event,'keyup')
      
    
    // })
    
    // inputDan.addEventListener('keydown', function (event) {
    //   console.log(event,'keydown')
    // })