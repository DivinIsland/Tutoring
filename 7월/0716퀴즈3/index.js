const inputBox = document.querySelector("#inputBox");
const submitBtn = document.querySelector("#submitBtn");
const target = document.querySelector("#target");

function dontGiveMeFive(obj) {
  const { start, end } = obj;
  const numArr = [];

  for (let i = start; i <= end; i++) {
    numArr.push(String(i));
  }

  const filteredArr = numArr.filter((item) => {
    return item.indexOf("5") === -1;
  });

  return filteredArr;
}

submitBtn.addEventListener("click", function (e) {
  const inputValue = inputBox.value;

  const startEndArr = inputValue.split(",").map((item) => {
    return item.trim();
  });

  const calFormat = {
    start: startEndArr[0],
    end: startEndArr[startEndArr.length - 1],
  };

  const totalArr = dontGiveMeFive(calFormat);

  target.innerHTML = totalArr;

  inputBox.value = "";
});

// 공백이 들어갔을때 결과가 나오지 않는 오류를 수정할것.
