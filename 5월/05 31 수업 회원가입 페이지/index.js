const signUpName = document.querySelector('#signUpName');
const signUpEmail = document.querySelector('#signUpEmail');
const signUpPassword = document.querySelector('#signUpPassword');
const signUpRePassword = document.querySelector('#signUpRePassword');
const signUpGenderMale = document.querySelector('#signUpGenderMale');
const signUpGenderFemale = document.querySelector('#signUpGenderFemale');
const signUpBirthYear = document.querySelector('#signUpBirthYear');
const signUpBirthMonth = document.querySelector('#signUpBirthMonth');
const signUpBirthDay = document.querySelector('#signUpBirthDay');
const signUpTermsAgree = document.querySelector('#signUpTermsAgree');
const signUpSubmitBtn = document.querySelector('#signUpSubmitBtn');
const signUpForm = document.querySelector('#signUpForm');



const config = {
  name: {
    isReg: false,
    value: ""
  },
  email: {
    isReg: false,
    value: ""
  },
  password: {
    isReg: false,
    value: ""
  },
  rePassword: {
    isReg: false,
    value: ""
  },
  gender: {
    isReg: false,
    value: ""
  },
  birth: {
    isReg: false,
    value: ""
  },
  terms: {
    isReg: false,
    value: ""
  },
  getValue(name) {
    return this[name].value;
  }
};


init();

signUpForm.addEventListener('submit', function (e) {
  e.preventDefault();
})

signUpSubmitBtn.addEventListener('click', function (e) {
  // console.log(config);

  /**
   * NOTE:
   * name : 1글자 이상
   * email : 이메일 정규식
   * password : 패스워드 정규식
   * repassword : 패스워드와 일치
   * birth : 1990년도 이후 출생자
   * terms : 체크 필수
   * 
   */

  // regName
  // regEmail
  // regPassword
  // regBirth
  // regTerms
  // isEqual

  const getValue = (name) => config.getValue(name);
  const isSuccess = [];
  const isFailure = [];

  if (regName(getValue("name"))) {
    isSuccess.push("name")
  }else{
    isFailure.push("name")
  }

  if (regEmail(getValue("email"))) {
    isSuccess.push("email")
  }else{
    isFailure.push("email")
  }

  if (regPassword(getValue("password"))) {
    isSuccess.push("password")
  }else{
    isFailure.push("password")
  }

  if (regBirth(getValue("birth"))) {
    isSuccess.push("birth")
  }else{
    isFailure.push("birth")
  }

  if (regTerms(getValue("terms"))) {
    isSuccess.push("terms")
  }else{
    isFailure.push("terms")
  }

  if (isEqual(getValue("password"), getValue("rePassword"))) {
    isSuccess.push("rePassword")
  }else{
    isFailure.push("rePassword")
  }

  if (hasValue(getValue("gender"))) {
    isSuccess.push("gender")
  }else{
    isFailure.push("gender")
  }

  console.log(isSuccess)
  console.log(config)
  



  

  

  isSuccess.forEach((item) => {
    config[item].isReg = true;
  });
  isFailure.forEach((item) => {
    config[item].isReg = false;
  });

  console.log(isFailure)

  const rowDataNameElemList = document.querySelectorAll('.signup_info.failure');
  Array.from(rowDataNameElemList).forEach(item => {

    const getAttrDataName = item.getAttribute("data-name");

    if (isFailure._includes(getAttrDataName)) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }

  })






// NOTE: submit하는 부분
  if (isFailure.length !== 0) {
    console.log("please check the value.")
  }else{
    const submitFormat = {
      email : config.email.value
    };
    
    console.log(submitFormat, 'submitFormat')
  }

})



signUpForm.addEventListener('change', function (e) {
  // console.log(e.target);
  const target = e.target;
  const targetName = target.name;
  const blurList = ["name", "email", 'password', 'rePassword'];


  if (blurList._includes(targetName)) {
    dataUpdateBlur({ e, target: config });
  }

  if (targetName._strInclude("gender")) {
    config[targetName].value = target.value;
  }

  if (targetName._strInclude("birth")) {
    // console.log(targetName, "birth");
    //NOTE: 2012-12-12

    const birthList = [
      zeronum(signUpBirthYear.value),
      zeronum(signUpBirthMonth.value),
      zeronum(signUpBirthDay.value)
    ];
    const birthMerge = birthList.join('-');
    config["birth"].value = birthMerge;

    // console.log(birthMerge);

  }

  if (targetName._strInclude("terms")) {
    // console.log(targetName, 'ttee');
    config["terms"].value = target.checked;
  }
})





function init() {
  const { birthConfig } = response;

  const makeYearFormat = {
    target: signUpBirthYear,
    list: birthConfig.yearList
  }

  const makeMonthFormat = {
    target: signUpBirthMonth,
    list: birthConfig.monthList
  }

  const makeDayFormat = {
    target: signUpBirthDay,
    list: birthConfig.dayList
  }

  makeDateOptions(makeYearFormat);
  makeDateOptions(makeMonthFormat);
  makeDateOptions(makeDayFormat);

  const findCheckedRadioInput = Array.from(signUpForm.gender).find(item => item.checked)

  if (findCheckedRadioInput) {
    config.gender.value = findCheckedRadioInput.value;
  }



  // signUpBirthYear
  // signUpBirthMonth
  // signUpBirthDay
}




// signUpName.addEventListener('blur', (e) =>  
//   dataUpdateBlur({e,target : config})
// )

// signUpEmail.addEventListener('blur', (e) =>
//   dataUpdateBlur({ e, target: config })
// )

// signUpPassword.addEventListener('blur', (e) =>
//   dataUpdateBlur({ e, target: config })
// )

// signUpRePassword.addEventListener('blur', (e) =>
//   dataUpdateBlur({ e, target: config })
// )