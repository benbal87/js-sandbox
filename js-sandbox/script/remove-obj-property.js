let testObj = {
  id: 2,
  name: 'B',
  length: 12
}

let testObj1 = {
  id: 2,
  name: 'B',
  length: 12
}

let testObj2 = {
  id: 2,
  name: 'B',
  length: 12
}

testObj

delete testObj['length']

testObj

let array = [ testObj, testObj1, testObj2 ]

array

delete testObj['name']
delete testObj['id']

array
