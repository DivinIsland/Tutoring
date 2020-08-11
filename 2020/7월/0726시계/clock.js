const clockBox = document.querySelector("#clockBox");
const clockTitle = document.querySelector("#clockTitle");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const second = date.getSeconds();

  clockTitle.innerText = `${hours}:${minutes}:${second}`;
}

getTime();
