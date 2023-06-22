import Swiper, {Autoplay, FreeMode, Navigation} from 'swiper';

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
        slidesPerView: 1.2,

        spaceBetween: 10
      },
      370: {
        slidesPerView: 1.2,
        spaceBetween: 15
      },
      480: {
        slidesPerView: 2.3,
        spaceBetween: 20
      },
      720: {
        slidesPerView: 3.3,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 4.3,
        spaceBetween: 20
      },
      1280: {
        slidesPerView: 4.3,
        spaceBetween: 20
      },
      1440: {
        slidesPerView: 5.3,
        spaceBetween: 20
      },
    },
  });
  let catalogSlider = new Swiper('.catalog-slider', {
    modules: [Navigation],
      navigation: {
        nextEl: '.catalog-slider-next',
        prevEl: '.catalog-slider-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1.1,
          spaceBetween: 10
        },
        370: {
          slidesPerView: 2.15,
          spaceBetween: 5
        },
      480: {
        slidesPerView: 2.2,
        spaceBetween: 15,
      },
      720: {
        slidesPerView: 3.3,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 4.3,
        spaceBetween: 23,
      },
      1280: {
        slidesPerView: 4.3,
        spaceBetween: 23,
      },
      1440: {
          slidesPerView: 4.3,
          spaceBetween: 30,
        },
        1920: {
          slidesPerView: 5.3,
          spaceBetween: 30,
        },
    },
  });

}
