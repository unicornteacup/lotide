const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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
        console.log("here")
        console.log(object1[key], object2[key])
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

// assertEqual(ab, ba)


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
console.log(assertEqual(cd['d'], cd2['d']))