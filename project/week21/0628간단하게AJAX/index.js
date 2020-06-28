const getDataBtn = document.querySelector("#getDataBtn");
const view = document.querySelector("#view");

const api = {
  address: "https://jsonplaceholder.typicode.com",
  post: "/posts",
};

getDataBtn.addEventListener("click", function (e) {
  axios.get(api.address + api.post).then((response) => {
    const drawFormat = {
      target: view,
      data: response.data,
    };

    console.log(response);

    dataDrawing(drawFormat);
  });
});

function dataDrawing(config) {
  const { target, data } = config;

  $(target).html(JSON.stringify(data));
}

function test() {}

test();
