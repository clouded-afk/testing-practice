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

module.exports.caesarCipher = function(string, shiftFactor) {
    let cipher = '';

    for (let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i);
        let shiftedCharCode = charCode + shiftFactor;
        
        if (charCode >= 97 && charCode <= 122) {
            if (shiftedCharCode > 122) {
                shiftedCharCode -= 26;
            }
            cipher += String.fromCharCode(shiftedCharCode);
        } else if (charCode >= 65 && charCode <= 90) {
            if (shiftedCharCode > 90) {
                shiftedCharCode -= 26;
            }
            cipher += String.fromCharCode(shiftedCharCode);
        } else {
            cipher += string[i];
        }
    }
    return cipher;
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