/*

 - Поелементо перебирає оригінальний масив.
 - Не змінює оригінальний масив.
 - Результат роботи колбек-функції записується у новий масив.
 - Повертає новий масив однакової довжини.

*/

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = arr.map((el, idx, arr) => {
//   el -= 5;
//   return el * el;
// });

// console.log(arr);
// console.log(result);

// =========================

// const arr = ['awd', 'awdaw', 'sefsef', 'tgft', 'fyht'];

// const markup = arr
//   .map(el => {
//     return `<li>${el}</li>`;
//   })
//   .join('\n');

// const users = [
//   { name: 'User1', age: 23 },
//   { name: 'User2', age: 23 },
//   { name: 'User3', age: 23 },
//   { name: 'User4', age: 23 },
//   { name: 'User5', age: 23 },
//   { name: 'User6', age: 23 },
// ];

// const markup = users
//   .map(({ name, age }) => {
//     return `<li>
//     <p>${name}<p>
//     <p>${age}</p>
// </li>`;
//   })
//   .join('\n\n');

// console.log(markup);
