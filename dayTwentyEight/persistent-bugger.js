function persistence(num) {
  // Create variable for counter and product
  let counter = 0;

  while (num >= 10) {
    counter++; // Increment counter
    // Split num into array and use reduce to get product
    num = [...num.toString()].reduce((accumulator, d) => accumulator * d, 1);
  }

  return counter;
}
