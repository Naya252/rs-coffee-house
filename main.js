import './src/sass/style.module.scss';
import { CURRENT_PATH } from './src/core/constants';
import createMainPage from './src/ui/views/mainPage';
import createMenuPage from './src/ui/views/menuPage';
import resizeObserver from './src/core/services/resizeBody';
import setupTab from './src/core/services/setupTab';

if (CURRENT_PATH.includes('menu')) {
  createMenuPage();
} else {
  createMainPage();
}

resizeObserver.observe(document.querySelector('body'));
setupTab(document.querySelector('.menu__tabs'));
