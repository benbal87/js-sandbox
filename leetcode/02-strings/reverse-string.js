/**
 * @param {char[]} charArray
 * @return {void} Do not return anything, modify s in-place instead.
 */
let reverseString = function(charArray) {
  for (let i = 0; i < charArray.length / 2; i++) {
    let temp = charArray[i]
    charArray[i] = charArray[charArray.length - 1 - i]
    charArray[charArray.length - 1 - i] = temp
  }
}

let charArray = ['h', 'e', 'l', 'l', 'o']
reverseString(charArray)
console.log(charArray)
