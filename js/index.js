document.getElementById('userForm').addEventListener('submit', function(event) {
    let formIsValid = true;
    let formSuccess = true;

    const usernamePattern = /^[a-zA-Z0-9_]{4,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    const usernameInput = document.getElementById('username').value;
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const formSuccessMessage = document.getElementById('formSuccess');

    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    formSuccessMessage.textContent = '';

    if (!usernamePattern.test(usernameInput)) {
        usernameError.textContent = "Username must be at least 4 characters and contain only letters, numbers, or underscores.";
        formIsValid = false;
    }

    if (!emailPattern.test(emailInput)) {
        emailError.textContent = "Please enter a valid email address.";
        formIsValid = false;
    }

    if (!passwordPattern.test(passwordInput)) {
        passwordError.textContent = "Password must be at least 8 characters, contain upper and lower case letters, a number, and a special character.";
        formIsValid = false;
    }

    if (formIsValid) {
        formSuccessMessage.textContent = "Form submitted successfully!";
    }

    if (!formIsValid) {
        event.preventDefault();
    }
});