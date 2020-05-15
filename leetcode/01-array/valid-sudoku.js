/**
 * @param {char[][]} board
 * @return {boolean}
 */
let isValidSudoku = function(board) {
  const boardSizeValid = isBoardSizeValid(board)

  const areRowsValid = areArraysValid(board)
  const columns = getColumns(board)
  const areColumnsValid = areArraysValid(columns)

  const subBoardList = getSubBoardList(board)
  const areSubBoardsValid = areArraysValid(subBoardList)

  return boardSizeValid && areRowsValid && areColumnsValid && areSubBoardsValid
}

/**
 * @param {char[][]} board
 * @return {boolean}
 */
function isBoardSizeValid(board) {
  let result = true

  if (board.length % 3 !== 0) {
    result = false
  } else {
    for (let i = 0; i < board; i++) {
      if (board[i].length !== board.length) {
        result = false
        break
      }
    }
  }

  return result
}

/**
 * @param {char[][]} board
 * @return {boolean}
 */
function areArraysValid(board) {
  let result = true
  for (let i = 0; i < board.length; i++) {
    let a = isArrayContainsOnlySingleElements(board[i])
    let b = isArrayContainsOnlyValidNumbers(board[i])
    if (!(a && b)) {
      result = false
      break
    }
  }
  return result
}

/**
 * @param {char[][]} board
 * @return {char[][]} subBoardList
 */
function getSubBoardList(board) {
  const subBoardSize = 3

  let subBoardList = []
  for (let i = 0; i < board.length; i += subBoardSize) {
    for (let j = 0; j < board[i].length; j += subBoardSize) {
      let subBoard = getSubBoard(board, i, j, subBoardSize)
      subBoardList.push(subBoard)
    }
  }

  return subBoardList
}

/**
 * @param {char[][]} board
 * @param {int} startIndexI
 * @param {int} startIndexJ
 * @param {int} subBoardSize
 * @return {char[]} subBoard
 */
function getSubBoard(board, startIndexI, startIndexJ, subBoardSize) {
  let subBoard = []
  for (let i = startIndexI; i <= startIndexI + subBoardSize - 1; i++) {
    for (let j = startIndexJ; j <= startIndexJ + subBoardSize - 1; j++) {
      subBoard.push(board[i][j])
    }
  }

  return subBoard
}

/**
 * @param {char[][]} board
 * @return {char[][]}
 */
function getColumns(board) {
  let columns = []
  for (let j = 0; j < board[0].length; j++) {
    let column = []
    for (let i = 0; i < board.length; i++) {
      column.push(board[i][j])
    }
    columns.push(column)
  }
  return columns
}

/**
 * @param {char[]} line
 * @return {boolean}
 */
function isArrayContainsOnlySingleElements(line) {
  let result = true
  for (let i = 0; i < line.length; i++) {
    for (let j = 0; j < i; j++) {
      if (line[j] === line[i] && line[j] !== '.') {
        result = false
        break
      }
    }
  }
  return result
}

/**
 * @param {char[]} line
 * @return {boolean}
 */
function isArrayContainsOnlyValidNumbers(line) {
  let result = true
  for (let i = 0; i < line.length; i++) {
    const actual = parseInt(line[i], 10)
    if (!isNaN(actual) && (actual < 1 || actual > 9)) {
      result = false
      break
    }
  }
  return result
}

const sudoku1 = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
]

const sudoku2 = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
]

console.log(isValidSudoku(sudoku1))
console.log(isValidSudoku(sudoku2))
