const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')

//return the middle element(s)
//return an array
//if array is less than 2, return empty
// if odd no. in array, middle should be 1 value

const middle = function(array) {
  const middle = [];
  const index = [];
  if (array.length <2) {
    return [];
  }
  if (array.length % 2 === 0) {
    index.push(array.length/2 -1, array.length/2); 
  } else {
    index.push(Math.floor(array.length /2));
  }
  
  for (i=0; i < index.length; i++) {
    middle.push(array[index[i]])
  }
  console.log(middle);
};

module.exports = middle;