import './modules/binance';
import './modules/hero';
import './modules/quotes';
import './modules/ipfinder';
import './modules/pokemon';
import './modules/instagram';
import './modules/user';
/* 
const btnElem = document.querySelector('.js-test');
const btnElem2 = document.querySelector('.js-test1');

btnElem.addEventListener('click', () => {
  fetchAlbumsByUserId(1).then(albums => {
    console.log(albums);
  });
});

btnElem2.addEventListener('click', () => {
  fetchAlbumsByUserId(1).then(albums => {
    document.body.innerHTML = albums;
  });
});

// =======
function fetchAlbumsByUserId(username) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = '/albums';

  const params = new URLSearchParams({
    userId: 1,
    userName: username,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url).then(response => {
    return response.json();
  });
}
 */
