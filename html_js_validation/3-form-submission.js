// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // this prevent default form subsmission behavior

    // Retrieve form field value
    const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Perform form validation
  if (!name || !email) {
    // Check if required fields are empty
    alert("Please fill in all required fields.");
  } else {
   // All validations pass, display success message
   alert("Form submitted successfully!");
   // you can also submit the form to the server here if needed
  } 
}
// Add an event listener to the form to call handleFormSubmit on form submission
document.getElementById("subitForm").addEventListener("submit", handleFormSubmit);