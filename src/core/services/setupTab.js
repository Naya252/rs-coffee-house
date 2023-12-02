import { changeActiveTab, getTabItems, removeTabItems } from '../../ui/components/sections/menu';

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
