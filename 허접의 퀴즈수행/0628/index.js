//------------------function----------------//

function el(elem) {
  return document.querySelector(`#${elem}`);
}

function drawingData(config) {
  const { addList, searchList } = config;

  addListBox.innerHTML = addList;
  searchListBox.innerHTML = searchList;
}

//------------------function----------------//

const selectBox = el("selectBox");
const inputBox = el("inputBox");
const addListBox = el("addListBox");
const searchListBox = el("searchListBox");

const config = {
  addList: [],
  searchList: [],
};

inputBox.addEventListener("keyup", function (e) {
  const selectMode = Number(selectBox.value);
  const inputValue = inputBox.value;

  if (e.key === "Enter") {
    if (!!inputValue) {
      // add일때
      if (selectMode === 0) {
        config.addList.push(inputValue);
      }

      //search 일때
      if (selectMode === 1) {
        const searchData = config.addList.filter((item) => {
          return item === inputValue;
        });

        if (searchData.length === 0) {
          alert("일치하는 값이 없습니다.");
        } else {
          const deleteIndex = config.addList.indexOf(inputValue);
          config.addList.splice(deleteIndex, 1);

          // config.searchList.push(searchData);

          config.searchList = config.searchList.concat(searchData);
          console.log(config.searchList, searchData);
        }
      }
    } else {
      // inputBox값이 비어있을때.
      alert("Input the Value.");
    }

    const drawFormat = {
      addList: config.addList,
      searchList: config.searchList,
    };

    drawingData(drawFormat);

    inputBox.value = "";
  }
});
