var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  // Create variables for iterator, flag and empty array
  let i = 1;
  let flag = iterable[0];
  let result = [flag];
  // Loop trough array
  for (i; i < iterable.length; i++) {
    // if next element is not equal to flag push to array and set to flag
    if (flag != iterable[i]) {
      flag = iterable[i];
      result.push(flag);
    }
  }
  return result;
};
