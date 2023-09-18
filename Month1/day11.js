// ❓DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]
// ✅ SOLUTION
const reverseSeq = n => {
    let arr = []
    for (let i = n; i>0; i--){
      arr.push(i)
    }
    return arr;
  };
// 🅾️ other solutions that I liked
//   return Array(n).fill(0).map((e, i) => n - i );
//   return Array.from({length:n},(_,i)=>n-i);
//   reverseSeq = n => [...Array(n)].map(_ => n--)
//
// const reverseSeq = n => {
//     return [n].concat(n > 1 ? reverseSeq(n - 1) : []);
//   };
//
//


// sick leave