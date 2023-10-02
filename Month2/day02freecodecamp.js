// ❓DESCRIPTION:
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
// ✅ SOLUTION
function sumAll(arr) {
    let sum = 0
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) { sum += i }
    return sum;
}

// ❓DESCRIPTION:
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
// Note: You can return the array with its elements in any order.
// ✅ SOLUTION
function diffArray(arr1, arr2) {
    let count = 0
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr2[j] = ''
                count++
            }
        }
        if (count > 0) { arr1[i] = '' }
        count = 0
    }
    return arr1.filter(e => e !== '').concat(arr2.filter(e => e !== ''))
}
// ❓DESCRIPTION:
// You will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
// The function must accept an indeterminate number of arguments, also known as a variadic function. You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.
// ✅ SOLUTION
function destroyer(arr, ...arg) {
    return arr.map(e => [...arg].includes(e) ? '' : e).filter(e => e !== '')
}

// ❓DESCRIPTION:
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
// ✅ SOLUTION
function whatIsInAName(collection, source) {
    let res = []
    for (let i = 0; i < collection.length; i++) {
        let che = false
        for (let key in source) {
            if (collection[i][key] !== source[key]) { che = true }
        }
        if (!che) { res.push(collection[i]) }
    }
    return res
}

// ❓DESCRIPTION:
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// ✅ SOLUTION
function spinalCase(str) {
    return str.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').replace(/(\s+)/g, ' ').trim().toLowerCase().split(' ').join('-')
}

// ❓DESCRIPTION:
// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
// ✅ SOLUTION
function translatePigLatin(str) {
    let res = ''
    if (str.match(/^([^aeiou]+)/)) {
        res = str.match(/^([^aeiou]+)/)[0] + 'ay'
    }
    if (str.match(/^([aeiou]+)/)) {
        res = 'way'
    }
    return str.replace(/^([^aeiou]+)/, '') + res
}

// ❓DESCRIPTION:
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
// ✅ SOLUTION
function myReplace(str, before, after) {
    let arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === before) {
            if (before[0] === before[0].toLowerCase()) {
                arr[i] = after.toLowerCase()
            } else {
                let aftArr = after.split('')
                aftArr[0] = aftArr[0].toUpperCase()
                arr[i] = aftArr.join('')
            }
        }
    }
    return arr.join(' ')
}

// ❓DESCRIPTION:
// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.
// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.
// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
// ✅ SOLUTION
function pairElement(str) {
    const sol = {
        'A': ['A', 'T'],
        'T': ['T', 'A'],
        'C': ['C', 'G'],
        'G': ['G', 'C']
    }
    return str.split('').map(e => sol[e])
}

// ❓DESCRIPTION:
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
// ✅ SOLUTION
function fearNotLetter(str) {
    let base = 'abcdefghijklmnopqrstuvwxyz'.split('')
    str = str.split('')
    let corr = base.indexOf(str[0])
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== base[i + corr]) {
            return base[i + corr]
        }
    }
    return undefined
}

// ❓DESCRIPTION:
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
// Check the assertion tests for examples.
// ✅ SOLUTION
function uniteUnique(...arr) {
    return [...arr].join(',').split(',').map(e => +e).filter((digit, index, arr) => arr.indexOf(digit) === index)
}

// ❓DESCRIPTION:
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
// ✅ SOLUTION
function convertHTML(str) {
    return str.split('').map(e => e === '&' ? '&amp;' :
        e === '<' ? '&lt;' :
            e === '>' ? '&gt;' :
                e === '"' ? '&quot;' :
                    e === "'" ? "&apos;" : e).join('')
}

// ❓DESCRIPTION:
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
// ✅ SOLUTION
function sumFibs(num) {
    if (num === 1) return 1
    let sum = 0
    let prom = 1
    let prev = 0
    let next = prom
    while (next <= num) {
        next = prev + prom
        prev = prom
        prom = next
        if (prev % 2) { sum += prev }
    }
    return sum;
}
// ❓DESCRIPTION:
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
// ✅ SOLUTION
function sumPrimes(num) {
    let del = 0
    let sum = 0
    for (let i = 2; i <= num; i++) {
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                del++
                break
            }
        }
        if (del === 0) {
            sum += i
        }
        del = 0
    }
    return sum;
}

// ❓DESCRIPTION:
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
// ✅ SOLUTION
function smallestCommons(arr) {
    arr = arr.sort((a, b) => a - b)
    let NOK = arr[0]
    function gcd(a, b) {
        if (b === 0) {
            return a;
        } else {
            return gcd(b, a % b);
        }
    }
    for (let i = arr[0] + 1; i <= arr[1]; i++) {
        let NOD = gcd(NOK, i)
        NOK = (NOK * i) / NOD
    }
    return NOK;
}

