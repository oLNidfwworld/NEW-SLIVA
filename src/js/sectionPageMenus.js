export function sectionPageMenus() {
  const sectionButtons = document.querySelectorAll('.sections__section-wrapper');
  const overlay = document.querySelector('#overlay');
  sectionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.parentElement.querySelector('.sections__section-menu').classList.toggle('sections__section-menu-show');
      document.body.style.overflow = 'hidden';
      overlay.classList.toggle('block');
    });
  });
  overlay.addEventListener('click',()=>{
    let currentMenu = document.querySelector('.sections__section-menu.sections__section-menu-show');
    if(currentMenu){
      currentMenu.classList.toggle('sections__section-menu-show');
      document.body.style.overflow = 'initial';
      overlay.classList.toggle('block');
    }
  })
}
