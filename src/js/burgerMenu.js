export function burgerMenu() {
  const burgerButtonOpen = document.querySelector('#burger-button');
  const burgerMenu = document.querySelector('#mob-burger');
  const overlay = document.querySelector('#overlay');
  const burgerButtonClose = document.querySelector('#burger-button-back');
  burgerButtonOpen.addEventListener('click', () => {
      burgerMenu.classList.toggle('mob-burger-show');
      document.body.style.overflow = 'hidden';
      overlay.classList.toggle('block');
  });
  burgerButtonClose.addEventListener('click', () => {
      burgerMenu.classList.toggle('mob-burger-show');
      overlay.classList.toggle('block');
      document.body.style.overflow = 'initial';
  });
    overlay.addEventListener('click',()=>{
        burgerMenu.classList.toggle('mob-burger-show');
            document.body.style.overflow = 'initial';
            overlay.classList.toggle('block');

    })
}
