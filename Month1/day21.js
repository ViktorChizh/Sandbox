// ❓DESCRIPTION:
// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number:
// 89 = 8 ^ 1 + 9 ^ 2
// The next number in having this property is 135
// 135 = 1 ^ 1 + 3 ^ 2 + 5 ^ 3
// Task
// We need a function to collect these numbers, that may receive two integers a, b that defines the range [ , ]
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
// Examples
// Let's see some cases (input -> output):
// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// ✅ SOLUTION
function sumDigPow(a, b) {
    let res = []
    for (let i = a; i <= b; i++) {
        if (('' + i).split('').map((e, j) => (+e) ** (j + 1)).reduce((a, b) => a + b) === i) { res.push(i) }
    }
    return res
}
// 🅾️ other solutions that I liked
// пример подгонки под фильтр без решения задачи:
// const EUREKAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 89, 135, 175, 518, 598, 1306, 1676, 2427, 2646798];
// const sumDigPow = (a, b) => EUREKAS.filter( (n) => a <= n && n <= b );

// ❓DESCRIPTION:
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.
// ✅ SOLUTION
String.prototype.toAlternatingCase = function () {
    console.log(this.split('').map(e => e.match(/[a-z]/) ? e.toUpperCase() : e.match(/[A-Z]/) ? e.toLowerCase() : e).join(''))
    return this.split('').map(e => e.match(/[a-z]/) ? e.toUpperCase() : e.match(/[A-Z]/) ? e.toLowerCase() : e).join('')
}
// 🅾️ other solutions that I liked
//    return this.split("").map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('')
//    return this.replace(/[A-Za-z]/g, x => x > "Z" ? x.toUpperCase() : x.toLowerCase())
//    return this.replace(/[a-z]/gi, val => val < `a` ? val.toLowerCase() : val.toUpperCase());
//    return this.replace(/[a-z]/gi, e => /[a-z]/.test(e) ? e.toUpperCase() : e.toLowerCase())

// ❓DESCRIPTION:
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.
// ✅ SOLUTION
function check(a, x) {
    return a.indexOf(x) === -1 ? false : true
}
// 🅾️ other solutions that I liked
//    return a.indexOf(x) > -1;
//    return a.includes(x);
//    return a.filter(e => e === x).length > 0;
//
// const found = a.find(elem => elem === x)
// return (found==undefined) ? false : true

// ❓DESCRIPTION:
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]
// ✅ SOLUTION
function arrayDiff(a, b) {
    for (let i = 0; i < b.length; i++) {
        a = a.map(e => e === b[i] ? '' : e)
    }
    return a.filter(e => e !== '')
}
// 🅾️ other solutions that I liked
//    return a.filter(e => !b.includes(e));
//    return a.filter(function(x) { return b.indexOf(x) == -1; });
//    return a.filter(v => !b.has(v))

// ❓DESCRIPTION:
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.
// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.
// Note for C
// The two arrays have the same size (> 0) given as parameter in function comp.
// ✅ SOLUTION
function comp(array1, array2) {
    if (!array1 || !array2) { return false }
    for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i] ** 2)) { return false }
        delete array2[array2.indexOf(array1[i] ** 2)]
        console.log(array2)
    }
    return !array2.filter(e => e !== '').length
}
// 🅾️ other solutions that I liked
//    return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
//    return !!array2 && !!array1 && array2.every( a=> array1.some( (b,i)=> a===b*b && delete array1[i] ) )
//    return !!(array1 && array2) && `${array1.map(val => val ** 2).sort()}` === `${array2.sort()}`;

// ❓DESCRIPTION:
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation)))
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
// // ✅ SOLUTION
function addBinary(a, b) {
    return (a + b).toString(2)
}

// ❓DESCRIPTION:
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
// ✅ SOLUTION
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+': return value1 + value2
        case '-': return value1 - value2
        case '*': return value1 * value2
        case '/': return value1 / value2
    }
}
// 🅾️ other solutions that I liked
//    return eval(a+o+b);
//    basicOp = (operation, value1, value2) => eval( `${value1} ${operation} ${value2}` )

// ❓DESCRIPTION:
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:
// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'
// ✅ SOLUTION
function greet(name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest'
}
// 🅾️ other solutions that I liked
//    return `Hello ${name==owner?'boss':'guest'}`

// ❓DESCRIPTION:
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
// Based on: http://oj.leetcode.com/problems/two-sum/
// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// ✅ SOLUTION
function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j]
            }
        }
    }
}
// 🅾️ other solutions that I liked
// чисто для примера синтаксиса:
// function twoSum(nums,target){
//     const arr = [];
//     nums.map(function(x,ind1){ nums.map(function(y,ind2){ if(x + y == target && ind1 != ind2) arr.push(ind1,ind2) }) });
//     return [arr[0],arr[1]]
//   }

// less 70% to kyu4