export function encode (str) {
  if (str === '') return ''
  let encodedStr = ''
  let currentLetter = ''
  let currentCount = 1
  const splitStr = str.split('')
  splitStr.forEach((letter, index) => {
    if (letter === currentLetter) {
      currentCount += 1
    } else {
      encodedStr += (`${currentCount > 1 ? currentCount : ''}${currentLetter}`)
      currentCount = 1
    }
    if (index === splitStr.length - 1) {
      encodedStr += (`${currentCount > 1 ? currentCount : ''}${letter}`)
    }
    currentLetter = letter
  })

  return encodedStr
}

/*
  This is not passing because you need to loop through each letter and figure out the number before printing all of them.

*/

export function decode (str) {
  // If empty string, no decoding needed.
  if (str === '') return ''

  let decodedStr = ''
  let currentLetter = ''
  // Store as string because we may need to add more (i.e add 1 and 2 to get 12)
  let currentNumber = ''
  const splitStr = str.split('')

  // Loop through characters
  splitStr.forEach(char => {
    // Check if char can be parsed into an integer
    const parsedChar = parseInt(char)
    // If it can
    if (parsedChar) {
      // Save number
      currentNumber += char
    } else {
      // Save letter
      currentLetter = char
      // Now we have the letter and count so we can print
      if (currentNumber === '') {
        currentNumber = '1'
      }
      for (let i = 0; i < parseInt(currentNumber); i++) {
        decodedStr += currentLetter
      }
      // Then reset everything
      currentNumber = ''
      currentLetter = ''
    }
  })
  return decodedStr
}
