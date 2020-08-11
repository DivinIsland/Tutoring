function el(elem) {
  return document.querySelector(`#${elem}`);
}

function dataDrawing(config) {
  const { list, target } = config;
  list.sort((a, b) => a - b);

  const listJoin = list.join(" ");
  console.log("draw", list, target);
  target.innerHTML = listJoin;
}

const todayLottoShowBox = el("todayLottoShowBox");
const todayLottoBtn = el("todayLottoBtn");
const myLottoShowBox = el("myLottoShowBox");
const myLottoBtn = el("myLottoBtn");

const multiplyNum = 45;

const lottoNumberObj = {
  todayNum: [],
  myNum: [],
};

todayLottoBtn.addEventListener("click", function (e) {
  const lottoNumArr = lottoNumberObj.todayNum;

  while (lottoNumArr.length < 6) {
    const lottoNum = parseInt(Math.random() * multiplyNum);
    const isDuplicated = lottoNumArr.indexOf(lottoNum, 0);

    if (isDuplicated === -1) {
      lottoNumArr.push(lottoNum);
    } else {
      console.log("중복떠서 한번 더 함.");
    }
  }

  const drawFormat = {
    target: todayLottoShowBox,
    list: lottoNumArr,
  };

  dataDrawing(drawFormat);
});

myLottoBtn.addEventListener("click", function (e) {
  const lottoNumArr = lottoNumberObj.todayNum;
  const myNumArr = lottoNumberObj.myNum;

  const lottoNum = parseInt(Math.random() * multiplyNum);

  const isDuplicated = myNumArr.indexOf(lottoNum, 0);

  if (myNumArr.length < 6) {
    if (isDuplicated === -1) {
      myNumArr.push(lottoNum);

      const drawFormat = {
        target: myLottoShowBox,
        list: myNumArr,
      };

      dataDrawing(drawFormat);
    } else {
      alert("한번 더 뽑으세요.");
    }
  }

  if (myNumArr.length === lottoNumArr.length) {
    console.log("in");
    const checkArr = lottoNumArr.find((item) => {
      const arrIndex = lottoNumArr.indexOf(item);
      return item === myNumArr[arrIndex];
    });
    alert(checkArr);
  }
});
