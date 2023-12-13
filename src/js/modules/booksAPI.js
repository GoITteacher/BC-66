import axios from 'axios';

const axios2 = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    api_key: '123424353',
  },
  params: {
    api_key: 'HELLO_KEY',
  },
});

/* export class BooksAPI2 {
  static BASE_URL = 'http://localhost:3000';
  static END_POINT = '/books';

  constructor() {
    this.url = `${BooksAPI2.BASE_URL}${BooksAPI2.END_POINT}`;
  }

  getBooks() {
    return fetch(this.url).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Error create book!');
      }
    });
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

    return fetch(`${this.url}/${id}`, options).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Error create book!');
      }
    });
  }

  updateBook({ id, ...book }) {
    const options = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    };

    return fetch(`${this.url}/${id}`, options).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Error create book!');
      }
    });
  }

  deleteBook(id) {
    const options = {
      method: 'DELETE',
    };

    return fetch(`${this.url}/${id}`, options).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Error create book!');
      }
    });
  }
}
 */

export class BooksAPI {
  async getBooks() {
    const config = {
      params: {
        test: '123',
        test2: 'hello',
      },
    };
    const res = await axios2.get('/books', config);
    return res.data;
  }

  async createBook(book) {
    const res = await axios2.post('/books', book);
    return res.data;
  }

  async resetBook({ id, ...book }) {
    const res = await axios2.put(`/books/${id}`, book);
    return res.data;
  }

  async updateBook({ id, ...book }) {
    const res = await axios2.patch(`/books/${id}`, book);
    return res.data;
  }

  deleteBook(id) {
    return axios2.delete(`/${id}`);
  }
}
