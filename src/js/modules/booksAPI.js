export class BooksAPI {
  static BASE_URL = 'http://localhost:3000';
  static END_POINT = '/books';

  constructor() {
    this.url = `${BooksAPI.BASE_URL}${BooksAPI.END_POINT}`;
  }

  getBooks() {
    return fetch(this.url).then(res => res.json());
  }

  createBook(book) {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    };

    return fetch(this.url, options).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Error create book!');
      }
    });
  }

  resetBook({ id, ...book }) {
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    };

    return fetch(`${this.url}/${id}`, options).then(res => res.json());
  }

  updateBook({ id, ...book }) {
    const options = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    };

    return fetch(`${this.url}/${id}`, options).then(res => res.json());
  }

  deleteBook(id) {
    const options = {
      method: 'DELETE',
    };

    return fetch(`${this.url}/${id}`, options).then(res => res.json());
  }
}
