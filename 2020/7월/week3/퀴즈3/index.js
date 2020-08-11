//filter를 이용하여 up, low 배열을 나누는 함수
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

//length가 더 큰 쪽으로 모든 요소를 변환시킨 후 출력.

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

//func line------------

const txtString = prompt("input");
const txtArr = Array.from(txtString);

solution(txtArr);
