/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  // Create decom list array
  const decomList = [];
  // Loop trough nums and get pairs
  for (let i = 0; i < nums.length; i = i + 2) {
    // Get freq and value
    let freq = nums[i];
    let value = nums[i + 1];
    console.log(freq, value);

    for (let j = 1; j <= freq; j++) {
      decomList.push(value);
    }
  }
  return decomList;
};

/**
* Runtime: 120 ms, faster than 7.04% of JavaScript online submissions for Decompress Run-Length Encoded List.
Memory Usage: 43.4 MB, less than 17.20% of JavaScript online submissions for Decompress Run-Length Encoded List.
 */
