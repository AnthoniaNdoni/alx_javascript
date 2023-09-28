// Function to vaildate the email format
function vaildateEmail() {
   // Retrieve the email input
   const emailInput = document.getElementById("email");
   // Retrieve the error message element
   const errorElement = document.getElementById("error");

   const email = emailInput.value;

   // Regular expression for email format validation
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

   // Check if the email matches the format
   if (emailRegex.test(email)) {
    // Email format is correct, clear error message
    errorElement.textContent = "";
    errorElement.style.display = "none";

    // Allow form submission
    return true;
} else {
    // Email format is incorrect, display error message
    errorElement.textContent = "Please enter a valid email address.";
    errorElement.style.display = "block";

    //Prevent from submission
    return false;
    }
}
// Add an event listener to the form to call validateEmail on from submission
document.getElementById("emailForm").addEventListener("submit", function (event) {
    if (!validateEmail()) {
        // If validation fails, prevent the form from submitting
        event.preventDefault();
    }
});