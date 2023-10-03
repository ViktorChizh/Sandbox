// ❓DESCRIPTION:
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
// For example:
// a = 1, b = 4 --> [1, 2, 3, 4]
// ✅ SOLUTION
function between(a, b) {
  let res = []
  for (let i = a; i <= b; i++) {
    res.push(i)
  }
  return res
}
// 🅾️ other solutions that I liked
//  const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i)
//  const between = (a, b) => [...Array(b - a + 1)].map((_, idx) => idx + a)
//  return Array(b - a + 1).fill(1).map((_, i) => a + i)

// ❓DESCRIPTION:
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
// Example output: Hello, Mr. Spock
// ✅ SOLUTION
function sayHello(name) {
  return `Hello, ${name}`
}
// 🅾️ other solutions that I liked
//    return 'Hello, ' +  name

// ❓DESCRIPTION:
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
// The string has a length greater or equal to one and contains only letters from ato z.
// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"
// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"
// ✅ SOLUTION
function printerError(s) {
  return s.replace(/[a-m]/g, '').length + '/' + s.length
}
// 🅾️ other solutions that I liked
//  var printerError = s => (s.match(/[n-z]/g) || []).length + '/' + s.length

// ❓DESCRIPTION:
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// "I love you", "a little", "a lot", "passionately", "madly", "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
// ✅ SOLUTION
function howMuchILoveYou(nbPetals) {
  return ["I love you", "a little", "a lot", "passionately", "madly", "not at all"][(nbPetals - 1) % 6]
}
// 🅾️ other solutions that I liked
//  const howMuchILoveYou=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6]

// ❓DESCRIPTION:
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  1.  The input string will always be lower case but maybe empty.
//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// ✅ SOLUTION
function wave(str) {
  return [...Array(str.length)].map((e, i) => str.split('').map((a, j) => i === j ? a.toUpperCase() : a).join('')).filter(e => e !== str)
} // фильтр чистит места соответствующие пробелам (где str состоит из нескольких слов) - там str повторяется и не должна "учавствовать" в волне
// 🅾️ other solutions that I liked
//  var wave=w=>[...w].map((a,i)=>w.slice(0,i)+a.toUpperCase()+w.slice(i+1)).filter(a=>a!=w)


// less 35% to 4kyu