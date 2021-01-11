/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  // Create counter and response variable
  let counter = 0;
  let resString = "";
  let i = 0;
  // Loop trough indices
  for (i; i < indices.length; i++) {
    // Get index of counter and add 1 to counter
    let tempIndex = indices.indexOf(counter);
    console.log(tempIndex);
    counter++;
    // Add to resString s where index is counter
    resString += s[tempIndex];
  }
  // Return resString
  return resString;
};

/**
 * Runtime: 336 ms, faster than 5.21% of JavaScript online submissions for Shuffle String.
 * Memory Usage: 47.1 MB, less than 5.04% of JavaScript online submissions for Shuffle String.
 */
