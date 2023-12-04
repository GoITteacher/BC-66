import colors from './colors.json';
import '../css/common.css';
import '../css/colorpicker.css';

import { colorsTemplate } from './templates.js';
import { onWindowLoad, changeStatusColorCard } from './helpers.js';

const refs = {
  palette: document.querySelector('.js-palette'),
};

refs.palette.addEventListener('click', onColorClick);

function onColorClick(e) {
  if (!e.target.classList.contains('color-swatch')) return;
  changeStatusColorCard(e.target);
}

renderColor();
onWindowLoad();

// ========== RENDER ================

function renderColor() {
  refs.palette.innerHTML = colorsTemplate(colors);
}
