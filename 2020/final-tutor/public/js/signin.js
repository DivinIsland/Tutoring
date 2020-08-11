const inputEmail = el("inputEmail");
const inputPassword = el("inputPassword");
const submitBtn = el("submitBtn");

submitBtn.addEventListener("click", (e) => {
  const submitFormat = {
    email: inputEmail.value,
    password: inputPassword.value,
  };

  axios.post("/auth/signin", submitFormat).then((response) => {
    const data = response.data;

    if (data.result === 1) {
      alert("Signin Success!");
      window.location.href = "/";
    } else {
      alert("fail");
    }
  });
});
