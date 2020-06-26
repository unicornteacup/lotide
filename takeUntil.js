
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


// take in 2 parameters
// the array and the callback
// will return a slice of the array from the beginning
// will stop when the callback returns truthy


const takeUntil = function(array, callback) {
  const output = [];
  for (element of array){
    // if 
    // if (callback === false)
    if (callback(element) === false){
      output.push(element);
    } else {
      break;
    }
  }
  return output;
}





// EXAMPLES

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//OUTPUT

[ 1, 2, 5, 7, 2 ]

[ 'I\'ve', 'been', 'to', 'Hollywood' ]

const panda = ['Hello', 'Happy', 'Pandas']
const noPanda = takeUntil(panda, x => x === 'Pandas')

eqArrays(['Hello', 'Happy', 'Pandas'], noPanda)

assertArraysEqual(panda, noPanda)