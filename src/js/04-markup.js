// const profiles = [
//   { name: 'Name1', age: 20 },
//   { name: 'Name2', age: 10 },
//   { name: 'Name3', age: 30 },
//   { name: 'Name4', age: 60 },
//   { name: 'Name5', age: 30 },
//   { name: 'Name6', age: 60 },
//   { name: 'Name7', age: 10 },
//   { name: 'Name8', age: 40 },
//   { name: 'Name9', age: 60 },
// ];

// function templateUser({ name, age } = {}) {
//   return `<li>
//   <h3>UserName:${name}</h3>
//   <p>Age: ${age}</p>
// </li>`;
// }

// function createMarkup() {
//   let markup = '';

//   for (let profile of profiles) {
//     markup += templateUser(profile) + '\n\n';
//   }

//   console.log(markup);
// }

// createMarkup();

// ============================

// const obj = {
//   x: 10,
//   y: 20,
// };

// const { x, q } = obj;
// const q = obj.q

// const user = {};
// const t = user.name;
// console.log(t);

// function foo({ name = '123', age = 123 } = {}) {
//   console.log(name);
// }

// foo();

// =================

// function template({ area }) {
//   return `<li>${area}</li>`;
// }

// const locations = {
//   dnipro: { area: 123 },
//   kyiv: { area: 223 },
//   lviv: { area: 345 },
// };

// for (let [key, value] of Object.entries(locations)) {
//   console.log(template(value));
// }

// =============================

// console.log(Math.sqrt(4) % 1);

// 2 % 1
// 2 - 2 = 0
//===================================

// const arr = [5, 7, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     if (arr[i] < arr[j]) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }
// }

// console.log(arr);

// const arr2 = [
//   [1, 2, 4, 6, 8, 9],
//   [4, 5, 62, 3, 4, 5],
//   [6, 12, 4, 5, 4, 6],
// ];
