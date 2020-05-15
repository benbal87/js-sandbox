/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length;) {
    if (i > 0 && nums[i] === nums[i-1]) {
      nums.splice(i, 1)
    } else {
      i++
    }
  }
  console.log('nums: ', nums)
  return nums.length
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
let result = removeDuplicates(nums)
console.log(result)
