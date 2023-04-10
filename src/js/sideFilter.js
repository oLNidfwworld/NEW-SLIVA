export function sideFilter() {
  document.querySelectorAll('.catalog-items__top-bar-filters-filter-block-show-more').forEach((el) => {
    el.addEventListener('click',()=>{
      el.classList.toggle('hidden');
      el.parentElement.querySelectorAll('.catalog-items__top-bar-filters-filter-block-option.hidden').forEach((ell) => {
        ell.classList.toggle('hidden');
      });
    })
  });
}
