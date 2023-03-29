const R = require('ramda')

const getCodeComplexityRatio = ({ comp_sum_array, loc_sum_array }) =>
  R.zipWith((a, b) => (
    b === 0 ? 0 : a / b
  ), comp_sum_array, loc_sum_array)

const ratio = getCodeComplexityRatio({
  comp_sum_array: [10, 20, 30, 40, 50, 60, 70, 80, 90],
  loc_sum_array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
})

console.log(ratio)
