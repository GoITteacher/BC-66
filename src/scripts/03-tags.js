let refs = {
  firstTagsList: document.querySelector('.tags-box[data-group="group-1"]'),
  secondTagsList: document.querySelector('.tags-box[data-group="group-2"]'),
};

refs.firstTagsList.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;
  // if (e.target.nodeName !== 'LI') return;
  const liElem = e.target.closest('.tag-item');
  liElem.classList.toggle('active');
});

refs.secondTagsList.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;

  const oldLiElem = refs.secondTagsList.querySelector('.active');
  oldLiElem?.classList.remove('active');

  const liElem = e.target.closest('.tag-item');
  liElem.classList.add('active');
});
