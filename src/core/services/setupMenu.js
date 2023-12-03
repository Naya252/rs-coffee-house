import {
  changeActiveTab,
  getTabItems,
  removeTabItems,
  showOrderModal,
  closeModal,
  order,
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

export function setupModal(element) {
  const eventModal = (event) => {
    const modal = event.target.closest('.modal__content');
    const closeBtn = event.target.closest('.modal__close');
    const size = event.target.closest('.sizes__tab');
    const additive = event.target.closest('.additives__tab');
    // console.log(event.target);

    if (closeBtn || !modal) {
      closeModal();
    }
    if (size) {
      order.changeSize(size.getAttribute('value'), size.getAttribute('price'));
      document.querySelectorAll(`.sizes__tab`).forEach((el) => {
        if (size.getAttribute('value') === el.getAttribute('value')) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    }
    if (additive) {
      order.changeAdditivies(additive.getAttribute('value'), additive.getAttribute('price'), additive);
    }
  };
  element.addEventListener('click', (event) => eventModal(event));
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
