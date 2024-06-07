var emailInput = document.getElementById("exampleInputEmail1");
var passwordInput = document.getElementById("exampleInputPassword1");
var incorrectInput = document.getElementById("incorrect");

document.getElementById("login").addEventListener("click", function() {
    logIn();
});

function logIn() {
    var usersdata = JSON.parse(localStorage.getItem('logs')) || [];

    if (usersdata.length === 0) {
        document.getElementById("incorrect").innerText = "No users found. Please sign up.";
        document.getElementById("incorrect").classList.remove('d-none');
        return;
    }

    for (let i = 0; i < usersdata.length; i++) {
        if (emailInput.value == usersdata[i].mail && passwordInput.value == usersdata[i].password) {
            console.log("Logged in successfully");

            localStorage.setItem('loggedInUser', usersdata[i].name);

            console.log("Logged in user:", usersdata[i].name);

            localStorage.setItem('loggedIn', 'true');

            window.location.href = 'home.html';
            
            return; 
        }
    }
   
    incorrectInput.classList.remove('d-none');

}

function isLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true';
}

function getLoggedInUserName() {
    return localStorage.getItem('loggedInUser');
}
