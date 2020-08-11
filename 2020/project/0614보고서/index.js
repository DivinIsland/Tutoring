const inputTitleElem = el("inputTitle");
const inputContentElem = el("inputContent");
const listingBoxElem = el("listingBox");
const promptBtn = el("promptBtn");
const lockScreenContainer = el("lockScreenContainer");
const authorElem = el("author");
const logoutBtnElem = el("logoutBtn");
const getStorageAuthor = storage.get("author");
const inputInsertBtn = el("inputInsertBtn");
const getStorageList = storage.get("list");

const config = {
  author: getStorageAuthor,
  list: JSON.parse(getStorageList) || [],
};

initalize();

const setDataMerge = setDataBundle(listingBoxElem);
// console.log(setDataMerge, "setDataMerge");

/**
 * NOTE: 메인화면에 lock screen 관련 이벤트
 */
promptBtn.addEventListener("click", function (e) {
  const authorName = prompt("Please enter your name");

  if (authorName.trim().length > 0) {
    storage.set("author", authorName);
    config.author = authorName;
    lockScreenContainer.classList.add("hidden");
    authorElem.innerHTML = authorName;
    logoutBtnElem.innerHTML = "LogOut";

    const drawingFormat = {
      type: "listing",
      list: config.list,
      target: listingBoxElem,
    };

    dataDrawing(drawingFormat);
  } else {
    alert("Please check your name");
  }
});

/**
 * 로그아웃이 author의 이름 제거
 */

logoutBtnElem.addEventListener("click", function (e) {
  storage.remove("author");
  window.location.reload();
});

/**
 * submit버튼 눌렀을때 data를 storage에 저장하고
 * data를 drawing 해준다.
 */
inputInsertBtn.addEventListener("click", function () {
  const titleValue = inputTitleElem.value;
  const contentValue = inputContentElem.value;
  const checkArray = [titleValue.trim(), contentValue.trim()];

  if (checkArray.every((item) => item.length > 0)) {
    const timeStamp = new Date().getTime();

    const dataFormat = {
      id: timeStamp,
      title: titleValue,
      author: config.author,
      content: contentValue,
    };
    const listItemData = outputData(dataFormat);
    const newList = config.list.concat(listItemData);

    const bundleFormat = {
      target: config,
      list: newList,
    };
    setDataMerge(bundleFormat);

    inputTitleElem.value = "";
    inputContentElem.value = "";
  } else {
    alert("Please check your title or content");
  }
});
/**
 * NOTE: listing box event delegation
 */
listingBoxElem.addEventListener("click", function (e) {
  const target = e.target;
  const getTargetAttrDataName = target.getAttribute("data-name");

  //data-name 속성이 있는 elem만 들어감.
  //read나 delete 속성을 갖고 있는 엘리먼트만 if문으로 들어감.
  if (!!getTargetAttrDataName) {
    e.stopPropagation(); // 이벤트 전파를 막아줍니다.
    const findParentItem = findParent(target, { "data-name": "listIndex" });
    const findParentId = findParentItem.getAttribute("aria-controls"); //밀리세컨드 아이디
    const findListItem = config.list.find(
      (item) => item.id === Number(findParentId)
    );

    // NOTE: Delete버튼 클릭 시
    if (getTargetAttrDataName === "delete") {
      const confirmDelete = confirm("are you sure you wanna delete?");
      if (confirmDelete) {
        const removeFormat = {
          value: findParentId,
          list: config.list,
        };
        const newList = removeArrayItem(removeFormat);

        //DEBUG:

        const bundleFormat = {
          target: config,
          list: newList,
        };
        setDataMerge(bundleFormat);
      }
    }

    // NOTE: read버튼 클릭시
    else if (getTargetAttrDataName === "read") {
      console.log("run read");
      console.log(config.list);
      //findListItem if로 전체 감싸주기.
      findListItem.isRead = !findListItem.isRead;

      const bundleFormat = {
        target: config,
        list: config.list,
      };
      setDataMerge(bundleFormat);
    }
  }
});

function initalize() {
  const isLogged = !!getStorageAuthor;
  if (isLogged) {
    lockScreenContainer.classList.add("hidden");
    authorElem.innerHTML = getStorageAuthor;

    const drawingFormat = {
      type: "listing",
      list: config.list,
      target: listingBoxElem,
    };

    dataDrawing(drawingFormat);
  } else {
    logoutBtnElem.innerHTML = "";
  }
}
