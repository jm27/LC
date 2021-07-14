function getCount(str) {
  var vowelsCount = 0;
  const vowelArr = ["a", "e", "i", "o", "u"]; // Create vowel array
  // split string into array and check each value if in vowel array add 1 to count
  str.split("").forEach((cv) => (vowelArr.includes(cv) ? vowelsCount++ : null));
  return vowelsCount;
}
