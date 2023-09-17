// create a global variable name globalVariable with value "Welcome"
const globalVariable = "Welcome";

// Create the outer function 
function outer() {
// Alert the constant of the globalVariable
alert(globalVariable);

// Create a variable named course with value "Holberton"
const course = "Holberton";

// Create the inner function
function inner() {
 // Alert the content of globalVariable and course ( concatenated)
 alert(globalVariable + " " + course);
 
 // Create a variable named exclamation with value "!"
 const exclamation = "!";

 // Create the inception function
 function inception() {
// Alert the content of globalVariable, course, and exclamation (concatenated)
alert(globalVariable + " " + course + exclamation);
 }

 // Call the inception function
 inception();
}

// Call the inner function
inner();
}

// Call the outer function to start the chain of alerts
outer();