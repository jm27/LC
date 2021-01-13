/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  // Create consisten var counter
  let consistent = 0;
  // Loop trough words and check if contains allowed words
  words.forEach((word) => {
    for (let j = 0; j < word.length; j++) {
      const char = word[j];

      if (!allowed.includes(char)) break;
      else if (j === word.length - 1) consistent++;
    }
  });
  return consistent;
};

/**
 * Runtime: 116 ms, faster than 76.59% of JavaScript online submissions for Count the Number of Consistent Strings.
 * Memory Usage: 47.7 MB, less than 89.06% of JavaScript online submissions for Count the Number of Consistent Strings.
 */
