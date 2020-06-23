const assertEqual = function(head, expected) {
  if (head === expected) {
    console.log(`✅✅✅ Assertation Passed: ${head} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${head} !== ${expected}`);
  }
};

const head = function(array) {
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([7]), 5);
assertEqual(head([]), "Hello");