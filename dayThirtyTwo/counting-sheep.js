function countSheeps(arrayOfSheep) {
  // Create counter variable
  let counter = 0;
  // Loop trough array
  // if val == true increment counter
  arrayOfSheep.forEach((val) => (val === true ? counter++ : null));
  return counter;
}
