/* //Класи
/* 
  -Оголошення класу
  -Конструктор класу
  -Об'єкт параметрів
  -Методи класу
  -Приватні властивості (Інкапсуляція)
  -Геттери і сеттери
  -Статичні властивості
  -Статичні методи
  -Наслідування класів
  -Конструктор дочірнього класу
  -Методи дочірнього класу

*/

// class User {
//   #age;

//   constructor({ name, age, phoneNumber }) {
//     this.name = name || 'Default';
//     this.#age = age || 1;
//     this.phoneNumber = phoneNumber || 'Default';
//   }

// showName() {
//   console.log('Name', this.name);
// }

// get age() {
//   return `Age: ${this.#age}`;
// }

// set bye(newValue) {

// }
// }

// const user = new User({ name: 'Max', age: 10 });

// console.log(user.age);

// let x = 10;
// console.log(x);
// =====================

// const user1 = {
//   name: 'test1',
//   showName() {
//     console.log('Name', mthis.name);
//   },
// };

// const user2 = {
//   name: 'test2',
//   showName() {
//     console.log('Name', this.name);
//   },
// };

// const user3 = {
//   name: 'test3',
//   showName() {
//     console.log('Name', this.name);
//   },
// };

// console.log(user1);
// console.log(user2);
// console.log(user3);

// ==========================

/* class User {
  static count = 0;

  constructor() {
    this.name = '' + User.PI;
    this.age = 0;
    User.count += 1;
  }

  // static get PI() {
  //   return User.#PI;
  // }

  static getTotal() {}
} */

// const user1 = new User();
// const user2 = new User();
// const user3 = new User();
// const user4 = new User();
// const user5 = new User();

// console.log(user1);
// console.log(user2);

// console.log(User.count);

/* 
Синтаксис літерала об'єкта дозволяє створити один об'єкт. Проте, часто потрібно створити багато однотипних об'єктів з однаковим набором властивостей, але різними значеннями і методами для взаємодії з ними. Все це потрібно робити динамічно, під час виконання програми. З цією метою використовують класи - спеціальний синтаксис оголошення функції для створення об'єктів.
*/

//Оголошення класу

//Результат виклику new User() - це об'єкт, який називається екземпляром класу, тому що містить дані і поведінку, що описуються класом.

//Конструктор класу

/* 
Виклик класу з оператором new призводить до створення нового об'єкта і виклику конструктора в контексті цього об'єкта. Тобто this всередині конструктора буде посилатися на новостворений об'єкт. Це дозволяє додавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.
*/

//Об'єкт параметрів

// const options = {
//   speed: '80',
//   model: 'awdaw',
//   price: 10000000,
//   type: 'sport',
// };

// =======================================

class Animal {
  #test = 10;
  static count = 0;

  showInfo() {
    console.log(this.name);
    console.log(this.age);
  }

  sleep() {
    console.log('Zzzzz');
  }

  constructor(name, age) {
    this.name = name;
    this.age = age;
    Animal.count += 1;
  }

  getTest1() {
    console.log(this.#test);
  }
}

class Cat extends Animal {
  #test = 20;

  constructor(name, age, paws) {
    super(name, age);
    this.name = 'Hello';
    this.paws = paws;
  }

  sayMyaw() {
    console.log('Myaw myaw');
  }

  sleep() {
    console.log('Cat zzzzzz');
  }

  getTest2() {
    console.log(this.#test);
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name, age);
    this.name = 'Hello';
    this.paws = 4;
  }

  sayMyaw() {
    console.log('Myaw myaw');
  }

  sleep() {
    console.log('Cat zzzzzz');
  }
}

class Bird extends Animal {
  constructor(name, age, paws) {
    this.name = 'Hello';
    this.wings = 2;
  }

  sayMyaw() {
    console.log('Myaw myaw');
  }

  sleep() {
    console.log('Cat zzzzzz');
  }
}

const cat1 = new Cat('Marsil', 10, 4);
const cat2 = new Cat('Marsil', 10, 5);
const dog1 = new Dog('Marsil', 10, 4);
const dog2 = new Dog('Marsil', 10, 5);

console.log(Dog.count);
console.log(Animal.count);
