/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
  let result
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      result = nums[i]
      break
    }
  }
  return result
}

let nums = [4, 1, 2, 1, 2]
const result = singleNumber(nums)
console.log('result', result)
