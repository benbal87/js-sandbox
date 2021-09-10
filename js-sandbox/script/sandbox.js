function getMax(numbersArray) {
    return numbersArray.reduce(
        (acc, number) => number > acc ? number : acc,
        Number.NEGATIVE_INFINITY
    )
}

function getMin(numbersArray) {
    return numbersArray.reduce(
        (acc, number) => number < acc ? number : acc,
        Number.POSITIVE_INFINITY
    )
}

const findInsertionIndex = (dateArray, date) => {
    let result = -1
    if (dateArray?.length > 0) {
        const min = getMin(dateArray)
        const max = getMax(dateArray)

        if (date < min) {
            result = 0
        } else if (date > max) {
            result = dateArray.length
        } else {
            for (let i = 0; i < dateArray.length; i++) {
                if ((
                    date > dateArray[i] && date < dateArray[i + 1]
                ) || date === dateArray[i]) {
                    result = i + 1
                    break
                }
            }
        }
    }
    return result
}

const array = [123, 213, 456, 987]

const testArray = [
    { value: 55, expected: 0 },
    { value: 123, expected: 1 },
    { value: 213, expected: 2 },
    { value: 250, expected: 2 },
    { value: 450, expected: 2 },
    { value: 500, expected: 3 },
    { value: 1000, expected: 4 }
]

testArray.forEach(test => {
    const { value, expected } = test
    const insertionIndex = findInsertionIndex(array, value)
    if (insertionIndex !== expected) {
        console.log(`ERROR! | value: "${ value }" | result: "${ insertionIndex }" | expected: "${ expected }"`)
    }
})
