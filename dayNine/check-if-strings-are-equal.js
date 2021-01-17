/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  // Create variables to store strA and strB
  let strA = "";
  let strB = "";
  // Loop thtough each array and concatenate into strA and strB
  word1.forEach((word) => (strA += word));
  word2.forEach((word) => (strB += word));
  // Compare strings if equal return true
  if (strA === strB) return true;
  return false;
};

/**
 * Runtime: 108 ms, faster than 11.41% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
 * Memory Usage: 38.8 MB, less than 46.07% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
 */
