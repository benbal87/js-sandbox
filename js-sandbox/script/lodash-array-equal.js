let _ = require('lodash');

let objArray1 = [
  {
    id: 1,
    name: 'A'
  },
  {
    id: 2,
    name: 'B',
    length: 12
  },
  {
    prop1: 1,
    prop2: 2,
    prop3: 3
  },
  {
    age: 23,
    hair: 'brown'
  }
]

let objArray2 = [
  {
    id: 1,
    name: 'A'
  },
  {
    id: 2,
    name: 'B',
    length: 12
  },
  {
    prop1: 1,
    prop2: 2,
    prop3: 3
  },
  {
    age: 23,
    hair: 'brown'
  }
]

let objArray3 = [
  {
    id: 1,
    name: 'A'
  },
  {
    id: 2,
    name: 'B',
    length: 12
  },
  {
    prop1: 1,
    prop2: 2,
    prop3: 3
  },
  {
    age: 24,
    hair: 'brown'
  }
]


let isEqual = _.isEqual(objArray1, objArray2);
console.log(isEqual)

let isEqual2 = _.isEqual(objArray1, objArray3);
console.log(isEqual2)
