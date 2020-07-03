const loadingBox = el("loadingBox");
const coffeeListBox = el("coffeeListBox");

const inputSearch = el("inputSearch");

const detailmodal = el("detailmodal");
const modalHeader = el("modalHeader");
const modalBody = el("modalBody");
const modalFooter = el("modalFooter");

const modalForm = el("modalForm");

const config = {
  message: {
    noData: "No data. Please search for other products.",
    loading: "Loading. Please wait.",
  },
  coffeeList: [],
  pending: true,
  selected: null,
  cart: [],
  order: {
    count: null,
    temper: null,
    size: null,
    name: "",
    price: null,
  },
};

const loadingToggle = toggleLoadingBar(loadingBox);
const setPopup = {
  title: modalHeader,
  content: modalBody,
  footer: modalFooter,
};
const openPopup = popup(setPopup);

// $(detailmodal).modal();

/**
 * NOTE: 초기 데이터 요청
 */
axios.get(api.getCoffeeMenuList).then((item) => {
  config.coffeeList = item.data.list;
  config.pending = false;

  loadingToggle(config.pending);

  main();
});
/**
 * NOTE: inputSearch를 입력하여 Data를 filter후 drawing
 */
inputSearch.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    const inputData = inputSearch.value.trim();

    const result = config.coffeeList.filter((item) => {
      return item.name.indexOf(inputData) !== -1;
    });

    const drawFormat = {
      type: "update",
      name: "menu",
      target: coffeeListBox,
      list: result,
    };

    dataDrawing(drawFormat);
  }
});

modalForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

modalForm.addEventListener("change", function (e) {
  e.preventDefault();
  const target = e.target;
  const targetName = e.target.name;

  if (targetName === "size" || targetName === "temper") {
    console.log(target.value, "size");
  }

  console.log(target.value);
});

/**
 * NOTE: EVENT CARD CLICK
 */
coffeeListBox.addEventListener("change", function (e) {
  const target = e.target;
  const targetId = target.getAttribute("data-number");

  config.selected = Number(targetId);

  const findCoffeeFormat = {
    list: config.coffeeList,
    id: config.selected,
  };

  const findItem = findCoffeeItem(findCoffeeFormat);

  const modalFormat = {
    title: "Product Detail",
    target: detailmodal,
    content: modalDetailContentElement(findItem),
  };

  openPopup(modalFormat);
});

function main() {
  init();
}

function init() {
  const drawFormat = {
    type: "update",
    name: "menu",
    target: coffeeListBox,
    list: config.coffeeList,
  };

  dataDrawing(drawFormat);
}
