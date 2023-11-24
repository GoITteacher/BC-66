// let myBtn = document.querySelector('#testButton');
// let listItem = document.querySelector('.js-list');

// const liElements = listItem.querySelectorAll(':scope>li');
// console.log(liElements);

/* 
У властивості classList зберігається об'єкт з методами для роботи з класами елемента.

elem.classList.contains(cls) - повертає true або false, залежно від наявності класу cls в елемента.
elem.classList.add(cls) - додає клас cls до списку класів елемента.
elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента.
elem.classList.toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.
elem.classList.replace(oldClass, newClass) - замінює існуючий клас oldClass на вказаний newClass.
*/

// for (let i = 0; i < liElements.length; i++) {
//   if (i % 2 === 0) liElements[i].classList.add('test1', 'block');
//   else liElements[i].classList.add('test2', 'block');
// }

// function onClick() {
// liElements[i].classList.add('test2', 'block');
// liElements[0].classList.remove('bold', 'blue');
// liElements[0].classList.toggle('blue');
// liElements[0].classList.replace('black', 'tomato');
// }
// myBtn.addEventListener('click', onClick);

/* 
Властивість style
*/

// const liElem = document.querySelector('li');
// console.log(liElem);

// liElem.style.border = '1px solid black';
// liElem.style.borderRadius = '10px';
// liElem.style.padding = '15px';

// const colorInputElem = document.querySelector('.item');

// colorInputElem.addEventListener('input', () => {
//   document.body.style.fontSize = colorInputElem.value;
// });
