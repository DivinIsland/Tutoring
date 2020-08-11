const inputName = el("inputName");
const inputEmail = el("inputEmail");
const inputPassword = el("inputPassword");
const submitBtn = el("submitBtn");

submitBtn.addEventListener("click", (e) => {
  const submitFormat = {
    username: inputName.value,
    email: inputEmail.value,
    password: inputPassword.value,
  };

  axios.post("/auth/signup", submitFormat).then((response) => {
    const data = response.data;

    if (data.result === 1) {
      alert("signup success!");
      window.location.href = "/auth/signin";
    } else {
      alert("fail...");
    }
  });
});
