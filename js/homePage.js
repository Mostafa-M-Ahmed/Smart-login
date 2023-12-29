var logoutBtn = document.getElementById('logoutBtn');
var title = document.getElementById('title');
var deleteBtn = document.getElementById('deleteBtn')
var activeAccIndex;
var modalBtn = document.getElementById('modalBtn');

if (localStorage.getItem('accounts') != null)
    var accountLists = JSON.parse(localStorage.getItem('accounts'))


activeAccount();

function activeAccount() {
    for (var i = 0; i < accountLists.length; i++) {
        if (accountLists[i].loggedIn == true) {
            activeAccIndex = i;
            title.innerHTML = 'Welcome ' + accountLists[i].userName;
            break
        }
    }
}


deleteBtn.onclick = function (e) {
    e.preventDefault();
    deleteFun();
}


logoutBtn.addEventListener('click', logoutFun)
function logoutFun() {
    accountLists[activeAccIndex].loggedIn = false;
    localStorage.setItem('accounts', JSON.stringify(accountLists));
    logoutBtn.setAttribute('href', 'index.html');
}


// deleteBtn.addEventListener('click', deleteFun)
function deleteFun() {
    accountLists[activeAccIndex].loggedIn = false;
    accountLists.splice(activeAccIndex, 1);
    localStorage.setItem('accounts', JSON.stringify(accountLists));
    deleteBtn.setAttribute('href', 'index.html');
    modalBtn.click();
}