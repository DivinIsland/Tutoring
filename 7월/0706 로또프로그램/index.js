function el(elem) {
  return document.querySelector(`#${elem}`);
}

function dataDrawing(config) {
  const { list, target } = config;

  const sortedList = list.sort((a, b) => a - b).join(" ");

  $(target).append(`${sortedList}<br>`);
}

function createArr(list) {
  while (list.length < 6) {
    const lottoNum = Math.ceil(Math.random() * multiplyNum);

    const isDuplicate = list.indexOf(lottoNum, 0);

    if (isDuplicate === -1) {
      list.push(lottoNum);
    }
  }
}

///////////////////////////////////////////////////////////////////

const showBox = el("showBox");
const createBtn = el("createBtn");

const multiplyNum = 8; // 인자로 넘겨주기.

let count = 0;
const game = 1;
let totalRep = 0;

let lottoArrObj = {
  oneArr: [],
  twoArr: [],
  threeArr: [],
  fourArr: [],
  fiveArr: [],
  sixArr: [],
  sevenArr: [],
};

createBtn.addEventListener("click", function (e) {
  console.time();
  while (count < game) {
    let oneArr = lottoArrObj.oneArr;
    let twoArr = lottoArrObj.twoArr;
    let threeArr = lottoArrObj.threeArr;
    let fourArr = lottoArrObj.fourArr;
    let fiveArr = lottoArrObj.fiveArr;
    let sixArr = lottoArrObj.sixArr;
    let sevenArr = lottoArrObj.sevenArr;

    createArr(oneArr);
    createArr(twoArr);
    createArr(threeArr);
    createArr(fourArr);
    createArr(fiveArr);
    createArr(sixArr);
    createArr(sevenArr);

    const numOneArr = oneArr.filter((item) => {
      if (twoArr.indexOf(item) !== -1) {
        return true;
      }
    });

    const numTwoArr = numOneArr.filter((item) => {
      if (threeArr.indexOf(item) !== -1) {
        return true;
      }
    });

    const numThreeArr = numTwoArr.filter((item) => {
      if (fourArr.indexOf(item) !== -1) {
        return true;
      }
    });

    const numFourArr = numThreeArr.filter((item) => {
      if (fiveArr.indexOf(item) !== -1) {
        return true;
      }
    });

    // const numFiveArr = numFourArr.filter((item) => {
    //   if (sixArr.indexOf(item) !== -1) {
    //     return true;
    //   }
    // });

    // const numSixArr = numFiveArr.filter((item) => {
    //   if (sevenArr.indexOf(item) !== -1) {
    //     return true;
    //   }
    // });

    if (numFourArr.length === 6) {
      const drawFormat = {
        target: showBox,
        list: numFourArr,
      };

      dataDrawing(drawFormat);
      count++;
    }

    lottoArrObj.oneArr = [];
    lottoArrObj.twoArr = [];
    lottoArrObj.threeArr = [];
    lottoArrObj.fourArr = [];
    // lottoArrObj.fiveArr = [];
    // lottoArrObj.sixArr = [];
    // lottoArrObj.sevenArr = [];
    totalRep++;
  }

  console.log(`총 대조 횟수 : ${totalRep}`);
  console.timeEnd();
});
