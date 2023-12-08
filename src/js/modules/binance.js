const refs = {
  formElem: document.querySelector('.js-search-form[data-id="2"]'),
  container: document.querySelector('.js-binance-info'),
};

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements.query.value;
  getCurrentPrice(query)
    .then(result => {
      const markup = symbolTemplate(result);
      refs.container.innerHTML = markup;
    })
    .catch(() => {
      refs.container.innerHTML = 'SORRY';
    });
});

function symbolTemplate({ symbol, price }) {
  price = Number(price);
  price = price > 10 ? price.toFixed(2) : price;

  return `<span>${symbol}</span>
  <span>${price}</span>`;
}

function getCurrentPrice(symbol) {
  const BASE_URL = 'https://binance43.p.rapidapi.com';
  const END_POINT = '/ticker/price';
  const PARAMS = new URLSearchParams({ symbol });

  const url = `${BASE_URL}${END_POINT}?${PARAMS}`;

  return fetch(url, {
    headers: {
      'X-RapidAPI-Key': 'f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1',
      'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
    },
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res.status);
    }
  });
}
