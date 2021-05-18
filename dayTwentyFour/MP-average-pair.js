function averagePair(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  // Create variables for start and end
  let start = 0;
  let end = arr.length - 1;

  // Loop trough array until start and end cross
  while (start < end) {
    // Get average from the two
    let avg = (arr[start] + arr[end]) / 2;
    // compare average if equal return true
    if (avg == num) return true;
    else if (avg < num) start++;
    // if average is less than target move start one position
    else end--; // else move end one position back
  }
  return false;
}

/**
 * BigO
 * Time: O(N)
 * Space: O(1)
 */
