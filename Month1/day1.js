//codewars

var circleArea = function (radius) {
    return (typeof radius === 'number' && radius > 0) ? +(3.141592653589793 * radius * radius).toFixed(2) : false
}

function solution(str) {
    let rts = ''
    for (let i = str.length - 1; i >= 0; i--) {
        rts += str[i]
    }
    return rts
}

function makeNegative(num) {
    return num > 0 ? -num : num
}

function invert(array) {
    return array.map(e => -e)
}

var countSheep = function (num) {
    if (num > 0) {
        let sheep = ''
        for (let i = 1; i <= num; i++) {
            sheep += i + ' sheep...'
        }
        return sheep
    }
    else { return '' }
}

//freecodecamp

// little comment
/* big
comment*/

var myName;

// Setup
var a;

// Only change code below this line

a = 7;

// Setup
var a;
a = 7;
var b;

// Only change code below this line

b = a;

var a = 9;

var myFirstName = 'Victor'
var myLastName = 'Chizh'