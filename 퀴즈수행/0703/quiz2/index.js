function el(elem) {
  return document.querySelector(`#${elem}`);
}

function dataDrawing(param) {
  const { target } = param;

  let timer = setInterval(() => {
    if (config.totalTime < 0) {
      clearInterval(timer);
    } else {
      config.min = parseInt(config.totalTime / 60);
      config.sec = config.totalTime % 60;
      target.innerHTML = `${config.min}:${config.sec}`;

      config.totalTime--;
    }
  }, 1000);
}

//---------------- function ------------------------------------

const timeBox = el("timeBox");
const timeSelect = el("timeSelect");
const checkBtn = el("checkBtn");

const config = {
  target: timeBox,
  totalTime: 126,
  min: "",
  sec: "",
};

dataDrawing(config);

checkBtn.addEventListener("click", function (e) {
  const isMinEqual = Number(timeSelect.value) === config.min;
  if (isMinEqual) {
    alert("Correct!");
  } else {
    alert("InCorrect!");
  }
});
