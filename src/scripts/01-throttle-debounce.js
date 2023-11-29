const countMouseEventElement = document.querySelector('.js-count-mouse');
const inputElement = document.querySelector('.js-input');
const outputElem = document.querySelector('.js-output');

let countMouseEvent = 1;
let countInputEvent = 1;

// ===========================================

// const robot = () => {
//   countMouseEventElement.textContent = countMouseEvent++;
// };

// const updatedRobot = _.throttle(robot, 2000, {
//   leading: true,
//   trailing: false,
// });

// document.addEventListener('mousemove', updatedRobot);

// ===========================================
// document.addEventListener('mousemove', _.throttle(onDocumentMouseMove, 300));

// function onDocumentMouseMove() {
//   countMouseEventElement.textContent = countMouseEvent++;
// }

// ===========================================

// inputElement.addEventListener('input', _.debounce(onInputChange, 5000));

// function onInputChange() {
//   outputElem.textContent = countInputEvent++;
// }
