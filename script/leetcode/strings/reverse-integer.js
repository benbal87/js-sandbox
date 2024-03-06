/**
 * @param {number} number
 * @return {number}
 */
let reverse = function(number) {
  let numberStringArray = Array.from(number.toString())

  if (number < 0) {
    const withoutMinus = numberStringArray.slice(1)
    reverseString(withoutMinus)
    numberStringArray.splice(0, numberStringArray.length)
    numberStringArray.push('-')
    numberStringArray = numberStringArray.concat(withoutMinus)
  } else {
    reverseString(numberStringArray)
  }

  return parseInt(numberStringArray.join(''))
}

function reverseString(charArray) {
  for (let i = 0; i < charArray.length / 2; i++) {
    let temp = charArray[i]
    charArray[i] = charArray[charArray.length - 1 - i]
    charArray[charArray.length - 1 - i] = temp
  }
}

console.log(reverse(-123))
