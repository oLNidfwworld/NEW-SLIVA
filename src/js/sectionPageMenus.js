export function sectionPageMenus() {
  const sectionButtons = document.querySelectorAll('.sections__section-wrapper');
  const overlay = document.querySelector('#overlay');
  const buttonChildDrop = document.querySelectorAll('.sections__section-menu-item-child-drop');
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
      currentMenu.classList.remove('sections__section-menu-show');
      document.body.style.overflow = 'initial';
      overlay.classList.remove('block');
    }
  })
  buttonChildDrop.forEach((el)=>{
    el.addEventListener('click',()=>{
        el.querySelector('.sections__section-menu-item-child-drop-arrow').classList.toggle('sections__section-menu-item-child-drop-arrow-rotate')

        el.parentElement.querySelector('.sections__section-menu-item-child-wrapper').classList.toggle('sections__section-menu-item-child-wrapper-drop');
    })
  })
}
