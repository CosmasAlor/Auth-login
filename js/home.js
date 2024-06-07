function logout() {
  
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('loggedInUser');
    
    window.location.href = 'index.html';
}

document.getElementById("logout").addEventListener("click", function() {
    logout();
});

if (localStorage.getItem('loggedIn') === 'true') {
    var loggedInUser = localStorage.getItem('loggedInUser');
    document.getElementById("user").textContent = "Welcome " + loggedInUser;
    console.log("Logged in user:", loggedInUser);
} else {
    window.location.href = 'index.html';
}