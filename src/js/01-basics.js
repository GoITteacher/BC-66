// const name = 'Stas';
// let arr = [10, 20, 30, name];
// console.log(arr);

/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 */

// const arr = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// arr[20] = 'Hello';

// console.log(arr);

// console.log(arr.length);

// const lastElement = arr[arr.length - 1];
// console.log(lastElement);

// arr[1] = 'Apple';
// arr[2] = 'awd';
// arr[3] = arr[0];
// arr[2] = arr[2].toUpperCase();
// arr[4] = 'END';

// console.log(arr[15]);

/*
 * Передача по ссылке и по значению
 * - Примитивы и сложные типы
 * - Ссылочное равенство (referential equality)
 */

// const x = [10, 20, 30];
// const y = x;

// x[3] = 'Hello';
// x[4] = 'World';

// console.log(y);

// const x = [1, 2, 3];
// const y = [1, 2, 3];

// console.log(x === y);

// num, string, bool, null, undefined, symbol

/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */

// const arr = [1, 5, 7, 2, 5, 1, 3, 5, 6, 8];

// for (let i = 0; i < arr.length; i += 2) {
//   arr[i] = 0;
// }

// console.log(arr);

// let total = 0;
// for (const elem of arr) {
//   total += elem;
// }

// console.log(arr);

/*
 * - split
 * - join
 * - indexOf
 * - includes
 * - push
 * - pop
 * - shift
 * - unshift
 */

// const arr = [10, 20, 30, 40, 50, 60];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] *= 2;
//   arr[i] = `<li>arr[${i}] - ${arr[i]}</li>`;
// }
// console.log(arr.join('\n'));

// const words = '10 20 10 40';
// const result = words.split(' ');

// let sum = 1;
// for (let i = 0; i < result.length; i++) {
//   result[i] = 20;
//   sum += +result[i];
// }
// console.log(sum);

//==================

// const arr = [10, 20, 60, 30, 40, 50, 60];
// const idx1 = arr.indexOf(60);
// const idx2 = arr.lastIndexOf(60);
// console.log(idx1, idx2);
//==================

// const arr = ['Max', 'Roman', 'Mila', 'Valera', 'Vera'];
// const result = arr.includes('Natali'); // true false
// console.log(result);

// ================

// const arr = [1, 2, 3, 4, 5];

// arr.push(10, 20, 30);

// const lastElement = arr.pop();

// console.log(arr);
// console.log(lastElement);

// const arr = [1, 2, 3, 4, 5];
// arr.shift()

// const length = arr.unshift(true, 'start2', 'start3');

// console.log(arr);
