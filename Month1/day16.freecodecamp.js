// ❓DESCRIPTION:
// Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using this
// ✅ SOLUTION
Array.prototype.myMap = function (callback) {
    const newArray = [];
    // Only change code below this line
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this)) //  в колбэк передаю элемент, индекс и сам массив - все, что мне известно, т.к. я не знаю, что делает этот колбэк
    }
    // Only change code above this line
    return newArray;
};

// ❓DESCRIPTION:
// The variable watchList holds an array of objects with information on several movies. Use a combination of filter and map on watchList to assign a new array of objects with only title and rating keys. The new array should only include objects where imdbRating is greater than or equal to 8.0. Note that the rating values are saved as strings in the object and you may need to convert them into numbers to perform mathematical operations on them.
// ✅ SOLUTION
// The global variable
const watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];
// Only change code below this line
const filteredList = []
watchList.filter(e => +e['imdbRating'] >= 8.0).map(e => filteredList.push({ 'title': e['Title'], 'rating': e['imdbRating'] }))
// Only change code above this line
console.log(filteredList);

// ❓DESCRIPTION:
//  Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.
// ✅ SOLUTION
Array.prototype.myFilter = function (callback) {
    const newArray = [];
    // Only change code below this line
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) { newArray.push(this[i]) }
    }
    // Only change code above this line
    return newArray;
};

// ❓DESCRIPTION:
// The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, and return the average rating from getRating function. Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.
// ✅ SOLUTION
// The global variable
const watchList1 = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];
function getRating(watchList) {
    // Only change code below this line
    let averageRating = watchList1.filter(e => e["Director"] === "Christopher Nolan").reduce((a, b) => a + +b["imdbRating"], 0) / watchList.filter(e => e["Director"] === "Christopher Nolan").length
    // Only change code above this line
    return averageRating;
}
console.log(getRating(watchList));

// ❓DESCRIPTION:
// Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].
// Note: Your function should not use any kind of for or while loops or the forEach() function.
// ✅ SOLUTION
const squareList = arr => {
    // Only change code below this line
    return arr.map(e => Number.isInteger(e) && e > 0 ? e * e : '').filter(e => e !== '')
    // Only change code above this line
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

// ❓DESCRIPTION:
// JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFunction: If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.
// Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order. The function should return the sorted array.
// ✅ SOLUTION
function alphabeticalOrder(arr) {
    // Only change code below this line
    return arr.sort(function (a, b) {
        return a === b ? 0 : a > b ? 1 : -1;
    });
    // Only change code above this line
}

// ❓DESCRIPTION:
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
// ✅ SOLUTION
function palindrome(str) {
    return str.toLowerCase().replace(/[\W\s_]/g, '').split('').join('') === str.toLowerCase().replace(/[\W\s_]/g, '').split('').reverse().join('')
}

// ❓DESCRIPTION:
// Convert the given number into a roman numeral.
// Roman numerals	Arabic numerals
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1
// All roman numerals answers should be provided in upper-case.
// ✅ SOLUTION
function convertToRoman(num) {
    let arr = num.toString().split('').map(e => +e).reverse()
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            if (arr[i] === 1) arr[i] = 'I'
            else if (arr[i] === 2) arr[i] = 'II'
            else if (arr[i] === 3) arr[i] = 'III'
            else if (arr[i] === 4) arr[i] = 'IV'
            else if (arr[i] === 5) arr[i] = 'V'
            else if (arr[i] === 6) arr[i] = 'VI'
            else if (arr[i] === 7) arr[i] = 'VII'
            else if (arr[i] === 8) arr[i] = 'VIII'
            else if (arr[i] === 9) arr[i] = 'IX'
            else arr[i] = ''
        }
        else if (i === 1) {
            console.log(arr[i])
            if (arr[i] === 1) arr[i] = 'X'
            else if (arr[i] === 2) arr[i] = 'XX'
            else if (arr[i] === 3) arr[i] = 'XXX'
            else if (arr[i] === 4) arr[i] = 'XL'
            else if (arr[i] === 5) arr[i] = 'L'
            else if (arr[i] === 6) arr[i] = 'LX'
            else if (arr[i] === 7) arr[i] = 'LXX'
            else if (arr[i] === 8) arr[i] = 'LXXX'
            else if (arr[i] === 9) arr[i] = 'XC'
            else arr[i] = ''
        }
        else if (i === 2) {
            console.log(arr[i])
            if (arr[i] === 1) arr[i] = 'C'
            else if (arr[i] === 2) arr[i] = 'CC'
            else if (arr[i] === 3) arr[i] = 'CCC'
            else if (arr[i] === 4) arr[i] = 'CD'
            else if (arr[i] === 5) arr[i] = 'D'
            else if (arr[i] === 6) arr[i] = 'DC'
            else if (arr[i] === 7) arr[i] = 'DCC'
            else if (arr[i] === 8) arr[i] = 'DCCC'
            else if (arr[i] === 9) arr[i] = 'CM'
            else arr[i] = ''
        }
        else {
            console.log(arr[i])
            if (arr[i] === 1) arr[i] = 'M'
            else if (arr[i] === 2) arr[i] = 'MM'
            else if (arr[i] === 3) arr[i] = 'MMM'
            else if (arr[i] === 4) arr[i] = 'MMMM'
            else arr[i] = 'Дальше есть разные варианты, в том числе с верхним прочеркиванием. но тесты заканчиваются на 4000'
        }
    }
    return arr.reverse().join('')
}
// ❓DESCRIPTION:
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
// ✅ SOLUTION
function rot13(str) {
    let cipher = 'NOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return str.split('').map(e => cipher.split('').indexOf(e) !== -1 ? cipher.split('')[cipher.split('').indexOf(e) + 13] : e).join('')
}

