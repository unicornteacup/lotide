const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

// takes in an object and a callback
// return the 1st key for which the callback returns truthy
// if no truthy, return undefined

// loop through the object
// if callback === truthy
// break and return key

const findKey = function(object, callback){
  
  for (let key in object){
    if (callback(object[key]) === true){
      return key;
    } 
  }
};


findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"



const panda = {
  'Hello': {bear: 2},
  'Happy': {bear: 5},
  'Pandas': {bear: 7}
}

assertEqual(panda.Happy, 5)


console.log(findKey(panda, x => x.bear === 5))