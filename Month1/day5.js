function betterThanAverage(classPoints, yourPoints) {
    let cl = [ ... classPoints, yourPoints]
    return cl.reduce((sum, elem) => sum+elem, 0)/(cl.length) < yourPoints ? true : false
  }
// return yourPoints > classPoints.reduce(function(sum, x){return sum + x},yourPoints)/(classPoints.length+1)

function findShort(s){
    return s.split(' ').map(e => +(e.length)).sort((a, b) => a - b)[0]
  }
//     return Math.min(...s.split(" ").map (s => s.length))
//  return s.split(' ').map(a => a.length).reduce((a, b) => Math.min(a, b))

function simpleMultiplication(number) {
    return number%2===0 ? number*8 : number*9
}
//     return n * (n % 2 ? 9 : 8);

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }
  // const vowels = 'aeiou';
//   return str.split('').filter(letter => !vowels.includes(letter.toLowerCase())).join('');

function duplicateCount(text) {
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }
  // ❓DESCRIPTION:
  // Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

  // For example,

  // [true,  true,  true,  false,
  //   true,  true,  true,  true ,
  //   true,  false, true,  false,
  //   true,  false, false, true ,
  //   true,  true,  true,  true ,
  //   false, false, true,  true]
  // The correct answer would be 17.

  // Hint: Don't forget to check for bad values like null/undefined

  // ✅ SOLUTION

  function countSheeps(sheep) {
    let count = 0
    sheep.map(e => e === true ? count++ : '')
    return count
  }
  // 🅾️ other solutions
  //   return sheeps.filter(Boolean).length;
  // countSheeps = x => x.filter( s => s ).length;

  function rowSumOddNumbers(n) {
      return n**3
  }
  //  return Math.pow(n, 3);
  //rowSumOddNumbers = (n) => Array.from({length: n*(n+1)/2}, (_, i) => i*2+1).slice(-n).reduce((a, b)=> a + b, 0)