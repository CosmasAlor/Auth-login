var userName = document.getElementById("exampleInputName"); 
var emailInput = document.getElementById("exampleInputEmail1");
var passwordInput = document.getElementById("exampleInputPassword1");
var logout = document.getElementById("logout");

document.getElementById("signIn").addEventListener("click", function() {
    signIn();
});



var logs = JSON.parse(localStorage.getItem('logs')) || [];

function signIn() {
    var data = {
        name : userName.value,
        mail : emailInput.value,
        password: passwordInput.value,
    };

   
    // Check if the email already exists in the logs array
    var emailExists = logs.some(function(log) {
        return log.mail === emailInput.value;
    });

    if (emailExists) {
        console.log("Email already exists");
    } else {
        // Add the new data to logs
        logs.push(data);
        // Save the updated logs to localStorage
        localStorage.setItem('logs', JSON.stringify(logs));
        console.log("Signed in successfully");
        
        window.location.href = 'index.html';
        
        return; // Exit the function after redirecting
    }
}


function validateInput(element, regex) {
    if (regex.test(element.value)) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        element.nextElementSibling.classList.add('d-none');
    } else {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
        element.nextElementSibling.classList.remove('d-none');
    }
}

function validateUserName(element) {
    validateInput(element, /^[A-Z][a-zA-Z]{0,9}(?: [a-zA-Z]*)?$/);
}

function validateEmail(element) {
    validateInput(element, /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
}

function validatePassword(element) {
    validateInput(element, /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/);
}



