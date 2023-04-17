// eslint-disable-next-line import/no-extraneous-dependencies
import { gsap } from 'gsap';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function basket() {
  const t1 = gsap.to('.basket__total-mob', {
    scrollTrigger: {
      trigger: '.basket__right-block-wrapper',
      scrub: true,
      start: 'top 85%',
      end: 'bottom 80%',

    },
    x: 0,
    y: 90,
    duration: '0.01'
  });
}
