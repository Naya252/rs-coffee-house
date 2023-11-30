import './src/sass/style.scss';
import { BASE_URL, CURRENT_PATH } from './src/core/constants';
import createMainPage from './src/ui/views/mainPage';
import createMenuPage from './src/ui/views/menuPage';

if (BASE_URL === CURRENT_PATH) {
  createMainPage();
} else {
  createMenuPage();
}
