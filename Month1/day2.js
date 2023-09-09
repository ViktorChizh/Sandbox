//freecodecamp
//6
// Only change code below this line
var a = 5;
var b = 10;
var c = 'I am a';
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

//7
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//8
let catName = "Oliver";
let catSound = "Meow!";

//9
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

//10
const sum = 10 + 10;

//codewars
function lovefunc(flower1, flower2) {
    return (flower1 + flower2) % 2 !== 0 ? true : false
}

function past(h, m, s) {
    if (0 <= h && h <= 23 && 0 <= m && m <= 59 && 0 <= s && s <= 59) {
        return (((h * 60) + m) * 60 + s) * 1000
    } else { return 'Wrong input' }
}

function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === 'needle') {
            return (`found the needle at position ${i}`)
        }
    }
    // return "found the needle at position " + haystack.indexOf("needle");
}

function removeChar(str) {
    return str[0] + str[str.length - 1]

};
function removeChar(str) {
    return str.slice(1, str.length - 1)
    //  return str.slice(1, -1);
};
function noSpace(x){
    return x.split(' ').join('')
    //  return x.replaceAll(' ', '')
    }
    function fakeBin(x){
        let y=''
        for (let i=0; i<x.length; i++){
          if (+x[i]>=5){y+='1'}
          else{y+='0'}
        }
       return y
       //return x.split('').map(n => n < 5 ? 0 : 1).join('')
       //return x.replace(/\d/g, d => d < 5 ? 0 : 1)
       //return x.replace( /[0-4]/g, "0" ).replace( /[5-9]/g, "1" )
      }