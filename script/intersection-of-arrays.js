const array1 = ['Lorem', 'ipsum', 'dolor']
const array2 = ['Lorem', 'ipsum', 'quick', 'brown', 'foo']
const array3 = ['Jumps', 'Over', 'Lazy', 'Lorem']
const array4 = [1337, 420, 666, 'Lorem']
const data = [array1, array2, array3, array4]
const result = data.reduce((a, b) => a.filter(c => b.includes(c)))

console.log('result', result)
