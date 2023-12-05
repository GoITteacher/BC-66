import '../css/common.css';

/*
 * Метод setInterval(callback, delay, args)
 */

let counter = 0;

// setTimeout(() => {
//   console.log();
// }, 1000);

const intervalId = setInterval(() => {
  console.log(counter++);
}, 100);

/*
 * Очистка интервала с clearInterval(intervalId)
 */

setTimeout(() => {
  clearInterval(intervalId);
}, 1000);
