var userEmailInput = document.getElementById('userEmail');
var userPasswordInput = document.getElementById('userPassword');
var loginBtn = document.getElementById('login');
var warningMSG = document.getElementById('warningMSG');


if (localStorage.getItem('accounts') != null)
    var accountLists = JSON.parse(localStorage.getItem('accounts'))

loginBtn.onclick = function (e) {
    e.preventDefault();
    login();
}

function login() {
    var x = false;
    for (var i = 0; i < accountLists.length; i++) {
        if (valid(i)) {
            accountLists[i].loggedIn = true;
            localStorage.setItem('accounts', JSON.stringify(accountLists));
            window.location.href="home.html";
            x = true;
            break;
            
        }
    }
    if(x == false)
    warningMSG.innerHTML = "Wrong email or password!";
}



function valid(index) {
    if (userEmailInput.value == accountLists[index].userEmail && userPasswordInput.value == accountLists[index].userPassword && accountLists[index].loggedIn == false) {
        return true
    }

}

