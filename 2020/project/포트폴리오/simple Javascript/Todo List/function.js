function el(elem) {
  return document.querySelector(`#${elem}`);
}

function dataDrawing(format) {
  const { value, list, target } = format;

  list.push(`<list class="form-control">${value}</list>`);

  for (i = 0; i < list.length; i++) {
    target.innerHTML = list.join("");
  }
}
