function iqTest(numbers) {
  // Create two objects Odd anf even
  const odd = {
    counter: 0,
    position: 0,
  };
  const even = {
    counter: 0,
    position: 0,
  };
  // Split numbers into array
  numbers.split(" ").forEach((num, index) => {
    if (Number(num) % 2 === 0) {
      even.counter++;
      even.position = index + 1;
    } else {
      odd.counter++;
      odd.position = index + 1;
    }
  });

  return odd.counter > even.counter ? even.position : odd.position;
}
