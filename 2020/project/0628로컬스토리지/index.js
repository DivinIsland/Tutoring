function el(elem) {
  return document.querySelector(`#${elem}`);
}

function storageSet(config) {
  const { key, value } = config;
  localStorage.setItem(key, value);
}

function drawingData(config) {
  const { storageData, target, key, value } = config;
  const storageArr = [];

  for (i = 0; i < storageData.length; i++) {
    const storageKey = storageData.key(i);
    key[i] = storageKey;
    value[i] = storageData.getItem(storageKey);
    storageArr[i] = `${key[i]} : ${value[i]}`;

    // target.append(storageArr[i]);

    // target.append(`${key[i]} : ${value[i]}`);
  }

  console.log(storageArr);

  target.innerHTML = storageArr.join("<br/>");
}

function inputClear() {
  inputKey.value = "";
  inputValue.value = "";
}

const inputKey = el("inputKey");
const inputValue = el("inputValue");
const submitBtn = el("submitBtn");
const resultBox = el("resultBox");
const clearBtn = el("clearBtn");
const showBtn = el("showBtn");

const data = {
  localKey: [],
  localValue: [],
};

submitBtn.addEventListener("click", function (e) {
  if (!!inputKey.value && !!inputValue.value) {
    const setFormat = {
      key: inputKey.value,
      value: inputValue.value,
    };
    storageSet(setFormat);
  } else {
    alert("값이 없습니다.");
  }
  inputClear();
});

showBtn.addEventListener("click", function (e) {
  const drawFormat = {
    storageData: localStorage,
    target: resultBox,
    key: data.localKey,
    value: data.localValue,
  };
  drawingData(drawFormat);
});

clearBtn.addEventListener("click", () => {
  localStorage.clear();
  console.log(localStorage);
});
