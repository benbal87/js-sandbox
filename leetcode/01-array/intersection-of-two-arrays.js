/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersect = function(nums1, nums2) {
  let temp = []
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const obj = { id: j, element: nums2[j] }
      if (nums1[i] === nums2[j] && !temp.some(value => value.id === obj.id)) {
        temp.push(obj)
        break
      }
    }
  }
  return temp.map(value => value.element)
}

console.log('result =', intersect([3, 1, 2], [1, 1])) // [1]
console.log('result =', intersect([1, 2, 2, 1], [2])) // [2]
