export function headerSectionsButton() {
  const leftBlockSections = document.querySelectorAll('.header-sections__1lvl-item');
  const buttonOpenCatalog = document.querySelector('#button-open-sections');
  const headerSections = document.querySelector('.header-sections');
  buttonOpenCatalog.addEventListener('click',()=>{
    headerSections.classList.toggle('block');
  })
  leftBlockSections.forEach((el) => {
    el.addEventListener('mouseover', () => {
      document.querySelector('.header-sections__2lvl-wrapper.header-sections__2lvl_current').classList.remove('header-sections__2lvl_current');
      document.querySelector(`*[data-section-id="${el.dataset.subsectionId}"]`).classList.add('header-sections__2lvl_current');

      document.querySelector('.header-sections__1lvl-item.header-sections__1lvl-item-current').classList.remove('header-sections__1lvl-item-current');
      el.classList.add('header-sections__1lvl-item-current')
    });
  });
}
