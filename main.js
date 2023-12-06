import './src/sass/style.module.scss';
import { CURRENT_PATH } from './src/share/constants';
import createMainPage from './src/ui/views/mainPage';
import createMenuPage from './src/ui/views/menuPage';
import resizeObserver from './src/services/resizeBody';

resizeObserver.observe(document.querySelector('body'));

if (CURRENT_PATH.includes('menu')) {
  createMenuPage();
} else {
  createMainPage();
}
