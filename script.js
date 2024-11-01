module.exports.capitalize = function(string) {
    let array = string.split('')
    array[0] = array[0].toUpperCase()
    return array.join('')
}

module.exports.reverseString = function(string) {
    let array = string.split('')
    let reversedArray = []

    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i])
    }
    return reversedArray.join('')
}

module.exports.calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y
}

module.exports.analyzeArray = function(array) {
    let arrayData = {
        average: array.reduce((previous, current)  => (previous + current))/array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
    return arrayData
}