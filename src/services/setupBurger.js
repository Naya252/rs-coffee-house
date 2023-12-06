import { createMenu, removeMenu } from '../ui/components/share/bar';

export function setupBurgerBtn(element) {
  const changeShowMenu = (event) => {
    const btn = event.target.closest('#burger-btn');
    if (!btn) return;

    if (btn) {
      btn.classList.toggle('show-cancel');
      if (btn.classList.contains('show-cancel')) {
        createMenu();
      } else {
        removeMenu();
      }
    }
  };
  element.addEventListener('click', (event) => changeShowMenu(event));
}

export function setupBurgerModal(element) {
  const changeShowMenu = (event) => {
    const link = event.target.closest('.nav-item');
    if (!link) return;

    if (link) {
      const btn = document.querySelector('#burger-btn');
      btn.classList.remove('show-cancel');

      removeMenu();
    }
  };
  element.addEventListener('click', (event) => changeShowMenu(event));
}
