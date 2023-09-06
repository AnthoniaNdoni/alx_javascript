// Define a global object to store functions
if (typeof globalFunctions === 'undefined') {
    globalFunctions = {};
  }
  
  /**
   * A function that executes another function 'x' times.
   * @param {number} x - The number of times to execute the function.
   * @param {function} theFunction - The function to be executed.
   */
  globalFunctions.callMeXTimes = function(x, theFunction) {
    for (let i = 0; i < x; i++) {
      theFunction();
    }
  };