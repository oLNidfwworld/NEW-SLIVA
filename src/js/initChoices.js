import Choices from "choices.js";

export function initChoices() {
    const config = {
        type: 'select-one',
        searchEnabled: false,
        itemSelectText: '',
        searchChoices: false,
    }
    if(document.querySelector('.catalog-items__top-bar-filter-sorts')){
        const sortChoicer = new Choices(document.querySelector('.catalog-items__top-bar-filter-sorts'), config);
    }
    if(document.querySelector('.catalog-items__top-bar-filter-section-sort')){
        const sort = new Choices(document.querySelector('.catalog-items__top-bar-filter-section-sort'),  config);
    }
}
