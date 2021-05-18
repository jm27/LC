/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  // Create empty array
  const newArr = [];
  // split sentence into array of words
  const sArr = s.split(" ");
  // Loop trough array
  for (let i = 0; i < sArr.length; i++) {
    // set by index into new array and remove last char
    newArr[sArr[i].slice(-1) - 1] = [sArr[i].slice(0, -1)];
  }
  // Join array and return
  return newArr.join(" ");
};

/**
 * Runtime: 80 ms, faster than 78.43% of JavaScript online submissions for Sorting the Sentence.
 * Memory Usage: 38.6 MB, less than 20.26% of JavaScript online submissions for Sorting the Sentence. */
