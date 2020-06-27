const inputBox1 = el("inputBox1");
const inputBox2 = el("inputBox2");
const submitBtn = el("submitBtn");

submitBtn.addEventListener("click", function (e) {
  const config = {
    data1: inputBox1.value,
    data2: inputBox2.value,
  };

  const show = checkData(config);

  show(config);
});

//---------------------------function----------------------------//

function el(elem) {
  return document.querySelector(`#${elem}`);
}

//1번 currying

// function checkData(config) {
//   const { data1, data2 } = config;
//   const isTrueData1 = !!data1;
//   const isTrueData2 = !!data2;

//   if (isTrueData1 && isTrueData2) {
//     return function showData(config) {
//       alert(`${data1}\n${data2}`);
//     };
//   } else {
//     alert("값을 입력하세요.");

//   }
// }

//2번 currying

function checkData(config) {
  const { data1, data2 } = config;
  const isTrueData1 = !!data1;
  const isTrueData2 = !!data2;

  return function showData(config) {
    if (isTrueData1 && isTrueData2) {
      alert(`${data1}\n${data2}`);
    } else {
      alert("값을 입력하세요.");
    }
  };
}
