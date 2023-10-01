// ❓DESCRIPTION:
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.
// ✅ SOLUTION
function twoSort(s) {
    return s.sort()[0].split('').join('***')
}

// ❓DESCRIPTION:
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Function should return true if it is possible and false if not.
// ✅ SOLUTION
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump / mpg <= fuelLeft
};

// ❓DESCRIPTION:
// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0
// ✅ SOLUTION
function strCount(str, letter) {
    let res = 0
    str.split('').map(e => e === letter ? res++ : '')
    return res
}
// 🅾️ other solutions that I liked
//   return str.split(letter).length-1
//   return str.split('').filter(c => c == letter).length;
//   return (str.match(new RegExp(letter, 'g')) || []).length;
//   return str.length - str.replace(new RegExp(letter, "gi"), '').length;

// ❓DESCRIPTION:
// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.
// ✅ SOLUTION
function otherAngle(a, b) {
    return 180 - a - b
}

// ❓DESCRIPTION:
// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Attention: If the number has leading zeros the amount of digits should be considered.
// ✅ SOLUTION
function incrementString(strng) {
    console.log(strng.split(/\d*$/))
    let strngEnd = strng.split(/[a-zA-Z]+/).slice(-1)[0].split('')
    let x = 0
    if (strngEnd[0] === '0') {
        strngEnd.unshift('1')
        x++
    }
    if (x === 1) {
        strngEnd = String(+strngEnd.join('') + 1).split('')
        strngEnd.splice(0, 1,)
    } else { strngEnd = String(+strngEnd.join('') + 1).split('') }

    return strng.split(/\d*$/).concat(strngEnd.join('')).join('')
}
// 🅾️ other solutions that I liked
//  const incrementString = s => s.replace(/[0-8]?9*$/, m => String(++m));
//  let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)

// ❓DESCRIPTION:
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
// number of hotdogs	price per unit (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
// You can use if..else or ternary operator to complete it.
// ✅ SOLUTION
function saleHotdogs(n) {
    return n < 5 ? 100 * n : n < 10 ? 95 * n : 90 * n
}
// 🅾️ other solutions that I liked
//  const saleHotdogs=n=>n*(n<5?100:n<10?95:90);

// ❓DESCRIPTION:
// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
// The four operators are "add", "subtract", "divide", "multiply".
// A few examples:(Input1, Input2, Input3 --> Output)
// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5
// ✅ SOLUTION
function arithmetic(a, b, operator) {
    return operator === "add" ? a + b : operator === "subtract" ? a - b : operator === "multiply" ? a * b : a / b
}
// 🅾️ other solutions that I liked
// const arithmetic = (a, b, operator) => ({
//     'add'     : a + b,
//     'subtract': a - b,
//     'multiply': a * b,
//     'divide'  : a / b
//   }[operator]);


// ❓DESCRIPTION:
// Your task is to write a function which returns the sum of a sequence of integers.
// The sequence is defined by 3 non-negative values: begin, end, step.
// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.
// Examples
// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
// ✅ SOLUTION
const sequenceSum = (begin, end, step) => {
    let res = 0
    for (let i = begin; i <= end; i += step) {
        res += i
    }
    return res
};
// 🅾️ other solutions that I liked
//  sequenceSum = (b, e, s) =>  b > e ? 0 : b + sequenceSum(b + s, e, s);

// ❓DESCRIPTION:
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
// ✅ SOLUTION
function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}
// 🅾️ other solutions that I liked
//    return beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1)

// ❓DESCRIPTION:
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
// Square all numbers k (0 <= k <= n) between 0 and n.
// Count the numbers of digits d used in the writing of all the k**2.
// Implement the function taking n and d as parameters and returning this count.
// Examples:
// n = 10, d = 1
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.
// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.
// ✅ SOLUTION
function nbDig(n, d) {
    let arr = []
    for (i = 0; i <= n; i++) {
        arr.push(i * i)
    }
    arr = arr.filter(e => String(e).includes(d))
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        String(arr[i]).split('').map(e => +e === d ? res++ : '')
    }
    return res
}
// 🅾️ other solutions that I liked
// function nbDig(n, d) {
// 	var squares = '', reg = new RegExp(d, 'g');
// 	for (var i = 0; i <= n; i++) { squares += (i * i); }
//   return squares.match(reg).length;
// }


// less 50% to 4kyu