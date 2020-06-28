const inputBox1 = el("inputBox1");
const inputBox2 = el("inputBox2");
const submitBtn = el("submitBtn");

submitBtn.addEventListener("click", function (e) {
  const config = {
    data1: inputBox1.value,
    data2: inputBox2.value,
  };

  const showData = checkData(config);

  showData(config);
});

//---------------------------function----------------------------//

function el(elem) {
  return document.querySelector(`#${elem}`);
}

//2번 currying

function checkData(config) {
  const { data1, data2 } = config;
  const isTrueData1 = !!data1.trim();
  const isTrueData2 = !!data2.trim();

  return function showData(config) {
    if (isTrueData1) {
      if (isTrueData2) {
        alert(`${data1}\n${data2}`);
      } else {
        alert("2번 값을 확인하세요.");
      }
    } else {
      alert("1번 값을 확인하세요.");
    }
  };
}
