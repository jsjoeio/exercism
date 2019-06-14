
export const compute = (strandA, strandB) => {

  // Check left strand
  if (strandA === '' && strandB !== '' || strandA !== '' && strandB === '') {
    throw new Error(`${strandA === '' ? 'left' : 'right'} strand must not be empty`)
  }

  // Check for equal length
  if (strandA.length !== strandB.length) {
    throw new Error('left and right strands must be of equal length')
  }

  const LENGTH = strandA.length
  let distance = 0

  // Count distance
  for (let i = 0; i < LENGTH; i++) {
    if (strandA[i] !== strandB[i]) distance += 1
  }

  return distance
};
