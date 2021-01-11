/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  // Save response in array and create counter
  let resArray = [];
  let counter = 0;
  let i = 0;
  // Loop through array
  for (i; i < nums.length; i++) {
    // Inner loop to compare all nums
    for (j = 0; j < nums.length; j++) {
      // Compare each number
      if (nums[i] != nums[j] && nums[j] < nums[i]) {
        counter++;
      }
    }
    // Push to array
    resArray.push(counter);
    // Reset counter
    counter = 0;
  }
  return resArray;
};

/**
 * Runtime: 156 ms, faster than 5.43% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
 * Memory Usage: 40.1 MB, less than 84.52% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
 */
