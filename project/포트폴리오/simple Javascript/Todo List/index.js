const inputBox = el("inputBox");
const addBtn = el("addBtn");
const todoListBox = el("todoListBox");

const config = {
  list: [],
  target: todoListBox,
};

addBtn.addEventListener("click", function (e) {
  const inputValue = inputBox.value;

  const drawFormat = {
    value: inputValue,
    list: config.list,
    target: config.target,
  };

  dataDrawing(drawFormat);
  inputBox.value = "";
});
