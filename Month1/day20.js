// ❓DESCRIPTION:
// Messi is a soccer player with goals in three leagues:
// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.
// Note: the input will always be valid.
// For example:
// 5, 10, 2  -->  17
// ✅ SOLUTION
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}
// 🅾️ other solutions that I liked
// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//     return [].reduce.call(arguments, (a, b)=> a + b);
//   }

// ❓DESCRIPTION:
// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
// For example:
// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.
// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.
// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.
// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.
// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.
// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.
// Note:
// If you are given an array with multiple answers, return the lowest correct index.
// ✅ SOLUTION
function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 && arr.slice(1).reduce((a, b) => a + b, 0) === 0) {
            return i;
        }
        if (i === arr.length - 1 && arr.slice(0, arr.length - 1).reduce((a, b) => a + b, 0) === 0) {
            return i;
        }
        if (arr.slice(0, i).reduce((a, b) => a + b, 0) === arr.slice(i + 1).reduce((a, b) => a + b, 0)) {
            return i;
        }
    }
    return -1;
}
// 🅾️ other solutions that I liked
// const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0)
// const findEvenIndex = a => a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));

// findEvenIndex=(a,b=a=>a.reduce((a,b)=>a+b,0))=>a.findIndex((_,i)=>b(a.slice(0,i))==b(a.slice(i+1)))

// ❓DESCRIPTION:
// You have to write a function that accepts three parameters:
// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
// ✅ SOLUTION
function enough(cap, on, wait) {
    return cap >= on+wait ? 0 : on+wait-cap
  }
// 🅾️ other solutions that I liked
//   return Math.max(wait + on - cap, 0);

// ❓DESCRIPTION:
// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
// ✅ SOLUTION
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld * 2)
  }

// ❓DESCRIPTION:
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
// ✅ SOLUTION
function findOdd(A) {
    for (let i = 0; i < A.length; i++) {
        if (A[i]) {
            for (let j = i + 1; j < A.length; j++) {
                if (A[i] === A[j]) {
                    delete A[i]
                    delete A[j]
                    continue
                }
            }
        }
    }
    return A.filter(e => e !== '')[0]
}
// 🅾️ other solutions that I liked
//  const findOdd = (xs) => xs.reduce((a, b) => a ^ b)
//    return arr.find((item, index) => arr.filter(el => el == item).length % 2)

// ❓DESCRIPTION:
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.
// ✅ SOLUTION
function correct(string)
{return string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I')}

// 🅾️ other solutions that I liked
// 	return [...string].map(a => ({'0':'O','5':'S','1':'I'})[a]||a).join('')
//  const correct = s => s.replace(/[015]/g,e=>({'0':'O','1':'I','5':'S'})[e])
//  const correct = s => s.replace(/5|0|1/g, $1 => +$1 ? +$1 === 1 ? 'I' : 'S' : 'O')

// ❓DESCRIPTION:
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
// ✅ SOLUTION
function removeExclamationMarks(s) {
    return s.replace(/!/g, '')
  }
// 🅾️ other solutions that I liked
//    return s.replaceAll('!', '')

// ❓DESCRIPTION:
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.
// ✅ SOLUTION
function expandedForm(num) {
    return String(num).split('').reverse().map((e,i) => +e*10**i).reverse().filter(e=>e).join(' + ')
  }

// ❓DESCRIPTION:
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
// ✅ SOLUTION
function getCount(str) {
    return str.match(/[aeiou]/g) !== null ? str.match(/[aeiou]/g).length : 0
  }
// 🅾️ other solutions that I liked
// return str.split('').filter(c => "aeiou".includes(c)).length;
// ❓DESCRIPTION:
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
// Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
// ✅ SOLUTION
function getAge(inputString){
    return +inputString[0]
    }


// less 80% to kyu4