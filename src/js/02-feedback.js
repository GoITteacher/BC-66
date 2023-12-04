import '../css/common.css';
import '../css/feedback-form.css';

const refs = {
  form: document.querySelector('.js-feedback-form'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormInput);

/* 
function onFormSubmit(e) {
  e.preventDefault();
  const { name, message } = e.target.elements;

  const obj = {
    name: name.value,
    message: message.value,
  };

  console.log(obj);

  localStorage.removeItem('name');
  localStorage.removeItem('message');

  e.target.reset();
}

function onFormInput(e) {
  const name = e.target.name;
  const value = e.target.value;
  localStorage.setItem(name, value);
}

function onWindowLoad() {
  const name = localStorage.getItem('name');
  const message = localStorage.getItem('message');

  refs.form.elements.name.value = name || 'Анонимус';
  refs.form.elements.message.value = message;
}

onWindowLoad(); 
*/
