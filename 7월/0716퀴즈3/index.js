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
    return item.includes("5") !== true;
  });

  return filteredArr;
}

submitBtn.addEventListener("click", function (e) {
  const inputValue = inputBox.value;

  const startEndArr = inputValue.split(",");

  const calFormat = {
    start: startEndArr[0],
    end: startEndArr[startEndArr.length - 1],
  };

  const totalArr = dontGiveMeFive(calFormat);

  target.innerHTML = totalArr;

  inputBox.value = "";
});
