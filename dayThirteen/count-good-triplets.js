/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  // Create counter variable
  let counter = 0;
  let i = 0;
  let j;
  let k;
  // Loop through array
  for (i; i < arr.length; i++) {
    for (j = i + 1; j < arr.length - 1; j++) {
      for (k = j + 1; k < arr.length; k++) {
        // Check conditions if meet add 1 to counter
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
          counter += 1;
        }
      }
    }
  }
  return counter;
};
/**
 * Runtime: 136 ms, faster than 13.75% of JavaScript online submissions for Count Good Triplets.
 * Memory Usage: 38.1 MB, less than 99.25% of JavaScript online submissions for Count Good Triplets.
 */
