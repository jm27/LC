function nbYear(p0, percent, aug, p) {
  // Create variables for years and percentage
  let years = 0;
  let percentage = percent / 100;

  while (p0 < p) {
    years++; // Increment years
    // Population is equal to population plus percentage increase plus new habitants;
    p0 = p0 + p0 * percentage + aug;
  }

  return years;
}
