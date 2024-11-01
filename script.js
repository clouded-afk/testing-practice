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