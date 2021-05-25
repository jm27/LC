function maxSubarraySum(arr, num) {
  // If array is less than num return null
  if (arr.length < num) return null;
  // Create total variable
  let total = 0;
  // add the first numbers from array until num to total
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  // Create second total
  let currentTotal = total;
  // Loop trough array starting from num
  for (let i = num; i < arr.length; i++) {
    // add to current total next int and remove prev
    currentTotal += arr[i] - arr[i - num];
    // Compare sums and get max
    total = Math.max(total, currentTotal);
  }
  return total;
}

/**
 * Time Complexity - O(N)
 * Space Complexity - O(1)
 */
