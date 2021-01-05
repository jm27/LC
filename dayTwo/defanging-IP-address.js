/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  // Save answer in variable
  let defangIP = "";
  let i = 0;
  // Loop through String
  for (i; i < address.length; i++) {
    console.log(address[i]);
    // Check each string character
    if (address[i] != ".") {
      // If character is not equal to "." add to defang IP
      defangIP += address[i];
    } // Else substitute period for "[.]"
    else {
      defangIP += "[.]";
    }
  }
  return defangIP;
};

/**
 * Runtime: 84 ms, faster than 12.92% of JavaScript online submissions for Defanging an IP Address.
 * Memory Usage: 40.5 MB, less than 15.44% of JavaScript online submissions for Defanging an IP Address.
 */
