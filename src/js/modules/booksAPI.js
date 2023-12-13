import axios from 'axios';

const axios2 = axios.create({
  baseURL: 'http://localhost:3000/books',
  headers: {
    test: 'Hello',
    api_key: '123424353',
  },
});

export class BooksAPI {
  getBooks() {
    return axios2.get();
  }

  createBook(book) {
    return axios2.post('', book);
  }

  resetBook({ id, ...book }) {
    return axios2.put(`/${id}`, book);
  }

  updateBook({ id, ...book }) {
    return axios2.patch(`/${id}`, book);
  }

  deleteBook(id) {
    return axios2.delete(`/${id}`);
  }
}
