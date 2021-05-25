/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  // Create Origins and destinations array
  const origins = [];
  const destinations = [];
  let result = "";
  // Loop trough array of arrays
  for (let i = 0; i < paths.length; i++) {
    // push to origins and destinations
    origins.push(paths[i][0]);
    destinations.push(paths[i][1]);
  }
  // loop trough destinations
  for (let j = 0; j < destinations.length; j++) {
    // if no match add to result
    if (!origins.includes(destinations[j])) result += destinations[j];
  }
  return result;
};

/**
 * Runtime: 76 ms, faster than 96.34% of JavaScript online submissions for Destination City.
 * Memory Usage: 39.9 MB, less than 85.59% of JavaScript online submissions for Destination City.
 */
