// ❓ DESCRIPTION:
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
// Example: (Input1, Input2 -->Output)
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:
// If either input is an empty string, consider it as zero.
// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
// ✅ SOLUTION
function sumStr(a, b) {
    if (a === '') a = 0
    if (b === '') b = 0
    return ("" + (+a + +b))
}
// 🅾️ other solutions that I liked
//    return String(Number(a)+Number(b))

// ❓ DESCRIPTION:
// Now you have to write a function that takes an argument and returns the square of it.
// ✅ SOLUTION
const square = (a) => a ** 2

// ❓ DESCRIPTION:
// Write a function which takes a number and returns the corresponding ASCII char for that value.
// Example:
// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0
// For ASCII table, you can refer to http://www.asciitable.com/
// ✅ SOLUTION
function getChar(c) {
    let base = {
        "0": "\\u0000",
        "1": "\\u0001",
        "2": "\\u0002",
        "3": "\\u0003",
        "4": "\\u0004",
        "5": "\\u0005",
        "6": "\\u0006",
        "7": "\\u0007",
        "8": "\\b",
        "9": "\\t",
        "10": "\\n",
        "11": "\\u000b",
        "12": "\\f",
        "13": "\\r",
        "14": "\\u000e",
        "15": "\\u000f",
        "16": "\\u0010",
        "17": "\\u0011",
        "18": "\\u0012",
        "19": "\\u0013",
        "20": "\\u0014",
        "21": "\\u0015",
        "22": "\\u0016",
        "23": "\\u0017",
        "24": "\\u0018",
        "25": "\\u0019",
        "26": "\\u001a",
        "27": "\\u001b",
        "28": "\\u001c",
        "29": "\\u001d",
        "30": "\\u001e",
        "31": "\\u001f",
        "32": " ",
        "33": "!",
        "34": "\"",
        "35": "#",
        "36": "$",
        "37": "%",
        "38": "&",
        "39": "'",
        "40": "(",
        "41": ")",
        "42": "*",
        "43": "+",
        "44": ",",
        "45": "-",
        "46": ".",
        "47": "/",
        "48": "0",
        "49": "1",
        "50": "2",
        "51": "3",
        "52": "4",
        "53": "5",
        "54": "6",
        "55": "7",
        "56": "8",
        "57": "9",
        "58": ":",
        "59": ";",
        "60": "<",
        "61": "=",
        "62": ">",
        "63": "?",
        "64": "@",
        "65": "A",
        "66": "B",
        "67": "C",
        "68": "D",
        "69": "E",
        "70": "F",
        "71": "G",
        "72": "H",
        "73": "I",
        "74": "J",
        "75": "K",
        "76": "L",
        "77": "M",
        "78": "N",
        "79": "O",
        "80": "P",
        "81": "Q",
        "82": "R",
        "83": "S",
        "84": "T",
        "85": "U",
        "86": "V",
        "87": "W",
        "88": "X",
        "89": "Y",
        "90": "Z",
        "91": "[",
        "92": "\\",
        "93": "]",
        "94": "^",
        "95": "_",
        "96": "`",
        "97": "a",
        "98": "b",
        "99": "c",
        "100": "d",
        "101": "e",
        "102": "f",
        "103": "g",
        "104": "h",
        "105": "i",
        "106": "j",
        "107": "k",
        "108": "l",
        "109": "m",
        "110": "n",
        "111": "o",
        "112": "p",
        "113": "q",
        "114": "r",
        "115": "s",
        "116": "t",
        "117": "u",
        "118": "v",
        "119": "w",
        "120": "x",
        "121": "y",
        "122": "z",
        "123": "{",
        "124": "|",
        "125": "}",
        "126": "~"
    }
    return base[c]
}
// 🅾️ other solutions that I liked
//   return String.fromCharCode(c)

// ❓ DESCRIPTION:
// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// ✅ SOLUTION
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2).sort((a,b)=> a-b).filter((a,i)=>a!==arr1.concat(arr2).sort((a,b)=> a-b)[i-1])
  }
// 🅾️ other solutions that I liked
// return [...new Set(a.concat(b))].sort((a,b)=>a-b)

// ❓ DESCRIPTION:
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
// Constraint:
// 1 <= month <= 12
// ✅ SOLUTION
const quarterOf = (month) => {
    return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4   
  }
// 🅾️ other solutions that I liked
//  const quarterOf = m => Math.ceil(m/3)

// ❓ DESCRIPTION:
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
// For example:
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []
// ✅ SOLUTION
function solution(nums){
    return nums===null ? [] : nums.sort((a,b)=> a-b)
    }

// ❓ DESCRIPTION:
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"
// ✅ SOLUTION
function removeUrlAnchor(url){
    return url.replace(/#(.*)/,'')
   }


// les 10% to 4kuy