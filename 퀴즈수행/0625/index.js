const name = document.querySelector("#name");
const submitBtn = document.querySelector("#submit");
const show = document.querySelector("#show");
const deleteBtn = document.querySelector("#delete");

const listArray = [];

// NOTE:submit 버튼
submitBtn.addEventListener("click", function (e) {
  const nameValue = name.value.trim();
  if (!!nameValue) {
    listArray.push(nameValue);
    name.value = "";
  }

  const config = {
    target: show,
    list: listArray,
  };

  drawingData(config);
});

// NOTE:delete 버튼
deleteBtn.addEventListener("click", function (e) {
  const config = {
    target: show,
    list: listArray,
    count: listArray.length,
  };

  deleteData(config);
});

// NOTE:data를 보여주는 함수
function drawingData(config) {
  const { target, list } = config;

  target.innerHTML = list;
}

//NOTE:data를 삭제하는 함수
function deleteData(config) {
  const { target, list, count } = config;
  const nullArray = [];

  list = nullArray;

  // for (let i = 0; i < count; i++) {
  //   list.pop();
  // }

  target.innerHTML = list;
}

/**
 * NOTE:
 * 1. 전역변수 listArray에 영향을 미침
 * 2. submitBtn쪽에 if로 !! 검사를 해주었다.
 * 3. 함수를 사용해서 구현했다.
 */
