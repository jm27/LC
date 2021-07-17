function multiTable(number) {
  // good luck
  let str = '';
  for (let i = 1; i <= 10; i++) {
    str += `${i} * ${number} = ${number * i}`
    if (i < 10) str += '\n'
  }
  return str
}
