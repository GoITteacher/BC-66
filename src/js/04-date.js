import '../css/common.css';

/*
 - Создание
 - Unix-время
 - Методы
 - Разница времени
 - Date.now()
*/

/* 
new Date("2030-03-16");
new Date("2030-03");
new Date("2018");
new Date("03/16/2030");
new Date("2030/03/16");
new Date("2030/3/16");
new Date("March 16, 2030");
new Date("March 16, 2030 14:25:00");
new Date("2030-03-16 14:25:00");
new Date("2030-03-16T14:25:00");
new Date("16 March 2030");
*/

/* const date0 = new Date();
const date1 = new Date('2030-03-16');
const date2 = new Date('2030');

console.log(date0);
console.log(date1); */

// const date = new Date('2018-06');
// console.log(date);

// =============================

/* console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds()); */

// console.log(date.getUTCFullYear());
// console.log(date.getFullYear());
// const date = new Date('2023-01-01 00:00:01');
// date.setMonth(-10);
// date.setMonth(date.getMonth() + 3);
// date.setDate(date.getDate() + 60);
// console.log(date);

// =================================================

// const date1 = new Date('2023-01-01');
// const date2 = new Date('2024-01-01');
// console.log(date1.getTime());
// console.log(date2.getTime());

// const diff = date2 - date1;
// const seconds = diff / 1000;
// const minutes = seconds / 60;
// const hours = minutes / 60;
// const days = hours / 24;

// console.log(minutes);

// =========================================

// const myElem = document.querySelector('.js-diff');

// const initDate = new Date();

// setInterval(() => {
//   const diff = Date.now() - initDate;
//   myElem.textContent = Math.round(diff);
// }, 1000);
