
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
}
