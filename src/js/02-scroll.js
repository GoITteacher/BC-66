import { NewsAPI } from './modules/newsApi2';

const refs = {
  form: document.querySelector('.js-search-form'),
  articleList: document.querySelector('.js-article-list'),
  targetElem: document.querySelector('.js-target'),
};

const newsAPI = new NewsAPI();

let observer = new IntersectionObserver(loadMore, {
  rootMargin: '1000px',
  threshold: 1.0,
});

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements.query.value;
  newsAPI.q = query;
  newsAPI.page = 1;
  showLoader();
  newsAPI
    .getArticles()
    .then(result => {
      refs.articleList.innerHTML = '';
      newsAPI.totalPages = result.total_pages;
      renderArticles(result.articles);
      observer.observe(refs.targetElem);
      changeStatusObserver();
    })
    .finally(hideLoader);
});

// =====

function loadMore(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      newsAPI.page += 1;
      // showLoader();
      newsAPI.getArticles().then(result => {
        const rectangle =
          refs.articleList.lastElementChild.getBoundingClientRect();
        console.log(rectangle);

        renderArticles(result.articles);

        changeStatusObserver();
      });
      // .finally(hideLoader);
    }
  });
}

function templateArticle({ author, title, summary, media, published_date }) {
  return `
    <li class="card news-card">
          <img loading="lazy"
            class="news-image"
            src="${media}"
            alt="${title}"
          />
          <h3 class="card-title">
            ${title}
          </h3>
          <p class="card-desc">
          ${summary}
          </p>
          <div class="card-footer">
            <span>${author}</span>
            <span>${published_date}</span>
          </div>
        </li>`;
}

function renderArticles(articles) {
  const markup = articles.map(templateArticle).join('');
  refs.articleList.insertAdjacentHTML('beforeend', markup);
}

function showLoader() {
  document.body.classList.add('show-loader');
}
function hideLoader() {
  document.body.classList.remove('show-loader');
}

function changeStatusObserver() {
  if (newsAPI.page >= newsAPI.totalPages) {
    observer.unobserve(refs.targetElem);
  }
}
