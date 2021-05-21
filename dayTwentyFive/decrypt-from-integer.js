/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  // create variables for last item index and temp string , new Arr, pointer j
  const last = s.length - 1;
  let tempString = "";
  const newArr = [];
  let j = last - 1;
  // Loop trough string from right to left
  for (let i = last; i >= 0; i--) {
    // If current element is equal to #
    if (s[i] === "#") {
      // subtract 1 from j and i
      j--;
      i--;
      // add to temp string s[j] + s[i]
      tempString = s[j] + s[i];
      // convert temp string to number and get char from number
      // shift to new array
      newArr.unshift(String.fromCharCode(Number(tempString) + 96));
      // Subtract 2 from j
      j -= 2;
      // Subtract 1 from i
      i--;
      //Clear tempString
      tempString = "";
    } else {
      // convert to number and get char from number
      // shift to new array
      newArr.unshift(String.fromCharCode(Number(s[i]) + 96));
      // Subtract 1 from j
      j--;
    }
  }
  // After loop return new Array joined
  return newArr.join("");
};

/**
 * Runtime: 80 ms, faster than 56.90% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
 * Memory Usage: 38.7 MB, less than 61.28% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
 */
