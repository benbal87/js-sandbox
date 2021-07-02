function getMin(numbersArray) {
    return !isArrayEmpty(numbersArray) && isNumbersArray(numbersArray)
        ? Math.min(...numbersArray)
        : 0
}

function getMax(numbersArray) {
    return !isArrayEmpty(numbersArray) && isNumbersArray(numbersArray)
        ? Math.max(...numbersArray)
        : 0
}

function isArrayEmpty(array) {
    let result = true
    if (Array.isArray(array)) {
        result = array.length === 0
    }
    return result
}

function isNumbersArray(numbersArray) {
    return !numbersArray.some(n => isNaN(n))
}

function round(number, numberOfDecimalPlaces = 0) {
    if (!number) {
        number = 0
    } else if (typeof number === 'string') {
        number = number.length === 0 ? 0 : Number(number)
    }
    return Number(number.toFixed(numberOfDecimalPlaces))
}

function scaleBetweenNumbersArray({ numbersArray, minAllowed = 5, maxAllowed = 70, roundingDecimalPlaces }) {
    const scaleBetweenOneNumber = (unscaledNum, minAllowed, maxAllowed, min, max) => {
        return ((((maxAllowed - minAllowed) * (unscaledNum - min)) / (max - min)) + minAllowed)
    }

    const errorMsgBase = 'Scale between numbers array not possible!'
    if (isArrayEmpty(numbersArray)) {
        throw Error(`${errorMsgBase} Numbers array is empty!`)
    } else if (!isNumbersArray(numbersArray)) {
        throw Error(`${errorMsgBase} Not a numbers array!`)
    }

    const min = getMin(numbersArray)
    const max = getMax(numbersArray)

    let scaledArray = numbersArray.map(number => scaleBetweenOneNumber(number, minAllowed, maxAllowed, min, max))
    if (roundingDecimalPlaces) {
        scaledArray = scaledArray.map(number => round(number, roundingDecimalPlaces))
    }

    return scaledArray
}

const numbersArray = [58503, 20770, 410836, 27016, 59374, 336]

const result = scaleBetweenNumbersArray({ numbersArray, roundingDecimalPlaces: 1 })

console.log(result)

function getAvg(arr) {
    return arr.reduce((acc, number) => acc + number, 0) / arr.length
}


let variable1 = undefined
let variable2 = undefined
let variable3 = 12
let variable4 = variable1 ?? variable2 ?? variable3
console.log('variable4', variable4);
