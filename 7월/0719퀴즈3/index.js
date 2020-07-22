function solution(arr) {
  const upArr = arr.filter((elem) => {
    return elem === elem.toUpperCase();
  });

  const lowArr = arr.filter((elem) => {
    return elem === elem.toLowerCase();
  });

  const config = {
    originArr: arr,
    upArr,
    lowArr,
  };

  drawData(config);
}

function drawData(config) {
  const { upArr, lowArr, originArr } = config;
  let resultArr = [];
  let count = null;

  console.log("원본 : ", originArr.join(""));

  if (upArr.length > lowArr.length) {
    count = upArr.length;
    resultArr = originArr.map((elem) => {
      elem = elem.toUpperCase();
      return elem;
    });
  } else {
    count = lowArr.length;
    resultArr = originArr.map((elem) => {
      elem = elem.toLowerCase();
      return elem;
    });
  }

  console.log("결과값 :", resultArr.join(""));
  console.log("count :", count);
}

const txtString = prompt("input");
const txtArr = Array.from(txtString);

solution(txtArr);
