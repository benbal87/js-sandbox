let _ = require('lodash');
let R = require('ramda');

console.log(_.isEqual(
  new Set(['aaa', 'bbb', 'ccc']),
  new Set(['ccc', 'bbb', 'aaa']))
)

console.log(_.isEqual(
  new Set([]),
  new Set([]))
)

console.log(_.isEqual(
  new Set(['aaa', 'ccc']),
  new Set(['ccc', 'bbb', 'aaa']))
)

console.log(R.equals(
  new Set(['aaa', 'bbb', 'ccc']),
  new Set(['ccc', 'bbb', 'aaa']))
)

console.log(R.equals(
  new Set([]),
  new Set([]))
)

console.log(R.equals(
  new Set(['aaa', 'ccc']),
  new Set(['ccc', 'bbb', 'aaa']))
)
