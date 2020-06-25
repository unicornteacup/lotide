const words = ["ground", "control", "to", "major", "tom"];
const testWords = ['g', 'c', 't', 'm', 't']

const map = function(array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);  

// needs to take in array and callback
// function will return a new array

const assertArraysEqual = function(array1, array2) {
  let equal;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      equal = false;
    } else {
      equal = true;
    }
  }
  if (equal === true) {
    console.log(`✅✅✅ Assertation Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${array1} !== ${array2}`);
  }
};

assertArraysEqual(testWords, results1)

const eqArrays = function(array1, array2) {
  let equal;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      equal = false;
    } else {
      equal = true;
    }
  }
  console.log(equal);
};

eqArrays(words, results1)
