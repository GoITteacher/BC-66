/*

 - Не змінює оригінальний масив.
 - Поелементо перебирає оригінальний масив.
 - Повертає індекс першого елемента, що задовольняє умову, тобто, коли колбек повертає true.
 - Якщо жоден елемент не задовольняє умову, тобто для всіх елементів колбек повернув false, метод повертає -1.

*/

let array = [
  {
    name: '123',
    age: 12,
    phone: '+28099448',
  },
  {
    name: '123',
    age: 20,
    phone: '+28099854185',
  },
  {
    name: '123',
    age: 31,
    phone: '+280996161',
  },
];

// let str = ['Roman', 'Anatoliy', 'Anatoliy', 'Anatoliy', 'Anatoliy'];

const index = array.findIndex((el, idx, array) => {
  console.log('item');
  return el.age > 15;
});

console.log(index);

array
  .map(() => {})
  .filter(() => {})
  .findIndex(() => {});
