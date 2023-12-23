import { order } from '../../ui/components/sections/menu';
import { openModal, closeModal } from '../modalService';
import { toInert, fromInert } from '../inertService';
import loadImage from '../setupPreloader';

let lastFocus = null;

// remove modal
export function removeModal() {
  const content = document.querySelector('.modal__content');
  content.classList.remove('content--active');

  setTimeout(() => {
    content.innerHTML = ``;
    const modal = document.querySelector('#modal');
    modal.classList.remove('modal--active');
    order.changeVisible(false);
    closeModal();
    fromInert();
    if (lastFocus) {
      lastFocus.focus();
      lastFocus = null;
    }

    setTimeout(() => {
      if (document.querySelector('#modal')) {
        document.querySelector('body').removeChild(modal);
      }
    }, 100);
  }, 100);
}

// listening modal
export function setupModal(element) {
  const eventModal = (event) => {
    const modal = event.target.closest('.modal__content');
    const closeBtn = event.target.closest('.modal__close');
    const size = event.target.closest('.sizes__tab');
    const additive = event.target.closest('.additives__tab');

    if (closeBtn || !modal) {
      removeModal();
    }
    // change size
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
    // change additivies
    if (additive) {
      order.changeAdditivies(additive.getAttribute('value'), additive.getAttribute('price'), additive);
    }
  };
  element.addEventListener('click', (event) => eventModal(event));
}

export function showModal(modal, content, currentDevice, focus) {
  lastFocus = focus;
  modal.classList.add('modal--active');
  openModal(currentDevice);
  // add listener
  setupModal(document.querySelector(`#modal`));

  setTimeout(() => {
    content.classList.add('content--active');
    order.changeVisible(true);
    loadImage(document.querySelector('.modal-img'));
    document.querySelector('.sizes__tab.tab.active').focus();
    toInert(modal);
  }, 100);
}
