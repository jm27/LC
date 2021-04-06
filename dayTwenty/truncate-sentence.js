/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  // Split string with space to create array,
  // Slice from first index to k, join with space
  return s.split(" ").slice(0, k).join(" ");
};

/**
 * Runtime: 76 ms, faster than 89.10% of JavaScript online submissions for Truncate Sentence.
 * Memory Usage: 38.6 MB, less than 48.34% of JavaScript online submissions for Truncate Sentence.
 */
