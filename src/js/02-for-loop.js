/*
 * Цикл while
 */

// let total = 0;
// let userNumber = null;
// while (userNumber !== 0) {
//   userNumber = +prompt('Enter Number');
//   total += userNumber;
// }
// console.log(total);

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i += 1;
// }

//==========================

// const random = Math.round(Math.random() * 1000);

// let userNumber = null;

// while (false) {
//   userNumber = +prompt('Enter Number');
//   if (userNumber > random) {
//     console.log('<');
//   } else {
//     console.log('>');
//   }
// }

// console.log('Вітаю!');

/*
 * Цикл do while
 */

// const random = Math.round(Math.random() * 1000);
// let userNumber = null;
// do {
//   userNumber = +prompt('Enter Number');
//   if (userNumber > random) {
//     console.log('<');
//   } else {
//     console.log('>');
//   }
// } while (random !== userNumber);

// console.log('Nice');

/*
 * Цикл for
 */
// debugger;

// for (let i = 0; i <= 10; i++) {
//   console.log(i * 5);
// }

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;

// for (let i = 0; i < employees; i++) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );

//   totalSalary += salary;
// }

// console.log(totalSalary);
/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

// let min = 0;
// let max = 100;
// let total = 0;
// let count = 0;

// for (let i = min; i <= max; i++) {
//   if (i % 7 !== 0) {
//     continue;
//   }

//   count++;
// }

// console.log(total);
// console.log(count);
// debugger;
// for (let i = 1; i < 100; i++) {
//   if (i % 7 === 0 && i % 3 === 0) {
//     console.log(i);
//     continue;
//   }
// }

const discount1 = 0;

const x = 10;

const discount2 = `${x}`;
const message = `Age = ${x}`;
console.log(message);
