const refs = {
  formElem: document.querySelector('.js-search-form[data-id="1"]'),
  container: document.querySelector('.js-hero-container'),
};

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  const superhero = e.target.elements.query.value;
  searchHero(superhero).then(hero => {
    const markup = heroTemplate(hero);
    refs.container.insertAdjacentHTML('afterbegin', markup);
  });
});

function searchHero(superhero) {
  const BASE_URL = 'https://superhero-search.p.rapidapi.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    hero: superhero,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;
  const options = {
    headers: {
      'X-RapidAPI-Key': 'f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1',
      'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}

function heroTemplate(hero) {
  return `
<div class="hero-card card">
  <div class="image-container">
  <img
    src="${hero.images.lg}"
    alt="#"
    class="hero-image"
  />
</div>
<div class="hero-body">
  <h4 class="hero-name">${hero.biography.fullName}</h4>
  <p class="hero-bio">
    ${hero.name} - ${hero.work.base}Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Vero, sed facilis, necessitatibus at neque cum deserunt maxime quos
    laudantium doloremque nesciunt ea voluptates! Atque fugiat assumenda
    incidunt laborum quas a!
  </p>
</div>
</div>`;
}
