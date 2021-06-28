// Array reduce method

function coffeData(coffeeArr) {
  let coffeSum = coffeeArr.reduce(
    (totalCoffees, numCoffees) => (totalCoffees += numCoffees)
  );

  return `The total bill is $${coffeSum * 1.25}`;
}

console.log(coffeData([2, 4, 6, 4.5, 2.3]));
