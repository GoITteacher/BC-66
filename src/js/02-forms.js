/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const formEl = document.querySelector('.js-register-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const elements = e.target.elements;
  const email = elements.email1.value;
  const text1 = elements.text1.value;
  const text2 = elements.text2.value;
  const password = elements.password.value;

  const subscription = e.target.elements.subscription.value;

  const data = {
    email,
    text1,
    text2,
    password,
    subscription,
  };

  console.log(data);
}
