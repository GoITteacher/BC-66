export function colorsTemplate(colors) {
  return colors.map(colorTemplate).join('');
}

function colorTemplate({ rgb, hex, id }) {
  return `<div class="color-card" data-id="${id}">
      <div class="color-swatch" style="background-color: ${hex}"></div>
  
      <div class="color-meta">
        <p>RGB: ${rgb}</p>
        <p>HEX: ${hex}</p>
      </div>
    </div>`;
}
