const inputBox = document.querySelector("#inputBox");
const submitBtn = document.querySelector("#submitBtn");
const target = document.querySelector("#target");

submitBtn.addEventListener("click", function (e) {
  const inputValue = inputBox.value;
  const strLength = inputValue.length - 4; //4번째 시작지점 index
  const inputArr = Array.from(inputValue);

  const isFirstChar = inputArr[0] !== " ";

  const changeArr = inputArr.map((elem, idx) => {
    //첫번째 글자가 공백인지를 판단하는 변수
    const shapCondition = !(elem === " " && !isFirstChar);

    if (idx < strLength && shapCondition) {
      elem = "#";
    }

    return elem;
  });

  console.log(changeArr.join(""));
});

function dataFilter() {}

function solution(start, end) {
  const res = dataFilter(state, end);
  return res;
}
console.log(sortAlpa("agjkwg ejgnwe bwekg znweg hkjngwh klee"));
