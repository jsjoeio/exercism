function calculateInteger (digits, base) {
  const length = digits.length
  let sum = 0
  let power = length - 1
  for (let i = 0; i < length; i++) {
    sum += (Math.pow(base, power) * digits[i])
    power -= 1
  }
  return sum
}

function calculateMaxPower (integer, base) {
  let copiedInt = integer
  let maxPower = 0

  for (let i = 0; copiedInt >= Math.pow(base, i); i++) {
    maxPower = i
  }
  return maxPower
}

function calculateDigits (integer, base, maxPower, digits) {
  if (maxPower === 0) {
    return [...digits, integer]
  }
  // Clone maxPower
  let copiedMaxPower = maxPower
  // Calculate digit
  const digit = Math.floor(integer / Math.pow(base, maxPower))
  // Get remainder
  const remainder = integer - (Math.pow(base, maxPower) * digit)
  // Store in copiedDigits
  const copiedDigits = [...digits, digit]
  copiedMaxPower -= 1

  if (copiedMaxPower >= 0) {
    return calculateDigits(remainder, base, copiedMaxPower, copiedDigits)
  }
  return copiedDigits
}

/**
 *
 * @param {Array.<number>} n - current number
 * @param {number} inputBase - the base used for n
 * @param {number} outputBase - the base we want to output n as
 * @returns {Array.<number>} - new number using outputBase
 */
export function convert (n, inputBase, outputBase) {
  // Check for inputBase and outputBase
  if (inputBase === undefined || !Number.isInteger(inputBase) || [0, -1].includes(Math.sign(inputBase)) || inputBase === 1) {
    throw Error('Wrong input base')
  }

  if (outputBase === undefined || !Number.isInteger(outputBase) || [0, -1].includes(Math.sign(outputBase)) || outputBase === 1) {
    throw Error('Wrong output base')
  }

  // Check for at least one number
  if (n.length === 0) {
    throw Error('Input has wrong format')
  }

  // Check for 0 at start
  if (n.length > 1 && n[0] === 0) {
    throw Error('Input has wrong format')
  }

  // Check for negative numbers
  if (n.some(int => Math.sign(int) === -1)) {
    throw Error('Input has wrong format')
  }

  // Check n is valid with inputBase
  if (n.some(int => int >= inputBase)) {
    throw Error('Input has wrong format')
  }

  const integer = calculateInteger(n, inputBase)
  const maxPower = calculateMaxPower(integer, outputBase)
  return calculateDigits(integer, outputBase, maxPower, [])
}
