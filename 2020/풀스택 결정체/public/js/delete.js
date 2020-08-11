const deleteForm = el("deleteForm");
const inputEmail = el("inputEmail");
const inputPassword = el("inputPassword");

deleteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;

  const submitFormat = {
    email: emailValue,
    password: passwordValue,
  };

  axios.post("/auth/delete", submitFormat).then((response) => {
    const data = response.data;

    if (data.result === 1) {
      alert("Delete Account Success!!");
      window.location.href = "/";
    } else {
      alert("Error");
    }
  });
});
