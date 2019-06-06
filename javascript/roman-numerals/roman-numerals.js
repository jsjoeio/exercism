export function toRoman (number) {
  const thousandsCount = Math.floor(number / 1000) > 0 ? Math.floor(number / 1000) : 0
  const fiveHundredsCount = number - (1000 * thousandsCount) < 900 ? Math.floor((number - (1000 * thousandsCount)) / 500) : 0
  const hundredsCount = Math.floor((number - (1000 * thousandsCount) - (500 * fiveHundredsCount)) / 100) > 0 ? Math.floor(number / 100) : 0
  const fiftiesCount = number - (1000 * thousandsCount) - (500 * fiveHundredsCount) - (100 * hundredsCount) < 90 ? Math.floor((number - (1000 * thousandsCount) - (500 * fiveHundredsCount) - (100 * hundredsCount)) / 50) : 0
  const tensCount = Math.floor((number - (fiftiesCount * 50) - (hundredsCount * 100) - (500 * fiveHundredsCount) - (thousandsCount * 1000)) / 10)
  const isNinetyNum = tensCount === 9
  const isFortyNum = tensCount === 4
  const isFourHundred = hundredsCount === 4
  const isNineHundred = hundredsCount === 9
  const onesCount = number - (10 * tensCount) - (50 * fiftiesCount) - (100 * hundredsCount) - (500 * fiveHundredsCount) - (1000 * thousandsCount)
  let convertedNum = ''

  if (thousandsCount > 0) {
    for (let i = 0; i < thousandsCount; i++) {
      convertedNum += 'M'
    }
  }

  if (fiveHundredsCount > 0) {
    for (let i = 0; i < fiveHundredsCount; i++) {
      convertedNum += 'D'
    }
  }

  if (isNineHundred) {
    convertedNum += 'CM'
  }

  if (isFourHundred) {
    convertedNum += 'CD'
  }

  if (hundredsCount > 0 && !isFourHundred && !isNineHundred) {
    for (let i = 0; i < hundredsCount; i++) {
      convertedNum += 'C'
    }
  }

  if (fiftiesCount > 0 && !isNinetyNum) {
    for (let i = 0; i < fiftiesCount; i++) {
      convertedNum += 'L'
    }
  }

  if (tensCount > 0 && !isFortyNum && !isNinetyNum) {
    for (let i = 0; i < tensCount; i++) {
      convertedNum += 'X'
    }
  }

  if (!isFortyNum && isNinetyNum) {
    convertedNum += 'XC'
  }

  if (isFortyNum && !isNinetyNum) {
    convertedNum += 'XL'
  }
  if (onesCount <= 3) {
    for (let i = 0; i < onesCount; i++) {
      convertedNum += 'I'
    }
  }

  if (onesCount < 9 && onesCount >= 5) {
    convertedNum += 'V'
    for (let i = 5; i < onesCount; i++) {
      convertedNum += 'I'
    }
  }

  if (onesCount === 9) convertedNum += 'IX'
  if (onesCount === 4) convertedNum += 'IV'
  return convertedNum
}
