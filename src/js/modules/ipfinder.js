const refs = {
  formEl: document.querySelector('.js-search-form[data-id="4"]'),
  cardInfo: document.querySelector('.js-ip-form'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const ip = e.target.elements.query.value;
  fetchInfoByIP(ip).then(info => {
    const markup = ipTemplate(info);
    refs.cardInfo.innerHTML = markup;
  });
});

function ipTemplate(ipInfo) {
  console.log(ipInfo);
  return `
  <div class="info-item">
    <img class="flag" src="${ipInfo.country_flag}" alt="Flag of Ukraine">
    <span class="info-label">Country:</span>
    <span class="info-value">${ipInfo.country}</span>
  </div>
  <div class="info-item">
    <span class="info-label">IP Address:</span>
    <span class="info-value">${ipInfo.ip}</span>
  </div>
  <div class="info-item">
    <span class="info-label">Region:</span>
    <span class="info-value">${ipInfo.region}</span>
  </div>
  <div class="info-item">
    <span class="info-label">City:</span>
    <span class="info-value">${ipInfo.city}</span>
  </div>
  <div class="info-item">
    <span class="info-label">Timezone:</span>
    <span class="info-value">${ipInfo.timezone}${ipInfo.timezone_gmt}</span>
  </div>
  <div class="info-item">
    <span class="info-label">Currency:</span>
    <span class="info-value">${ipInfo.currency}</span>
  </div>
  <div class="info-item">
    <span class="info-label">Currency Rate:</span>
    <span class="info-value">${ipInfo.currency_rates} ${ipInfo.currency_symbol}</span>
  </div>
  <div class="info-item">
    <span class="info-label">Completed Requests:</span>
    <span class="info-value">${ipInfo.completed_requests}</span>
  </div>

  <a href="https://www.google.com/maps/${ipInfo.latitude},${ipInfo.longitude}">GOOGLE MAPS</a>
`;
}

function fetchInfoByIP(ip) {
  const BASE_URL = 'https://ip-geolocation-ipwhois-io.p.rapidapi.com';
  const END_POINT = '/json/';
  const PARAMS = new URLSearchParams({ ip });

  const url = `${BASE_URL}${END_POINT}?${PARAMS}`;
  const options = {
    headers: {
      'X-RapidAPI-Key': 'f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1',
      'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}
