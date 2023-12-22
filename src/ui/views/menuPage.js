import { createHeader } from '../components/share/bar';
import { createMenuSection } from '../components/sections/menu';
import createFooter from '../components/share/footer';
import { setupTab, setupRefreshBtn, setupItemCard } from '../../services/setupMenuPage';
import { setupBurgerBtn } from '../../services/setupBurger';

export default function createMenuPage() {
  createHeader();
  createMenuSection();
  createFooter();
  setupTab(document.querySelector('.menu__tabs'));
  setupRefreshBtn(document.querySelector('#more-cards'));
  setupItemCard(document.querySelector('.menu__items'));
  setupBurgerBtn(document.querySelector(`#burger-btn`));
}
