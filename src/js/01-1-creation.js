/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

// const user = {
//   name: 'Max',
//   height: 170,
//   width: 123,
//   age: 23,
// };

// const name = 'Max';
// const age = 23;

// const name1 = 'Stas';
// const age1 = 23;

// console.log(name1);

/* 
Створення об'єкта
Вкладені властивості
Звернення до властивостей через крапку
Звернення до вкладених властивостей
Звернення до властивостей через квадратні дужки
Зміна значення властивості
Додавання властивостей
Короткі властивості
Обчислювальні властивості
Методи об'єкта
Доступ до властивостей об'єкта в методах
*/

// const userAge = 15;
// const city = 'Dnipro';
// let user1 = {
//   [city.toUpperCase() + userAge]: 'Hello World',
//   name: 'Barsik',
//   age: userAge,
//   address: {
//     country: 'Ukraine',
//     city,
//     street: 'Shevchenko',
//   },
// };

// user1.address;

// console.log(user1.address.city);
// console.log(user1['address'].city);
// console.log(user1['address']['city']);

// const key = 'age';
// console.log(user1[key]);

// let user2 = {
//   name: 'Barsik',
//   age: 15,
//   address: {
//     country: 'Poland',
//     city: 'Dnipro',
//     street: 'Shevchenko',
//   },
// };

// user2.test = 'HELLO';
// user2.test = 'HELLO WORLD';

// console.log(user2);

// console.log(user2.test);

// console.log(user1.address);
// console.log(user2.address.country);

// user2.address.country = 'USA';
// user1.age = 25;
// console.log(user1);

// =====================

// const cat = {
//   name: 'Bars',
//   age: 5,
//   sayHello() {
//     console.log('Myaw myaw');
//     console.log(this.name);
//   },
//   eat() {
//     console.log('Ням ням корм');
//   },
// };

// const dog = {
//   name: 'Lord',
//   age: 3,
//   sayHello() {
//     console.log('Woof Woof');
//   },
//   eat() {
//     console.log('Ням ням мясо');
//   },
// };

// const brother = {
//   name: 'Valeron',
//   age: 22,
//   sum(x, y) {
//     return x + y;
//   },
// };

// cat.sayHello();

// const sum = brother.sum(10, 50);
// console.log(sum);
/*
 * Ссылочный тип {} === {}
 */

// const user = {
//   x: 10,
// };

// const user2 = user;

// user2.x = 15;

// console.log(user, user2);

/*
 * Массивы и функции это объекты
 */

// const arr = [1, 2, 4, 5, 6];
// arr.test = 'Hello world';
// arr.name = 'Volodka';
// console.log(arr['0']);

// function foo() {}

// foo.test = 'Hello';
// console.dir(foo.test);

// ==============================
const key = 'y';

const obj = {
  x: '123',
  y: 123,
  q: 345,
};

obj[key] = 'Test';

console.log(obj);
