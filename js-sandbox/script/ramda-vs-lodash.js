let _ = require('lodash');
const R = require('ramda')

const array = [
    undefined,
    null,
    123,
    '',
    'asd',
    {},
    {a: 'a'},
    new Set(),
    new Set([1,2,3]),
    new Map(),
    new Map([['1',2],['2',3]]),
]

array.forEach(item => {
    console.log(item, ' | ', _.isEmpty(item), ' | ', R.isEmpty(item));
})
