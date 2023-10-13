// ❓ DESCRIPTION:
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
// For example: (Input --> Output)
// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.
// ✅ SOLUTION
function sumDigits(number) {
    return +Math.abs(number).toString().split('').reduce((a,b)=>+a + +b)
  }
  
// ❓ DESCRIPTION:
// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
// Examples:
// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).
// You can assume that all inputs are valid integers.
// ✅ SOLUTION
function roundToNext5(n){
    return Math.ceil(n/5)*5
  }

// ❓ DESCRIPTION:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"
// ✅ SOLUTION
function replace(s){
    return s.replace(/[aeiou]/ig, '!')
 }

// ❓ DESCRIPTION:
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
// If the score < 0, return 0.
// For example:
// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
// ✅ SOLUTION
function checkExam(array1, array2) {
    return array2.map((e,i) => e === "" ? 0 : e === array1[i] ? 4 : -1).reduce((a,b)=>a+b) < 0 ? 0 : array2.map((e,i) => e === "" ? 0 : e === array1[i] ? 4 : -1).reduce((a,b)=>a+b)
   }

// ❓ DESCRIPTION:
// Complete the solution so that the function will break up camel casing, using a space between words.
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// ✅ SOLUTION
function solution(string) {
    return string.split('').map(e => e === e.toLowerCase() ? e : ' '+e).join('')
}
// 🅾️ other solutions that I liked
//    return(string.replace(/([A-Z])/g, ' $1'));

// ❓ DESCRIPTION:
// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.
//     1. getLength(arr)    should return length of arr
//     2. getFirst(arr)     should return the first element of arr
//     3. getLast(arr)      should return the last element of arr
//     4. pushElement(arr)  should push an element to arr, and then return arr
//     5. popElement(arr)   should pop an element from arr, and then return arr
// When you have finished the work, click "Run Tests" to see if your code is working properly.
// In the end, click "Submit" to submit your code pass this kata.
// ✅ SOLUTION
function getLength(arr){
    //return length of arr
    return arr.length
  }
  function getFirst(arr){
    //return the first element of arr
    return arr[0]
  }
  function getLast(arr){
    //return the last element of arr
    return arr[arr.length-1]
  }
  function pushElement(arr){
    var el=1;
    //push el to arr
    arr.push(el)
    return arr
  }
  function popElement(arr){
    //pop an element from arr
    arr.pop()
    return arr
  }

// ❓ DESCRIPTION:
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.
// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
// ✅ SOLUTION
function sumArray(array) {
    return array===null || array===undefined || array.length<=1 ? 0 : array.reduce((a,b)=>a+b)-Math.max(...array)-Math.min(...array)
  }
// 🅾️ other solutions that I liked
//  sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

// ❓ DESCRIPTION:
// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
// Example (Input --> Output)
// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// ✅ SOLUTION
function reverse(string){
    return string.split(' ').reverse().join(' ')
  }

// ❓ DESCRIPTION:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.
// ✅ SOLUTION
function capitalize(s){
    return [].concat(s.split('').map((e,i)=> i%2 ? e : e.toUpperCase()).join(''), s.split('').map((e,i)=> i%2 ? e.toUpperCase(): e).join(''))
  };
// 🅾️ other solutions that I liked
//    return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''))

// ❓ DESCRIPTION:
// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
// This function should return a number (final grade). There are four types of final grades:
// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// ✅ SOLUTION
function finalGrade (exam, projects) {
    return exam >90 || projects >10 ? 100 : exam >75 && projects >=5 ? 90 : exam >50 && projects >=2 ? 75 : 0
  }

// ❓ DESCRIPTION:
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// ✅ SOLUTION
function solve(s){
    return s.split('').map(e=> e===e.toLowerCase() ? 1 : -1).reduce((a,b)=>a+b) >=0 ? s.toLowerCase() : s.toUpperCase()
}
// 🅾️ other solutions that I liked
//  const solve = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()

// ❓ DESCRIPTION:
// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"
// ✅ SOLUTION
function numberToString(num) {
    return String(num)
  }
// 🅾️ other solutions that I liked
//  const numberToString = num => `${num}`;

// ❓ DESCRIPTION:
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
// Examples:
// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given or `name` = "" => return "Hello, World!"
// ✅ SOLUTION
function hello(name) {
    return !name || name==='' ? "Hello, World!" : 'Hello, ' + name.toLowerCase().split('').map((e,i)=>i===0?e.toUpperCase():e).join('') + '!'
  }
// 🅾️ other solutions that I liked
//  return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`

// ❓ DESCRIPTION:
// When provided with a letter, return its position in the alphabet.
// Input :: "a"
// Ouput :: "Position of alphabet: 1"
// ✅ SOLUTION
function position(letter){
    let base=['',"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return 'Position of alphabet: ' + base.indexOf(letter.toLowerCase())
    }
// 
//
// You have ranked up! Respect. Your new overall rank is 4 kyu.