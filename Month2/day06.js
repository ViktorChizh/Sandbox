// ❓ DESCRIPTION:
// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).
// All values will be positive integers or floats, or zero.
// ✅ SOLUTION
function plural(n) {
    return n !== 1
}

// ❓ DESCRIPTION:
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
// Examples
// A size 3 diamond:
//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"
// A size 5 diamond:
//   *
//  ***
// *****
//  ***
//   *
// ✅ SOLUTION
function diamond(n) {
    if (n % 2 !== 1) return null;
    let res = []
    for (let i = 1; i <= n; i += 2) {
        let s = ''
        for (let j = 1; j <= i; j += 2) { s = ' '.repeat((n - i) / 2) + '*'.repeat(j) }
        res.push(s + '\n')
    }
    return res.concat([...res].reverse().slice(1)).join('')
}

// ❓ DESCRIPTION:
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
// Example(Input --> Output)
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
// Note: String will have at least one element; words will always be separated by a space.
// ✅ SOLUTION
function addLength(str) {
    return str.split(' ').map(e => e + ' ' + e.length)
}

// ❓ DESCRIPTION:
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
// ✅ SOLUTION
function problem(x) {
    return typeof (x) === 'string' ? 'Error' : x * 50 + 6
}

// ❓ DESCRIPTION:
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
// Example:
// move(3, 6) should equal 15
// ✅ SOLUTION
function move(position, roll) {
    return position + 2 * roll
}

// ❓ DESCRIPTION:
// The wide-mouth frog is particularly interested in the eating habits of other creatures.
// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!
// When he meets the alligator, it then makes a tiny mouth.
// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.
// ✅ SOLUTION
function mouthSize(animal) {
    return animal.toLowerCase() === 'alligator' ? "small" : "wide"
}

// ❓ DESCRIPTION:
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
// ✅ SOLUTION
function countSmileys(arr) {
    return arr.map(e => /^[:;](-|~)?[)D]$/.test(e) ? e : '').filter(e => e !== '').length
}
//
//
// less 15% to 4kyu