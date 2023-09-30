// ❓DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
// ✅ SOLUTION
function highAndLow(numbers) {
    let arr = numbers.split(' ').map(e => +e).sort((a, b) => a - b)
    return arr[arr.length - 1] + " " + arr[0]
}
// 🅾️ other solutions that I liked
// numbers = numbers.split(' ')
// return `${Math.max(...numbers)} ${Math.min(...numbers)}`
//
// let arr = numbers.split(' ').map(Number);
// return Math.max(...arr) + ' ' + Math.min(...arr);

// ❓DESCRIPTION:
// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.
// Note to Tax: not the invested principal is taxed, but only the year's accrued interest
// Example:
//   Let P be the Principal = 1000.00
//   Let I be the Interest Rate = 0.05
//   Let T be the Tax Rate = 0.18
//   Let D be the Desired Sum = 1100.00
// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30
// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.
// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.
// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.
// ✅ SOLUTION
function calculateYears(p, i, t, d) {
    let y = 0
    while (p < d) {
        p += (p * i - p * i * t)
        y++
    }
    return y
}
// 🅾️ other solutions that I liked
// const calculateYears = (P, I, T, D) => {
//     let year = 0;
//     while (P < D && ++year) P += (P * I) - (P * I * T);  //интересный синтаксис
//     return year;
//   };

// ❓DESCRIPTION:
// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".
// ✅ SOLUTION
function switchItUp(number) {
    switch (number) {
        case 1: return 'One'
        case 1: return 'One'
        case 2: return 'Two'
        case 3: return 'Three'
        case 4: return 'Four'
        case 5: return 'Five'
        case 6: return 'Six'
        case 7: return 'Seven'
        case 8: return 'Eight'
        case 9: return 'Nine'
        case 0: return 'Zero'
        default: return 'input error'
    }
}
// 🅾️ other solutions that I liked
//    return ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][number]
//    switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]

// ❓DESCRIPTION:
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]
// NOTES:
// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
// ✅ SOLUTION
var humanYearsCatYearsDogYears = function (h) {
    let c = 0
    let d = 0
    for (let i = 1; i <= h; i++) {
        if (i === 1) {
            c = 15
            d = 15
        }
        if (i === 2) {
            c += 9
            d += 9
        }
        if (i > 2) {
            c += 4
            d += 5
        }
    }
    return [h, c, d];
}
// 🅾️ other solutions that I liked
// var humanYearsCatYearsDogYears = function(y) {
//     if (y == 1) return [1, 15, 15]
//     if (y == 2) return [2, 24, 24]
//     return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
//   }
//
// const humanYearsCatYearsDogYears = humanYears => [
//     humanYears,
//     ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
//     ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
//   ];
// ❓DESCRIPTION:
// Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000.
// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
// ✅ SOLUTION
function getDivisorsCnt(n) {
    if (n === 1) return 1
    let count = 2
    for (let i = 2; i <= Math.sqrt(n); i++) {
        n % i === 0 ? count += 2 : ""
    }
    return Number.isInteger(Math.sqrt(n)) ? count - 1 : count
}

// ❓DESCRIPTION:
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
// For example:
// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
// ✅ SOLUTION
function cockroachSpeed(s) {
    return Math.floor(s * 100000 / 3600)
}

// ❓DESCRIPTION:
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).
// ✅ SOLUTION
function rentalCarCost(d) {
    return d*40 - (d > 6 ? 50 : d > 2 ? 20 : 0)
  }
// 🅾️ other solutions that I liked

// ❓DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
// ✅ SOLUTION
function positiveSum(arr) {
    return arr.filter(e=> e > 0).reduce((a,d) => a+d, 0)
  }
// 🅾️ other solutions that I liked
//     return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0)

// ❓DESCRIPTION:
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
// For example, if this array were passed as an argument:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
// ✅ SOLUTION
function sortByLength (array) {
    return array.sort((a, b) => a.length-b.length)
  }

// ❓DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
// ✅ SOLUTION
function reverseWords(str) {
    return str.split(' ').map(e => e.split('').reverse().join('')).join(' ')
  }
// 🅾️ other solutions that I liked
//  var reverseWords=s=>s.replace(/\S+/g,v=>[...v].reverse().join``)

// ❓DESCRIPTION:
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.
// ✅ SOLUTION
function count(s) {
    let obj = {}
    let arr = s.split('')
   for (let i=0; i<arr.length; i++){
      if (arr[i] !== '') {
             obj[arr[i]]=arr.filter(e=>e===arr[i]).length
         arr = arr.map(e => e===arr[i] ? '' : e)
      }
    }
    console.log(obj)
    return obj;
  }
// 🅾️ other solutions that I liked
// function count (string) {
//     var count = {};
//     string.split('').forEach(function(s) { count[s] ? count[s]++ : count[s] = 1 });
//     return count;
//   }

// ❓DESCRIPTION:
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
// ✅ SOLUTION
function filter_list(l) {
    return l.map(e => e===Number(e) ? e : '').filter(e=>e!=='')
  }
// 🅾️ other solutions that I liked
//    return l.filter(function(v) {return typeof v == 'number'})
//     return l.map(e => typeof e=== 'number' ? e : '').filter(e=>e!=='')

// ❓DESCRIPTION:
// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.
// ✅ SOLUTION
function testEven(n) {
    return !Number.isInteger(n) ? false : n%2===0 ? true : false
 }
// 🅾️ other solutions that I liked
//      return n%2===0

// ❓DESCRIPTION:
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// For example (Input -> Output):
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
// ✅ SOLUTION
var summation = function (num) {
    let sum=0
    for (let i=1; i<=num; i++){
      sum+=i
    }
    return sum
  }
// 🅾️ other solutions that I liked
//  const summation = n => n * (n + 1) / 2;


// less 60% to 4kyu