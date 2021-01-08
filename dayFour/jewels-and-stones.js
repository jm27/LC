/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  // Create counter var
  let counter = 0;
  let i = 0;
  // Loop trough jewels
  for (i; i < jewels.length; i++) {
    //Loop trough stones to compare each jewel
    for (let j = 0; j < stones.length; j++) {
      if (jewels[i] == stones[j]) {
        counter++;
      }
    }
  }
  return counter;
};

/**
 * Runtime: 96 ms, faster than 17.84% of JavaScript online submissions for Jewels and Stones.
 * Memory Usage: 38.9 MB, less than 65.36% of JavaScript online submissions for Jewels and Stones.
 */
