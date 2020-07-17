const inputBox = document.querySelector("#inputBox");
const submitBtn = document.querySelector("#submitBtn");
const target = document.querySelector("#target");

submitBtn.addEventListener("click", function (e) {
  const inputValue = inputBox.value;
  const strLength = inputValue.length - 4; //4번째 시작지점 index
  const inputArr = Array.from(inputValue);

  let i = 0; //inputArr의 배열 index값

  const changeArr = inputArr.map((elem) => {
    if (i < strLength) {
      elem = "#";
    }
    i++;
    return elem;
  });
});
