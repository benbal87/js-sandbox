/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function(nums) {
  for (let index = nums.length; index >= 0; index--) {
    if (nums[index] === 0) {
      nums.push(nums.splice(index, 1)[0])
    }
  }
}

// const nums = [0, 1, 0, 3, 12]
const nums = [0, 0, 1]
moveZeroes(nums)
console.log(nums)
