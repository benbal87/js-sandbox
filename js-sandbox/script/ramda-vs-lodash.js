let _ = require('lodash')
const R = require('ramda')
const moment = require('moment')

const array = [
    [
        NaN,
        false
    ],
    [
        BigInt(9007199254740991),
        true
    ],
    [
        BigInt("9007199254740991"),
        true
    ],
    [
        BigInt("0x1fffffffffffff"),
        true
    ],
    [
        BigInt("0o377777777777777777"),
        true
    ],
    [
        BigInt("0b11111111111111111111111111111111111111111111111111111"),
        true
    ],
    [
        new BigInt64Array(2),
        true
    ],
    [
        new BigInt64Array([21n,31n]),
        true
    ],
    [
        new BigInt64Array(),
        false
    ],
    [
        new Date(),
        true
    ],
    [
        new Date('1987-08-27'),
        true
    ],
    [
        moment('1987-08-27'),
        true
    ],
    [
        moment(),
        true
    ],
    [
        false,
        true
    ],
    [
        true,
        true
    ],
    [
        undefined,
        false
    ],
    [
        null,
        false
    ],
    [
        123,
        true
    ],
    [
        '',
        false
    ],
    [
        'asd',
        true
    ],
    [
        {},
        false
    ],
    [
        { a: 'a' },
        true
    ],
    [
        new Set(),
        false
    ],
    [
        new Set([1, 2, 3]),
        true
    ],
    [
        new Map(),
        false
    ],
    [
        new WeakMap(),
        false
    ],
    [
        new WeakMap([[{ a: '1' }, 1], [{ b: '2' }, 2]]),
        false
    ]
]

array.forEach(([item, expectedResult]) => {
    const result = isNotEmpty(item);
    if (result !== expectedResult) {
        console.log('item', item)
        console.log('result', result)
        console.log('expectedResult', expectedResult)
        isNotEmpty(item, true);
        console.log('is object:', item instanceof Object);
        console.log('typeof:', typeof item);
        console.log('constructor:', item?.constructor);
        console.log('isIterable:', isIterable(item));
        console.log('length:', item?.length);
        console.log('size:', item?.size);
        console.log(item, `LODASH: ${_.isEmpty(item)} | RAMDA: ${R.isEmpty(item)}`);
        console.log('------------------------------')
    }
})

function isIterable(obj) {
    return typeof obj?.[Symbol.iterator] === 'function'
}

function isNotEmpty(item, isLog = false) {
    let result = false
    isLog && console.log('    - OUT OF IF')
    if (item !== undefined && item !== null) {
        isLog && console.log('    - IF')
        if (typeof item?.[Symbol.iterator] === 'function') {
            isLog && console.log('    - IF - typeof item?.[Symbol.iterator] === \'function\'')
            result = item.length > 0 || item.size > 0
        } else if (item instanceof Object) {
            isLog && console.log('    - ELSE IF - item instanceof Object')
            result =
                Object.keys(item).length > 0
                || item.valueOf?.() > 0
        } else if (typeof item === 'number') {
            isLog && console.log('    - ELSE IF - typeof item === \'number\'');
            result = !isNaN(item)
        } else {
            isLog && console.log('    - ELSE')
            result = true
        }
    }
    return result
}
