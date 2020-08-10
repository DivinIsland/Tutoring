const signupForm = el("signupForm");
const inputName = el("inputName");
const inputEmail = el("inputEmail");
const inputPassword = el("inputPassword");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameValue = inputName.value;
  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;

  const submitFormat = {
    username: nameValue,
    email: emailValue,
    password: passwordValue,
  };

  axios.post("/auth/signup", submitFormat).then((response) => {
    const data = response.data;

    if (data.result === 1) {
      alert("Sign Up Success!!");
      window.location.href = "/";
    } else {
      alert("***Fail***");
    }
  });
});
