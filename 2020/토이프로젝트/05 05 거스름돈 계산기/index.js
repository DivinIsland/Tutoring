const viewInputElems = document.querySelectorAll(".cal_input");
const inputCalc = document.querySelector("#inputCalc");
const submitForm = document.querySelector("#submitForm");
const calBtn = document.querySelector("#calBtn");
const resetBtn = document.querySelector("#resetBtn");

const inputAmount = submitForm.amount;
const inputtenThousand = submitForm.tenThousand;
const inputThousand = submitForm.thousand;
const inputFiveHundred = submitForm.fiveHundred;
const inputHundred = submitForm.hundred;
const inputTen = submitForm.ten;
const inputOne = submitForm.one;

const viewInputList = [
  {
    elem: inputAmount,
    value: null,
  },
  {
    elem: inputtenThousand,
    value: 10000,
  },
  {
    elem: inputThousand,
    value: 1000,
  },
  {
    elem: inputFiveHundred,
    value: 500,
  },
  {
    elem: inputHundred,
    value: 100,
  },
  {
    elem: inputTen,
    value: 10,
  },
  {
    elem: inputOne,
    value: 1,
  },
];

const viewInputElemList = viewInputList.map((item) => item.elem);
console.log(viewInputElemList, "viewInputElemList");
init();

/**
 * NOTE: 리셋버튼을 클릭했을때, confirm 후 리셋함수 등장
 */
resetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const confirmDelete = confirm("Are you sure you wanna delete?");

  if (confirmDelete === false) {
    return;
  }

  const combineAllInputList = viewInputElemList.concat(inputCalc);

  const resetObj = {
    items: combineAllInputList,
  };

  dataReset(resetObj);
});

submitForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const submitObj = {
    calcInput: inputCalc,
    viewElemList: viewInputElemList,
    inputList: viewInputList,
    form: submitForm,
  };

  dataSubmit(submitObj);
});

function dataSubmit(config) {
  const { calcInput, viewInputElemList, inputList, form } = config;
  const resetObj = {
    items: viewInputList,
  };

  const inputCalcValue = +inputCalc.value;

  const outputObj = {
    amount: inputCalcValue,
    list: viewInputList,
  };

  const outputList = dataOutput(outputObj);

  const drawObject = {
    form: submitForm,
    list: outputList,
  };

  dataDrawing(drawObject);

  inputCalc.value = "";
}

function dataOutput(config) {
  const { list, amount } = config;

  let updateValue = amount;

  const newList = list.map((item) => {
    let tempValue;

    if (item.elem.name !== "amount") {
      tempValue = Math.floor(updateValue / item.value);
      updateValue = updateValue % item.value;
    } else {
      tempValue = amount;
    }

    return {
      name: item.elem.name,
      value: tempValue,
    };
  });

  return newList;
}

function dataDrawing(config) {
  const { form, list } = config;

  list.map((item) => {
    console.log((form[item.name].value = item.value));
  });
}

/**
 * NOTE: viewinput들과 calcinput의 value를 초기화
 * @param {object} config
 */

function dataReset(config) {
  const { items } = config;
  items.map((item) => {
    item.value = "";
  });
}

/**
 * NOTE: 페이지가 로드됐을때 init함수가 실행됩니다.
 */
function init() {
  //페이지 로드시 계산하는 input에 focus를 줍니다.
  inputCalc.focus();

  // view 전용 input의 readOnly 속성을 true로 바꿔줍니다.
  Array.from(viewInputElems).map((item) => {
    item.readOnly = true;
  });
}
