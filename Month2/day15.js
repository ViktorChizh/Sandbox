// ❓1️⃣DESCRIPTION:
// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the savings over the normal high street price would effectively cover the cost of your holiday.
// You will be given the high street price (normPrice, in £ (Pounds)), the duty free discount (discount, in percent) and the cost of the holiday (in £).
// For example, if a bottle costs £10 normally and the duty free discount is 10%, you would save £1 per bottle. If your holiday will cost £500, you would have to purchase 500 bottles to save £500, so the answer you return should be 500.
// Another example: if a bottle costs £12 normally and the duty free discount is 50%, you would save £6 per bottle. If your holiday will cost £1000, you would have to purchase 166.66 bottles to save £1000, so your answer should be 166 bottles.
// All inputs will be integers. Please return an integer. Round down.
// ✅ SOLUTION
function dutyFree(normPrice, discount, hol){
 return Math.floor(hol/(normPrice-normPrice*(100-discount)/100))
}

// ❓2️⃣DESCRIPTION:
// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// The geese are any strings in the following array, which is pre-populated in your solution:
//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:
//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
// ✅ SOLUTION
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(e => geese.indexOf(e)===-1)
  }
// 🅾️ other solutions that I liked
//    return birds.filter(b => !geese.includes(b))

// ❓3️⃣DESCRIPTION:
// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.
// Note: Input will either be a positive integer (or a string for untyped languages).
// ✅ SOLUTION
function apple(x){
    return x**2>1000 ? "It's hotter than the sun!!" : 'Help yourself to a honeycomb Yorkie for the glovebox.'
  }

// ❓4️⃣DESCRIPTION:
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.
// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.
// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.
// ✅ SOLUTION
function rowWeights(array){
    return array.length === 1 ? [...array, 0] : [array.filter((e,i)=>i%2===0).reduce((a,b)=>a+b), array.filter((e,i)=>i%2===1).reduce((a,b)=>a+b)]
      }
// 🅾️ other solutions that I liked
//  const rowWeights = arr => arr.reduce((a, w, i) => (a[i%2]+=w, a), [0, 0])

// ❓5️⃣DESCRIPTION:
// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
// Example:
// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
// ✅ SOLUTION
function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
  }

// ❓6️⃣DESCRIPTION:
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]
// ✅ SOLUTION
var capitals = function (word) {
	return word.split('').map ((e,i)=> e===e.toUpperCase() ? i : "").filter(e=>e!=='')
}
// 🅾️ other solutions that I liked
//  return word.match(/[A-Z]/g).map( x => { return word.indexOf(x) })

// ❓7️⃣DESCRIPTION:
// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
// ✅ SOLUTION
function include(arr, item){
    return arr.includes(item)
  }
// 🅾️ other solutions that I liked
//    return arr.indexOf(item) !== -1

// ❓8️⃣DESCRIPTION:
// Create a method to see whether the string is ALL CAPS.
// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
// ✅ SOLUTION
String.prototype.isUpperCase = function() {
    return [...this].join('') === [...this].join('').toUpperCase()
  }
// 🅾️ other solutions that I liked
//    return !/[a-z]/.test(this)
//    return this.toUpperCase() === this.toString()
//    String.prototype.isUpperCase=function() {return this==this.toUpperCase()}

// ❓9️⃣DESCRIPTION:
// Find the sum of all multiples of n below m
// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"
// ✅ SOLUTION
function sumMul(n,m){
    let res = 0
    if (n>=m){return "INVALID"}
    for (let i=n; i<m; i+=n){
      res+=i
    }
      return res
    }
// 🅾️ other solutions that I liked
// function sumMul(n,m){
//     if (n <= 0 || m <= 0) return "INVALID";
//     const last = Math.ceil(m/n) * n - n
//     return (last + n) * (last / n) / 2
//   }
// 
// const sumMul = (n, m) => m > n ? [...Array(m / n ^ 0)].map((_, idx) => ++idx * n).reduce((pre, val) => pre + val * (val < m)) : `INVALID`

// ❓🔟DESCRIPTION:
// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
// ✅ SOLUTION
function take(arr, n) {
    return arr.slice(0,n)
  }
//
// 
// 92.9% to 3kyu