/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

let twoSum2 = function(nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.get(complement)) {
      return [map.get(complement), i]
    } else {
      map.set(nums[i], i)
    }
  }
}

console.log(twoSum2([3, 2, 4], 6))
console.log(twoSum2([0, 4, 3, 0], 0))
console.log(twoSum2([-1, -2, -3, -4, -5], -8))
