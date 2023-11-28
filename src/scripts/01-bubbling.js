/* 
- event.target
- event.currentTarget

- stopPropagation()
- stopImmediatePropagation()

*/

let refs = {
  parent: document.querySelector('.js-parent'),
  child: document.querySelector('.js-child'),
  descendant: document.querySelector('.js-descendant'),
};

refs.parent.addEventListener('click', e => {
  console.log(e.target);
});

refs.child.addEventListener('click', e => {
  console.log(e.target);
});

refs.descendant.addEventListener('click', e => {
  e.stopImmediatePropagation();
  console.log('descendant1');
});

refs.descendant.addEventListener('click', e => {
  console.log('descendant2');
});

refs.descendant.addEventListener('click', e => {
  console.log('descendant3');
});
