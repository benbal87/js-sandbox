/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let rotate = function(nums, k) {
  let temp
  let previous
  for (let i = 0; i < k; i++) {
    previous = nums[nums.length - 1]
    for (let j = 0; j < nums.length; j++) {
      temp = nums[j]
      nums[j] = previous
      previous = temp
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let rotate2 = function(nums, k) {
  let previous
  for (let i = 0; i < k; i++) {
    previous = nums[nums.length - 1]
    for (let j = 0; j < nums.length; j++) {
      nums[j] = nums[j] + previous
      previous = nums[j] - previous
      nums[j] = nums[j] - previous
    }
  }
}

const nums = [1, 2, 3, 4, 5, 6, 7]
const k = 3
rotate(nums, k)
console.log('nums modified: ', nums)
// should be [5, 6, 7, 1, 2, 3, 4]
