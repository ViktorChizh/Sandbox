// ❓1️⃣DESCRIPTION:
// Write a function that returns a string in which firstname is swapped with last name.
// Example(Input --> Output)
// "john McClane" --> "McClane john"
// ✅ SOLUTION
function nameShuffler(str){
    return  str.split(' ').reverse().join(' ')
  }
// 🅾️ other solutions that I liked
//    str.replace(/([^\s]+) ([^\s]+)/, `$2 $1`)

// ❓2️⃣DESCRIPTION:
// A stream of data is received and needs to be reversed.
// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:
// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:
// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.
// The data is given in an array as such:
// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
// ✅ SOLUTION
function dataReverse(data) {
    let res=[]
    for (let i=0; i<data.length; i+=8){
      res.push(data.slice(i,i+8))
    }
    return res.reverse().flat()
  }
// 🅾️ other solutions that I liked
//  const dataReverse = data => [...data.join(``).match(/.{8}|$/g).reverse().join(``)].map(Number)
//
// const _ = require('lodash')
// function dataReverse(data) {
//   return _(data).chunk(8).reverse().flatten()
// }
// 1. Импортирует библиотеку Lodash с помощью `require('lodash')` и сохраняет ее в переменной `_`.
// 2. `dataReverse` принимает один параметр `data`.
// 3. Функция использует Lodash, чтобы выполнить следующие действия над переданным `data`:
//    - `.chunk(8)` разбивает массив `data` на подмассивы длиной 8 элементов.
//    - `.reverse()` изменяет порядок подмассивов в обратном порядке.
//    - `.flatten()` объединяет все подмассивы в один плоский массив.

// ❓3️⃣DESCRIPTION:
// You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.
// Your task is to debug the code before your plants die!
// ✅ SOLUTION
function rainAmount(mm){
    if (mm < 40) {
         return "You need to give your plant " + (40 - mm) + "mm of water"
    }
    else {
         return "Your plant has had more than enough water for today!"
    }
}
// 🅾️ other solutions that I liked
//      return mm < 40 ? `You need to give your plant ${40 - mm}mm of water` : "Your plant has had more than enough water for today!"

// ❓4️⃣DESCRIPTION:
//  Complete the function which converts hex number (given as a string) to a decimal number.
// ✅ SOLUTION
function hexToDec(hexString){
    return parseInt(hexString, 16)
  }

// ❓5️⃣DESCRIPTION:
// Inspired by the development team at Vooza, write the function that
// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
// Note: your function should have a default parameter.
// For example(Input --> Output):
// "anyone else" --> 0
// "Zach" --> 18
// ✅ SOLUTION
function howManyLightsabersDoYouOwn(name) {
    return name==="Zach" ? 18 : 0
  }
// 🅾️ other solutions that I liked
//  const howManyLightsabersDoYouOwn = name => (name === `Zach`) * 18;
//
//
//  87.3% to 3kyu