/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  // Create array to save morse code
  let array = [];
  // Convert words to morse
  const toMorse = (char) => {
    const morse = [
      ".-",
      "-...",
      "-.-.",
      "-..",
      ".",
      "..-.",
      "--.",
      "....",
      "..",
      ".---",
      "-.-",
      ".-..",
      "--",
      "-.",
      "---",
      ".--.",
      "--.-",
      ".-.",
      "...",
      "-",
      "..-",
      "...-",
      ".--",
      "-..-",
      "-.--",
      "--..",
    ];
    return morse[char.charCodeAt(0) - 97];
  };

  // Loop trough words
  for (let i = 0; i < words.length; i++) {
    let code = "";
    words[i].split("").forEach((value) => {
      code += toMorse(value);
    });
    if (array.includes(code) === false) array.push(code);
  }
  return array.length;
};

/**
 * Runtime: 76 ms, faster than 94.60% of JavaScript online submissions for Unique Morse Code Words.
 * Memory Usage: 40 MB, less than 53.29% of JavaScript online submissions for Unique Morse Code Words
 */
