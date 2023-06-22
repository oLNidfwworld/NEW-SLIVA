export function detailTabs(){
    const detailTabsBtn = document.querySelectorAll('.detail-item__tab-hide-tab');
    detailTabsBtn.forEach((el)=>{

        let targ = el.parentElement.parentElement.querySelector('.detail-item__tab-info');
        targ.style.height = 'fit-content';
        targ.style.height = targ.getBoundingClientRect().height + 'px';
        console.log(targ.style.height);
        el.parentElement.parentElement.addEventListener('click',()=>{
            targ.classList.toggle('detail-item__tab-info-hide');
            el.classList.toggle('rotate-180')
        })
    })
}