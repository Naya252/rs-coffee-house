import { createMenu, removeMenu } from '../ui/components/share/bar';
import { showModal, closeModal } from './navigateService';

export function cancelBurgerModal(btn, link) {
  btn.classList.remove('show-cancel');

  setTimeout(() => {
    removeMenu();
    setTimeout(() => {
      document.querySelector('body').removeChild(document.querySelector('.side-container'));
      document.querySelector('body').style.overflow = 'auto';
      closeModal('mobile');
      setTimeout(() => {
        if (link) {
          window.location.href = link;
        }
      }, 300);
    }, 300);
  });
}

export function setupBurgerModal(element) {
  const changeShowMenu = (event) => {
    event.preventDefault();

    const link = event.target.closest('.nav-item');
    if (!link) return;

    if (link) {
      const btn = document.querySelector('#burger-btn');
      cancelBurgerModal(btn, link.getAttribute('href'));
    }
  };
  element.addEventListener('click', (event) => changeShowMenu(event));
}

export function setupBurgerBtn(element) {
  const changeShowMenu = (event) => {
    const btn = event.target.closest('#burger-btn');
    if (!btn) return;

    if (btn) {
      if (btn.classList.contains('show-cancel')) {
        cancelBurgerModal(btn);
      } else {
        btn.classList.add('show-cancel');
        setTimeout(() => {
          createMenu();
          setTimeout(() => {
            showModal('mobile');
            setTimeout(() => {
              document.querySelector('.side-container').style.translate = '-100%';
              setupBurgerModal(document.querySelector('.side-menu'));
            });
          });
        });
      }
    }
  };
  element.addEventListener('click', (event) => changeShowMenu(event));
}
