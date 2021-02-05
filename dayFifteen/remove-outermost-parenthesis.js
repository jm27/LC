/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  // Create result variable
  let counter = 0;
  let val = "";
  for (let i = 0; i <= S.length; i++) {
    counter = S[i] === ")" ? --counter : counter;
    val = counter > 0 ? (val += S[i]) : val;
    counter = S[i] === "(" ? ++counter : counter;
  }
  return val;
};

/**
 * Runtime: 88 ms, faster than 44.26% of JavaScript online submissions for Remove Outermost Parentheses.
 * Memory Usage: 41.3 MB, less than 17.65% of JavaScript online submissions for Remove Outermost Parentheses.
 */
