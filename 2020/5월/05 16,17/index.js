const submitForm = document.querySelector("#submitForm");
const inputText = document.querySelector("#inputText");
const todoListBox = document.querySelector("#todoListBox");
let todoListArray = [];
const removeCheckBtn = document.querySelector("#removeCheckBtn");

/**
 * NOTE: remove 버튼을 클릭하면 radio 버튼을 체크 후, todoListArry를 변경한 후 화면에 그려줍니다.
 */
removeCheckBtn.addEventListener('click', function (e) {
  let resetList = [];
  const findRadioElem = Array.from(submitForm.removeRadio).find(item => item.checked);

  if (findRadioElem.id === "checkRadio") {
    resetList = todoListArray.filter(item => item.stage === 1);
  }
  todoListArray = resetList;

  const drawFormat = {
    target: todoListBox,
    list: todoListArray
  };

  dataDrawing(drawFormat);
})

/**
 * NOTE: 기존에 submit하는 form 이벤트를 막아줍니다.
 */
submitForm.addEventListener('submit', function (e) {
  e.preventDefault();
});
/**
 * NOTE: 이벤트 딜리게이션을 이용해서 클릭 엘리먼트에 따라 todoListArry를 변경 후 화면에 그려줍니다.
 */
submitForm.addEventListener('click', function (e) {
  // console.log(e.target)

  const readClassList = [
    "todoList_text",
    "todoList_control_box",
    "todoList_check_label",
    "todoList_check_box"
  ];

  const deleteClassList = [
    "todoList_delete_icon"
  ];

  const isReadClick = hasCompare(readClassList, Array.from(e.target.classList));
  const isDeleteClick = hasCompare(deleteClassList, Array.from(e.target.classList));
  const findRow = $(e.target).closest("div.todoList_item").get(0);

  if (!!findRow) {

    const clickDataId = findRow.getAttribute("data-id");
    let type;
    // console.log(clickDataId, 'clickDataId')

    if (isReadClick) {
      // console.log(e.target, 'target')
      type = "read";
    }

    if (isDeleteClick) {
      type = "delete";

    }

    const dataUpdateFormat = {
      id: Number(clickDataId),
      list: todoListArray,
      type
    };

    dataUpdate(dataUpdateFormat);

    const drawFormat = {
      target: todoListBox,
      list: todoListArray
    };

    dataDrawing(drawFormat);

  }

})

/**
 * NOTE: todoList에 input 엘리먼트의 key 이벤트를 잡아 Enter를 눌렀을시 todoListArry를 수정 후 화면에 그려줍니다.
 */
inputText.addEventListener('keyup', function (e) {
  const { key, target } = e;
  const value = target.value;
  if (key === 'Enter') {

    if (value.trim().length === 0) {
      alert('Spaces cannot be added.');
      e.target.value = "";
      return;
    }

    const outputFormat = {
      content: value
    }
    const newDataFormat = dataOutput(outputFormat);

    todoListArray.unshift(newDataFormat);

    // console.log(newDataFormat, 'newDataFormat')
    // console.log(todoListArray, 'todoListArray')

    const drawFormat = {
      target: todoListBox,
      list: todoListArray
    }

    dataDrawing(drawFormat);
    e.target.value = "";

  }

})


/**
 * NOTE: todoListArry를 수정합니다.
 * @param {*} config 
 */
function dataUpdate(config) {
  const { id, list, type } = config;

  // console.log(config, 'config')
  if (type === "read") {
    const findItem = list.find(item => item.id === id);
    // console.log(findItem, 'findItem');
    if (findItem.stage === 1) {
      findItem.stage = 2;
    } else if (findItem.stage === 2) {
      findItem.stage = 1;
    }


  }
  if (type === "delete") {
    const findIndex = list.findIndex(item => {
      // console.log(item, 'item')
      return item.id === id
    });
    list.splice(findIndex, 1)
    // console.log(list,'list')
    // console.log(findIndex, 'findIndex')

  }

}


/**
 * 
 * NOTE: TodoListArry를 update하기 위한 데이터 item 포맷 함수
 */

function dataOutput(config) {

  const { content } = config;

  // console.log(new Date().valueOf())

  const dataId = new Date().valueOf();


  const outputFormat = {
    id: dataId,
    content,
    stage: 1

  };

  return outputFormat;

}


/**
 * NOTE: 페이지가 로딩됐을때 처음 실행되는 함수.
 * 
 */

function init() {
  if (todoListArray.length === 0) {
    const drawFormat = {
      target: todoListBox,
      list: todoListArray
    };
    dataDrawing(drawFormat);
  }

}

init();


/**
 * 
 * NOTE: TodoList에 insert 하기위해 element의 형식을 만들어주는 함수
 */
function createListItem(config) {

  const { content, id, stage } = config;

  const itemElem = document.createElement('div');
  itemElem.className = "todoList_item";
  itemElem.setAttribute('data-id', id);

  const textElem = document.createElement('div');
  textElem.className = "todoList_text";
  textElem.textContent = content;


  const controlboxElem = document.createElement('div');
  controlboxElem.className = "todoList_control_box";

  const label = document.createElement('label');
  label.className = "tosoList_check_label";
  label.setAttribute("for", id);


  const checkBoxElem = document.createElement('input');
  checkBoxElem.className = "todoList_check_box";
  checkBoxElem.type = "checkbox";
  checkBoxElem.id = id;


  const deleteElem = document.createElement('span');
  deleteElem.className = "todoList_delete_icon glyphicon glyphicon-trash";


  if (stage === 2) {
    textElem.classList.add("read");
    label.classList.add("read");
    checkBoxElem.checked = true;
  }

  itemElem.append(textElem, controlboxElem);
  controlboxElem.append(label, deleteElem);
  label.append(checkBoxElem);


  return itemElem;


}

/**
 * 
 * NOTE: 받아온 리스트로 반복문을 돌면서 target 엘리먼트에 아이템을 append 해주는 함수.
 */
function dataDrawing(config) {
  const { target, list } = config;

  target.innerHTML = "";

  const newItemList = list.map(item => {

    const createFormat = {
      id: item.id,
      content: item.content,
      stage: item.stage
    }
    const newItem = createListItem(createFormat);

    return newItem;
  })

  // console.log(newItemList, 'newItemList')




  if (list.length === 0) {
    const defaultElem = document.createElement('div');
    defaultElem.className = "todoList_default_item";
    defaultElem.textContent = "Please enter the Item"
    target.append(defaultElem)
  } else {
    target.append(...newItemList);
  }




}


/**
 * NOTE: list 2개를 비교하는데 서로 포함하는 요소가 하나라도 있을때, true를 반환합니다.
 * @param {*} list1 
 * @param {*} list2 
 */
function hasCompare(list1, list2) {
  // console.log(list1, list2);

  const result = list1.some(item => list2.indexOf(item) !== -1)

  return result;

}