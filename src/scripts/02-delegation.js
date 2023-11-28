let refs = {
  firstBoxElem: document.querySelector('.js-box-1'),
};

console.log(refs.firstBoxElem);

// refs.firstBoxElem.addEventListener('click', e => {
//   console.log(e.target !== e.currentTarget);
// });

// refs.firstBoxElem.addEventListener('click', e => {
//   if (e.target.classList.contains('js-box-1')) return;
//   console.log(e.target.textContent);
// });

refs.firstBoxElem.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return;
  console.log(e.target.textContent);
});
