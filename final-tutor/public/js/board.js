const inputAuthor = el("inputAuthor");
const inputTitle = el("inputTitle");
const inputContent = el("inputContent");
const writeBtn = el("writeBtn");
const deleteBtn = el("deleteBtn");
const target = el("target");

const config = {
  checkList: new Set(),
};

writeBtn.addEventListener("click", (e) => {
  const submitFormat = {
    author: inputAuthor.value,
    title: inputTitle.value,
    content: inputContent.value,
  };

  axios.post("/board/api/create", submitFormat).then((response) => {
    const data = response.data;

    if (data.result === 1) {
      alert("success");
      window.location.reload();
    } else {
      alert("fail");
    }
  });
});

target.addEventListener("click", (e) => {
  const target = e.target;
  const dataIdx = target.dataset.name;

  if (target.checked) {
    config.checkList.add(dataIdx);
  } else {
    config.checkList.delete(dataIdx);
  }
  console.log([...config.checkList]);
});

deleteBtn.addEventListener("click", (e) => {
  const deleteFormat = {
    list: [...config.checkList],
  };

  axios.post("/board/api/delete", deleteFormat).then((response) => {
    const data = response.data;
    console.log(data);
    if (data.result === 1) {
      alert("success!");
      window.location.reload();
    } else {
      alert("Fail");
    }
  });
});
