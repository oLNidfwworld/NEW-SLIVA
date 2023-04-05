import Swiper, { Autoplay, FreeMode } from 'swiper';

export function initSwipers() {
  new Swiper('.banners__wrapper', {
    modules: [Autoplay],
    autoplay: {
      delay: 3500,
    },
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
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      720: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 4,
      },
      1440: {
        slidesPerView: 5,
      },
    },
  });
  new Swiper('.catalog-slider', {
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      720: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 23,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 23,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}
