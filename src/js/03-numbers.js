// let x = 10;
// let y = 20;

// x += y - 2;
// x += 1; // 11
// x -= 1; // 10
// x *= 2; // 20
// x /= 2; // 10
// x **= -2; // 10

// console.log(10 ** -2);

// 10 % 3 = 1;
// 5 % 2 = 1
// 97 % 2 = 1;
// 98 % 2 = 0;

// console.log(x);

/*
 * Парс числа с Number.parseInt() и Number.parseFloat()
 */

// let age = prompt('Hello world');
// const result = Number.parseInt(age) + 10;
// console.log(result);

// const result1 = Number.parseInt('10.128px');
// const result2 = Number.parseFloat('10.128px');
// const result3 = Number.parseFloat('hello');

// console.log(result1);
// console.log(result2);
// console.log(result3);

/*
 * - Метод число.toFixed(digits)
 */

// let x = 10.345346456756;
// x = x.toFixed(3);
// console.log(x);

/*
 * - Приведение (преобразование) к числу с Number(value)
 * - Значение NaN (Not a Number) и метод Number.isNaN(value)
 */

// let x = Number('2023year');
// let age = prompt('Enter your age');
// let x = +age + 10;
// console.log(x);

/*
 * Обьект Math
 * - Возведение в степень
 * - Exponent operator
 */

// const x = Math.pow(2, 6);
// const x = 2 ** 6;
// const x = Math.sin(1);
// console.log(x);

/*
 * Напиши скрипт который просит пользователя ввести число и степень,
 * возводит число в эту степень и выводит результат в консоль
 */

//  1. попросить ввести число и сохранить в переменную
//  2. попросить ввести степень и сохранить в переменную
//  3. Возвести введенные данные в степень и вывести

// let x = +prompt('Enter number');
// let y = +prompt('Enter power');
// let result = x ** y;
// console.log(result);

/*
 * Генерим псевдослучайные числа
 * - Math.random()
 * - Math.round()
 */
// const min = 100;
// const max = 500;

// const rand = Math.random() * (max - min) + min;
// console.log(rand);

// const x1 = Math.round(5.5);
// const x2 = Math.ceil(5.9);
// const x3 = Math.floor(5.9);

// console.log(x1, x2, x3);

// ==