// ❓DESCRIPTION:
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
// ✅ SOLUTION
function dropElements(arr, func) {
    let res = [...arr]
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return res
        }
        res.shift()
    }
    return res;
}

// ❓DESCRIPTION:
// Flatten a nested array. You must account for varying levels of nesting.
// ✅ SOLUTION
function steamrollArray(arr) {
    return arr.join(',').split(',').filter(e => e !== '').map(e => e === '[object Object]' ? {} : Number(+e) === +e ? +e : e)
}

// ❓DESCRIPTION:
// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.
// ✅ SOLUTION
function binaryAgent(str) {
    let base = {
        '01000001': 'A',
        '01000010': 'B',
        '01000011': 'C',
        '01000100': 'D',
        '01000101': 'E',
        '01000110': 'F',
        '01000111': 'G',
        '01001000': 'H',
        '01001001': 'I',
        '01001010': 'J',
        '01001011': 'K',
        '01001100': 'L',
        '01001101': 'M',
        '01001110': 'N',
        '01001111': 'O',
        '01010000': 'P',
        '01010001': 'Q',
        '01010010': 'R',
        '01010011': 'S',
        '01010100': 'T',
        '01010101': 'U',
        '01010110': 'V',
        '01010111': 'W',
        '01011000': 'X',
        '01011001': 'Y',
        '01011010': 'Z',
        '01100001': 'a',
        '01100010': 'b',
        '01100011': 'c',
        '01100100': 'd',
        '01100101': 'e',
        '01100110': 'f',
        '01100111': 'g',
        '01101000': 'h',
        '01101001': 'i',
        '01101010': 'j',
        '01101011': 'k',
        '01101100': 'l',
        '01101101': 'm',
        '01101110': 'n',
        '01101111': 'o',
        '01110000': 'p',
        '01110001': 'q',
        '01110010': 'r',
        '01110011': 's',
        '01110100': 't',
        '01110101': 'u',
        '01110110': 'v',
        '01110111': 'w',
        '01111000': 'x',
        '01111001': 'y',
        '01111010': 'z',
        '00100001': '!',
        '00100010': '"',
        '00100111': "'",
        '00101110': '.',
        '00111010': ':',
        '00111011': ';',
        '00111111': '?',
        '00100000': ' '
    }
    return str.split(' ').map(e => base[e]).join('')
}

// ❓DESCRIPTION:
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
// Remember, you can access object properties through either dot notation or [] notation.
// ✅ SOLUTION
function truthCheck(collection, pre) {
    for (let i = 0; i < collection.length; i++) {
        if (!collection[i][pre]) { return false }
    }
    return true
}

// ❓DESCRIPTION:
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.
// ✅ SOLUTION
function addTogether(...arg) {
    if (typeof arg[0] === 'number') {
        if ([...arg].length === 2) {
            if (typeof arg[1] === 'number') {
                return arg[0] + arg[1]
            } else { return undefined }
        }
        if ([...arg].length === 1) {
            return function sumTwoAnd(x) {
                if (typeof x === 'number') {
                    return arg[0] + x
                } else { return undefined }
            }
        } else { return undefined }
    }
}

// ❓DESCRIPTION:
// Fill in the object constructor with the following methods below:
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(first, last)
// Run the tests to see the expected output for each method. These methods must be the only available means of interacting with the object. Each test will declare a new Person instance as new Person('Bob', 'Ross').
// ✅ SOLUTION
const Person = function (first, last) {

    let f = first
    let l = last

    this.getFirstName = () => { return f }
    this.getLastName = () => { return l }
    this.getFullName = () => { return f + " " + l };

    this.setFirstName = (first) => { f = first }
    this.setLastName = (last) => { l = last }
    this.setFullName = (first, last) => {
        f = first
        l = last
    }
}

// ❓DESCRIPTION:
// According to Kepler's Third Law, the orbital period  T
//   of two point masses orbiting each other in a circular or elliptic orbit is:
// T=2πa3μ−−−√
// a - is the orbit's semi-major axis
// μ=GM - is the standard gravitational parameter
// G - is the gravitational constant,
// M - is the mass of the more massive body.
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
// ✅ SOLUTION
function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    for (let i = 0; i < arr.length; i++) {
        arr[i].orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt((earthRadius + arr[i].avgAlt) ** 3 / GM))
        delete arr[i].avgAlt
    }
    return arr;
}