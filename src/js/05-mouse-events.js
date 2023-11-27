/*
 * События мыши
 * - mouseenter и mouseleave (это ховер)
 * - mouseover и mouseout
 * - mousemove (chatty event - болтливое событие)
 * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field
 */

const boxRef = document.querySelector('.js-box');

/* boxRef.addEventListener('mouseenter', e => {
  boxRef.classList.add('box--active');
});

boxRef.addEventListener('mouseleave', e => {
  boxRef.classList.remove('box--active');
}); */

// boxRef.addEventListener('mouseover', e => {
//   e.stopPropagation();
//   console.log('over');
//   boxRef.classList.add('box--active');
// });

// boxRef.addEventListener('mouseout', e => {
//   e.stopPropagation();
//   console.log('out');
//   boxRef.classList.remove('box--active');
// });

// =========================

// boxRef.addEventListener('mousemove', evt => {
//   console.log(evt);
//   const child = boxRef.firstElementChild;
//   child.style.left = evt.x - 50 + 'px';
//   child.style.top = evt.y - 50 + 'px';
// });

document.addEventListener('selectstart', evt => {
  console.log(evt);
});
