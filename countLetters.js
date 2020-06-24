const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(sentence) {
  sentence = sentence.toLowerCase();
  const letterCount = {};

  for (var letter of sentence) {
    if (letterCount[letter]){
      letterCount[letter] += 1;
    } else {
    letterCount[letter] = 1;
    }
  }

// Create object with key for each letter in the sentence? 
// set it to add the number for each key? 
// 
 return letterCount;
};




console.log(countLetters('Hello happy'));