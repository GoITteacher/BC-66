/*
 - Метод flatMap(callback) - аналогічний методу map(),
 - але застосовується у випадках, коли результат - це багатовимірний масив,
 - який необхідно «розгладити».
*/

// const arr = [1, 2, [3, [4], 5], 6, 7];
// const result = arr.flat(4);
// console.log(result);

let objs = [
  {
    name: '123',
    friend: [
      { name: 'Jonh', age: 123 },
      { name: 'Jonh', age: 123 },
    ],
  },

  {
    name: '123',
    friend: [
      { name: 'Jonh', age: 123 },
      { name: 'Jonh', age: 123 },
    ],
  },

  {
    name: '123',
    friend: [
      { name: 'Jonh', age: 123 },
      { name: 'Jonh', age: 123 },
    ],
  },

  {
    name: '123',
    friend: ['Jonh6', 'Marta7'],
  },
  {
    friend: 1312,
  },
];

const result = objs.map(user => {
  return user.friend;
});

console.log(result);
// arr.flatMap(callback);
// arr.map(callback).flat(1)

// let array = [[2, 6], [1, [[5]], 8], [2, [1]], [23], 61, 56];
