/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

// const promise = new Promise(resolve => {
//   setTimeout(() => {
//     resolve(100);
//   }, 2000);
// });

function createPromise(value, delay, isOk) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOk) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });
  return promise;
}

// for (let i = 0; i < 10; i++) {
//   const isOk = Math.random() > 0.5;
//   const promise = createPromise(i, i * 100, isOk);

//   promise
//     .then(value => {
//       console.log('✅', value);
//     })
//     .catch(err => {
//       console.log('❌', err);
//     });
// }

// ==================================

// function foo() {
//   return Promise.reject([]);
// }

// console.log(foo());

// ==========================================

// const promises = [];
// for (let i = 0; i < 10; i++) {
//   const isOk = Math.random() > 0.5;
//   const promise = createPromise(i, i * 100, isOk);
//   promises.push(promise);
// }

// console.log(promises);

// Promise.race(promises)
//   .then(value => {
//     console.log(value);
//   })
//   .catch(err => {
//     console.log('❌', err);
//   });

// Promise.allSettled(promises).then(arr => {
//   console.log(arr);
// });

// Promise.all(promises)
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log('❌', err);
//   });

/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

/*
 * Покемоны с https://pokeapi.co/
 */

// ===========================