// ❓DESCRIPTION:
// Return true if the passed string looks like a valid US phone number.
// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
// ✅ SOLUTION
function telephoneCheck(str) {
    return (/^\d{3}[-*\s*]\d{3}[-*\s*]\d{4}$/).test(str) || (/^\(*\d{3}\)*\d{3}-\d{4}$/).test(str) || (/^\(\d{3}\)\s\d{3}-\d{4}$/).test(str) || (/^\d{10}$/).test(str) || (/^1\s*\d{3}-*\s*\d{3}-*\s*\d{4}$/).test(str) || (/^1\s*\(\d{3}\)\s*\d{3}-*\s*\d{4}$/).test(str)
}

// ❓DESCRIPTION:
// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:
// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]
// ✅ SOLUTION
function checkCashRegister(price, cash, cid) {
    let change = []
    let sum = +(cash - price).toFixed(2)
    let amount = +cid.map(e => e[1]).reduce((a, b) => a + b).toFixed(2)
    if (sum > amount) return { status: "INSUFFICIENT_FUNDS", change: [] }
    if (sum === amount) return { status: "CLOSED", change: cid }
    for (let i = 0; i < cid.length; i++) { // добавляю в массив количество и номинал купюр для дальнейших расчетов
        switch (cid[i][0]) {
            case "PENNY": cid[i].push((cid[i][1] / 0.01).toFixed(0), 0.01)
                break
            case "NICKEL": cid[i].push((cid[i][1] / 0.05).toFixed(0), 0.05)
                break
            case "DIME": cid[i].push((cid[i][1] / 0.1).toFixed(0), 0.1)
                break
            case "QUARTER": cid[i].push((cid[i][1] / 0.25).toFixed(0), 0.25)
                break
            case "ONE": cid[i].push((cid[i][1] / 1).toFixed(0), 1)
                break
            case "FIVE": cid[i].push((cid[i][1] / 5).toFixed(0), 5)
                break
            case "TEN": cid[i].push((cid[i][1] / 10).toFixed(0), 10)
                break
            case "TWENTY": cid[i].push((cid[i][1] / 20).toFixed(0), 20)
                break
            case "ONE HUNDRED": cid[i].push((cid[i][1] / 100).toFixed(0), 100)
                break
        }
    }
    for (let i = cid.length - 1; i >= 0; i--) {
        if (sum / cid[i][3] > 1) {
            if (sum / cid[i][3] >= cid[i][2]) {
                if (cid[i][1]) change.push([cid[i][0], cid[i][1]])
                sum = (sum - cid[i][1]).toFixed(2)
            } else {
                change.push([cid[i][0], Math.floor(sum / cid[i][3]) * cid[i][3]])
                sum = (sum - (Math.floor(sum / cid[i][3]) * cid[i][3])).toFixed(2)
            }
        }
    }
    console.log(+(cash - price).toFixed(2))
    console.log(change.map(e => e[1]).reduce((a, b) => a + b).toFixed(2))
    if (+(cash - price).toFixed(2) == change.map(e => e[1]).reduce((a, b) => a + b).toFixed(2)) return { status: "OPEN", change: change }
    return { status: "INSUFFICIENT_FUNDS", change: [] }
}
// решение не сложное, но массивы в тестах подавались не ровными числами, а с мельчайшими хвостиками. поэтому пришлось вводить .toFixed() да и обычные === и !== из-за этого не работали.
// долго подбирал условия, чтобы пройти тесты.

// закончил курс и  получил Certificate JS Algorithms and Data Structures.png