let loginForm = document.getElementById("login");
let registerForm = document.getElementById("register");
let loginButton = document.getElementById("login-button");
let registerButton = document.getElementById("register-button");
let users = [];
loginButton.addEventListener("click", function(){
    loginForm.style.display = "block";
    registerForm.style.display = "none";
})
registerButton.addEventListener("click", function(){
    loginForm.style.display = "none";
    registerForm.style.display = "block";
})
let regButtton = document.getElementById("register-btn");

regButtton.addEventListener("click", function(){
    let usernameInput = document.querySelector(".username").value;
    let passwordInput = document.querySelector(".password").value;
    let emailInput = document.getElementById("email").value;
    let ageInput = document.getElementById("age").value;
    users.push({
        username: usernameInput
    })
    console.log(users)
});
// vo users site inputi da bidat password i email i age 

