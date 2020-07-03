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

init();

const config = {
  name: {
    isReg:false,
    value:""
  },
  email: {
    isReg:false,
    value:""
  },
  password: {
    isReg:false,
    value:""
  },
  gender: {
    isReg:false,
    value:""
  },
  birth: {
    isReg:false,
    value:""
  },
  terms: {
    isReg:false,
    value:""
  }
};

signUpForm.addEventListener('submit',function(e){
  e.preventDefault();
})

signUpSubmitBtn.addEventListener('click', function(e){

})



signUpName.addEventListener('blur', function(e){
  const updateBlurFormat = {
    e,
    target:config
  }
  dataUpdateBlur(updateBlurFormat);   

})

signUpEmail.addEventListener('blur', function(e){
  const updateBlurFormat = {
    e,
    target: config
  }
  dataUpdateBlur(updateBlurFormat);
  
  console.log(config)
})



function dataUpdateBlur(config){
  const {e,target:updateTarget} = config;

  const target = e.target;
  const targetValue = target.value;
  const targetName = target.name;
  if (target && targetName) {
    updateTarget[targetName].value = targetValue;
  }
  
  
}





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



  // signUpBirthYear
  // signUpBirthMonth
  // signUpBirthDay
}

