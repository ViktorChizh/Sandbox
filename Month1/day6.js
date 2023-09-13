// ❓DESCRIPTION:
// You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique id as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.
// The updateRecords function takes 4 arguments represented by the following function parameters:
// records - an object containing several individual albums
// id - a number representing a specific album in the records object
// prop - a string representing the name of the album’s property to update
// value - a string containing the information used to update the album’s property
// Complete the function using the rules below to modify the object passed to the function.
// Your function must always return the entire records object.
// If value is an empty string, delete the given prop property from the album.
// If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
// If prop is tracks and value isn't an empty string, you need to update the album's tracks array. First, if the album does not have a tracks property, assign it an empty array. Then add the value as the last item in the album's tracks array.
// Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object.
// ✅ SOLUTION
// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};
recordCollection
// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (!value) {
        delete records[id][prop]
    } else if (prop === 'tracks') {
        if (records[id][prop]) { records[id][prop].push(value) }
        else {
            records[id][prop] = []
            records[id][prop].push(value)
        }
    } else {
        records[id][prop] = value
    }
    return records;
}
// ❓DESCRIPTION: Replace Loops using Recursion
// Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:
// function multiply(arr, n) {
//   let product = 1;
//   for (let i = 0; i < n; i++) {
//     product *= arr[i];
//   }
//   return product;
// }
// However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.
// тоже самое с /. у +,- начальное значение равно  return 0;
// ✅ SOLUTION
function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}
// ❓DESCRIPTION:Use Recursion to Create a Range of Numbers
// Continuing from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem.
// We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.

// ✅ SOLUTION
function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return [];
    } else {
        const countArray = rangeOfNumbers(startNum, endNum - 1);
        countArray.push(endNum);
        return countArray;
    }
};
// ❓DESCRIPTION:
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// For example (Input --> Output):
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)
// ✅ SOLUTION
function persistence(num) {
    if (num / 10 < 1) {
        return 0
    }
    let count = 0
    while (num / 10 >= 1) {
        let s = 1
        while (num / 10 >= 1) {
            s *= (num - 10 * parseInt(num / 10))
            num = parseInt(num / 10)
        }
        s *= num
        num = s
        count++
    }
    return count
}
// 🅾️ other solutions that I liked
const persistence = num => { return `${num}`.length > 1 ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) : 0; }
// ❓DESCRIPTION:
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.
// ✅ SOLUTION
const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2)
};
// 🅾️ other solutions that I liked
//   return arr.reduce( (a, b) => a << 1 | b );
//   return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
// ❓DESCRIPTION:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F
// ✅ SOLUTION
function abbrevName(name) {
    return String(name.toUpperCase().split(' ')[0])[0] + '.' + String(name.toUpperCase().split(' ')[1])[0]
}
// 🅾️ other solutions that I liked
// const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()
// return name[0].toUpperCase() + "." + name[name.indexOf(" ")+1].toUpperCase();
// return name.split(" ").map(name => name[0].toUpperCase()).join(".");
// ❓DESCRIPTION:
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
// Examples:
// Input: [0]
// Output: "even"
// Input: [0, 1, 4]
// Output: "odd"
// Input: [0, -1, -5]
// Output: "even"
// ✅ SOLUTION
function oddOrEven(array) {
    return array.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even'
}