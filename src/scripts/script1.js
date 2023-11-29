const myBtnElem = document.querySelector('#open-modal');

myBtnElem.addEventListener('click', () => {
  const instance = basicLightbox.create(`
    <div class="my-modal">
        <button>TEST</button>
    </div>
`);

  instance.show(() => {
    console.log('SHOW');
  });
});
