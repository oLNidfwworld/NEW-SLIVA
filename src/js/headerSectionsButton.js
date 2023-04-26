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
export function headerScrollProgressBar(){
  const headerSectionsLeft = document.querySelector('.header-sections__1lvl');

  const headerSectionProgressBar = document.querySelector('.header-sections__progress-scrollbar');
  const progressTrack = document.querySelector('.header-sections__progress-scrollbar-progressTrack');
  const point = document.querySelector('.header-sections__progress-scrollbar-point');

  headerSectionsLeft.addEventListener('scroll',()=>{
    var a = headerSectionsLeft.scrollTop;
    var b = headerSectionsLeft.scrollHeight - headerSectionsLeft.clientHeight;
    var c = a / b;
    point.style.top = (c * 100 )+'%';
    progressTrack.style.height = (c * 100 )+'%';
    // console.log(c*100)
  })
  // headerSectionProgressBar.addEventListener('click',(e)=>{
  //   var a = headerSectionProgressBar.clientHeight;
  //   var b = e.clientY - headerSectionProgressBar.clientHeight ;
  //   var c = b/a;
  //   console.log(e)
  // })

  // let moving;
  //
  // point.addEventListener('mousedown',()=>{
  //   moving= true;
  // })
  // point.addEventListener('mouseup',()=>{
  //   moving= false;
  // })
  // point.addEventListener('mousemove',(e)=>{
  //   if(moving){
  //     point.style.top = e.offsetY + '%';
  //   }
  // })

}