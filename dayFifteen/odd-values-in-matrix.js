/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (n, m, indices) {
  // Create counter and matrix
  let count = 0;
  let matrix = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  );
  // Iterate true indices to create matrix
  for (const [r, c] of indices) {
    // update cols
    for (let i = 0; i < n; i++) matrix[i][c]++;
    // update rows
    for (let i = 0; i < m; i++) matrix[r][i]++;
  }

  matrix.forEach((arr) =>
    arr.forEach((val) => (val % 2 !== 0 ? count++ : null))
  );

  return count;
};

/**
 * Runtime: 80 ms, faster than 91.30% of JavaScript online submissions for Cells with Odd Values in a Matrix.
 * Memory Usage: 39.7 MB, less than 72.46% of JavaScript online submissions for Cells with Odd Values in a Matrix.
 */
