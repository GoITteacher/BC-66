/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
//   'Карточка-6',
// ];

// const arr2 = cards.splice(1, 0, 'HELLO', 'WORLD', 'awd');

// console.log(cards);
// console.log(arr2);
// =====================================

// slice
// const copy1 = cards.slice(-3, -2);
// const copy2 = cards.slice(-3, -2);
// const copy3 = cards.slice(-3, -2);

// const result = copy1.concat(copy2, copy3);

// console.log(result);

/*
 * Удаление (по индексу), метод indexOf()
 */

// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
//   'Карточка-6',
// ];

// const cardForRemove = prompt('Enter card');
// const idx = cards.indexOf(cardForRemove); // -1

// if (idx >= 0) cards.splice(idx, 1);
// console.log(cards);

/*
 * Добавление (по индексу)
 */

// const idx = +prompt('Enter Index'); // 2
// const elem = prompt('Enter value'); // 'HELLO WORLD'

// cards.splice(idx, 0, elem);
// console.log(cards);

/*
 * Обновление (по индексу)
 */

// const idx = +prompt('Enter Index'); // 2
// const elem = prompt('Enter value'); // 'HELLO WORLD'

// cards.splice(idx, 1, elem);
// console.log(cards);
