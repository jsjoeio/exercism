export function validate (n) {
  let sum = 0
  const nStr = n.toString()
  nStr.split('').forEach(digit => {
    sum += Math.pow(parseInt(digit), nStr.length)
  });
  return sum === n
}