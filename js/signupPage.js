var userNameInput = document.getElementById('userName');
var userEmailInput = document.getElementById('userEmail');
var userPasswordInput = document.getElementById('userPassword');
var signupBtn = document.getElementById('signup');
var accountLists = [];
var modalBtn = document.getElementById('modalBtn');


if (localStorage.getItem('accounts') != null)
    var accountLists = JSON.parse(localStorage.getItem('accounts'))

signupBtn.onclick = function (e) {
    e.preventDefault();
    signup();
}


function signup() {
    if (valid()) {
        var account = {
            userName: userNameInput.value,
            userEmail: userEmailInput.value,
            userPassword: userPasswordInput.value,
            loggedIn: false
        }
        accountLists.push(account);
        localStorage.setItem('accounts', JSON.stringify(accountLists));
        modalBtn.click();
        clearForm();
    }
    // else
    //     notMatch();
}

function clearForm() {
    userNameInput.value = '';
    userEmailInput.value = '';
    userPasswordInput.value = '';
}
function valid() {
    if (userNameRegex() && userEmailRegex() && uniqueEmail() && userPassRegex()) {
        console.log("valid");
        return true
    }
}
function userNameRegex() {
    var Regex = /^\w{3,}$/
    if (Regex.test(userNameInput.value) != true) {
        userNameInput.nextElementSibling.classList.replace('d-none', 'd-block')
    }
    else
        userNameInput.nextElementSibling.classList.replace('d-block', 'd-none');
    return Regex.test(userNameInput.value)
}

function userEmailRegex() {
    var Regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (Regex.test(userEmailInput.value) != true) {
        userEmailInput.nextElementSibling.innerHTML = "Please type a valid email address!";
        userEmailInput.nextElementSibling.classList.replace('d-none', 'd-block')
    }
    else
        userEmailInput.nextElementSibling.classList.replace('d-block', 'd-none');
    return Regex.test(userEmailInput.value)
}
function uniqueEmail() {
    var x = true;
    for (var i = 0; i < accountLists.length; i++) {
        if (userEmailInput.value == accountLists[i].userEmail) {
            userEmailInput.nextElementSibling.innerHTML = "This email already exists!";
            userEmailInput.nextElementSibling.classList.replace('d-none', 'd-block')
            x = false;
            break
        }
        else{
            userEmailInput.nextElementSibling.classList.replace('d-block', 'd-none');
        }
        
            
    }
    return x
}
function userPassRegex() {
    var Regex = /^\w{6,}$/
    if (Regex.test(userPasswordInput.value) != true) {
        userPasswordInput.nextElementSibling.classList.replace('d-none', 'd-block')
    }
    else
        userPasswordInput.nextElementSibling.classList.replace('d-block', 'd-none');
    return Regex.test(userPasswordInput.value)


}
