// ❓DESCRIPTION:
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
// ✅ SOLUTION
function bmi(weight, height) {
    return weight/height**2 <= 18.5 ? "Underweight" : weight/height**2 <= 25.0 ? "Normal" : weight/height**2 <= 30.0 ? "Overweight" : "Obese"
  }
// 🅾️ other solutions that I liked
// function bmi(weight, height, index = weight/(height**2)) {
//     return index <= 18.5 ? 'Underweight' : index <= 25.0 ? "Normal" : index <= 30 ? 'Overweight' : 'Obese';
//   }

// ❓DESCRIPTION:
// Given a non-empty array of integers, return the result of multiplying the values together in order.
// ✅ SOLUTION
function grow(x){
    return x.reduce((a,b) => a * b, 1)
   }
// 🅾️ other solutions that I liked
// const grow=x=>eval(x.join("*")) // Однако, функция eval не безопасна, поскольку выполняет код напрямую. Рекомендуется  использовать метод reduce массива для вычисления произведения.

// ❓DESCRIPTION:
// Given an integral number, determine if it's a square number.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.
// ✅ SOLUTION
let isSquare = function(n){
    return Math.sqrt(n).toFixed(0)**2===n ? true : false
  }
// 🅾️ other solutions that I liked
//  return Math.sqrt(n) % 1 === 0;
//  return Number.isInteger(Math.sqrt(n))

// ❓DESCRIPTION:
// Some numbers have funny properties. For example:
// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:
// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// If it is the case we will return k, if not return -1.
// Note: n and p will always be given as strictly positive integers.
// ✅ SOLUTION
function digPow(n, p){
    let arr =  n.toString().split('').map(e => +e)
    let sum=0
    for (let i=0; i<arr.length; i++){
      sum += arr[i]**(i+p)
    }
    return Number.isInteger(sum/n)  ? sum/n : -1
     }
// 🅾️ other solutions that I liked
// function digPow(n, p) {
//     var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
//     return x % n ? -1 : x / n
//   }

// ❓DESCRIPTION:
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.
// For example:
// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
// ✅ SOLUTION
function DNAtoRNA(dna) {
    return dna.split('').map(e => e==='T'?'U':e).join('')
  }
// 🅾️ other solutions that I liked
//  return dna.replace(/T/g, 'U');
//  return dna.split("T").join("U");
//  return dna.replaceAll('T','U');