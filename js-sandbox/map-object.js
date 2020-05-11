let map = new Map()

map.set(1, 'Map value associated with key "1"')
map.set(2, [{ name: 'Jolene', age: 23, hair: 'brown' }, { name: 'Ashton', age: 53, hair: 'black' }])
map.set(3, () => { console.log('FUNCTION') })

// console.log('map', map)

// console.log(map.get(1))
// console.log(map.get(2))
// console.log(map.get(3)())

// console.log(JSON.stringify(map))

// CONVERTING MAP TO JSON

function mapToJson(map) {
    return JSON.stringify([...map])
}

console.log('\nconverting map to json:\n', mapToJson(map))

// CONVERTING JSON TO MAP

function jsonToMap(jsonStr) {
    return new Map(JSON.parse(jsonStr));
}

console.log('\nconverting json to map:\n', jsonToMap(mapToJson(map)))
