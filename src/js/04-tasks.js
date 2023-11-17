const users = [
  { name: 'Max1', phone: '23423', city: 'Kyiv', salary: 123 },
  { name: 'Max2', phone: '23423', city: 'Kyiv', salary: 234 },
  { name: 'Max3', phone: '23423', city: 'Kyiv', salary: 345 },
  { name: 'Max4', phone: '23423', city: 'Kyiv', salary: 756 },
  { name: 'Max5', phone: '23423', city: 'Kyiv', salary: 231 },
  { name: 'Max6', phone: '23423', city: 'Kyiv', salary: 345 },
  { name: 'Max7', phone: '23423', city: 'Kyiv', salary: 567 },
  { name: 'Max8', phone: '23423', city: 'Kyiv', salary: 866 },
];

// let total = 0;
// users.forEach(({ salary }) => {
//   total += salary;
// });
// console.log(total);
// =================================
// const names = [];
// users.forEach(({ name, phone }, index, arr) => {
//   const markup = `<li>${name}</li>`;
//   names.push(markup);
// });

// console.log(names.join('\n'));
// 1) Max1
// 2) Max2

// ==================================

// const showEvenElements = arr => {
//   arr.forEach(el => {
//     if (el % 2 === 0) {
//       console.log(el);
//     }
//   });
// };

// showEvenElements([1, 3, 45, 51, 2, 23, 3, 2, 4, 4, 32, 2, 43, 12, 124]);

// ===================================

// function foo1(t1, t2, t3) {}

// const foo2 = t1 => {
//   return 'RESULT';
// };

// function foo2(t1) {
//   return 'Result';
// }

// foo2(70, 1, 2);

// ===========================

// const arr = ['Marik', 'Natik', 'Anastasiya', 'Mila'];

// arr.forEach(foo);

// foo('Marik', 0, arr)
// foo('Natik', 1, arr)
// foo('Anastasiya', 2, arr)
// foo('Mila', 3, arr)

// function foo(myArr) {
//   console.log(myArr);
// }

// foo(10,'Hello')

// ===========================

const ratings = [1, 3, 5, 6, 2, 4, 6, 78, 12];

let avg = 0;

ratings.forEach((value, idx, array) => {
  avg += value / array.length;
});
console.log(avg);
// callback(1, 0, ratings)
// callback(3, 1, ratings)
// callback()
// callback()
// callback()
// callback()
// callback()
