function isSubsequence(s1, s2) {
  // Create pointer
  let j = 0;
  // loop trough second sentence
  for (let i = 0; i < s2.length; i++) {
    // Compare each character from first sentence to second sentence
    let s1Char = s1[j];
    let s2Char = s2[i];
    // if character equal move j one up
    if (s1Char === s2Char) j++;
    // else if not equal and j is less than second sentence length - 1 and i is the last char
  }
  if (j === s1.length) return true;
  return false;
}

/**
 * BigO
 * Time: O(N)
 * Space: O(1)
 */
