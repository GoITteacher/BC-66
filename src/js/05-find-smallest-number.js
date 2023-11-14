/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

// function findSmallesNumber(numbers) {
//   let min = Infinity;
//   for (let num of numbers) {
//     if (num < min) {
//       min = num;
//     }
//   }
//   return min;
// }

// function findMaxNumber(numbers) {
//   let max = -Infinity; // 84
//   for (let num of numbers) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// }
