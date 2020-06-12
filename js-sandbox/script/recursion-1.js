let count = 0

function recursion() {
    if (count < 11) {
        console.log('count is: ' + count)
        count++
        recursion()
    }
}

recursion()
