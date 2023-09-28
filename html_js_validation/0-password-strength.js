// function to validate the password
function validatePassword() {
    // Retrieve the password input element
    const passwordInput = document.getElementById("password");
    // Retrieve the error message element
    const errorElement = document.getElementById("error");

    // Reqular expressions for password criteria
    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[!@#$%^&*]/;

    const password = passwordInput.value;

    // check each criteria
    if (
        lengthRegex.test(password) &&
        uppercaseRegex.test(password) &&
        lowercaseRegex.test(password) &&
        digitRegex.test(password) &&
        specialCharRegex.test(password)
    ) {
        // password meets all criteria,clear error massage
        errorElement.textContent = "";
        errorElement.style.display = "none";

        // Allow from submission
        return true;
    } else {
       // Password does not meet the criteria, display error message
       errorElement.textContent =
       "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.";
   errorElement.style.display = "block";

   // Prevent form submission
   return false;
}
}
    // Add an event listener to the from to call validatePassword on from submission
    document.getElementById("password").addEventListener("submit", function (event) {
        if (!validatePassword()) {
            // if validation fails, prevent the form from submitting
            event.preventDefault();

        }
}); 