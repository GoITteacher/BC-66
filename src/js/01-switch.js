const fruit = 'apple';

console.log('1');

// switch (fruit) {
//   case 'banana':
//   case 'apple':
//     console.log(`Hello ${fruit}`);
//     break;
//   case 'cherry':
//     console.log('Hello ${fruit}');
//     break;
//   default:
//     console.log('null');
//     break;
// }

// switch (true) {
//   case money > 100:
//     console.log('1');
//     break;
//   case isAdmin:
//     console.log('2');
//     break;
//   case userAge > 18:
//     console.log('1');
//     break;
// }

// console.log('2');

/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */

let stars = 2;
let price;

switch (stars) {
  case 1:
    price = '20$';
    break;
  case 2:
    price = '30$';
    break;
  case 3:
    price = '50$';
    break;
  case 4:
    price = '70$';
    break;
  case 5:
    price = '120$';
    break;
  default:
    price = '0';
}

price = parseInt(price) * 5;

console.log(price);

/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */
