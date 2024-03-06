let nums = [4, 1, 2, 1, 2]
let uniqueElements = nums.filter((item, index, array) => array.lastIndexOf(item) === index)
console.log(uniqueElements)
