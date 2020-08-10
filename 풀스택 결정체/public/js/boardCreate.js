const writeTitle = el("writeTitle");
const writeContent = el("writeContent");
const writeBtn = el("writeBtn");
const writeAuth = el("writeAuth");

writeBtn.addEventListener("click", (e) => {
  const writeFormat = {
    title: writeTitle.value,
    content: writeContent.value,
    author: writeAuth.value,
  };

  axios.post("/board/api/create", writeFormat).then((response) => {
    const data = response.data;

    if (data.result === 1) {
      alert("success!");
      window.location.href = "/board";
    } else {
      alert("Failure");
    }
  });
});
