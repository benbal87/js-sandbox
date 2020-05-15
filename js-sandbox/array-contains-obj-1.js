const _ = require('./assets/lodash');

let objArray = [
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

let obj1 = {
  age: 23,
  hair: 'brown'
}
let isExist1 = objArray.some(element => _.isEqual(element, obj1))
console.log(isExist1)


let obj2 = {
  age: 23,
  hair: 'brownn'
}
let isExist2 = objArray.some(element => _.isEqual(element, obj2))
console.log(isExist2)

console.log([].some(e => e.age === 12))
console.log('findIndex1', objArray.findIndex(e => e.id === 2))
console.log('findIndex2', objArray.findIndex(e => e.id === 12131))
