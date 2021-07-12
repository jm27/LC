function descendingOrder(n) {
  // Convert to string and Split number into array
  n = n + "";
  let arr = n.split("");
  // Sort array in descending order and join as number
  arr = arr.sort((a, b) => (Number(a) < Number(b) ? 1 : -1));
  return Number(arr.join(""));
}
