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
const multiplyNum = 15;

let count = 0;
const game = 5;
let totalRep = 0;

let lottoArrObj = {
  firstArr: [],
  secondArr: [],
};

createBtn.addEventListener("click", function (e) {
  while (count < game) {
    let lottoFirstArr = lottoArrObj.firstArr;
    let lottoSecondArr = lottoArrObj.secondArr;

    createArr(lottoFirstArr);

    createArr(lottoSecondArr);

    const sortedLottoFirstArr = lottoFirstArr.sort((a, b) => a - b);
    const sortedLottoSecondArr = lottoSecondArr.sort((a, b) => a - b);

    const correctArr = sortedLottoFirstArr.filter((item) => {
      if (sortedLottoSecondArr.indexOf(item) !== -1) {
        return true;
      }
    });

    if (correctArr.length === 6) {
      const drawFormat = {
        target: showBox,
        list: correctArr,
      };

      dataDrawing(drawFormat);
      count++;
    }

    lottoArrObj.firstArr = [];
    lottoArrObj.secondArr = [];
    totalRep++;
  }

  console.log(`총 대조 횟수 : ${totalRep}`);
});
