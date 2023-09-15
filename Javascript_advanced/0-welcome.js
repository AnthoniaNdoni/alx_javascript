function welcome(firstName, lastName) {
    // Concatenate first name and last name with a space in between
    const fullName = firstName + ' ' + lastName;
  
    // Define a function named displayFullName
    function displayFullName() {
      // Display an alert with the welcome message
      alert('Welcome ' + fullName + '!');
    }
  
    // Call the displayFullName function
    displayFullName();
  }
  
  // Call the welcome function with 'Holberton' and 'School' as arguments
  welcome('Holberton', 'School');
  
  
  
  