import '../css/common.css';

/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

let timeoutId;
const refs = {
  spam: document.querySelector('.js-alert'),
};

setTimeout(showAlert, 3000);

refs.spam.addEventListener('click', () => {
  hideAlert();
  clearTimeout(timeoutId);
});

function showAlert() {
  refs.spam.classList.add('is-visible');
  timeoutId = setTimeout(hideAlert, 10000);
}

function hideAlert() {
  console.log('hide');
  refs.spam.classList.remove('is-visible');
}
