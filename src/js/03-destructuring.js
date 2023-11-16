/*
 * Деструктуризація об'єкта
 * - Значення за замовчуванням
 * - Ім'я змінної відмінне від імені властивості
 */

// const user = {
//   name: 'Ivan',
//   age: 45,
//   phoneNumber: '03434123',
//   isStudent: false,
// };

// const age = user.age;
// const isAdmin = user.isAdmin;
// const isStudent = user.isStudent;
// const address = user.address // u

// const { age, isStudent, isAdmin, address = '' } = user;
// console.log(age, isStudent, isAdmin, address);

// const { name = 'Anonym' } = user;
// console.log(name);

// const isAdmin = false;
// const {isAdmin: userIsAdmin} = user;
// const userIsAdmin = user.isAdmin;

// let isAdmin = '123';
// let { isAdmin: userIsAdmin = 'test', age, phoneNumber } = user;
// console.log(userIsAdmin);

/*
 * Глибока деструктуризація
 */
// const user = {
//   name: 'Ivan',
//   age: 45,
//   phoneNumber: '03434123',
//   isStudent: false,
//   address: {
//     country: 'Ukraine',
//     city: 'Dnipro',
//     location: {
//       x: 134,
//       y: 345,
//     },
//   },
// };

//const {city,country} = user.address;

// const {
//   address: {
//     city,
//     country,
//     location: { x, y },
//   },
// } = user;

// console.log(city, country, x, y);

/*
 * Деструктуризація масивів
 */

// const rgb = [20, 15, 222];
// const [a,b,c] = rgb;
// const a = rgb[0]
// const b = rgb[1]
// const c = rgb[2]

// for (const [key, value] of Object.entries(user)) {
//   console.log(key, value);
// }
// ==================================

// let x = 10;
// let y = 15;
// let temp = x;
// x = y;
// y = temp;

// let x = 10;
// let y = 20;
// let r = 50;
// let t = 12;
// let u = 33;

// [t, u, r, x, y] = [x, x, x, x, x];

// x = 33
// y = 20
// r = 50
// t = 10
// u = 20

// const arr = [1, 2, 3, 4, 5];
// [arr[0],arr[1]] = [arr[1], arr[0]];

// ==================================

/*
 * Операція rest (збір)
 */
// const arr = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9];

// const [, , ...args] = arr;

// console.log(args);

/*
 * Паттерн «Об'єкт налаштувань»
 * - деструктуризація параметра-об'єкта у підписі функції
 * - rest при деструктуризації у підписі
 */

// function foo({x,y}) {
// }

// const obj = {
//   x: '12',
//   y: 234,

// };

// foo(obj);

// function showUser({ phone, name, age, isStudent, isAdmin, city, street }) {
//   console.log(name, age, phone, isStudent, isAdmin, city, street);
// }

// const props = {
//   name: 'Max',
//   age: '123',
//   phone: '234234',
//   isStudent: false,
//   isAdmin: false,
//   city: 'Dnipro',
//   street: 'awd',
// };

// showUser(props);

// ==============

// const address = {
//   city: 'awdaw',
//   location: { x: 10, y: 30 },
//   showLocation() {
//     console.log('Hello');
//   },
// };
// ========================

// function templateObj({ name, age, phone, isStudent }) {
//   return `<li>
//   <p>${name}</p>
//   <p>${age}</p>
//   <p>${phone}</p>
//   <p>${isStudent}</p>
//   <li>`;
// }

// const user1 = {
//   name: 'Max',
//   age: 12,
//   phone: '345345',
//   isStudent: true,
// };

// const markup = templateObj(user1);

// console.log(markup);

// ======================
