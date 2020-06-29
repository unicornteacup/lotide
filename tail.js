const assertEqual = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
    } else {
      console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
    }
  }
};


const tail = function(array) {
  return array.slice(1);
};


// Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);



// for(var i=0;i<a.length;i++) 
//    if(a[i]!=b[i]) 
//     return "False"; 
//     return "True"; 

module.exports = tail;