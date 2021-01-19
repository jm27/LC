/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  // Create variables for teams and matches
  let teams = n;
  let matches = 0;
  // While loop until teams equal 1
  while (teams != 1) {
    if (teams % 2 === 0) {
      matches = teams / 2 + matches;
      teams = teams / 2;
    } else {
      matches = (teams - 1) / 2 + matches;
      teams = (teams - 1) / 2 + 1;
    }
  }

  return matches;
};

/**
 * Runtime: 76 ms, faster than 85.03% of JavaScript online submissions for Count of Matches in Tournament.
 * Memory Usage: 38.6 MB, less than 74.65% of JavaScript online submissions for Count of Matches in Tournament.
 */
