/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  let flipImage = [];
  let newA = [];
  let value = 0;
  // Loop trough array
  A.forEach((arr) => {
    // Reverse array
    let rArr = arr.reverse();
    rArr.forEach((cv) => {
      if (cv == 0) value = 1;
      else if (cv == 1) value = 0;
      // Push value to array
      newA.push(value);
    });
    // push array to array
    flipImage.push(newA);
    // empty array
    newA = [];
  });
  return flipImage;
};

/**
 * Runtime: 92 ms, faster than 37.98% of JavaScript online submissions for Flipping an Image.
 * Memory Usage: 39.9 MB, less than 96.52% of JavaScript online submissions for Flipping an Image.
 */
