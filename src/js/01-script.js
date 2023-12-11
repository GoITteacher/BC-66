import { NewsAPI } from './modules/newsApi2';

const refs = {
  form: document.querySelector('.js-search-form'),
  articleList: document.querySelector('.js-article-list'),
  loadMoreBtn: document.querySelector('.js-btn-load'),
};

const newsAPI = new NewsAPI();

// ==========================================

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
      changeStatusLoadMore();
    })
    .finally(hideLoader);
});

refs.loadMoreBtn.addEventListener('click', () => {
  newsAPI.page += 1;
  showLoader();
  newsAPI
    .getArticles()
    .then(result => {
      renderArticles(result.articles);
      changeStatusLoadMore();
    })
    .finally(hideLoader);
});
// ============== RENDER ===================

function changeStatusLoadMore() {
  const currentPage = newsAPI.page;
  const totalPages = newsAPI.totalPages;
  refs.loadMoreBtn.disabled = currentPage >= totalPages;
}

function articleTemplate({ author, title, summary, media, published_date }) {
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

function articlesTemplate(articles) {
  return articles.map(articleTemplate).join('');
}

function renderArticles(articles) {
  const markup = articlesTemplate(articles);
  refs.articleList.insertAdjacentHTML('beforeend', markup);
}

// ======== LOADER ========

function showLoader() {
  document.body.classList.add('show-loader');
}
function hideLoader() {
  document.body.classList.remove('show-loader');
}
