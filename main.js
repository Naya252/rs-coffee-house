import './src/sass/style.module.scss';
import { CURRENT_PATH } from './src/core/constants';
import createMainPage from './src/ui/views/mainPage';
import createMenuPage from './src/ui/views/menuPage';
import { watchActiveSection, unWatchSections } from './src/core/services/watchSection';
import setupTab from './src/core/services/setupTab';

if (CURRENT_PATH.includes('menu')) {
  createMenuPage();
} else {
  createMainPage();
}

const resizeObserver = new ResizeObserver((entries) => {
  const [{ inlineSize }] = entries[0].borderBoxSize;
  if (inlineSize > 1024) {
    watchActiveSection();
  } else {
    unWatchSections();
  }
});
const body = document.querySelector('body');
resizeObserver.observe(body);

setupTab(document.querySelector('.menu__tabs'));
