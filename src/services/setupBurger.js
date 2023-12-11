import { createMenu, removeMenu } from '../ui/components/share/bar';
import { showModal, closeModal } from './navigateService';

// cancel burger menu
export function cancelBurgerModal(btn, link) {
  btn.classList.remove('show-cancel');

  setTimeout(() => {
    removeMenu();
    setTimeout(() => {
      // return styles of body
      if (document.querySelector('.side-container')) {
        document.querySelector('body').removeChild(document.querySelector('.side-container'));
        document.querySelector('body').style.overflow = 'auto';
        closeModal('mobile');

        // move to link
        setTimeout(() => {
          if (link) {
            window.location.href = link;
          }
        }, 300);
      }
    }, 300);
  });
}

// listening logo
function setupLogo(element) {
  const changePointerLogo = (event) => {
    const btn = document.querySelector('#burger-btn');

    if (document.querySelector('.side-container')) {
      event.preventDefault();

      // click with burger menu
      if (document.querySelector('.side-menu')) {
        cancelBurgerModal(btn, event.target.closest('#logo').getAttribute('href'));
      } else {
        // click without burger menu
        window.location.href = event.target.closest('#logo').getAttribute('href');
      }
    }
  };
  element.addEventListener('click', (event) => changePointerLogo(event));
}

// listening burger menu
export function setupBurgerModal(element) {
  const changeShowMenu = (event) => {
    event.preventDefault();

    const link = event.target.closest('.nav-item');
    if (!link) return;

    // got to link & close modal
    if (link) {
      const btn = document.querySelector('#burger-btn');
      cancelBurgerModal(btn, link.getAttribute('href'));
    }
  };
  element.addEventListener('click', (event) => changeShowMenu(event));
}

// listening burger button
export function setupBurgerBtn(element) {
  const changeShowMenu = (event) => {
    const btn = event.target.closest('#burger-btn');
    if (!btn) return;

    if (btn) {
      // close burger menu
      if (btn.classList.contains('show-cancel')) {
        cancelBurgerModal(btn);
      } else {
        // generate burger menu
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
  setupLogo(document.getElementById('logo'));
}
