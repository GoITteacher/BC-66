const BASE_URL = 'https://newsapi.org/v2';
const END_POINT = '/everything';

export class NewsAPI {
  constructor() {
    this.q = '';
    this.page = 1;
    this.pageSize = 40;
    this.totalPages = 1;
  }

  fetchArticles() {
    const PARAMS = new URLSearchParams({
      apiKey: 'c8747511a2c34730a83caaff4f3693e7',
      q: this.q,
      pageSize: this.pageSize,
      page: this.page,
    });

    const url = `${BASE_URL}${END_POINT}?${PARAMS}`;

    return fetch(url).then(res => res.json());
  }
}
