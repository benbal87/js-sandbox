var _ = require('./assets/lodash');

let testObjOne = [
  {
    id: 2,
    name: 'B',
    length: 12
  },
  {
    id: 1,
    name: 'A'
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


/*
let difference = _.differenceBy(testObjOne, testObjTwo, 'id')
*/
console.log(testObjOne.sort().toString() === testObjTwo.sort().toString())
