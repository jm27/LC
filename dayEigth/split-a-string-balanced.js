/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  // Create variable to save counterStrs countA countB
  let counterStrs = 0;
  let countR = 0;
  let countL = 0;
  let i = 0;
  // Loop through s
  for (i; i < s.length; i++) {
    if (s[i] == "R") countR++;
    if (s[i] == "L") countL++;
    if (countR != 0 && countR == countL) counterStrs++;
  }
  return counterStrs;
};

/**
 * Runtime: 76 ms, faster than 82.24% of JavaScript online submissions for Split a String in Balanced Strings.
 * Memory Usage: 38.3 MB, less than 74.43% of JavaScript online submissions for Split a String in Balanced Strings.
 */
