import { changeActiveTab } from '../../ui/components/sections/menu';

export default function setupTab(element) {
  const setActiveTab = (event) => {
    const tab = event.target.closest('.menu__tabs_tab');
    if (!tab) return;

    if (tab) {
      document.querySelectorAll(`.menu__tabs_tab`).forEach((el) => {
        el.classList.toggle('active', el === tab);
        if (el === tab) {
          changeActiveTab({ name: el.id });
        }
      });
    }
  };
  element.addEventListener('click', (event) => setActiveTab(event));
}
