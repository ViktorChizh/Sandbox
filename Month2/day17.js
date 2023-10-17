// ❓1️⃣DESCRIPTION:
// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
// ✅ SOLUTION
function chromosomeCheck(sperm) {
    return   sperm==='XY'?"Congratulations! You're going to have a son.":"Congratulations! You're going to have a daughter."
  }
// 🅾️ other solutions that I liked
//    return `Congratulations! You're going to have a ${sperm === 'XY' ? 'son' : 'daughter'}.`

// ❓2️⃣DESCRIPTION:
// Input: Array of elements
// ["h","o","l","a"]
// Output: String with comma delimited elements of the array in th same order.
// "h,o,l,a"
// ✅ SOLUTION
function printArray(array){
    return array.join(',')
  }
// 🅾️ other solutions that I liked
//   return array.join()

// ❓3️⃣DESCRIPTION:
// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
// Examples
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free
// ✅ SOLUTION
function mango(quantity, price){
    return (quantity-quantity%3)*2*price/3+quantity%3*price
    }
// 🅾️ other solutions that I liked
//    return (quantity - Math.floor(quantity/3))*price

// ❓4️⃣DESCRIPTION:
// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// ✅ SOLUTION
var encryptThis = function(text) {
    return text.split(' ').map(e => e.length===1 ? e[0].charCodeAt(0) : e.length===2 ? e[0].charCodeAt(0)+e[1] : e[0].charCodeAt(0)+e[e.length-1]+e.slice(2,-1)+e[1]).join(' ')
  }
// 🅾️ other solutions that I liked
//  const encryptThis = text => text.split(' ').map(word => word.replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`).replace(/^\w/, word.charCodeAt(0))).join(' ')

// ❓5️⃣DESCRIPTION:
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
// Division by zero should return NaN.
// Examples:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)
// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)
// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)
// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)
// ✅ SOLUTION
function remainder(n, m){
    return Math.min(n,m)===0 ? NaN : Math.max(n,m) % Math.min(n,m)
    }
// 🅾️ other solutions that I liked
//    return a > b ? a % b : b % a
//
//
//  88.7% to 3kyu