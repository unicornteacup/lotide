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


middle([1, 7, 14, 4]) // => [2, 3]
middle([1, 2, 49, 17, 12, 6]) // => [3, 4]
middle([1, 2, 3, 4, 5])