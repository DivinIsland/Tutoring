function init() {
  const inputEmail = document.querySelector("#inputEmail");
  const inputRemember = document.querySelector("#inputRemember");

  // console.log(
  //   localStorage.getItem("remember")
  //   )

  if (localStorage.remember) {
    const getStorageRemember = localStorage.getItem("remember");
    inputEmail.value = getStorageRemember;
    inputRemember.checked = true;
  }
}


function regEmail(emailVal = "") {


  var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  

  return emailVal.match(regExp) != null; 

}

function regPassword(passwordValue = "") { 
 

  const regexp= /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

  return passwordValue.match(regexp) != null;

  

}