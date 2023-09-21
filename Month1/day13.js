// ❓DESCRIPTION:
// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.
// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
// His mother looks out of a window 1.5 meters from the ground.
// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3
// - h = 3, bounce = 1, window = 1.5, result is -1
// (Condition 2) not fulfilled).
// ✅ SOLUTION
function bouncingBall(h,  bounce,  window) {
    if (h<=0 || bounce>=1 || bounce <=0 || window > h) return -1
    let counter = -1
    while (h>window){
      h *= bounce
      counter+=2
    }
    return counter
  }
// 🅾️ other solutions that I liked
// var rebounds = -1;
// if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
// return rebounds;

// ❓DESCRIPTION:
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!
// ✅ SOLUTION
const rps = (p1, p2) => {
    if (p1==="scissors") {switch (p2) {
                       case "scissors":return  "Draw!"
                       case "paper":return  "Player 1 won!"
                       case "rock":return  "Player 2 won!"
                        }}
   else if (p1==="paper") {switch (p2) {
                       case "paper":return  "Draw!"
                       case "rock":return  "Player 1 won!"
                       case "scissors":return  "Player 2 won!"
                       }}
   else if (p1==="rock") {switch (p2) {
                       case "rock":return  "Draw!"
                       case "scissors": return "Player 1 won!"
                       case "paper": return "Player 2 won!"
                        }}
};
// 🅾️ other solutions that I liked
// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!";
//     var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//     if (p2 === rules[p1]) { return "Player 1 won!";
//     }else { return "Player 2 won!"; }
//   };
//
// rps=(a,b)=>a==b?'Draw!':`Player ${/rp|ps|sr/.test(a[0]+b[0])?2:1} won!`;

// ❓DESCRIPTION:
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
// ✅ SOLUTION
const areaOrPerimeter = function(l , w) {
    return l===w ? l*w : 2*(l+w)
  };

// ❓DESCRIPTION:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.
// ✅ SOLUTION
function areYouPlayingBanjo(name) {
    return name[0].toLowerCase()==='r' ? name + " plays banjo" : name + " does not play banjo"
  }
// 🅾️ other solutions that I liked
//  const areYouPlayingBanjo = n => n+(n.match(/^r/i) ? " plays banjo" : " does not play banjo");

// ❓DESCRIPTION:
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
// ✅ SOLUTION
function isValidWalk(walk) {
    return walk.length===10 && walk.filter(e => e==="n").length===walk.filter(e => e==='s').length && walk.filter(e => e==='w').length===walk.filter(e => e==='e').length
  }

// ❓DESCRIPTION:
// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2
// Concatenate the consecutive strings of strarr by 2, we get:
// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]
// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".
// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).
// Note
// consecutive strings : follow one after another without an interruption
// ✅ SOLUTION
function longestConsec(strarr, k) {
  if (strarr.length===0 || k > strarr.length || k <= 0) return ""
let ans=[]
 for (i=0; i<=strarr.length-k; i++){
   ans.push(strarr.slice(i, i+k).join(""))
 }
return ans[ans.map(e=>e.length).indexOf(Math.max(...ans.map(e=>e.length)))]
}
// 🅾️ other solutions that I liked
//  const longestConsec = (a, k) => k > 0 && k <= a.length ? a.reduce((p, c, i) => (c = a.slice(i, i + k).join('')).length > p.length ? c : p, '') : '';

// ❓DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.
// ✅ SOLUTION
function findAverage(array) { return array.length===0 ? 0 : array.reduce((a,b)=>a+b,0)/array.length}

// ❓DESCRIPTION:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
// ✅ SOLUTION
function sumMix(x){ return x.map(e=>+e).reduce((a,b)=>a+b,0)}
// 🅾️ other solutions that I liked
// const sumMix=x=>x.reduce((a,b)=>+b+a,0)
// const sumMix = (arr) => arr.reduce((sum, n) => sum + (+n), 0);
//
//
//
// 5kyu