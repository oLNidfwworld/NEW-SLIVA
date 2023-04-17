import '../scss/app.scss';

import { initSwipers } from './initSwipers';
import { burgerMenu } from './burgerMenu';
import { sectionPageMenus } from './sectionPageMenus';
import { headerSectionsButton } from './headerSectionsButton';
import { initChoices } from './initChoices';
import { filterToggler } from './filter-toggler';
import { initSwitches } from './initSwitches';
import { sideFilter } from './sideFilter';
import { detailTabs } from './detailTabs';
import {basket} from "./basket";


document.addEventListener('DOMContentLoaded', () => {
  init();
});

const init = () => {
  initSwipers();
  initChoices();
  initSwitches();
  burgerMenu();
  sectionPageMenus();
  headerSectionsButton();
  filterToggler();
  sideFilter();
  detailTabs();
  basket();
};
