export function annotate (input) {
  const copiedInput = [...input]

  const board = copiedInput
    .map((row, rowIndex) => {
      const rowChars = row.split('')
      // Loop over row by character
      const length = rowChars.length
      for (let i = 0; i < length; i++) {
      // If it's a space
        if (rowChars[i] === ' ') {
          countCurrentRow(rowChars, i)
          // Check if there is a row below
          if (rowIndex !== copiedInput.length - 1) {
            // There is a row below so we can call
            countAdjacentRow(copiedInput[rowIndex + 1], rowChars, i)
          }

          // Check if there is a row above
          if (rowIndex !== 0) {
            // There is a row above so we can call
            countAdjacentRow(copiedInput[rowIndex - 1], rowChars, i)
          }
        }
      }
      return rowChars.join('')
    })
  return board
}

function countCurrentRow (row, index) {
  if (index !== 0) { // Check to make sure character exists to the left
    const charToLeft = row[index - 1]
    if (charToLeft === '*') { // If left is a mine, we need to increment
      incrementScore(row, index)
    }
  }

  if (index !== row.length - 1) {
    const charToRight = row[index + 1]
    if (charToRight === '*') { // If left is a mine, we need to increment
      incrementScore(row, index)
    }
  }
}

function countAdjacentRow (adjacentRow, currentRow, currentIndex) {
  const adjacentRowChars = adjacentRow.split('')
  // If not 0, it means we're not in the first column and can count left
  if (currentIndex !== '0') {
    // Check if it's a star
    if (adjacentRowChars[currentIndex - 1] === '*') {
      incrementScore(currentRow, currentIndex)
    }
  }
  if (adjacentRowChars[currentIndex] === '*') {
    incrementScore(currentRow, currentIndex)
  }
  // Make sure we're not at the last column
  if (currentIndex !== currentRow.length - 1) {
    if (adjacentRowChars[currentIndex + 1] === '*') {
      incrementScore(currentRow, currentIndex)
    }
  }
  adjacentRowChars.join('')
}

function incrementScore (row, index) {
  if (!parseInt(row[index])) {
    row[index] = '1'
  } else {
    // Otherwise, it's already a number so we increment
    row[index] = String(parseInt(row[index]) + 1)
  }
}
