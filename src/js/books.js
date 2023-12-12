import { BooksAPI } from './modules/booksAPI';

const refs = {
  createForm: document.querySelector('.js-create-form'),
  resetForm: document.querySelector('.js-reset-form'),
  updateForm: document.querySelector('.js-update-form'),
  deleteForm: document.querySelector('.js-delete-form'),
  bookList: document.querySelector('.js-article-list'),
};

const booksApi = new BooksAPI();
// ==============================================

refs.createForm.addEventListener('submit', onCreateBook);
refs.resetForm.addEventListener('submit', onResetBook);
refs.updateForm.addEventListener('submit', onUpdateBook);
refs.deleteForm.addEventListener('submit', onDeleteBook);
refs.bookList.addEventListener('click', onBookClick);
// ===============================================

function onCreateBook(e) {
  e.preventDefault();
  const book = {};
  const formData = new FormData(e.target);

  formData.forEach((value, key) => {
    key = key.slice(4).toLowerCase();
    book[key] = value;
  });

  booksApi
    .createBook(book)
    .then(result => {
      const markup = bookTemplate(result);
      refs.bookList.insertAdjacentHTML('afterbegin', markup);
    })
    .catch(err => {
      console.log(err);
    });

  e.target.reset();
}

function onResetBook(e) {
  e.preventDefault();
  const book = {};
  const formData = new FormData(e.target);

  formData.forEach((value, key) => {
    key = key.slice(4).toLowerCase();
    book[key] = value;
  });

  booksApi
    .resetBook(book)
    .then(updatedBook => {
      const oldBook = document.querySelector(`[data-id="${book.id}"]`);
      const markup = bookTemplate(updatedBook);
      oldBook.insertAdjacentHTML('beforebegin', markup);
      oldBook.remove();
    })
    .catch(err => {
      console.log(err);
    });

  e.target.reset();
}

function onUpdateBook(e) {
  e.preventDefault();
  const book = {};
  const formData = new FormData(e.target);

  formData.forEach((value, key) => {
    if (value.trim()) {
      key = key.slice(4).toLowerCase();
      book[key] = value;
    }
  });

  booksApi.updateBook(book).then(updatedBook => {
    const oldBook = document.querySelector(`[data-id="${book.id}"]`);
    const markup = bookTemplate(updatedBook);
    oldBook.insertAdjacentHTML('beforebegin', markup);
    oldBook.remove();
  });

  e.target.reset();
}

function onDeleteBook(e) {
  e.preventDefault();
  const id = e.target.elements.bookId.value;

  booksApi.deleteBook(id).then(() => {
    const oldBook = document.querySelector(`[data-id="${id}"]`);
    oldBook.remove();
  });

  e.target.reset();
}

function onBookClick(e) {
  if (e.target.nodeName != 'BUTTON') return;
  const id = e.target.dataset.id;
  booksApi.deleteBook(id).then(() => {
    e.target.closest('li').remove();
  });
}

// ===============================================

function bookTemplate({ id, title, author, desc }) {
  return `<li class="card book-item" data-id="${id}">
  <h3>${id} - ${title}</h3>
  <p>${desc}</p>
  <p>${author}</p>
  <button data-type="delete-book" data-id=${id}>delete</button>
</li>`;
}

function renderBooks(books) {
  const markup = books.map(bookTemplate).join('');
  refs.bookList.innerHTML = markup;
}

// ===============================================

function loadData() {
  booksApi.getBooks().then(books => {
    renderBooks(books);
  });
}
loadData();
