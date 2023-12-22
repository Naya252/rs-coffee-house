import { changeActiveTab, getTabItems, removeTabItems, showOrderModal } from '../../ui/components/sections/menu';
import { getItemById } from '../../repository/products-repository';

// lestening get more btn
export function setupRefreshBtn(element) {
  const getNewCards = (event) => {
    const btn = event.target.closest('#more-cards');
    if (!btn) return;

    if (btn) {
      // get data
      getTabItems();
    }
  };
  element.addEventListener('click', (event) => getNewCards(event));
}

// lestening item card
export function setupItemCard(element) {
  const openModal = (event) => {
    const card = event.target.closest('.card');

    if (!card) return;

    if (card) {
      const attr = card.getAttribute('id').split('-');
      const itemData = getItemById(attr[0], attr[1]);
      showOrderModal(itemData, card);
    }
  };

  element.addEventListener('click', (event) => openModal(event));
}

// listening tabs
export function setupTab(element) {
  const setActiveTab = (event) => {
    const tab = event.target.closest('.menu__tabs_tab');
    const activeTab = event.target.closest('.menu__tabs_tab.active');
    if (!tab) return;

    if (tab && !activeTab) {
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
