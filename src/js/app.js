import '../scss/app.scss';
import { initSwipers } from './initSwipers';
import { burgerMenu } from './burgerMenu';
import {sectionPageMenus} from "./sectionPageMenus";

document.addEventListener('DOMContentLoaded', () => {
  init();
});

const init = () => {
  initSwipers();
  burgerMenu();
  sectionPageMenus();
};
