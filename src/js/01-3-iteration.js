/*
 * Перебор через for...in и Object.keys|values|entries
 */

// let feed = {
//   bad: 4,
//   good: 1,
//   neutral: {
//     value1: 10,
//     value2: 20,
//     value3: 30,
//     value4: 40,
//   },
// };

// for (const key in feed.neutral) {
//   console.log(feed.neutral[key]);
// }

// const parent = {
//   x: 10,
//   y: 20,
//   q: 30,
// };

// const child = {
//   t1: 15,
//   t2: 135,
//   t4: 45,
//   __proto__: parent,
// };

// console.log(child);

// for (const key in child) {
//   console.log(child[key]);
// }

// ================================

// const obj = {
//   t1: 15,
//   t2: 135,
//   t3: 45,
// };

// ['t1', 't2', 't3']
// const arr = Object.keys(obj);
// const value = [];
// for (const key of arr) {
//   obj[key] = obj[key] * 2;
//   value.push(obj[key]);
// }

//============
// const arr = Object.values(obj);

// console.log(arr);
// for (const key of arr) {
//   console.log(key);
// }
//============

// const obj = {
//   t1: 15,
//   t2: 135,
//   t3: 45,
// };

// const arr = Object.entries(obj);

// console.log(arr);
