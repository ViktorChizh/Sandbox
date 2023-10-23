// ❓1️⃣DESCRIPTION:
// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).
// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]
// ✅ SOLUTION
function countBy(x, n) {
    return Array(n).fill(0).map((_,i)=>(i+1)*x)
  }
// 🅾️ other solutions that I liked
//  onst countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)

// ❓2️⃣DESCRIPTION:
// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
// Example:    
// 5.5589 is rounded 5.56   
// 3.3424 is rounded 3.34
// ✅ SOLUTION
function twoDecimalPlaces(n) {
    return +n.toFixed(2)
  }
//
//
//  85.2% to 3kyu