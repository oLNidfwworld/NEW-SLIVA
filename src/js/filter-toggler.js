export function filterToggler() {
  const filterButton = document.querySelector('.catalog-items__top-bar-filters-filter');
  const filterWrapper = document.querySelector('.catalog-items__top-bar-filters-filter-wrapper');
  const overlay = document.querySelector('#overlay');
  if (filterButton && filterWrapper) {
    filterButton.addEventListener('click', () => {
      filterWrapper.classList.add('catalog-items__top-bar-filters-filter-wrapper-shown');
      if(window.windowWidth < 1024){
        document.body.style.overflow = 'hidden';
      }
      overlay.classList.toggle('block');
    });

    overlay.addEventListener('click', () => {
      const currentMenu = document.querySelector('.catalog-items__top-bar-filters-filter-wrapper-shown');
      if (currentMenu) {
        currentMenu.classList.remove('catalog-items__top-bar-filters-filter-wrapper-shown');

        if(window.windowWidth < 1024) {
          document.body.style.overflow = 'initial';
        }
        overlay.classList.remove('block');
      }
    });
  }
}
