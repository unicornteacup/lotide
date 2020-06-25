const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  if (Object.values(object).includes(value)) {
    const keys = Object.keys(object);
    for (let key of keys) {
      if (object[key] === value) {
        return key;
      }
    }
  } else {
    return;
  }
};


// return the 1st key with the value
// if no key with value, return undefined


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
console.log(findKeyByValue(bestTVShowsByGenre, "Titanic"));
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));