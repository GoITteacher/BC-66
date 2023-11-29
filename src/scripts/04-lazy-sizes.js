/* console.log(Object.keys(HTMLImageElement.prototype).includes("loading"));

if (!HTMLImageElement.prototype.hasOwnProperty("loading")) {
  //Підтримується
} else {
  let script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  script.integrity =
    "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
  script.crossOrigin = "anonymous";
  script.referrerpolicy = "no-referrer";
  document.body.lastElementChild.insertAdjacentElement("beforebegin", script);
}
 */

const listElem = document.querySelector('.js-list');

function imgTemplate(i) {
  return `<img class="lazyload blur-up"
    src="https://d1zxqs9w6if90m.cloudfront.net/company/5e5141c8-341f-4941-b751-c6c3fcc67506/main_logo/19260/conversions/pk5eBWNXzQUtdTX-main-logo.jpg"
    data-src="https://source.unsplash.com/500x500/?random=${i}&eat,bread,dish,meet,egg"
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
