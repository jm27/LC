var countBits = function (n) {
  // Create binary and sum variables
  let binary = n.toString(2); // convert to binary using base two
  let sum = [...binary].reduce((acc, cv) => (acc = acc + Number(cv)), 0); // Add integers of binary;

  return sum;
};
