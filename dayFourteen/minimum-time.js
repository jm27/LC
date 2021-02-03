/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  // Create counter
  let seconds = 0;
  let i = 0;
  // Create difference variable for x and y
  let diffX;
  let diffY;
  // Loop trough array
  for (i; i < points.length - 1; i++) {
    // Get absolute value of both points X and Y
    diffX = Math.abs(points[i][0] - points[i + 1][0]);
    diffY = Math.abs(points[i][1] - points[i + 1][1]);
    // Get the biggest number
    seconds += Math.max(diffX, diffY);
  }
  return seconds;
};

/**
 * Runtime: 84 ms, faster than 65.83% of JavaScript online submissions for Minimum Time Visiting All Points.
 * Memory Usage: 39.9 MB, less than 85.83% of JavaScript online submissions for Minimum Time Visiting All Points.
 */
