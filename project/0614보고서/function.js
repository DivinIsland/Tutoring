// NOTE: 쿼리셀렉터를 일일이 적지않고 생략하는 기능을 담은 function
function el(name) {
  const element = document.querySelector(`#${name}`);
  return element;
}
function elAll(className) {
  const getElements = document.querySelectorAll(className);
  const elemenetList = Array.from(getElements);
  return elemenetList;
}

function removeArrayItem(config) {
  const { value, list } = config;
  const findIndex = list.findIndex((item) => item.id === Number(value));
  const newList = list.slice();
  newList.splice(findIndex, 1);

  return newList;
}

/**
 * 
 * @param {*} config 
 * 
 * {
  id:0,
  title:'',
  author:'',
  content:''
}
 */
function makeListItem(config) {
  const {
    id = "",
    title = "",
    author = "",
    content = "",
    isRead = false,
  } = config;
  const indexId = id;
  const hasReadClassName = isRead ? "active" : "";

  return `
  <div class="report_list item" type="button" data-toggle="collapse" data-target="#${indexId}"
    aria-expanded="false" aria-controls="${indexId}" data-name="listIndex">
    <div class="row">
      <div class="col-md-9">
        <p class="report_title ${hasReadClassName}">${title}</p>
      </div>
      <div class="col-md-3">
        <span class="report_author">${author}</span> 
        <button class="report_btn read ${hasReadClassName}" data-name="read">
          <span class="glyphicon glyphicon-ok" aria-hidden="true" data-name="read"></span>
        </button> 
        <button class="report_btn delete" data-name="delete">
          <span class="glyphicon glyphicon-trash" aria-hidden="true" data-name="delete"></span>
        </button>
      </div>
    </div>
    </div>
    <div class="collapse" id="${indexId}">
      <div class="well report_content">
        ${content}
      </div>
    </div>
  </div>
  `;
}

const storage = {
  get(name) {
    return localStorage.getItem(name);
  },
  set(key, value) {
    return localStorage.setItem(key, value);
  },
  clear() {
    localStorage.clear();
  },
  remove(name) {
    localStorage.removeItem(name);
  },
};

function outputData(config) {
  const {
    id = 0,
    title = "",
    author = "",
    content = "",
    isRead = false,
  } = config;

  return {
    id,
    title,
    author,
    content,
    isRead,
  };
}

function dataDrawing(config) {
  const { type = "", list = [], target = {} } = config;
  if (type === "listing") {
    target.innerHTML = "";
    if (list.length === 0) {
      target.innerHTML = "No Data.";
    } else {
      list.map((item) => {
        $(target).append(makeListItem(item));
      });
    }
  }
}
/**
 * findParent(target, {title:'hello',class:'abc'})
 * @param {*} elm
 * @param {*} attributes
 */
function findParent(elm, attributes) {
  const resArr = [],
    tmp = elm;
  if (attributes && typeof attributes !== "string") {
    for (var attr in attributes) {
      elm = tmp;
      if (attributes.hasOwnProperty(attr)) {
        if (elm.getAttribute(attr) === attributes[attr]) {
          resArr.push(elm);
        } else {
          while ((elm = elm.parentElement)) {
            const getClass = elm.getAttribute(attr);
            const classListArr = getClass ? getClass.split(" ") : null;
            if (classListArr && classListArr.length >= 2) {
              if (inMap(classListArr, attributes[attr])) break;
            } else {
              if (elm.getAttribute(attr) === attributes[attr]) {
                resArr.push(elm);
                break;
              }
            }
          }
        }
      }
    }
  } else {
    if (typeof attributes === "string") {
      if (elm.getAttribute(attributes)) {
        resArr.push(elm);
      } else {
        while ((elm = elm.parentElement)) {
          if (elm.getAttribute(attributes)) {
            resArr.push(elm);
            break;
          }
        }
      }
    }
  }

  function inMap(arr, attr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === attr) {
        resArr.push(elm);
        return true;
      }
    }
    return false;
  }
  if (typeof attributes === "string") return resArr[0];
  return resArr.every((x) => x === resArr[0]) &&
    resArr.length === Object.keys(attributes).length
    ? resArr[0]
    : null;
}

function setDataControl(config) {
  const { target, list } = config;
  //target은 데이터 중심의 config 객체
  //list는 스토리지와 config 객체의 list를 대체할 배열 list
  storage.remove("list");
  storage.set("list", JSON.stringify(list));
  target.list = list;
}

function setDataBundle(baseElement) {
  return function (config) {
    const { target, list } = config;

    const setDataFormat = { target, list };
    setDataControl(setDataFormat);

    const drawingFormat = {
      type: "listing",
      list,
      target: baseElement,
    };

    dataDrawing(drawingFormat);
  };
}
