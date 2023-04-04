import '../scss/app.scss';
import Swiper, {FreeMode} from 'swiper';

new Swiper('.banners__wrapper', {
  slidesPerView: 1,
  breakpoints: {
    0: {
      spaceBetween: 20,
    },
    1024: {
      spaceBetween: 0,
    },
  },
});
new Swiper('.storys', {
  modules: [FreeMode],
  freeMode: true,
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 4,
    },
    720: {
      slidesPerView: 5,
    },
  },
});
new Swiper('.slivniye-prices', {
  modules: [FreeMode],
  freeMode: true,
  breakpoints: {
    0:{
      slidesPerView: 1,
    },
    480:{
      slidesPerView: 2,
    },
    720:{
      slidesPerView: 3,
    },
    1024:{
      slidesPerView: 4,
    },
    1280:{
      slidesPerView: 4,
    },
    1440:{
      slidesPerView: 5,
    }
  }
});
