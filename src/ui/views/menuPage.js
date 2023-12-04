import { createHeader } from '../components/share/bar';
import { createMenuSection } from '../components/sections/menu';
import createFooter from '../components/share/footer';
import { setupTab, setupRefreshBtn, setupItemCard, setupModal } from '../../core/services/setupMenu';
import setupBurgerBtn from '../../core/services/setupBurger';

export default function createMenuPage() {
  createHeader();
  createMenuSection();
  createFooter();
  setupTab(document.querySelector('.menu__tabs'));
  setupRefreshBtn(document.querySelector('#more-cards'));
  setupItemCard(document.querySelector('.menu__items'));
  setupModal(document.querySelector(`#modal`));
  setupBurgerBtn(document.querySelector(`#burger-btn`));
}
