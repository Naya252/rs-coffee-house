import { createHeader } from '../components/share/bar';
import createEnjoySection from '../components/sections/enjoy';
import createFavoriteSection from '../components/sections/favorite';
import createAboutSection from '../components/sections/about';
import createMobileSection from '../components/sections/mobile';
import createFooter from '../components/share/footer';
import setupBurgerBtn from '../../core/services/setupBurger';

export default function createMainPage() {
  createHeader();
  createEnjoySection();
  createFavoriteSection();
  createAboutSection();
  createMobileSection();
  createFooter();
  setupBurgerBtn(document.querySelector(`#burger-btn`));
}
