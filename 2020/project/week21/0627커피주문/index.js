const loadingBox = el("loadingBox");
const coffeeListBox = el("coffeeListBox");
const detailmodal = el("detailmodal");
const modalHeader = el("modalHeader");
const modalBody = el("modalBody");
const modalFooter = el("modalFooter");

const config = {
  message: {
    noData: "No data. Please search for other products.",
    loading: "Loading. Please wait.",
  },
  coffeeList: [],
  pending: true,
  selected: null,
};

const loadingToggle = toggleLoadingBar(loadingBox);
const setPopup = {
  title: modalHeader,
  content: modalBody,
  footer: modalFooter,
};
const openPopup = popup(setPopup);

axios.get(api.getCoffeeMenuList).then((item) => {
  config.coffeeList = item.data.list;
  config.pending = false;

  loadingToggle(config.pending);

  main();
});

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
