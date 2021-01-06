/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  // Save result in string variable
  let goalParser = "";
  let i = 0;
  // Loop trough String
  for (i; i < command.length; i++) {
    if (command[i] == "G") {
      goalParser += "G";
    } else if (
      command[i] == "(" &&
      command[i + 1] == ")" &&
      i != command.length
    ) {
      goalParser += "o";
    } else if (
      command[i] == "(" &&
      command[i + 1] == "a" &&
      i != command.length
    ) {
      goalParser += "al";
    }
  }
  return goalParser;
};

/**
 * Runtime: 80 ms, faster than 59.91% of JavaScript online submissions for Goal Parser Interpretation.
 * Memory Usage: 38.5 MB, less than 80.63% of JavaScript online submissions for Goal Parser Interpretation.
 */
