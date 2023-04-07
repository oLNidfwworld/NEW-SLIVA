import '../scss/app.scss';
import { initSwipers } from './initSwipers';
import { burgerMenu } from './burgerMenu';
import {sectionPageMenus} from "./sectionPageMenus";
import {headerSectionsButton} from "./headerSectionsButton";
import {initChoices} from "./initChoices";

document.addEventListener('DOMContentLoaded', () => {
  init();
});

const init = () => {
  initSwipers();
  initChoices();
  burgerMenu();
  sectionPageMenus();
  headerSectionsButton();
};
