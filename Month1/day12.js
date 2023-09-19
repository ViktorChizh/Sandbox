// ❓DESCRIPTION:
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// ✅ SOLUTION
function friend(friends){
    return friends.filter(e => e.length === 4 && isNaN(e)) // почему-то сначала в массивах были только имена (судя по старым ответам), а потом добавили туда и числа (пришлось добавить проверку)
  }
// 🅾️ other solutions that I liked

// ❓DESCRIPTION:
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.
// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]
// ✅ SOLUTION
function removeSmallest(numbers) {
    let arr=[...numbers]
    arr.splice([...arr].indexOf([...arr].sort((a,b) => a - b)[0]),1)
    return arr
  }
// 🅾️ other solutions that I liked
// let indexOfMin = numbers.indexOf(Math.min(...numbers));
// return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
// ❓DESCRIPTION:
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).
// ✅ SOLUTION
function isTriangle(a,b,c) {
   return a+b>c && a+c>b && b+c>a
}
// 🅾️ other solutions that I liked

// ❓DESCRIPTION:

// ✅ SOLUTION

// 🅾️ other solutions that I liked

// ❓DESCRIPTION:

// ✅ SOLUTION

// 🅾️ other solutions that I liked