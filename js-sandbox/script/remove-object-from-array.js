let testObj0 = {
  id: 0,
  name: 'A',
  length: 111
}

let testObj1 = {
  id: 1,
  name: 'B',
  length: 222
}

let testObj2 = {
  id: 2,
  name: 'C',
  length: 333
}

let array = [ testObj0, testObj1, testObj2 ]

array.forEach((element, index) => {
  if (element.id === 1) {
    array.splice(index, 1)
  }
})
