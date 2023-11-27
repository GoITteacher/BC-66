/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};
/* 
refs.input.addEventListener('focus', evt => {
  console.log('FOCUS');
  refs.input.classList.remove('wrong');
});

refs.input.addEventListener('blur', evt => {
  const value = evt.target.value;
  const maxLength = Number(evt.target.dataset.maxLength);

  if (value.length > maxLength) {
    refs.input.classList.add('wrong');
  }
}); 
*/

// refs.input.addEventListener('input', evt => {
//   if (evt.target.value.length > 6) {
//     evt.target.style.backgroundColor = 'green';
//   } else {
//     evt.target.style.backgroundColor = 'red';
//   }
// });

/* refs.input.addEventListener('change', e => {
  console.log(e.target.value);
  document.body.style.backgroundColor = e.target.value;
}); */

refs.licenseCheckbox.addEventListener('change', e => {
  const isChecked = e.target.checked;
  refs.btn.disabled = !isChecked;
});
