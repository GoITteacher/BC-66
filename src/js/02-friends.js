/*
 * Работа с коллекцией (массивом объектов)
 */

// const numbers = [10, 2, 30, 1, 3, 52, 7, 9];
// const newArr = [];
// for (let number of numbers) {
//   if (number >= 10) {
//     newArr.push(number);
//   }
// }
// console.log(newArr);

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
//   { name: 'Max', online: true },
//   { name: 'Roman', online: false },
//   { name: 'Valera', online: true },
// ];

// const onlineFriends = [];
// for (const friend of friends) {
//   if (friend.online) {
//     onlineFriends.push(friend);
//   }
// }

// const prices = [10, 20, 30, 40, 50, 60, 70, 80, 34, 12, 45];

// for (let i = 0; i < friends.length; i++) {
//   friends[i].price = prices[i];
// }

// for (const friend of friends) {
//   friend.price = '50$';
//   friend.marka = 'MyRobots';
// }

// console.log(friends);

// console.table(friends);

/*
 * Ищем друга по имени
 */

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
//   { name: 'Max', online: true },
//   { name: 'Roman', online: false },
//   { name: 'Valera', online: true },
// ];

// let friendName = 'Max';

// function checkFriend(friends, myFriend) {
//   for (const friend of friends) {
//     if (friend.name === myFriend) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(checkFriend(friends, friendName));

/*
 * Получаем имена всех друзей
 */

// const children = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
//   { name: 'Max', online: true },
//   { name: 'Roman', online: false },
//   { name: 'Valera', online: true },
// ];

// const names = [];

// for (const child of children) {
//   if (child.online) {
//     names.push(child.name.toUpperCase());
//   }
// }

// console.log(names);

/*
 * Получаем имена только друзей которые онлайн
 */

// let onlineFriendsName = [];
// let offlineFriendsName = [];
// for (let friend of friends) {
//   if (friend.online) onlineFriendsName.push(friend.name);
//   else offlineFriendsName.push(friend.name);
// }
// console.log(onlineFriendsName);
// console.log(offlineFriendsName);
// создать 2 массива онлайн и офлайн?
// если тру - в первый, если нет - во второй
