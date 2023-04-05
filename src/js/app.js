import '../scss/app.scss';
import { initSwipers } from './initSwipers';
import { burgerMenu } from './burgerMenu';

document.addEventListener('DOMContentLoaded', () => {
  init();
});

const init = () => {
  initSwipers();
  burgerMenu();
};
