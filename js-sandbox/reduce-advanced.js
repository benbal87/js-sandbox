var fs = require('fs')

var output = fs.readFileSync('./assets/data.txt', 'utf8')
    .split('\n')
    .map(line => line
        .slice(0, -1)
        .split('\t')
    )
    .reduce((heroes, line) => {
        heroes[line[0]] = heroes[line[0]] || []
        heroes[line[0]].push({
            weapon: line[1],
            damage: line[2],
            quantity: line[3]
        })
        return heroes
    }, {})

console.log('output', JSON.stringify(output, null, 2))
