import '../scss/app.scss';
import { initSwipers } from './initSwipers';
import { burgerMenu } from './burgerMenu';
import {sectionPageMenus} from "./sectionPageMenus";
import {headerSectionsButton} from "./headerSectionsButton";

document.addEventListener('DOMContentLoaded', () => {
  init();
});

const init = () => {
  initSwipers();
  burgerMenu();
  sectionPageMenus();
  headerSectionsButton();
};
