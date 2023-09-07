// Function to create an object with type and value properties
function createObject(value, incrFunction) {
    const obj = { type: 'object', value };
    if (incrFunction) {
      obj.incr = incrFunction;
    }
    return obj;
  }
  
  // Function to increment the value property of an object
  function increment(obj) {
    return createObject(obj.value + 1, obj.incr); 
  }