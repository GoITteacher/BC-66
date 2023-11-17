/*
  * Функція результатом своєї роботи може повертати іншу функцію.
  *
  * Функція, що повертається під час виклику буде мати доступ
  * до всіх локальних змінних (області видимості)
  * Батьківської функції (той з якої її повернули),
  * це називається «замикання».
/
*/

// function createCalc(owner, q) {
//   console.log('Hello');
//   const t = 20;

//   function calc(x, y) {
//     debugger;
//     q++;
//     console.log(owner, x + y + t);
//   }

//   return calc;
// }

// const calc1 = createCalc('Volodka', 10);

// calc1(10, 20);
// calc1(2, 12);
// calc1(234, 345);

// const calc2 = createCalc('Max');

// calc1(20, 50);
// calc1(6, 2);
// calc1(5, 2);

// calc2(5, 1);
// calc2(3, 1);

// =============================

// function foo(){
//     const x = 10;

//     function test(){
//         console.log(x * 2);
//     }

//     return test
// }

// const myFoo = foo();

// myFoo();
