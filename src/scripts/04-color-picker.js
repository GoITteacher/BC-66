let colorPalette = [];
const LENGTH = 9;

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < LENGTH; i++) {
    let hex = getRangomColor();
    let color = {
      hex,
      rgb: hexToRgb(hex),
    };

    items.push(color);
  }

  colorPalette = [...items];
}

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

function hexToRgb(hex) {
  let red = parseInt(hex.substring(1, 3), 16);
  let green = parseInt(hex.substring(3, 5), 16);
  let blue = parseInt(hex.substring(5, 7), 16);
  return `${red}, ${green}, ${blue}`;
}
createPaletteItems();

////////////////////////////////////////////////////////////////////////////

const refs = {
  itemList: document.querySelector('.js-colors-box'),
  modalElement: document.querySelector('.modal'),
  btnReloadColor: document.querySelector('.js-reload-color'),
  backdropElem: document.querySelector('.js-backdrop'),
};
render();
////////////////////////////////////////////////////////////////////////////

refs.backdropElem.addEventListener('click', e => {
  // if (e.target !== e.currentTarget) return;
  if (!e.target.classList.contains('backdrop')) return;
  hideModal();
});

refs.itemList.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return;
  const color = e.target.style.backgroundColor;
  refs.modalElement.style.backgroundColor = color;
  showModal();
});

refs.btnReloadColor.addEventListener('click', () => {
  createPaletteItems();
  render();
});

// ==============================
function colorTemplate(obj) {
  return `
  <li class="color-item">
    <button class="color-body" style="background-color:${obj.hex};"></button>
    <div class="color-footer">
        <div>HEX: ${obj.hex}</div>
        <div>RGB: ${obj.rgb}</div>
        <div></div>
    </div>
</li>
  `;
}

function colorPaletteTemplate(colorPalette) {
  return colorPalette.map(colorTemplate).join('');
}

function render() {
  const markup = colorPaletteTemplate(colorPalette);
  refs.itemList.innerHTML = markup;
}

function showModal() {
  document.body.classList.add('show-modal');
  document.addEventListener('keydown', onCloseModal);
}

function hideModal() {
  document.body.classList.remove('show-modal');
  document.removeEventListener('keydown', onCloseModal);
}

function onCloseModal(e) {
  console.log(e.code);
  if (e.code === 'Escape') {
    hideModal();
  }
}
