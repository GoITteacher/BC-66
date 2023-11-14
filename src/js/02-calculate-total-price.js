/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */

function calculateTotalPrice(items) {
  let total = 0;

  for (let el of items) {
    total += el;
  }

  return total;
}

const cart1 = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
const cart2 = [1, 3, 5, 2, 5, 6, 8, 3, 1, 6, 6, 2];
const cart3 = [1, 4, 6, 7, 8, 8, 3, 2, 1, 1];

let total1 = calculateTotalPrice(cart1);
let total2 = calculateTotalPrice(cart2);
let total3 = calculateTotalPrice(cart3);

console.log(total1);
console.log(total2);
console.log(total3);
