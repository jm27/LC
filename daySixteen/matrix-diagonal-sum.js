/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let counter = 0;
  let sum = 0;
  let length = mat.length - 1;
  // Loop trough matrix
  mat.forEach((arr) => {
    sum += arr[length];
    if (counter != length) {
      sum += arr[counter];
    }
    counter++;
    length--;
  });
  return sum;
};

/**
 * Runtime: 68 ms, faster than 99.66% of JavaScript online submissions for Matrix Diagonal Sum.
 * Memory Usage: 40.2 MB, less than 93.86% of JavaScript online submissions for Matrix Diagonal Sum.
 */
