// ❓DESCRIPTION:
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.
// ✅ SOLUTION
function getSum(a, b)
{
  let sum = 0
  if (a===b){return a}
  for (let i=(a>b?b:a); i<=(a>b?a:b); i++){
        sum += i
  }
  return sum
}
// 🅾️ other solutions that I liked
//  return (Math.abs(a - b) + 1) * (a+b) / 2;
// ❓DESCRIPTION:
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:
// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]
// ✅ SOLUTION
function towerBuilder(n) {
    let arr=[]
    let k=1
    for (let i=1; i<=n; i++){
      let res = ' '.repeat((n+n-1-k)/2)+"*".repeat(k)+' '.repeat((n+n-1-k)/2)
      arr.push(res)
      k +=2
    }
    return arr
  }
// 🅾️ other solutions that I liked
// [...Array(n)].map((_, i) => ' '.repeat(n-i-1) + '*'.repeat(i*2+1) + ' '.repeat(n-i-1))

// ❓DESCRIPTION:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
// ✅ SOLUTION
function solution(str, ending){
    return !ending || str.split('').slice(-ending.length).join('')===ending
  }
// 🅾️ other solutions that I liked
//    return str.endsWith(ending);

// ❓DESCRIPTION:
// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.
// ✅ SOLUTION
function booleanToString(b){
    return String(b);
  }
// 🅾️ other solutions that I liked
// return b ? "true" : "false"

// ❓DESCRIPTION:
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ✅ SOLUTION
function order(words){
    if (!words) {return ""}
    let arr =  words.split(' ')
    let res = []
    for(let i=0; i<arr.length; i++){res[arr[i].match(/\d/)[0]] = arr[i]}
    return res.join(' ').trim()
  }
// 🅾️ other solutions that I liked
// function order(words){
//     return words.split(' ').sort(function(a, b){
//         return a.match(/\d/) - b.match(/\d/);
//      }).join(' ');
//   }

// ❓DESCRIPTION:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.
// ✅ SOLUTION
function findUniq(arr) {
    return arr.sort()[0] !== arr.sort()[1] ? arr.sort()[0] : arr.sort()[arr.sort().length-1]
  }
// 🅾️ other solutions that I liked
//    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));