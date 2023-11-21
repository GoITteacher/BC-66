// let user = {
//   firstName: 'Вася',
//   func: func,
// };

// function func() {
//   console.log(this);
// }

// func();

// =========================================

// const obj2 = {
//   name: 'obj2',
// };

// let obj1 = {
//   name: 'obj1',
//   func() {
//     return function () {
//       console.log(this);
//     };
//   },
// };

// const foo = obj1.func.bind(obj1);
// const newFunc = foo.call(obj2);

// newFunc();

// =========================================

const obj1 = {
  name: 'obj1',
  func() {
    return () => {
      console.log(this);
    };
  },
};

let obj2 = {
  name: 'obj2',
  func() {
    return () => {
      console.log(this);
    };
  },
};

const newFunc2 = obj1.func.bind(obj2);
newFunc2.call(obj2);
// =========================================
