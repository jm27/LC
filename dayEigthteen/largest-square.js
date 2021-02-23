/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  const minLength = [];
  let counter = 0;
  const countOccurrences = (arr, val) =>
    arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

  rectangles.forEach((arr) => {
    let min = Math.min(...arr);
    minLength.push(min);
  });
  counter = Math.max(...minLength);
  return minLength.filter((l) => l == counter).length;
};

/*
 * Runtime: 80 ms, faster than 97.32% of JavaScript online submissions for Number Of Rectangles That Can Form The Largest Square.
 * Memory Usage: 42.6 MB, less than 23.08% of JavaScript online submissions for Number Of Rectangles That Can Form The Largest Square.
 */
