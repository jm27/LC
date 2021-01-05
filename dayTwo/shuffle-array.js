/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  // Save result in Array
  let shuffleArray = [];
  let i = 0;
  // copy n value
  let copyN = n;
  // Loop trough nums stop at n length
  for (i; i < copyN; i++) {
    // Push first nums to shuffle array
    shuffleArray.push(nums[i]);
    // Push n num to shuffle array
    shuffleArray.push(nums[n]);
    // Add 1 to n
    n = n + 1;
  }
  // return Shuffle array
  return shuffleArray;
};

/**  Runtime: 88 ms, faster than 68.80% of JavaScript online submissions for Shuffle the Array.
 * Memory Usage: 40.2 MB, less than 86.24% of JavaScript online submissions for Shuffle the Array.
 */
