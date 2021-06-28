function duplicateCount(text) {
  // If no length return 0 else convert string to lower case
  if (text.length === 0) {
    return 0;
  } else {
    text = text.toLowerCase();
  }
  //Create counter variable
  let counter = 0;
  // Split text into array of chars
  // Create object counting each character occurrence
  let charsObject = text.split("").reduce((acc, char) => {
    acc[char] ? (acc[char] = acc[char] + 1) : (acc[char] = 1);
    return acc;
  }, {});
  // Loop trough object and count values
  for (let value in charsObject) {
    if (charsObject[value] > 1) counter++;
  }
  // if value is greater that 1 add 1 to counter
  return counter;
}
