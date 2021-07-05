function isIsogram(str) {
  // Create flag boolean
  let flag = true;
  // Count letters if any letter is more than 1 return false
  const countLetters = (acc, cv) => {
    acc[cv] ? (flag = false) : (acc[cv] = 1);
    return acc;
  };
  str.toLowerCase().split("").reduce(countLetters, {});

  return flag;
}
