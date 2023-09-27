// ❓DESCRIPTION:
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.
// ✅ SOLUTION
function likes(names) {
    switch (names.length) {
        case 0: return "no one likes this"
        case 1: return `${names[0]} likes this`
        case 2: return `${names[0]} and ${names[1]} like this`
        case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`
        default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
}
// 🅾️ other solutions that I liked
// function likes(names) {
//     return {
//       0: 'no one likes this',
//       1: `${names[0]} likes this`,
//       2: `${names[0]} and ${names[1]} like this`,
//       3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
//       4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
//     }[Math.min(4, names.length)]
//   } // чисто для заметки, что возможен такой синтаксис: return {}[] - вернуть значение ключа объекта

// ❓DESCRIPTION:
// There is a bus moving in the city which takes and drops some people at each bus stop.
// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
// ✅ SOLUTION
const number = function (busStops) {
    return busStops.map(e => e[0] - e[1]).reduce((a, b) => a + b)
}

// 🅾️ other solutions that I liked
// const number = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)
// const number = busStops => busStops.reduce((n, [on, off]) => n + on - off, 0);

// ❓DESCRIPTION:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// ✅ SOLUTION
function doubleChar(str) {
    return str.split('').map(e => e + e).join('')
}
// 🅾️ other solutions that I liked
//  return str.replace(/(.)/g, "$1$1")
//  return str.replace(/./g, '$&$&')

// ❓DESCRIPTION:
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!
// ✅ SOLUTION
function removeEveryOther(arr) {
    return arr.map((e, i) => i % 2 === 0 ? e : '').filter(e => e)
}
// 🅾️ other solutions that I liked
// const removeEveryOther = arr => arr.filter((_, i) => !(i % 2))

// ❓DESCRIPTION:
// Write a function to split a string and convert it into an array of words.
// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
// ✅ SOLUTION
function stringToArray(string) {
    return string.split(' ')
}
// 🅾️ other solutions that I liked
// stringToArray = x => x.split(/\s+/) // supports multiple spaces and tabs
// const stringToArray = string => string.replace(/[\.:;"'?-!,]/g, "").split(" ");

// ❓DESCRIPTION:
// In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.
// ✅ SOLUTION
function squareDigits(num) {
    return +String(num).split('').map(e => Number(e) ** 2).join('')
}

// ❓DESCRIPTION:
// You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:
// ["WEST"]
// or
// { "WEST" }
// or
// [West]
// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.
// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).
// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].
// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
// The Haskell version takes a list of directions with data Direction = North | East | West | South.
// The Clojure version returns nil when the path is reduced to nothing.
// The Rust version takes a slice of enum Direction {North, East, West, South}.
// See more examples in "Sample Tests:"
// Notes
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
// ✅ SOLUTION
function dirReduc(arr) {
    let j = 0
    let wayToNumber = arr.map(e => e.toLowerCase() === 'north' ? 1 : e.toLowerCase() === 'south' ? -1 : e.toLowerCase() === 'west' ? 2 : -2)
    do {
        let start = wayToNumber.length
        for (let i = 0; i < wayToNumber.length; i++) {
            if (wayToNumber[i] === -wayToNumber[i + 1]) {
                wayToNumber[i] = 0
                wayToNumber[i + 1] = 0
            }
        }
        wayToNumber = wayToNumber.filter(e => e)
        if (wayToNumber.length === start) { j = 1 }
    } while (j === 0)
    return wayToNumber.map(e => e === 1 ? "NORTH" : e === -1 ? "SOUTH" : e === 2 ? "WEST" : "EAST")
}
// 🅾️ other solutions that I liked
// function dirReduc(plan) {
//     var opposite = {
//       'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
//     return plan.reduce(function(dirs, dir){
//         if (dirs[dirs.length - 1] === opposite[dir])
//           dirs.pop();
//         else
//           dirs.push(dir);
//         return dirs;
//       }, []);
//   }

// function dirReduc(arr) {
//     var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
//     while (pattern.test(str)) str = str.replace(pattern,'');
//     return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
//   }

// function dirReduc(arr){
//     var count = 0;
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] === "WEST" && arr[i+1] === "EAST" ||
//           arr[i] === "EAST" && arr[i+1] === "WEST" ||
//           arr[i] === "NORTH" && arr[i+1] === "SOUTH" ||
//           arr[i] === "SOUTH" && arr[i+1] === "NORTH") {
//           arr.splice(i, 2);
//           count++;
//           i--;
//       }
//     }
//     return count === 0 ? arr : dirReduc(arr);
//   }

// const dirReduc = arr =>
//   arr.reduce((pre, val) => pre[pre.length - 1] === {NORTH : `SOUTH`, SOUTH : `NORTH`, EAST : `WEST`, WEST : `EAST`}[val] ? pre.slice(0, -1) : [...pre, val], []);

// function dirReduc(arr){
//     return arr.reverse().reduce(function (memo, v) {
//       return memo.length && ['NORTHSOUTH', 'SOUTHNORTH', 'EASTWEST', 'WESTEAST'].indexOf(v + memo[0]) >= 0 ? memo.slice(1) : [v].concat(memo)
//     }, [])
//   }

// ❓DESCRIPTION:
// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
// ✅ SOLUTION
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return args.sort((a, b) => a - b)[0]
    }
}
// 🅾️ other solutions that I liked
//      return Math.min(...args)
//      return Math.min.apply(Math, args)

// ❓DESCRIPTION:
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
// ✅ SOLUTION
function getGrade (s1, s2, s3) {
    let res = (s1 + s2 + s3) / 3
    if (res >= 90) return 'A'
    if (res >= 80) return 'B'
    if (res >= 70) return 'C'
    if (res >= 60) return 'D'
    return 'F'
  }
// 🅾️ other solutions that I liked
//  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
//  var getGrade=(a,b,c)=>'FFFFFFDCBAA'.charAt((a+b+c)/3/10);


// less 90% to kyu4