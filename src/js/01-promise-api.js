/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

/* const promise = new Promise(resolve => {
  const delay = Math.round(Math.random() * 7) * 1000;
  console.log(delay);
  setTimeout(() => {
    const random = Math.random();
    if (random >= 0.5) {
      resolve('Приходьте');
    } else {
      //y('Вибачте, не вийшло');
    }
  }, delay);
}); */

/* 




*/

// promise.then(null, onRejected);

/* function onFulfilled(result) {
  console.log('onFulfilled -> onFulfilled');
  console.log(`✅ ${result}`);
}

function onRejected(error) {
  console.log('onRejected -> onRejected');
  console.log(`❌ ${error}`);
} */

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

// const promise = new Promise((resolve, reject) => {
//   resolve(5);
// });

/* const promise = fetch('https://pokeapi.co/api/v2/pokemon');

promise
  .then(result => {
    return result.json();
  })
  .then(data => {
    return data.results[0];
  })
  .then(pokemon => {
    const pokemonPromise = fetch(pokemon.url);
    return pokemonPromise;
  })
  .then(result => {
    return result.json();
  })
  .then(pokemonInfo => {
    console.log(pokemonInfo);
  });
 */

// Promise.then()
//   .catch()
//   .then()
//   .catch()
//   .finally(() => {
//     Notify.show('Приємного перегляду');
//   });
