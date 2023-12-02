import { createHeader } from '../components/share/bar';
import { createMenuSection } from '../components/sections/menu';
import createFooter from '../components/share/footer';
import { setupTab, setupRefreshBtn } from '../../core/services/setupTab';

export default function createMenuPage() {
  createHeader();
  createMenuSection();
  createFooter();
  setupTab(document.querySelector('.menu__tabs'));
  setupRefreshBtn(document.querySelector('#more-cards'));
}
