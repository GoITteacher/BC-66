/*
 * Функція зворотного виклику (callback)
 * - Функція може приймати інші функції як параметри
 * - Функція яка передається іншій функції як аргумент називається
 * "функцією зворотного (відкладеного) виклику" (callback-функція)
 * - Функція, яка приймає іншу функцію як параметр
 * або повертає функцію як результат своєї роботи називається "функцією вищого порядку"
 */

// function myDay(money, food, callback) {
//   console.log('step 1');
//   console.log('step 2');
//   console.log('step 3');
//   console.log('got to school');

//   callback();

//   console.log('step 5');
//   console.log('step 6');
//   console.log('step 7');
// }

// function goToMusicSchool() {
//   console.log('got to music school');
// }

// function goToDanceSchool() {
//   console.log('got to dance school');
// }

// function goToHome() {
//   console.log('got to home');
// }

// function goToStore() {
//   console.log('got to store');
// }

// myDay(50, 'apple', goToMusicSchool);
// myDay(40, 'apple', goToHome);
// myDay(60, 'apple', goToDanceSchool);
// myDay(100, 'apple', goToStore);
// myDay(200, 'apple', goToMusicSchool);

/*
 * функція doMath(a, b, callback)
 */

// calc(2, 2, devide);
// calc(2, 2, multiply);
// calc(5, 3, sub);
// calc(6, 2, sum);
// calc(2, 2, devide);

// function calc(a, b, callback) {
//   const result = callback(a, b); //4
//   console.log(result);
// }

// function sum(x, y) {
//   return x + y;
// }
// function multiply(x, y) {
//   return x * y;
// }
// function pow(x, y) {
//   return x ** y;
// }
// function devide(x, y) {
//   return x / y;
// }
// function sub(x, y) {
//   return x - y;
// }

/*
 * Відкладений виклик: реєстрація подій
 */

// const btn = document.querySelector('.js-button');

// btn.addEventListener('click', sayHello);

// function sayHello() {
//   alert('Hello');
// }

/*
 * Відкладений виклик: інтервали
 */

// setInterval(tick, 1000);

// let count = 0;
// function tick() {
//   console.log('Tick', count++);
// }
// ================================================

// function foo(data) {
//   console.log(data);
//   data();
// }

// function sum(x) {
//   return x ** 2;
// }

// foo(sum);

// ===============================

// function father(objName) {
//   function foo(x1, x2, x3) {
//     console.log(x1, x2, x3);
//     console.log(objName);
//   }

//   return foo;
// }

// const foo1 = father('car');
// const foo2 = father('house');
// const foo3 = father('room');
// const foo4 = father('table');

// foo1(10, 31, 23);

// ===============================
