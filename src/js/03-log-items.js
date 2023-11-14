/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */

/* 
name - logItems 

params:
    items - массив даних
    
return - нічого
 */

// function logItems(items) {
//   for (let item of items) {
//     console.log(item);
//   }
// }

// logItems([1, 2, 4, 6, 2, 57, 1, 1]);

// =============================

function countOddElements(numbers) {
  let count = 0;

  for (let num of numbers) {
    if (num % 2 === 0) {
      count++;
    }
  }

  return count;
}

// function sumOddElements(numbers) {
//   let total = 0;

//   for (let num of numbers) {
//     if (num % 2 === 0) {
//       total += num;
//     }
//   }

//   return total;
// }

// const arr = [1, 4, 6, 32, 3, 5, 7, 7, 3, 2, 556, 23, 23, 45, 645, 23434, 5];

// const result = sumOddElements(arr);

// console.log(result);
