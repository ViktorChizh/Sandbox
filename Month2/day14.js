// ❓ DESCRIPTION:
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, when the input is green, output should be yellow.
// ✅ SOLUTION
function updateLight(current) {
  return ['green', 'yellow', 'red', 'green'][['green', 'yellow', 'red', 'green'].indexOf(current)+1]
}
// 🅾️ other solutions that I liked
//  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green'
//   return {red: 'green', yellow: 'red', green: 'yellow'}[current]

// ❓ DESCRIPTION:
// Given a string str, reverse it and omit all non-alphabetic characters.
// Example
// For str = "krishan", the output should be "nahsirk".
// For str = "ultr53o?n", the output should be "nortlu".
// ✅ SOLUTION
function reverseLetter(str) {
  return str.replace(/[^a-z]/ig, "").split('').reverse().join('')
}
// 🅾️ other solutions that I liked
//  const reverseLetter = str => str.match(/[a-z]/g).reverse().join('')

// ❓ DESCRIPTION:
// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.
// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
// Arguments (Haskell)
// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// Arguments (Other languages)
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// Example
// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
// ✅ SOLUTION
function titleCase(title, minorWords) {
  return !title ? '' : !minorWords ? title.toLowerCase().split(' ').map(e=> e[0].toUpperCase()+e.slice(1)).join(' ') 
                                   : title.toLowerCase().split(' ').map((e,i) => i===0 ? e[0].toUpperCase()+e.slice(1) 
                                   : minorWords.toLowerCase().split(' ').indexOf(e)!==-1 ? e : e[0].toUpperCase()+e.slice(1)).join(' ')
}
// 🅾️ other solutions that I liked

// ❓ DESCRIPTION:
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
// ✅ SOLUTION
function rot13(message){
  let base=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m',
            'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M']
  // не правильная кодировка на сайте. вместо этих символов выводилось m
  return message.split('').map(e=> e==='//' ? '/' : e==='[' ? '[' : e==='_' ? '_' : e===']' ? ']' : e==='^' ? '^' : e==='`' ? "`" : e==='\\' ? '\\' 
                               : /[^a-zA-z]/.test(e) ? e : base[base.indexOf(e)+13]).join('')
}
// 🅾️ other solutions that I liked
// var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
// return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
//
// const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)))

// ❓ DESCRIPTION:
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata
// ✅ SOLUTION
function shortcut (string) {
  return string.replace(/[auoei]/g, '')
}

// ❓ DESCRIPTION:
// Our football team has finished the championship.
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
// For example: ["3:1", "2:2", "0:1", ...]
// Points are awarded for each match as follows:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
// ✅ SOLUTION
function points(games) {
  return games.map(e=> e.split(':')[0]===e.split(':')[1] ? 1 : e.split(':')[0] > e.split(':')[1] ? 3 : 0).reduce((a,b)=>a+b)
}
// 🅾️ other solutions that I liked
//  const points = games => games.reduce((sum, [x, , y]) => sum + (x > y ? 3 : x == y), 0)  - x == y или 1 или 0
//  const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0) или пропуск, как вверху, или указываем неиспользуемый символ

// ❓ DESCRIPTION:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// ✅ SOLUTION
function evenOrOdd(number) {
  return number%2 ? "Odd" : "Even"
}

// ❓ DESCRIPTION:
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.
// Rules:
// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// ✅ SOLUTION
function peopleWithAgeDrink(old) {
  return old >= 21 ? "drink whisky" : old >= 18 ? "drink beer" : old >=14 ? "drink coke" : "drink toddy"
}
// 🅾️ other solutions that I liked
//  const peopleWithAgeDrink = old => 'drink ' + (old < 14 ? 'toddy' : old < 18 ? 'coke' : old < 21 ? 'beer' : 'whisky')
//  return `drink ${old < 14 ? `toddy` : old < 18 ? `coke` : old < 21 ? `beer` : `whisky`}`

// ❓ DESCRIPTION:
// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.
// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.
// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"
// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.
// ✅ SOLUTION
function  calculateAge(a,b) {
  return a-b===0 ? "You were born this very year!" : b-a===1 ? 'You are 1 year old.' : a-b===1 ? 'You will be born in 1 year.' : b - a > 0 ? "You are " + (b - a) + " years old." : "You will be born in " + (a - b) + " years."
}

// ❓ DESCRIPTION:
// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
// ✅ SOLUTION
function stringClean(s){
  return s.replace(/[0-9]/g,'')
}

// ❓ DESCRIPTION:
// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
// Example:
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
// ✅ SOLUTION
function flattenAndSort(array) {
    return array.flat().sort((a,b)=>a-b);
}
// 🅾️ other solutions that I liked
//   return [].concat(...array).sort((a,b) => a - b)

// ❓ DESCRIPTION:
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// ✅ SOLUTION
function toBinary(n){
  return +n.toString(2)
}
//
//
// 95% to 3kyu