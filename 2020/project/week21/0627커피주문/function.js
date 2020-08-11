function el(name) {
  return document.querySelector(`#${name}`);
}

const api = {
  getCoffeeMenuList: "../coffeeMenu.json",
};

function searchCenterElement(config) {
  const {
    text = "No data. Please search for other products.",
    className = "",
  } = config;

  return `<div class="coffee_search_info ${className}">${text}</div>`;
}

function coffeeCardElement(item = {}) {
  return `
  <div class="coffee_item_box">
    <label for="item_${item.id}" class="block">
      <input type="radio" name="coffee_item" data-number="${item.id}" id="item_${item.id}" hidden class="coffee_check_box">
      <div class="coffee_item_card">
        <div class="coffee_item_row img">
          <img
            src="${item.src}"
            alt="" class="coffee_item_img">
        </div>
        <div class="coffee_item_row name">
          <p class="coffee_item_title">${item.name}</p>
        </div>
        <div class="coffee_item_row price">
          <p class="coffee_item_price">${item.price} 원</p>
        </div>
      </div>
    </label>
  </div>
            `;
}

function toggleLoadingBar(element) {
  return function (pending) {
    if (pending) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  };
}

function findCoffeeItem(config) {
  const { id, list } = config;

  const findItem = list.find((item) => item.id === id);

  return findItem;
}

function dataDrawing(config) {
  const { type, list, target, name } = config;

  const coffeeListArray = list.map((item) => {
    return coffeeCardElement(item);
  });

  if (type === "update") {
    if (name === "menu") {
      $(target).html(coffeeListArray);
    }
    if (name === "cart") {
    }
    if (name === "detail") {
    }
  }

  if (type === "delete") {
  }
}

function popup(setConfig) {
  const {
    title: titleElem,
    content: contentElem,
    footer: footerElem,
  } = setConfig;

  return function (config) {
    const { target, title, content, footer } = config;
    $(titleElem).html(title);
    $(contentElem).html(content);
    $(footerElem).html(footer);
    $(target).modal();
  };
}
