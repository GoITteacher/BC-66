/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');
const divContainer = document.querySelector('.js-div-block');

//==================================
// function handleDivContainerBlur() {}
// function targetBtnClickHandler() {}
// function onTargetBtnClick() {}
//==================================
// addListenerBtn.addEventListener('click', onAddListenerBtnClick);
// removeListenerBtn.addEventListener('click', onRemoveBtnClick);

// function onAddListenerBtnClick() {
//   console.log('Add');
//   targetBtn.addEventListener('click', onTargetBtnClick);
// }

// function onRemoveBtnClick() {
//   console.log('Remove');
//   targetBtn.removeEventListener('click', onTargetBtnClick);
// }

// function onTargetBtnClick() {
//   console.log('Hello3');
// }

// ================================

/* 
click
input
blur 
focus
*/

// targetBtn.addEventListener('click', evt => {
//   console.log(evt.currentTarget);
// });
