const contentBox = document.querySelector("#contentBox");

const config = {
  target: "div",
  value: 5,
};

const makeFormat = {
  target: config.target,
  value: config.value,
};

dataMerge(makeFormat);

function dataMerge(config) {
  const { target, value } = config;

  console.log(config, target, value);
}
