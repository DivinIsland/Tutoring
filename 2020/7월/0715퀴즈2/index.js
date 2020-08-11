const inputBox = document.querySelector("#inputBox");
const selectBox = document.querySelector("#selectBox");
const searchBox = document.querySelector("#searchBox");
const searchBtn = document.querySelector("#searchBtn");
const target = document.querySelector("#target");

inputBox.addEventListener("keyup", function (e) {
  const inputValue = inputBox.value;

  if (e.key === "Enter") {
    const numArr = inputValue.split(",");
    const rangeNum = numArr[1] - numArr[0];

    const ranNumArr = [];

    for (let i = 0; i < rangeNum; i++) {
      let ranNum = Math.ceil(Math.random() * rangeNum);
      ranNumArr[i] = ranNum;
      console.log(ranNumArr[i]);
    }

    console.log(numArr, "numArr");
    console.log(rangeNum, "rangeNum");
    console.log(ranNumArr, "ranNumArr");

    inputBox.value = "";
  }
});
