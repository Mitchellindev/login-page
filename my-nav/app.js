const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");


hamburger.addEventListener("click",()=>{
navLinks.classList.toggle("open"); 
});

const showPassword = document.querySelector('.showPassword');
const password = document.querySelector('#inputPassword');

showPassword.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('eye.svg');

});

const form = document.getElementById('form')
const username = document.getElementById('username');
const email = document.getElementById('email');
const inputPassword = document.getElementById('inputPassword');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const errorMessage = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

};


const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isEmailValid = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = inputPassword.value.trim();
    const password2Value =confirmPassword.value.trim();

    if (usernameValue === '') {
        setError(username, 'username is required');
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'email is required');
    } else if(!isEmailValid(emailValue)) {
        setError(email, 'provide a valid email');
    }else{
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(inputPassword, 'password is required');
    } else if(passwordValue.lenght < 8 ){
        setError(inputPassword, 'password must be at 8 character.');
    }else{
        setSuccess(inputPassword);
    }

    if (password2Value === '') {
        setError(confirmPassword, 'please confirm password');
    } else if(password2Value !== passwordValue ){
        setError(confirmPassword, 'password doesn;t match.');
    }else{
        setSuccess(confirmPassword);
    }

    
}



















// function formValidation() {
//     if (regx.test(text)) {
//         email.style.borderColor = "green";
//     } else {
//         alert("invalid email")
//     }
    

//     if (username == null || username == "") {
//         alert("name can't be blank");
//         document.getElementById(username).innerHTML = "incorrect username";
//         return false;
//     }else if( password1.length<6){
//         alert("password must be 6 character long.");
//         document.getElementById(inputPassword).innerHTML = "invalid password";
//         return false;
//     }

//     if (password1 == confirmPassword) {
//         return true;
//     } else {
//         document.getElementById(confirmPassword).innerHTML = "incorrect password";
//         return false;
//     }



    
// }













// function formValidation () {
//     if (re.test(text)) {
//         emailE1.style.borderColor = "green";
        
//       } else {
//         emailE1.style.borderColor = "red";
//         alert("use a valid email address");
//       }
    
//     if (userName.value.trim() === ""){
//         alert("input username");
//         userName.style.borderColor = "red";
//     } else if(password1.value.trim() === ""){
//         alert("input password");
//         userName.style.borderColor = "red";
//     }else if (password1.value != confirmPasswordE1){
//         alert("password are not the same");
//         userName.style.borderColor = "red";
//     }else{
//         return true;
//     }
// }

// form.addEventListener('submit', function (e) {
//         e.preventDefault();
//         if (formValidation) {

//         }
// });












