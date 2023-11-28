let users = [];
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => (users = json));

setTimeout(() => {
  users = users.map((user, index) => {
    user.avatar = `https://source.unsplash.com/100x120/?random=${index}&avatar,person,boy,girl`;
    return user;
  });
  MainFunction();
}, 1000);
//////////////////////////////////////////////////////////////////////////////////////////////////

// Object references
let refs = {
  userList: document.querySelector('.js-list-user'),
  userCard: document.querySelector('.js-user-card'),
  backDrop: document.querySelector('.js-backdrop'),
  userInfo: document.querySelector('.js-user-info'),
  firstModal: document.querySelector('.js-user-info'),
  secondModal: document.querySelector('.js-form-regestration'),
};

function MainFunction() {
  renderUsers(users);
}

refs.userList.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;
  const userId = e.target.closest('li').dataset.id;
  const user = users.find(user => user.id === +userId);
  const modalMarkup = modalTemplate(user);
  refs.firstModal.innerHTML = modalMarkup;
  showModal();
});

refs.backDrop.addEventListener('click', e => {
  if (e.target === e.currentTarget) hideModal();
});
function showModal() {
  document.body.classList.add('show-modal');
}

function hideModal() {
  document.body.classList.remove('show-modal');
}

// =============================
function userTemplate(user) {
  return `<li class="user-card js-user-card" data-id="${user.id}">
  <div class="snip1344">
    <img
      src="https://source.unsplash.com/100x100/?random=${user.id}&avatar,person,boy,girl"
      alt="profile-sample1"
      class="background"
    />
    <img
      src="https://source.unsplash.com/100x100/?random=${user.id}&avatar,person,boy,girl"
      alt="profile-sample1"
      class="profile"
    />
    <figcaption>
      <h3>${user.name}<span>${user.phone}</span></h3>
      <div>@${user.username}</div>
    </figcaption>
  </div>
</li>`;
}

function usersTemplate(users) {
  return users.map(userTemplate).join('');
}

function renderUsers(users) {
  const markup = usersTemplate(users);
  refs.userList.innerHTML = markup;
}

function modalTemplate(user) {
  return `<div class="box box-gorizont">
  <img src="${user.avatar}" alt="avatar" />
  <div class="box">
    <h1>${user.name}</h1>
    ${user.email},<br />
    ${user.website},<br />
    ${user.phone}
    <br />
    <input type="button" value="Delete" class="js-delete-user-btn" />
  </div>
</div>
<div class="box">
  ${Object.keys(user.address)
    .map(key => {
      if (key === 'geo') return '';
      return key + ': ' + user.address[key] + '<br />';
    })
    .join('')}
</div>`;
}
