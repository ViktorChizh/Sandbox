// ❓1️⃣DESCRIPTION:
// You are given a string containing a sequence of character sequences separated by commas.
// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"
// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL
// ✅ SOLUTION
function array(string) {
    return !string || string.split(',').length<=2 ? null : string.split(',').slice(1,-1).join(' ')
  }
// 🅾️ other solutions that I liked
//   return arr.split(",").slice(1,-1).join(" ") || null

// ❓2️⃣DESCRIPTION:
// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
// ✅ SOLUTION
class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length*width*height
    }
  }

// ❓3️⃣DESCRIPTION:
// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
// Upper or lower case letter does not matter -- "eNglisH" is also correct.
// Return value as boolean values, true for the string to contains "English", false for it does not.
// ✅ SOLUTION
function spEng(sentence){
    return /english/i.test(sentence)
   }
// 🅾️ other solutions that I liked
// var spEng = (sentence) => sentence.toLowerCase().includes('english')

// ❓4️⃣DESCRIPTION:
// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
// ✅ SOLUTION
function sumOfDifferences(arr) {
    return !!arr.length ? arr.sort((a,b)=>b-a).map((e,i)=> arr[i+1]!==undefined ? e-arr[i+1] : 0).reduce((a,b)=>a+b) : 0
  }
// 🅾️ other solutions that I liked
//      return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0

// ❓5️⃣DESCRIPTION:
// You need to write regex that will validate a password to make sure it meets the following criteria:
// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)
// ✅ SOLUTION
const REGEXP = /\w{6}/ && /[a-z+]/ && /[A-Z+]/ && /\d+/ && /[^_]/ 
// 🅾️ other solutions that I liked
// const REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/

// ❓6️⃣DESCRIPTION:
// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
// ✅ SOLUTION
function pipeFix(numbers){
    let res=[]
    for (let i=numbers[0]; i<=numbers[numbers.length-1]; i++) {
      res.push(i)
    }
    return res
  }
// 🅾️ other solutions that I liked
//  let pipeFix = nums => Array.from({ length: nums.pop() - nums[0] + 1 }, (_, i) => i + nums[0])

// ❓7️⃣DESCRIPTION:
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
// ✅ SOLUTION
function powersOfTwo(n){
    return Array.from({ length: n + 1 }, (_, i) => 2**i)
  }
// 🅾️ other solutions that I liked
//    return [...Array(n + 1)].map((_, i) => 2 ** i)

// ❓8️⃣DESCRIPTION:
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.
// ✅ SOLUTION
function high(x){
    let base = {a:1, b: 2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26}
    return x.split(' ')[x.split(' ').map(e => e.split('').map(x=> base[x]).reduce((a,b)=>a+b)).indexOf(Math.max(...x.split(' ').map(e => e.split('').map(x=> base[x]).reduce((a,b)=>a+b))))]
 }
// 🅾️ other solutions that I liked
// function high(s){
//     let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
//     return s.split(' ')[as.indexOf(Math.max(...as))];
//   }

// ❓9️⃣DESCRIPTION:
// Your task, is to create N×N multiplication table, of size provided in parameter.
// For example, when given size is 3:
// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:
// [[1,2,3],[2,4,6],[3,6,9]]
// ✅ SOLUTION
multiplicationTable = function(size) {
    return Array.from({length: size}, (_,i)=> Array.from({length:size}, (_,j)=> (i+1)*(j+1)))
  }

// ❓🔟DESCRIPTION:
// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.
// The program reports the nth day (as an integer) on which the evaporator will be out of use.
// Example:
// evaporator(10, 10, 5) -> 29
// Note:
// Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.
// ✅ SOLUTION
function evaporator(content, evap_per_day, threshold){ 
    let day=0
    let condition=content*threshold/100
    while (content  > condition){
      content *= (100-evap_per_day) / 100
      day++
    }
    return day;
  }
// 🅾️ other solutions that I liked
//  evaporator=(c,e,t)=>Math.ceil(1/(Math.log(1-e*1e-2)/Math.log(t*1e-2)))
//
//
//  90.1% to 3kyu