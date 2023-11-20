/*

    EVERY
 - Не змінює оригінальний масив.
 - Поелементо перебирає оригінальний масив.
 - Повертає true, якщо всі елементи масиву задовiльняють умову.
 - Повертає false, якщо хоча б один елемент масиву не задовiльняє умову.
 - Перебирання масиву припиняється, якщо колбек повертає false.
*/

// let array = [10, 12, 11, 9, 11, 10, 10];

// const result = array.every(el => {
//   console.log(el);
//   return el >= 10;
// });

// true && true && true && false
// 1 * 1 * 1 * 1 * 0 * 1 * 1 * 1 = 0

/*
    SOME
 - Не змінює оригінальний масив.
 - Поелементо перебирає оригінальний масив.
 - Повертає true, якщо хоча б один елемент масиву задовольняє умову.
 - Повертає false, якщо жоден елемент масиву не задовольняє умову.
 - Перебирання масиву припиняється, якщо колбек повертає true.
*/

// let array = [0, 0, 0, 0, 1, 0, 0, 0, 0];

// const result = array.some(el => el % 7 === 0);

// console.log(result);

// false || false || true || false;

// 0+0+0+0+0+1+0+0+0 = 1;

// console.log(array.every(el => el === 0));
