let testObj = {
  age: 33,
  name: 'Joleen',
  hair: 'brown'
}

Object.keys(testObj).forEach((key, index) => {
  if (key === 'name') {
    testObj[key] = 'Jolene'
  }
})

console.log('testObj.name', testObj.name)
