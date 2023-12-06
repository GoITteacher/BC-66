const refs = {
  form: document.querySelector('.js-form'),
  table: document.querySelector('.js-results-table tbody'),
};
let counter = 1;

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const count = +e.target.elements.count.value;
  const horses = [];

  for (let i = 0; i < count; i++) {
    horses.push(createHorse(i));
  }

  Promise.race(horses).then(({ idx, delay }) => {
    const markup = templateWinner(counter++, idx, delay);
    refs.table.insertAdjacentHTML('beforeend', markup);
  });
});

function createHorse(idx) {
  const promise = new Promise(resolve => {
    const delay = Math.round(Math.random() * 10) * 1000 + 3000;
    setTimeout(() => {
      resolve({ idx, delay });
    }, delay);
  });

  return promise;
}

function templateWinner(idx, number, time) {
  return `<tr>
    <td>${idx}</td>
    <td>${number}</td>
    <td>${time}</td>
  </tr>`;
}
