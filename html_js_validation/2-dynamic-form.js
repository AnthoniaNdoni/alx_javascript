//Function to generate dynamic input fields
function generateInputFields(numField) {
    const inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; // this clears previous fields

    for (let i = 1; i <= numFields; i++) {
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.name = "field" + i;
        inputField.placeholder = "Field" + i;
        inputContainer.appendChild(inputField);
    }
}
// Function to validate the form before submission
function validateForm(event) {
    const numFields = parseInt(document.getElementById("numFields").value, 10);
    const inputContainer = document.getElementById("inputContainer");
    const inputFields = inputContainer.getElementsByTagName("input");

// Check if any dynamically generated field is empty
for (let i = 0; i < numFields; i++) {
    if (inputFields[i].value.trim() === "") {
      alert("Please fill in all fields.");
      event.preventDefault(); // To Prevent form submission
      return;
    }
  }
}

// Add an event listner to the form to call generationInInputFields when the dropdown value changes
document.getElementById("numFields").addEventListener("change", function () {
    const numFields = parseInt(this.value, 10);
    generateInputFields(mumFields);
});
// Add an event listener to the form to call validateForm on form submission
document.getElementById("dynamicForm").addEventListener("submit", validateForm);

// Initial form generation based on the default selected value
generateInputFields(parseInt(document.getElementById("numField").value, 10));