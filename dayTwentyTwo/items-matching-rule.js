/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  // Get ruleKey index
  let ruleKeyIndex = 0;
  if (ruleKey == "color") ruleKeyIndex = 1;
  if (ruleKey == "name") ruleKeyIndex = 2;
  // Create counter
  let counter = 0;
  // Loop trough Array
  for (let i = 0; i < items.length; i++) {
    // Check if items value matches rule value
    if (items[i][ruleKeyIndex] == ruleValue) counter++;
  }
  return counter;
};

/**
 * Runtime: 84 ms, faster than 94.66% of JavaScript online submissions for Count Items Matching a Rule.
 * Memory Usage: 42.7 MB, less than 44.08% of JavaScript online submissions for Count Items Matching a Rule.
 */
