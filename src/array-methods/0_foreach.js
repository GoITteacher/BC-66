/*

 - Поелементно перебирає масив.
 - Викликає колбек-функцію для кожного елемента масиву.
 - Нічого не повертає.

*/

// ==================================

// const arr = [3, 5, 7, 2, 5, 7, 9, 3, 1, 4, 6, 8];

// const result = arr.forEach((n, i, a) => {
// });

// console.log(result);

// ==================================
// let k = 15;

// function getTotal(arr) {
//   let total = 0;

//   for (let i = 0; i < arr.length; i++) {
//     arr[i] *= 2;
//     total += arr[i];
//   }

//   return total;
// }

// const arr = [0, 1, 2, 3, 5, 4, 7, 3, 1];

// const result = getTotal(arr);
// console.log(result);

// console.log(arr);

// =========================

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let el of arr) {
//   sendToServer(el);
// }

// arr.forEach(sendToServer);

// function sendToServer(data) {
//   console.log(data, 'Save on Server');
// }
