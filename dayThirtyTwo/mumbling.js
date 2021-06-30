function accum(s) {
  // Cerate variables for new String and String length;
  let newStr = "";
  let length = s.length;

  // Loop trough array
  for (let i = 0; i < length; i++) {
    newStr += s[i].toUpperCase();
    if (i > 0) {
      newStr += s[i].toLowerCase().repeat(i);
    }
    if (i != length - 1) newStr += "-";
  }
  return newStr;
}
