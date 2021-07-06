function XO(str) {
  // Create counter variable for x's and o's
  let xCount = 0;
  let oCount = 0;
  // Convert string to loweCase.
  str = str.toLowerCase();
  // Iterate trough string
  for (let i = 0; i < str.length; i++) {
    // Count X's and O's.
    if (str[i] === "x") xCount++;
    if (str[i] === "o") oCount++;
  }
  return xCount === oCount;
}
