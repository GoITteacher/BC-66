/* 
Контекст виконання функції
*/

/* 
Правила визначення this
    - this у глобальній області видимості
    - this в методі об'єкта
    - this в callback-функціях
    - this у стрілочних функціях
*/

// =================

// function foo() {
//   console.log(this);
// }
// foo();

// =================
/* 
const user1 = {
  name: 'Max',
  age: 29,
  showInfo() {
    console.log(this);
  },
};

const user2 = {
  name: 'User2',
  showInfo: user1.showInfo,
};
const user3 = {
  name: 'User3',
  showInfo: user2.showInfo,
};
const user4 = {
  name: 'User4',
  showInfo: user3.showInfo,
};
const user5 = {
  name: 'User5',
  showInfo: user4.showInfo,
};
const user6 = {
  name: 'User6',
  showInfo: user5.showInfo,
};

user4.showInfo(); */

// =================

/* 
1. Який тип функції
- якщо стрілчата, дивимось момент створення
- якщо звичайна, дивимось момент виклику
*/

//- this у callback функціях
// const user1 = {
//   name: 'Max',
//   age: 29,
//   showInfo() {
//     console.log(this);
//   },
// };

// function sum(callback) {
//   const obj = {
//     name: 'obj',
//     test: callback,
//   };

//   obj.test();
// }

// sum(user1.showInfo);

//- this у стрілочних функціях

/* 
1. Який тип функції
- якщо стрілчата, дивимось момент створення і взяти батьківський контекст
- якщо звичайна, дивимось момент виклику
*/

/* const user1 = {
  name: 'Vasya',
  foo() {
    const foo1 = () => {
      user2.test = test;
      user2.test();
    };

    foo1();
  },
};
const user2 = {
  name: 'Petya',
};

function test() {
  console.log(this);
} */

// ===============================
/* 
Методи функцій
    - Метод call()
    - Метод apply()
    - Метод bind()
*/

/* function foo() {
  console.log(this);
  return 'Hello';
}

const user1 = {
  name: 'Vasya',
  showInfo() {
    console.log(this);
  },
};
const user2 = {
  name: 'Vanya',
};
const user3 = {
  name: 'Petya',
};

const arr = [user1, user2]; */

// user1.showInfo(10, 20);

// user1.showInfo.call(user3, t1, t2);
// user1.showInfo.apply(arr[0], [t1, t2]);
// user1.showInfo();
// =======================================

//bind

/* const user1 = {
  name: 'Vasya',
  showInfo() {
    console.log(this);
  },
};
const user2 = {
  name: 'Vanya',
};
const user3 = {
  name: 'Petya',
};

function foo() {
  console.log(this);
  return 'Hello';
}

const copyFoo = foo.bind(user3);

const copyFoo1 = copyFoo.bind(user1);

copyFoo1(); */

// ===================================

// 0 - arrow
// 1 - bind
// 2 - call apply
// 3 - object
// 4 - global context
