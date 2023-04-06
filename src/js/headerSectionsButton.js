export function headerSectionsButton() {
  const leftBlockSections = document.querySelectorAll('.header-sections__1lvl-item');
  leftBlockSections.forEach((el) => {
    el.addEventListener('mouseover', () => {
      document.querySelector('.header-sections__2lvl-wrapper.header-sections__2lvl_current').classList.remove('header-sections__2lvl_current');
      document.querySelector(`*[data-section-id="${el.dataset.subsectionId}"]`).classList.add('header-sections__2lvl_current');
    });
  });
}
