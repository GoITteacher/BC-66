// function shopping(productList = 'Хліб', money = 100) {
//   console.log(productList, money);
// }

// shopping(undefined, 500);
// shopping('sefsef');
// shopping();

/*
 * Псевдомассив arguments и Array.from и ...
 */

// function sum() {
//   let total = 0;
//   for (let el of arguments) {
//     total += el;
//   }
//   console.log(total);
// }

// sum();
/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */

/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */

console.log(filterNumbers([1, 2, 4, 7, 9, 3], 3, 2, 1)); // [2, 3]
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

function filterNumbers() {
  const args = Array.from(arguments);
  const arr1 = args[0];
  const arr2 = args.slice(1);

  const arr3 = [];

  for (let el of arr2) {
    if (arr1.includes(el)) {
      arr3.push(el);
    }
  }

  return arr3;
}
