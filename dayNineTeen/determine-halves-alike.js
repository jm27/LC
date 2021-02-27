/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  // Create Vowel Array, counter a, counter b and iterator
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let i = 0;
  let counterA = 0;
  let counterB = 0;
  // Loop trough string
  for (i; i < s.length; i++) {
    if (vowels.includes(s[i]) && i < s.length / 2) counterA++;
    else if (vowels.includes(s[i]) && i >= s.length / 2) counterB++;
  }
  return counterA == counterB ? true : false;
};

/**
 * Runtime: 88 ms, faster than 45.02% of JavaScript online submissions for Determine if String Halves Are Alike.
 * Memory Usage: 39.4 MB, less than 58.93% of JavaScript online submissions for Determine if String Halves Are Alike.
 */
