const signoutBtn = el("signoutBtn");

signoutBtn.addEventListener("click", (e) => {
  const signoutConfig = confirm("are you sure?");

  console.log(e.target.dataset.name);

  const submitFormat = {
    userCode: e.target.dataset.name,
  };

  if (signoutConfig) {
    axios.post("/auth/signout", submitFormat).then((response) => {
      const data = response.data;
      if (data.result === 1) {
        alert("signout success");
        window.location.href = "/auth/logout";
      } else {
        alert("fail");
      }
    });
  }
});
