import { BooksAPI } from './modules/booksAPI';
// ===================================================

const refs = {
  createFormElem: document.querySelector('.js-create-form'),
  updateFormElem: document.querySelector('.js-update-form'),
  resetFormElem: document.querySelector('.js-reset-form'),
  deleteFormElem: document.querySelector('.js-delete-form'),
  bookListElem: document.querySelector('.js-article-list'),
};
const booksAPI = new BooksAPI();
// ===================================================
refs.createFormElem.addEventListener('submit', onBookCreate);
refs.updateFormElem.addEventListener('submit', onBookUpdate);
refs.resetFormElem.addEventListener('submit', onBookReset);
refs.deleteFormElem.addEventListener('submit', onBookDelete);

async function onBookCreate(e) {
  e.preventDefault();
  const book = {};
  const formData = new FormData(e.target);
  formData.forEach((value, key) => {
    key = key.replace('book', '').toLowerCase();
    book[key] = value;
  });

  try {
    const createdBook = await booksAPI.createBook(book);
    const markup = bookTemplate(createdBook);
    refs.bookListElem.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    console.log(err);
  }

  e.target.reset();
}

async function onBookUpdate(e) {
  e.preventDefault();
  const book = {};
  const formData = new FormData(e.target);

  formData.forEach((value, key) => {
    if (!value) return;
    key = key.replace('book', '').toLowerCase();
    book[key] = value;
  });

  try {
    const newBook = await booksAPI.updateBook(book);
    rerenderBook(newBook);
  } catch (err) {
    console.log(err);
  }

  e.target.reset();
}
async function onBookReset(e) {
  e.preventDefault();
  const book = {};
  const formData = new FormData(e.target);
  formData.forEach((value, key) => {
    key = key.replace('book', '').toLowerCase();
    book[key] = value;
  });

  try {
    const newBook = await booksAPI.resetBook(book);
    rerenderBook(newBook);
  } catch (err) {
    console.log(err);
  }

  e.target.reset();
}
async function onBookDelete(e) {
  e.preventDefault();
  const id = e.target.elements.bookId.value;
  await booksAPI.deleteBook(id);
  const oldBook = refs.bookListElem.querySelector(`li[data-id="${id}"]`);
  oldBook.remove();

  e.target.reset();
}

// ===================================================

function bookTemplate({ author, desc, id, title }) {
  return `<li class="card book-item" data-id="${id}">
    <h4>${id} - ${title}</h4>
    <p>${desc}</p>
    <p>${author}</p>
</li>`;
}

function rerenderBook(book) {
  const oldBook = refs.bookListElem.querySelector(`li[data-id="${book.id}"]`);
  const markup = bookTemplate(book);
  oldBook.insertAdjacentHTML('afterend', markup);
  oldBook.remove();
}

function renderBooks(books) {
  const markup = books.map(bookTemplate).join('');
  refs.bookListElem.innerHTML = markup;
}

// ===================================================
async function onLoadPage() {
  const books = await booksAPI.getBooks();
  renderBooks(books);
}
onLoadPage();
// ===================================================
