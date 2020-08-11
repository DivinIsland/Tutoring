const signName = document.querySelector('#nameBox');
const signEmail = document.querySelector('#emailBox');
const signPassword = document.querySelector('#passwordBox');
const signupBtn = document.querySelector('#signupBtn');



signupBtn.addEventListener('click', () => {
    
    console.log(signName.value);
    console.log(signPassword.value);
    console.log(signEmail.value);

})