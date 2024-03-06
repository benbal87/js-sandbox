/**
 * @param {number[]} nums
 * @return {boolean}
 **/
let containsDuplicate = function(nums) {
  let result = false
  const sortedNums = nums.sort((a, b) => a - b)
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === sortedNums[i - 1]) {
      result = true
      break
    }
  }
  return result
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate2 = function(nums) {
  let result = false
  loop: for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] === nums[i]) {
        result = true
        break loop
      }
    }
  }
  return result
}

// const nums = [1, 2, 3, 4, 5]
const nums = [1, 2, 3, 1]
// const nums = [3, 3]
const result = containsDuplicate2(nums)
console.log('result', result)
