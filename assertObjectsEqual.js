const eqArrays = function(array1, array2) {
  let equal;
  if (array1.length !== array2.length){
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      equal = false;
    } else {
      equal = true;
    }
  }
  return equal;
};

const eqObjects = function(object1, object2) {
  const obj1 = Object.keys(object1);
  const obj2 = Object.keys(object2);
  if (obj1.length === obj2.length) {
    for (let key of obj1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
        const result = eqArrays(object1[key], object2[key]) 
        if (result === false){
          return false;
        }
      } else if (object1[key] !== object2[key]){
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  


  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertation Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }


  // Implement me!
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true

const cd = { a: "14", b: "2" };
const ef = { b: "2", a: "1" };
console.log(assertObjectsEqual(cd, ef)); // => true