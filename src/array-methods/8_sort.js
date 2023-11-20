/*

 - Сортує і змінює вихідний масив.
 - Повертає змінений масив, тобто посилання на відсортований вихідний.
 - За замовчуванням сортує за зростанням.
 - Сортування відбувається шляхом приведення значень до рядка і порівняння порядкових номерів у таблиці Unicode.
 
*/

let cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

/* 

{
  make: 'Honda',
  model: 'CR-V',
  type: 'suv',
  amount: 14,
  price: 24045,
  onSale: true,
}

*/

const task1 = cars.map(car => car.model);
const task2 = cars.map(car => {
  const obj = {
    model: car.model && car.make,
    make: car.make,
  };

  return obj;
});

const task3 = cars.filter(car => car.price > 25000);

const task4 = cars.find(car => car.make === 'Toyota');

console.log(task3);

// =================
// cars.sort((a, b) => {
//   return a.amount - b.amount;
// });

// cars.sort((a, b) => {
//   if (a.make === b.make) {
//     if (a.type === b.type) {
//       return a.price - b.price;
//     }
//     return a.type.localeCompare(b.type);
//   }
//   return a.make.localeCompare(b.make);
// });

// console.table(cars);

// const arr = [5, 1, 1, 4, 7, 9];
// const result = [...arr].sort((left, right) => {
//   return left - right;
// });

// const arr = ['bawdef', 'awd', 'cawd', 'awdeaf', 'drgdrg'];

// const result = [...arr].sort((b, a) => {
//   return a.localeCompare(b);
// });

// console.log(result);

// ======================

// повернути масив лише з make
// відсортувати за make
// лише ті які коштують > 25

// filter.map.sort
// filter.sort.map
// map.sort.filter
// map.filter.map
// sort.filter.map
//

// filter.map.sort

let totalIteration = 0;

// const result = cars
//   .map(car => {
//     totalIteration++;
//     return car.make;
//   })
//   .sort((a, b) => {
//     totalIteration++;
//     return a.localeCompare(b);
//   })
//   .filter((element, index, array) => {
//     totalIteration++;
//     return car === 'Toyota';
//   });

// console.log(totalIteration);
// console.log(result);
