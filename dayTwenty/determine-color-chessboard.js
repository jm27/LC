/**
 * @param {string} coordinates
 * @return {boolean}
 */

var squareIsWhite = function (coordinates) {
  // Get letter to charcode
  let letterCode = coordinates.charCodeAt(0) - 96;
  // Get num
  let num = coordinates[1];
  let letterBool = false;
  let numBool = false;
  // Check if they are odd or even
  if (letterCode % 2 === 0) {
    letterBool = true;
  }
  if (num % 2 === 0) {
    numBool = true;
  }
  // if both are the same then it is black else is white
  if (numBool === letterBool) {
    return false;
  } else {
    return true;
  }
};

/**
 * Runtime: 72 ms, faster than 94.20% of JavaScript online submissions for Determine Color of a Chessboard Square.
 * Memory Usage: 38.9 MB, less than 23.19% of JavaScript online submissions for Determine Color of a Chessboard Square.
 */
