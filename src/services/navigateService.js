import { BASE_URL, CURRENT_PATH } from '../share/constants';

export function getMenuItems() {
  let menuData = [
    { name: 'logo', id: 'enjoy', anchor: 'enjoy', page: 'main' },
    { name: 'Favorite coffee', id: 'favorite-coffee', page: 'main' },
    { name: 'About', id: 'about', page: 'main' },
    { name: 'Mobile app', id: 'mobile-app', page: 'main' },
    { name: 'Contact us', id: 'footer', page: 'share' },
    { name: 'Menu', id: `menu`, page: 'menu' },
  ];

  if (CURRENT_PATH.includes('menu')) {
    menuData = menuData.map((el, i) => {
      const val = { ...el, link: '' };
      if (el.name === 'logo') {
        val.link = BASE_URL;
      }
      if (el.page === 'main' && i > 0) {
        val.link = `${BASE_URL}#${val.id}`;
      }
      if (el.page === 'share') {
        val.link = `${BASE_URL}menu/#${val.id}`;
      }
      if (el.page === 'menu') {
        val.link = `${BASE_URL}${val.page}/`;
      }
      return val;
    });
  } else {
    menuData = menuData.map((el, i) => {
      const val = { ...el };
      if (el.name === 'logo') {
        val.link = `${BASE_URL}#${val.page}`;
      }
      if ((el.page === 'main' && i > 0) || el.page === 'share') {
        val.link = `${BASE_URL}#${val.id}`;
      }
      if (el.page === 'menu') {
        val.link = `${BASE_URL}${val.page}`;
      }
      return val;
    });
  }

  const generalMenutems = menuData.slice(1, -1);
  const menuItem = menuData[5];
  const logoItem = menuData[0];
  return { generalMenutems, menuItem, logoItem };
}

export function showModal(currentDevice) {
  document.querySelector('body').classList.add('scroll-not-visible');
  const header = document.querySelector('#header');
  const posHeaderBeforeModal = header.getBoundingClientRect();
  document.querySelector('.pseudo').classList.add('show');
  header.classList.add('show-always');
  if (posHeaderBeforeModal.y === 0) {
    header.classList.remove('mt-5');
  }

  // console.log(posHeaderBeforeModal);
  const posHeaderAfterModal = header.getBoundingClientRect();
  header.style.top = `${Math.abs(posHeaderAfterModal.y)}px`;
  header.style.left = `${posHeaderBeforeModal.x}px`;
  header.style.width = `${posHeaderBeforeModal.width}px`;
  if (posHeaderAfterModal.y === 20) {
    header.classList.remove('mt-5');
  }
  if (currentDevice === 'desktop') {
    document.querySelector('body').classList.add('static-width');
    header.style.left = `${posHeaderBeforeModal.x - 8}px`;
  }
}

export function closeModal(currentDevice) {
  document.querySelector('body').classList.remove('scroll-not-visible');
  const header = document.querySelector('#header');
  header.classList.remove('show-always');
  header.classList.add('mt-5');
  header.style.top = 0;
  header.style.left = 0;
  header.style.width = null;
  document.querySelector('.pseudo').classList.remove('show');

  if (currentDevice === 'desktop') {
    document.querySelector('body').classList.remove('static-width');
  }
}
