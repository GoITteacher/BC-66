/*
 * Приведение к булю на примере Boolean(value)
 */

// 10 - true
// -10 - true
// 0 - false
// "hsjgaj" - true
// "" - false
// true - true
// false - false
// undefined - false
// null - false
// console.log(Boolean(true));
/*
 * Логическое И (оператор &&)
 * - Запинается на лжи
 * - Возвращает то, на чём запнулось или последний операнд
 */

// true && false; // false
// false && true; // false
// true && true; // true

// const age = 15;
// const money = 900;

// console.log('Пропускаємо?', age >= 18 && money >= 100);
// (false && true)

// console.log(age >= 18);

/*
 * Логическое ИЛИ (оператор ||)
 * - Запинается на правде
 * - Возвращает то, на чём запнулось или последний операнд
 */

// 100 || 0; ->100
// 0 || 100; -> 100;
// 0 || 0; -> 0;

// true || false; // true;
// false || true; // true;

// const age = 15;
// const money = 1500;
// console.log(age >= 18 || money > 1000);

/*
 * Логическое НЕ (оператор !)
 * Делает инверсию правда > ложь и ложь > правда
 */

// console.log(20 !== 20);
