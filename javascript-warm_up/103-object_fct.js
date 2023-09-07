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

  // Create and print the objects
let obj1 = createObject(12);
let obj2 = createObject(13, () => increment(obj2));
let obj3 = createObject(14, () => increment(obj3));
let obj4 = createObject(15, () => increment(obj4));

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);
