const maxMoney = 1000000
const minMoney = 1000
const maxAge = 88
const minAge = 20
const arrayLength = 10

let object = {
    age: null,
    money: null
}

let array = Array.from({ length: 10 }, (v, i) => {
    randomAge = Math.round(Math.random() * (maxAge - minAge) + minAge)
    randomMoney = Math.round(Math.random() * (maxMoney - minMoney) + minMoney)

    return { ...object, age: randomAge, money: randomMoney }
})

console.log('array\n', array)
