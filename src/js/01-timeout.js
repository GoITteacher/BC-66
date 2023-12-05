import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log('start');

// setTimeout(() => {
//   console.log('end');
// }, 1000);

// for (let i = 0; i < 100000; i++) {
//   console.log(i);
// }

// function foo() {
//   console.log(1);

//   setTimeout(() => {
//     console.log(2);
//   }, 1000);

//   console.log(3);
// }

// foo();
// foo();
// foo();

// setTimeout(() => {
//   console.log('end');
// }, 0);

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

const timeoutId = setTimeout(() => {
  console.log('start');
}, 5000);

setTimeout(() => {
  console.log('end');
  clearTimeout(timeoutId);
}, 3000);
