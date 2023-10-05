// ❓ DESCRIPTION:
// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.
// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
// ✅ SOLUTION
function xor(a, b) {
  return a === true && b !== true || a !== true && b === true
}
// 🅾️ other solutions that I liked
//  const xor = (a, b) => !!(a ^ b)

// ✅ SOLUTION
function greet(language) {
  let base = {
    "english": "Welcome"
    , "czech": "Vitejte"
    , "danish": "Velkomst"
    , "dutch": "Welkom"
    , "estonian": "Tere tulemast"
    , "finnish": "Tervetuloa"
    , "flemish": "Welgekomen"
    , "french": "Bienvenue"
    , "german": "Willkommen"
    , "irish": "Failte"
    , "italian": "Benvenuto"
    , "latvian": "Gaidits"
    , "lithuanian": "Laukiamas"
    , "polish": "Witamy"
    , "spanish": "Bienvenido"
    , "swedish": "Valkommen"
    , "welsh": "Croeso"
    , "IP_ADDRESS_INVALID": "Welcome"
  }
  return base[language]
}

// ❓ DESCRIPTION:
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
// You can assume all values in the array are numbers.
// ✅ SOLUTION
function smallEnough(a, limit) {
  return Math.max(...a) <= limit
}
// 🅾️ other solutions that I liked
// smallEnough = (a, l) => a.every(e => e <= l)

// ❓ DESCRIPTION:
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// Examples: (Input --> Output)
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
// ✅ SOLUTION
var number = function (array) {
  return !array.length ? [] : array.map((e, i) => i + 1 + ": " + e)
}
// 🅾️ other solutions that I liked
// let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)

// ❓ DESCRIPTION:
// Write a function that returns both the minimum and maximum number of the given list/array.
// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

// ✅ SOLUTION
function minMax(arr) {
  return [0, 0].map((e, i) => i === 0 ? Math.min(...arr) : Math.max(...arr))
}
// 🅾️ other solutions that I liked
//    return [Math.min(...arr), Math.max(...arr)]

// ❓ DESCRIPTION:
// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway
// ✅ SOLUTION
function noBoringZeros(n) {
  return Number(('' + n).replace(/0*$/, ''))
}
// 🅾️ other solutions that I liked
//   return +`${n}`.replace(/0*$/, "")

// ❓ DESCRIPTION:
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:
// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.
// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.
// ✅ SOLUTION
function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a * b * c, a + b * c, a * b + c, a * (b + c), (a + b) * c)
}
// 🅾️ other solutions that I liked
//    return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c))

// ❓ DESCRIPTION:
// In this kata you will create a function that takes in a list and returns a list with the reverse order.
// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]
// ✅ SOLUTION
function reverseList(list) {
  return list.reverse()
}
// 🅾️ other solutions that I liked
// reverseList=l=>l.map((e,i)=>l[l.length-1-i])

// ❓ DESCRIPTION:
// you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// The input to the function will be an array of three distinct numbers (Haskell: a tuple).
// For example:
// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
// Another example (just to make sure it is clear):
// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
// ✅ SOLUTION
function gimme(triplet) {
  return triplet.indexOf(triplet.filter(e => e !== Math.max(...triplet) && e !== Math.min(...triplet))[0])
}
// 🅾️ other solutions that I liked
//    return arr.indexOf([...arr].sort((x, y) => x > y)[1])

// ❓ DESCRIPTION:
// Complete the function which converts a binary number (given as a string) to a decimal number.
// ✅ SOLUTION
function binToDec(bin) {
  return parseInt(bin, 2)
}
// 🅾️ other solutions that I liked
//  const binToDec = bin => [...bin].reduce((dec, bit) => dec << 1 | bit, 0)

// ❓ DESCRIPTION:
// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
// ✅ SOLUTION
function combat(health, damage) {
  return health - damage <= 0 ? 0 : health - damage
}
// 🅾️ other solutions that I liked
//  const combat = (health, damage) => Math.max(0, health - damage)

// ❓ DESCRIPTION:
// you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Your function will be tested with pre-made examples as well as random ones.
// If you can, try writing it in one line of code.
// ✅ SOLUTION
const findDifference = (a, b) => Math.abs(a.reduce((a, b) => a * b, 1) - b.reduce((a, b) => a * b, 1))
// 🅾️ other solutions that I liked
//    return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2])

// ❓ DESCRIPTION:
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"
// ✅ SOLUTION
var isAnagram = function (test, original) {
  return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('')
};

// ❓ DESCRIPTION:
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321
// ✅ SOLUTION
function descendingOrder(n) {
  return +('' + n).split('').sort().reverse().join("")
}

// ❓ DESCRIPTION:
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
// ✅ SOLUTION
function alphabetPosition(text) {
  let base = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  return text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(e => base.indexOf(e)).join(' ')
}

// ❓ DESCRIPTION:
// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
// Note: there will always be exactly one wolf in the array.
// ✅ SOLUTION
function warnTheSheep(queue) {
  return queue.indexOf('wolf') === queue.length - 1 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${queue.length - 1 - queue.indexOf('wolf')}! You are about to be eaten by a wolf!`
}
//
// less 20% to kyu4