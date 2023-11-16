/*
 * Операція spread
 * - Array.prototype.concat() та аналог через spread
 */
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const copy = ...arr;

// console.log(copy);
/*
 * Пошук найменшої або найбільшої температури (числа)
 */

// const temps = [21, 17, 29, 24];
// const max = Math.max(...temps);
// const min = Math.min(...temps);
// console.log(max);
// console.log(min);

/*
 * Зшиваємо кілька масивів в один через concat() та spread
 */

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// const result = [...arr3, 'START', ...arr1, 'HELLO', ...arr2, ...arr2, 'END'];
// console.log(result);

/*
 * Spread об'єктів
 * - Object.prototype.assign() та spread
 */

// const obj1 = {
//   x: 10,
//   y: 20,
//   q: 30,
//   arr: [1, 2, 3, 4],
// };

// const obj2 = {
//   t: 10,
//   w: 20,
//   c: 30,
// };

// const newObj = { ...obj1 };

// newObj.arr[0] = 'Hello World';
// console.log(obj1);
