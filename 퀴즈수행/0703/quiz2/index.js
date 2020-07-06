// function el(elem) {
//   return document.querySelector(`#${elem}`);
// }

// function dataDrawing(param) {
//   const { target } = param;

//   let timer = setInterval(() => {
//     if (config.totalTime < 0) {
//       clearInterval(timer);
//     } else {
//       config.min = parseInt(config.totalTime / 60);
//       config.sec = config.totalTime % 60;
//       target.innerHTML = `${config.min}:${config.sec}`;

//       config.totalTime--;
//     }
//   }, 1000);
// }

// //---------------- function ------------------------------------

// const timeBox = el("timeBox");
// const timeSelect = el("timeSelect");
// const checkBtn = el("checkBtn");

// const config = {
//   target: timeBox,
//   totalTime: 70,
//   min: "",
//   sec: "",
// };

// dataDrawing(config);

// checkBtn.addEventListener("click", function (e) {
//   const isMinEqual = Number(timeSelect.value) === config.min;
//   if (isMinEqual) {
//     alert("Correct!");
//   } else {
//     alert("InCorrect!");
//   }
// });

/**
NOTE: 1. 외부에서 인입된 값에 영향을 주지 않고 변경되고 있는 값을 실시간으로 가져올 수 있는가?
*/

// function test() {
//   const self = this;
//   test.count = 0;

//   setInterval(() => {
//     test.count++;
//   }, 1000);
// }

// test();

class Timer {
  constructor(props) {
    this.role = 1000;
    this.sec = props.sec;
    this.interval = null;
    this.count = 0;
  }
  getSec() {
    return this.count;
  }
  start() {
    const self = this;
    self.count = self.sec;
    self.interval = setInterval(() => {
      console.log("동작");
      self.count--;
    }, self.role);
  }
  stop() {
    const self = this;
    clearInterval(self.interval);
  }
}

const timerSetting = {
  sec: 300,
};

const timer = new Timer(timerSetting);

timer.start();

document.querySelector("#testBtn").addEventListener("click", function (e) {
  console.log(timer.getSec());
});
