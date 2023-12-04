export function changeStatusColorCard(colorElem) {
  const oldElem = document.querySelector('.is-active');
  oldElem?.classList.remove('is-active');
  colorElem.parentNode.classList.add('is-active');
  document.body.style.backgroundColor = colorElem.style.backgroundColor;

  saveCurrentColor(colorElem.parentNode);
}

function saveCurrentColor(colorElem) {
  const id = colorElem.dataset.id;
  localStorage.setItem('currentColor', id);
}

export function onWindowLoad() {
  const id = localStorage.getItem('currentColor') || 1;
  const currentColorElem = document.querySelector(`[data-id="${id}"]`); // null
  changeStatusColorCard(currentColorElem.firstElementChild);
}
