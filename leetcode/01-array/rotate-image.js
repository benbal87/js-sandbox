/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }

  console.log('AFTER TRANSPOSE: ', matrix)
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      console.log('i =', i, ';', 'j =', j, ';', 'a =', matrix[i][j], ';', 'b =', matrix[i][matrix.length - 1 - j])
      console.log('BEFORE =', matrix)

      const temp = matrix[i][j]
      matrix[i][j] = matrix[i][matrix.length - 1 - j]
      matrix[i][matrix.length - 1 - j] = temp

      console.log('AFTER =', matrix)
    }
  }
}

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]

rotate(matrix2)
