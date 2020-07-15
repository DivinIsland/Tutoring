function sortAlphabet(val) {
  const stringArr = val.split(" ");

  stringArr.sort();

  return stringArr.join(" ");
}

function drawData(arr, target) {
  target.innerHTML = arr;
}

const inputBox = document.querySelector("#inputBox");
const submitBtn = document.querySelector("#submitBtn");
const beforeTarget = document.querySelector("#beforeTarget");
const afterTarget = document.querySelector("#afterTarget");

submitBtn.addEventListener("click", function (e) {
  const beforeArr = inputBox.value;
  const afterArr = sortAlphabet(beforeArr);

  drawData(beforeArr, beforeTarget);

  drawData(afterArr, afterTarget);
});
