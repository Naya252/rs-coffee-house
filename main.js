import './src/sass/style.module.scss';
import { CURRENT_PATH } from './src/core/constants';
import createMainPage from './src/ui/views/mainPage';
import createMenuPage from './src/ui/views/menuPage';

if (CURRENT_PATH.includes('menu')) {
  createMenuPage();
} else {
  createMainPage();
}
