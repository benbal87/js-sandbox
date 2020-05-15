/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function(digits) {
  const string = digits.join('')
  const int = BigInt(string) + 1n
  return Array.from(String(int), Number)
}

console.log('result:', plusOne([4, 3, 5, 9]))
console.log('result:', plusOne([4, 3, 2, 3]))
console.log('result:', plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))


