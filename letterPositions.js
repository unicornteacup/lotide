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

const letterPositions = function(sentence) {
  sentence = sentence.replace(/\s/g,'').toLowerCase();
  const results = {};
  for (i = 0; i< sentence.length; i++) {
    let letter = sentence[i]
    if (results[letter]){
      results[letter].push(i)
    } else {
      results[letter] = [];
      results[letter].push(i)
    }
  }

  return results;
};

console.log(letterPositions('Hello happy'));
console.log(letterPositions('lighthouse in the house'));
assertArraysEqual(letterPositions("hello").e, [1]);



// // Create object with key for each letter in the sentence? 
// // set it to add the number for each key? 
// // 
//  return letterCount;
// };