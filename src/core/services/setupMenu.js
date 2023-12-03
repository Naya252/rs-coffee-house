import {
  changeActiveTab,
  getTabItems,
  removeTabItems,
  showOrderModal,
  closeModal,
} from '../../ui/components/sections/menu';
import { getItemById } from '../../repository/products-repository';

export function setupRefreshBtn(element) {
  const getNewCards = (event) => {
    const btn = event.target.closest('#more-cards');
    if (!btn) return;

    if (btn) {
      getTabItems();
    }
  };
  element.addEventListener('click', (event) => getNewCards(event));
}

export function setupCloseBtn(element) {
  const clickCloseModal = (event) => {
    const btn = event.target.closest('.modal__close');
    if (!btn) return;

    if (btn) {
      closeModal();
    }
  };
  element.addEventListener('click', (event) => clickCloseModal(event));
}

export function setupItemCard(element) {
  const openModal = (event) => {
    const card = event.target.closest('.card');

    if (!card) return;

    if (card) {
      const attr = card.getAttribute('id').split('-');
      const itemData = getItemById(attr[0], attr[1]);
      showOrderModal(itemData);
    }
  };
  element.addEventListener('click', (event) => openModal(event));
}

export function setupTab(element) {
  const setActiveTab = (event) => {
    const tab = event.target.closest('.menu__tabs_tab');
    if (!tab) return;

    if (tab) {
      document.querySelectorAll(`.menu__tabs_tab`).forEach((el) => {
        el.classList.toggle('active', el === tab);
        if (el === tab) {
          removeTabItems();
          changeActiveTab(el.id);
          getTabItems();
        }
      });
    }
  };
  element.addEventListener('click', (event) => setActiveTab(event));
}
