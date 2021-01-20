/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let result = 0;
  for (let i = 1; i <= arr.length; i += 2) {
    for (let j = 0; j < arr.length - i + 1; j++) {
      for (let k = 0, l = j; k < i; k++, l++) {
        result += arr[l];
      }
    }
  }
  return result;
};

/**
 * Runtime: 76 ms, faster than 95.18% of JavaScript online submissions for Sum of All Odd Length Subarrays.
 * Memory Usage: 38.9 MB, less than 51.94% of JavaScript online submissions for Sum of All Odd Length Subarrays.
 */
