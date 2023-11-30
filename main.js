import './src/sass/style.scss';
import { CURRENT_PATH } from './src/core/constants';
import createMainPage from './src/ui/views/mainPage';
import createMenuPage from './src/ui/views/menuPage';

if (CURRENT_PATH.includes('menu')) {
  console.log('menu');
  createMenuPage();
} else {
  console.log('main');
  createMainPage();
}
