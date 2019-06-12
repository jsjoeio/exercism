
// first argument is our number
// second is the current base (2, 10, 16, etc.)

// What base it's in
// second is the base you convert it to.

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

  /*
    TODO
    2. figure out how to solve it.
  */
  const output = []
  const length = n.length
  // Start with a loop and count backwards
  for (let i = length - 1; i >= 0; i--) {
    // const result = Math.pow(inputBase, i) - Math.pow(outputBase, 1)
  }
}

function getMaxPower (integer, base) {
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
  const remainder = integer % base
  // Store in copiedDigits
  const copiedDigits = [...digits, digit]
  copiedMaxPower -= 1

  if (copiedMaxPower >= 0) {
    return calculateDigits(remainder, base, copiedMaxPower, copiedDigits)
  }
  return copiedDigits
}

// Next step, testing calculate digits with a number bigger than 16.
