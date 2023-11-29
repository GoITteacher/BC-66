const listElem = document.querySelector('.js-list');

function imgTemplate(i) {
  return `<img
    src="https://source.unsplash.com/500x500/?random=${i}&eat,bread,dish,meet,egg"
    alt="eat"
  /><br />
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut voluptatibus
    accusantium optio ex facilis quae aut quam dolorem, distinctio sequi. Qui
    fugit, illum enim quo vero ab ipsum provident possimus?
  </p>`;
}

const len = 200;
let markup = '';
for (let i = 0; i < len; i++) {
  markup += imgTemplate(i) + '\n';
}
listElem.innerHTML = markup;
