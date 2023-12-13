// const btnElem = document.querySelector('.js-btn');

// btnElem.addEventListener('click', async () => {
//   const ids = [1, 3, 7, 2, 9];
//   ids.forEach(async id => {
//     const user = await getUsers(id);
//     console.log(user);
//   });
// });

// btnElem.addEventListener('click', async () => {
//   const ids = [1, 3, 7, 2, 9];
//   const users = [];
//   for (const id of ids) {
//     const user = await getUsers(id);
//     users.push(user);
//   }
// });

// btnElem.addEventListener('click', () => {
//   console.log(1);
//   console.log(2);
//   console.log('data');
//   console.log(3);
//   console.log(4);
// });

// function getUsers(id) {
//   const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//   return fetch(url).then(res => res.json());
// }

// ======================
/* async function foo() {}

const foo = async () => {};

const obj = {
  async showInfo() {},
};

class User {
  async showThis() {}
}

foo(async () => {});
 */

// async function getUsers(id) {
//   const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

// async function foo() {
//   const p1 = getUsers(1);
//   const p2 = getUsers(2);
//   const p3 = getUsers(3);

//   const result = await Promise.all([p1, p2, p3]);
//   console.log(result);
// }

// foo();

// =====================

async function foo() {
  const ids = [1, 3, 5, 7, 9];

  const userPromises = ids.map(async id => {
    return getUsers(id);
  });

  const users = await Promise.all(userPromises);
  console.log(users);
}

foo();
