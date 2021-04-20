/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  // Sentence is less than 26 char long is false
  if (sentence.length < 26) return false;
  // Turn sentence into array
  let sentenceArr = sentence.split("");
  // Count each character
  let countData = (acc, data) => {
    acc[data] ? (acc[data] = acc[data] + 1) : (acc[data] = 1);
    return acc;
  };
  // Save object in variable
  let alphabetObj = sentenceArr.reduce(countData, {});
  // Get object count
  let objCount = Object.keys(alphabetObj).length;
  if (objCount < 26) return false;
  return true;
};

/**
 * Runtime: 84 ms, faster than 74.17% of JavaScript online submissions for Check if the Sentence Is Pangram.
 * Memory Usage: 40.2 MB, less than 16.56% of JavaScript online submissions for Check if the Sentence Is Pangram.
 */
