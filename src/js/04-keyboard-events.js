/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
  boxElem: document.querySelector('.my-test-box'),
};

// document.addEventListener('keypress', evt => {
//   console.log('keypress', evt);
//   console.log(evt.code);
//   console.log(evt.key);
// });

document.addEventListener('keydown', evt => {
  console.log('Keydown');
  refs.boxElem.classList.replace('up', 'down');
  // console.log(evt.code);
  // console.log(evt.key);
});

document.addEventListener('keyup', () => {
  console.log('UP');
  refs.boxElem.classList.replace('down', 'up');
});
