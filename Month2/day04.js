// ❓DESCRIPTION:
// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
// ✅ SOLUTION
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1] - 1) { return arr[i + 1] }
  }
  return null
}
// 🅾️ other solutions that I liked
// function firstNonConsecutive (arr) {
//     let result = arr.find((val, index) => val !== index + arr[0]);
//     return (Number.isInteger(result)) ? result : null;
// }
//
//  firstNonConsecutive = arr => arr.length == 1 ? null : arr[0] + 1 != arr[1] ? arr[1] : firstNonConsecutive(arr.slice(1))
//
//  const firstNonConsecutive = array => (val => val % 1 === 0 ? val : null) (array.find((val, idx) => val !== array[0] + idx));

// ❓DESCRIPTION:
// Messi's Goal Total
// Use variables to find the sum of the goals Messi scored in 3 competitions
// Information
// Messi goal scoring statistics:
// Competition	Goals
// La Liga	43
// Champions League	10
// Copa del Rey	5
// Create these three variables and store the appropriate values using the table above:
// laLigaGoals
// championsLeagueGoals
// copaDelReyGoals
// Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.
// ✅ SOLUTION
var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5
var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

// ❓DESCRIPTION:
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
// ✅ SOLUTION
function sortArray(array) {
  let odd = array.filter(e => e % 2 !== 0).sort((a, b) => a - b)
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      array[i] = odd[0]
      odd.splice(0, 1)
    }
  }
  return array
}
// 🅾️ other solutions that I liked
// function sortArray(array) {
//     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//     return array.map((x) => x % 2 ? odd.shift() : x);
//   }

// ❓DESCRIPTION:
// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.
// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)
// ✅ SOLUTION
function queueTime(customers, n) {
  let w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}

// ❓DESCRIPTION:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"
// ✅ SOLUTION
function remove(string) {
  return string[string.length - 1] === '!' ? string.slice(0, string.length - 1) : string
}
// 🅾️ other solutions that I liked
// return s.replace( /!$/, '')
// return s.endsWith('!') ? s.slice(0, -1) : s

// ❓DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
// ✅ SOLUTION
function XO(str) {
  return str.toLowerCase().split('').filter(e => e === 'x').length === str.toLowerCase().split('').filter(e => e === 'o').length
}
// 🅾️ other solutions that I liked
// return str.replace(/o/ig, '').length === str.replace(/x/ig, '').length

// ❓DESCRIPTION:
// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.
// About factors
// Factors are numbers you can multiply together to get another number.
// 2 and 3 are factors of 6 because: 2 * 3 = 6
// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1
// Note: base is a non-negative number, factor is a positive number.
// ✅ SOLUTION
function checkForFactor(base, factor) {
  return base % factor === 0
}


// 30% to 4kyu