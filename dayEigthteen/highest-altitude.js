/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  //Create start variable and highest altitude
  let start = 0;
  let highestAlt = 0;
  // loop trough gain
  gain.forEach((element) => {
    // Get difference
    start += element;
    if (start > highestAlt) {
      highestAlt = start;
    }
  });
  return highestAlt;
};

/*
 * Runtime: 80 ms, faster than 61.27% of JavaScript online submissions for Find the Highest Altitude.
 * Memory Usage: 38.7 MB, less than 39.62% of JavaScript online submissions for Find the Highest Altitude.
 */
