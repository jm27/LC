/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  // Create depth variable and counter Array
  let depth = 0;
  let stack = [];
  // Loop trough string
  for (let i = 0; i < s.length; i++) {
    // String value
    let char = s[i];
    if (char === "(") {
      stack.push(char);

      if (depth < stack.length) depth = stack.length;
    } else if (char === ")") stack.pop();
  }

  return depth;
};

/**
 * Runtime: 136 ms, faster than 5.18% of JavaScript online submissions for Maximum Nesting Depth of the Parentheses.
 * Memory Usage: 38.3 MB, less than 92.95% of JavaScript online submissions for Maximum Nesting Depth of the Parentheses.
 */
