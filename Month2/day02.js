// ❓DESCRIPTION:
// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.
// Examples:
// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.
// If the string S is an empty value or the integer N is not positive, return the first argument without changes.
// ✅ SOLUTION
function encrypt(text, n) {
  if (text === null || n < 0) { return text }
  let odd = []
  let even = []
  text = text.split('')
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < text.length; j++) {
      if (j % 2 === 0) { even.push(text[j]) }
      if (j % 2 !== 0) { odd.push(text[j]) }
    }
    text = odd.concat(even)
    odd = []
    even = []
  }
  return text.join('')
}

function decrypt(encryptedText, n) {
  if (encryptedText === null || n < 0) { return encryptedText }
  let encr = []
  encryptedText = encryptedText.split('')
  let len = encryptedText.length
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < len; j++) {
      if (j % 2 === 0) { encr.push(encryptedText[Math.floor(len / 2) + j / 2]) }
      if (j % 2 !== 0) { encr.push(encryptedText[Math.floor(j / 2)]) }
    }
    console.log(encr.join(''))
    encryptedText = encr
    encr = []
  }
  return encryptedText.join('')
}

// 🅾️ other solutions that I liked
// function encrypt(text, n) {
// 	for (let i = 0; i < n; i++) {
//   	text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1')
//   }
//   return text
// }

// function decrypt(text, n) {
// 	let l = text && text.length / 2 | 0
// 	for (let i = 0; i < n; i++) {
//   	text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
//   }
//   return text
// }

// ❓DESCRIPTION:
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
// ✅ SOLUTION
function stray(numbers) {
  return +numbers.filter(e => numbers.indexOf(e) === numbers.lastIndexOf(e)).join('')
}
// 🅾️ other solutions that I liked
//  const stray = nums => nums.reduce((a, b) => a ^ b)

// ❓DESCRIPTION:
// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
// ✅ SOLUTION
function findMultiples(i, l) {
  let res = []
  for (let j = i; j <= l; j += i) {
    res.push(j)
  }
  return res
}

// 🅾️ other solutions that I liked
// const findMultiples = (integer, limit) =>  Array(limit/integer | 0).fill().map( (n,i) => integer*(i+1) )

// ❓DESCRIPTION:
// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying
// F(n) * F(n+1) = prod.
// Your function productFib takes an integer (prod) and returns an array:
// [F(n), F(n+1), true] depending on the language if F(n) * F(n+1) = prod.
// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return
// [F(n), F(n+1), false]
// ✅ SOLUTION
function productFib(prod) {
  let f = 0
  let n = 1
  for (let i = 0; n * f < prod; i++) {
    n = n + f
    f = n - f
  }
  return [f, n, n * f === prod]
}
// 🅾️ other solutions that I liked
// function productFib(prod){
//     let [a, b] = [0, 1];
//     while(a * b < prod) [a, b] = [b, a + b];
//     return [a, b, a * b === prod];
//   }

// ❓DESCRIPTION:
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// ✅ SOLUTION
function DNAStrand(dna) {
  let base = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' }
  return dna.split('').map(e => base[e]).join('')
}
// 🅾️ other solutions that I liked
// const DNAStrand = dna => dna.replace(/./g, m => 'CGAT'['GCTA'.indexOf(m)])

// ❓DESCRIPTION:
// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n
// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as
// n ^3 + (n−1) ^3  +(n−2) ^3 +...+1^3 = m if such a n exists or -1 if there is no such n.
// Examples:
// findNb(1071225) --> 45
// findNb(91716553919377) --> -1
// ✅ SOLUTION
function findNb(m) {
  let sum = 0
  let count = 0
  for (let i = 1; sum < m; i++) {
    sum += i ** 3
    count = i
  }
  return sum === m ? count : -1
}

// 🅾️ other solutions that I liked
// function findNb(m) {
//     var n = 0
//     while (m > 0) m -= ++n**3
//     return m ? -1 : n
//   }


// less 40% to 4kyu