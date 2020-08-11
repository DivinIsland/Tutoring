const submitForm = document.querySelector('#submitForm');
const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const inputRemember = document.querySelector('#inputRemember');
const inputSubmitBtn = document.querySelector('#inputSubmitBtn');

/**
 * TODO: 
 * - submit 이벤트
 * - remember check 이벤트
 * - email 유효성 검사 함수
 * 
 */





/**
 * NOTE: 인풋 리멤버 체크박스 변화에 따라 로컬 스토리지를 삭제하고, 추가해주는 이벤트
 */
inputRemember.addEventListener('change', function (e) {
  // console.log("change")

  const target = e.target;
  const inputEmailValue = document.querySelector("#inputEmail").value;

  if (target.checked) {
    localStorage.remember = inputEmailValue;
  } else {
    localStorage.removeItem("remember")
  }


})

localStorage.removeItem("hello");

init();


submitForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // console.log('submit')

  const inputEmail = document.querySelector("#inputEmail")
  const inputPassword = document.querySelector("#inputPassword")

  

  const submitObject = {
    username: inputEmail.value,
    password: inputPassword.value
  }

  // console.log(submitObject);

  if(!regEmail(submitObject.username)){
    alert("Please check your E-mail")
    return;
  }

  if (!regPassword(submitObject.password)) {
    alert("Please check your Password")
    return;
  }

  const axiosConfig = {
    url : "http://localhost:3000/login",
    method : "post",
    data : {
      username : submitObject.username,
      password : submitObject.password
    }   

  }
  axios(axiosConfig).then(function(res){
    console.log(res, 'res')
    const { data } = res;
    if(data.result === 1){
      const { profile } = data;
      alert(`Welcome!! ${profile.name} 님`)
      console.log("마이 페이지로 이동")

    }else{
      alert("login failure.");
    }
  })






})
