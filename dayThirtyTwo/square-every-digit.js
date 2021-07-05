function squareDigits(num) {
  let result = num + "";
  // Get each digit and get square root
  result = result
    .split("")
    .map((num) => Number(num * num))
    .join("");
  // return concatenated result digits
  return Number(result);
}
