let objArray = [
  {
    id: 0,
    name: 'A'
  },
  {
    id: 1,
    name: 'B',
  },
  {
    id: 2,
    name: 'C',
  },
  {
    id: 3,
    name: 'D',
  },
  {
    id: 4,
    name: 'E',
  },
]

let obj = {
  id: 2,
  name: 'C',
}

console.log('RESULT:', objArray.includes(obj)) // FALSE
console.log('RESULT:', objArray.some(value => value.id === obj.id)) // TRUE
