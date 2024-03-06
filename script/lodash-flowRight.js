let _ = require('lodash');

const modifyAge = (obj) => {
  obj.age *= 2
  return obj
}

const modifyName = (obj) => {
  obj.name = 'Jane Doe'
  return obj
}

const modifyGender = (obj) => {
  obj.gender = 'female'
  return obj
}

const modifyObj = _.flowRight([modifyAge, modifyName, modifyGender])

const input = { age: 12, name: 'Bob', gender: 'male' }
const result = modifyObj(input)
console.log(result)
// { age: 24, name: 'Jane Doe', gender: 'female' }
