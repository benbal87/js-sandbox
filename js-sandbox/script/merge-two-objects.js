var _ = require('./assets/lodash');

let testObjOne = [
  {
    id: 0,
    name: 'ZERO'
  },
  {
    id: 1,
    name: 'A'
  },
  {
    id: 2,
    name: 'B'
  }
]

let testObjTwo = [
  {
    id: 1,
    name: 'A'
  },
  {
    id: 2,
    name: 'B',
    length: 12
  }
]

let merged = _.uniqWith(testObjOne, testObjTwo, _.isEqual)

console.log(merged)
