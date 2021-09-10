/**
 * @param {number} number
 * @return {number}
 */
const countPrimes = function (number) {
    let counter = 0
    for (let i = 0; i < number; i++) {
        if (isPrime(i)) {
            counter++
        }
    }

    return counter
}

/**
 * @param {number} number
 * @return {boolean}
 */
function isPrime(number) {
  if (number === 2) {
    return true
  } else if (!Number.isInteger(number) || number < 2) {
    return false
  } else {
    let sqrtNumber = Math.sqrt(number)
    for (let i = 3; i <= sqrtNumber; i++) {
      if (number % i === 0) {
        return false
      }
    }
  }

  return true
}

console.log('countPrimes', countPrimes(10))
