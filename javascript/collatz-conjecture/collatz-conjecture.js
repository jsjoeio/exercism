export function steps (n) {
  if (n <= 0) {
    throw Error('Only positive numbers are allowed')
  }
  let numOfSteps = 0
  let result = n
  while (result !== 1) {
    if (result % 2 === 0) {
      result = result / 2
    } else {
      result = result * 3 + 1
    }
    numOfSteps++
  }

  return numOfSteps

}
