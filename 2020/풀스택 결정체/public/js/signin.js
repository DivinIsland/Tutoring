const signinForm = el("signinForm");
const inputEmail = el("inputEmail");
const inputPassword = el("inputPassword");

signinForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;

  const signinFormat = {
    email: emailValue,
    password: passwordValue,
  };

  axios.post("/auth/signin", signinFormat).then((response) => {
    const data = response.data;

    if (data.result === 1) {
      alert("Login Success!");
      window.location.href = "/";
    } else {
      alert("Login Failed.");
    }
  });
});
