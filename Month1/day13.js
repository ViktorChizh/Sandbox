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