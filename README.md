# Hi everyone

```html
<li class="user-card js-user-card" data-id="${user.id}">
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
</li>
```

```html
`
<div class="box box-gorizont">
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
  ${Object.keys(user.address) .map(key => { if (key === 'geo') return ''; return
  key + ': ' + user.address[key] + '<br />'; }) .join('')}
</div>
`
```
