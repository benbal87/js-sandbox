const array1 = ['Lorem', 'ipsum', 'dolor'],
  array2 = ['Lorem', 'ipsum', 'quick', 'brown', 'foo'],
  array3 = ['Jumps', 'Over', 'Lazy', 'Lorem'],
  array4 = [1337, 420, 666, 'Lorem'],
  data = [array1, array2, array3, array4, array5],
  result = data.reduce((a, b) => a.filter(c => b.includes(c)))

console.log('result', result)
