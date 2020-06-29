const middle = require('../middle')
const assert = require('chai').assert;

// middle([1, 7, 14, 4]) // => [2, 3]
// middle([1, 2, 49, 17, 12, 6]) // => [3, 4]
// middle([1, 2, 3, 4, 5])

describe("#middle", () => {
  it("returns 7, 14 for [1, 7, 14, 4]", () => {
    assert.deepEqual(middle([1, 7, 14, 4]), [7, 14]);
  });

  it("returns 49, 17 for [1, 2, 49, 17, 12, 6]", () => {
    assert.deepEqual(middle([1, 2, 49, 17, 12, 6]), [49, 17]);
  });

  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

});