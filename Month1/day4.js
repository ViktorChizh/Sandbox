// freecodecamp
/*FirstLine
    \SecondLine
ThirdLine*/
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// Setup
const myArray = [["John", 23], ["cat", 2]];
// Only change code below this line
myArray.push(["dog", 3])

// Setup
const myArray1 = [["John", 23], ["cat", 2]];
// Only change code below this line
const removedFromMyArray1 = myArray1.pop()

// Setup
const myArray2 = [["John", 23], ["dog", 3]];
// Only change code below this line
const removedFromMyArray2 = myArray2.shift()

// Setup
const myArray3 = [["John", 23], ["dog", 3]];
myArray3.shift();
// Only change code below this line
myArray3.unshift(["Paul", 35])

// codewars

function openOrSenior(data){
    return output=data.map(input => (input[0]>=55 && input[1]>7)?'Senior':'Open')
  }
//const openOrSenior = (members) => members.map(([age, handicap]) => (age >= 55) && (handicap > 7) ? 'Senior' : 'Open')

function sumTwoSmallestNumbers(pos) {
    let min1 = pos[0];
    let k = 0
    for (let i = 1; i < pos.length; i++) {
        if (pos[i] <= min1) {
            min1 = pos[i];
            k = i
        }
    }
    let min2 = k === 0 ? pos[1] : pos[0];
    for (let i = k === 0 ? 2 : 1; i < pos.length; i++) {
        if (i !== k && pos[i] <= min2) {
            min2 = pos[i];
        }
    }
    return min1 + min2;
}
//   let [ a, b ] = pos.sort((a, b) => a - b)
//  return a + b

function validatePIN (pin) {
    return pin.match(/^\d{4}$/) || pin.match(/^\d{6}$/) ? true : false
  }
// const validatePIN = pin => /^\d{4}$|^\d{6}$/.test(pin)
// /^\d{4}(\d{2})?$/.test(pin);

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    return Math.sqrt(sq)%1 ? -1 : (Math.sqrt(sq)+1)**2;
  }

function nbYear(p0, percent, aug, p) {

    for (var years = 0; p0 < p; years++) {
        p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
}

function repeatStr (n, s) {
    var str="";
    for(var i=0; i < n; i++)
      str+=s;
      return str;
}
//    return s.repeat(n);

function longest(s1, s2) {
    let s=s1+s2
    let res=''
    for (let i=0; i<s.length; i++)
      res.includes(s[i])?res+='':res+=s[i]
    return res.split('').sort().join('')
}
// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

function accum(s) {
	res=s[0].toUpperCase()
  for (let i=1; i<s.length; i++){
    res +='-' + s[i].toUpperCase()
      for (let j=0; j<i; j++){
        res += s[i].toLowerCase()
      }
  }
  return res
}
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');

function hero(bullets, dragons){
    return bullets >= dragons * 2
}

