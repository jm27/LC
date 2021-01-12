/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  // Save response in variable
  let sum = 0;
  let product = 1;
  let differencce = 0;
  // Loop  until n = 0
  while (n != 0) {
    // get first digit using modulo
    let digit = n % 10;
    // add to sum
    sum = digit + sum;
    // multiply to product
    product = digit * product;
    // remove digit from n
    n = Math.floor(n / 10);
  }
  // get difference
  return (difference = product - sum);
};

/**
 * Runtime: 80 ms, faster than 56.79% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
 * Memory Usage: 38.4 MB, less than 83.50% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
 */
