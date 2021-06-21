function spinWords(string) {
  // If string is less than 5 return string
  if (string.length < 5) return string;
  // Split string nto array of words
  let wordsArr = string.split(" ");
  // For each word if word is more than 5 letter reverse word
  let spinArr = wordsArr.map((word) =>
    word.length >= 5 ? word.split("").reverse().join("") : word
  );

  return spinArr.join(" ");
}
