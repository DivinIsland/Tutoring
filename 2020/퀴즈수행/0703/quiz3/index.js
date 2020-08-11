function el(elem) {
  return document.querySelector(`#${elem}`);
}

function selectAdd(obj) {
  const { target, value, id } = obj;
  optionId++;

  $(target).append(`<option value="${id}">${value}</option>`);
}

function dataDrawing(obj) {
  const { target, name, value } = obj;

  $(target).append(`<li>${name} - ${value}</li>`);
}

//------------------------function ------------------------//

const inputBox = el("inputBox");
const selectBox = el("selectBox");
const textBox = el("textBox");
const submitBtn = el("submitBtn");
const listBox = el("listBox");

let optionId = 1;

inputBox.addEventListener("keyup", function (e) {
  const inputValue = inputBox.value;

  const selectFormat = {
    target: selectBox,
    value: inputValue,
    id: optionId,
  };

  if (e.key === "Enter") {
    selectAdd(selectFormat);
    inputBox.value = "";
  }
});

submitBtn.addEventListener("click", function (e) {
  const selectIndex = selectBox.options.selectedIndex;
  const listName = selectBox[selectIndex].innerText;

  const submitFormat = {
    name: listName,
    value: textBox.value,
    target: listBox,
  };

  dataDrawing(submitFormat);
  textBox.value = "";
});
