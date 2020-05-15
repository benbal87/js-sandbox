/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
  let results = []
  let currentMax
  let currentMin
  for (let i = prices.length - 1; i >= 0; i--) {
    const actual = prices[i]
    if (actual > currentMin) {
      results.push(currentMax - currentMin)
      currentMax = actual
      currentMin = undefined
    } else if (prices.length - 1 === i || actual > currentMax) {
      currentMax = actual
    } else if (actual < currentMax) {
      currentMin = actual
      if (i === 0) {
        results.push(currentMax - currentMin)
      }
    }
  }

  return results.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
  }, 0)
}

const prices1 = [7, 1, 5, 3, 6, 4]
let result1 = maxProfit(prices1)
console.log('result1:', result1)

const prices2 = [1, 2, 3, 4, 5]
let result2 = maxProfit(prices2)
console.log('result2:', result2)
