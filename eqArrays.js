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

module.exports = eqArrays;




