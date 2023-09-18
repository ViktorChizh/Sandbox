// ❓DESCRIPTION:
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// ✅ SOLUTION
String.prototype.toJadenCase = function () {
    return this.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(" ")
  };
// 🅾️ other solutions that I liked
// return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
// return this.replace(/(^|\s)[a-z]/g, val => val.toUpperCase());

// ❓DESCRIPTION:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// ✅ SOLUTION
function duplicateEncode(word){
    return word.toLowerCase().split('').map(e => word.toLowerCase().split('').filter(i => i===e).length===1 ? '(' : ')').join('')
}
// 🅾️ other solutions that I liked
//  return word.toLowerCase().replace(/./g, m => word.toLowerCase().indexOf(m) == word.toLowerCase().lastIndexOf(m) ? '(' : ')');
// ❓DESCRIPTION:
// Well met with Fibonacci bigger brother, AKA Tribonacci.
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
// ✅ SOLUTION
function tribonacci(signature,n){
    if (n===0) {return []}
    if (n===1) {return signature.slice(0, 1)}
    if (n===2) {return signature.slice(0, 2)}
    if (n===3) {return signature}
    for (let i=4; i<=n; i++){
          signature.push(Number(signature[signature.length-1])+ Number(signature[signature.length-2])  + Number(signature[signature.length-3]))
    }
    return signature
  }
// 🅾️ other solutions that I liked
// function tribonacci(signature,n){
//     for (var i = 0; i < n-3; i++) {
//       signature.push(signature[i] + signature[i+1] + signature[i+2]);
//     }
//     return signature.slice(0, n)}