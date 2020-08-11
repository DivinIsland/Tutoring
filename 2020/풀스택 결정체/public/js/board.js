const target = el("target");
const boardBox = el("boardBox");
const titleBox = el("titleBox");
const contentBox = el("contentBox");

const contentDelete = el("contentDelete");
const checkDelete = el("checkDelete");

const writeTitle = el("writeTitle");
const writeContent = el("writeContent");
const writeBtn = el("writeBtn");

// axios.get("/board/api").then((response) => {
//   const data = response.data;
//   data.forEach((item) => {
//     $(target).append(
//       `
//       <div class="col-md-12 board_text" id="boardBox">
//       <div class="col-md-1"><input id="checkDelete" type="checkbox" data-name=${item.contentSeq}></div>
//         <div class="col-md-3 text-center title_box" id="titleBox">${item.title}</div>
//         <div class="col-md-8 text-center content_box" id="contentBox">${item.content}</div>

//       </div><br><br>

//       `
//     );
//   });
// });

writeBtn.addEventListener("click", function (e) {
  const titleValue = writeTitle.value;
  const contentValue = writeContent.value;

  const boardFormat = {
    title: titleValue,
    content: contentValue,
  };

  if (boardFormat.title === "" || boardFormat.content === "") {
    alert("input correct value.");
  } else {
    alert("Submit");
    axios.post("/board/api/create", boardFormat).then((response) => {
      console.log(response, "submit");
      const { data } = response;
      if (data.result === 1) {
        window.location.reload();
      } else {
        alert("failure");
      }
    });
  }
});

const config = {
  checkList: new Set(),
};

target.addEventListener("click", (e) => {
  const target = e.target;
  const getDataName = target.dataset.name;

  if (getDataName) {
    if (target.checked) {
      config.checkList.add(getDataName);
    } else {
      config.checkList.delete(getDataName);
    }
  }

  console.log([...config.checkList]);
});

contentDelete.addEventListener("click", function (e) {
  const submitFormat = {
    list: [...config.checkList],
  };

  axios.post("/board/api/delete", submitFormat).then((response) => {
    const data = response.data;
    if (data.result === 1) {
      alert("success delete!");
      window.location.reload();
    }
  });
});
