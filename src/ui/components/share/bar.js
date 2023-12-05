import logoUrl from '../../../assets/img/logo.svg';
import '../../../sass/layouts/_bar.module.scss';
import { CUP_ICON, BASE_URL, CURRENT_PATH } from '../../../core/constants';
import { showModal as changeMenu, closeModal as closeContent } from '../../../core/services/changeAbsoluteMenu';
import { setupBurgerModal } from '../../../core/services/setupBurger';

const menuData = [
  { name: 'logo', link: 'enjoy', anchor: 'enjoy' },
  { name: 'Favorite coffee', link: 'favorite-coffee' },
  { name: 'About', link: 'about' },
  { name: 'Mobile app', link: 'mobile-app' },
  { name: 'Contact us', link: 'footer' },
  { name: 'Menu', link: `${BASE_URL}menu/` },
];

export const MENU_ITEMS = menuData.slice(1, -1);
// TODO провести рефакторинг и добавить на линк меню # для модального окна
// вообще разобрать функции бара, меню, модалки
//добавить закрытие модалки при ресайзе
function createMenuItems(char) {
  let navItems = '';
  MENU_ITEMS.forEach((el) => {
    navItems += `
    <li>
          <a
          id="nav-${el.link}"
            href="${el.link === 'footer' ? `#${el.link}` : char + el.link}"
            class="nav-item ">${el.name}</a>
    </li>
    `;
  });
  return navItems;
}

function checkUrl() {
  let char;

  if (CURRENT_PATH.includes('menu')) {
    char = `${BASE_URL}#`;
    menuData[0].link = BASE_URL;
  } else {
    char = '#';
    menuData[0].link = `${BASE_URL}#enjoy`;
  }

  return char;
}

export function createMenu() {
  const char = checkUrl();
  const block = document.createElement('div');
  block.classList.add('side-container');
  let navItems = createMenuItems(char);
  navItems += `<a
  id="nav-menu"
  style="margin-top: 40px"
  class="bar__coffee-menu nav-item"
  href="${menuData[5].link}"
  >${menuData[5].name}

  ${CUP_ICON}

</a>`;
  const menuModal = `
  <ul class="side-menu"></ul>
  `;

  block.innerHTML = menuModal;

  console.log(block);
  document.querySelector('body').style.overflow = 'hidden';
  document.querySelector('body').appendChild(block);
  document.querySelector('.side-menu').innerHTML = navItems;
  changeMenu('mobile');

  setTimeout(() => {
    block.style.translate = '-100%';
    setupBurgerModal(document.querySelector('.side-menu'));
  });
}

export function removeMenu() {
  const block = document.querySelector('.side-container');
  block.style.translate = '0';
  setTimeout(() => {
    document.querySelector('body').removeChild(document.querySelector('.side-container'));
    document.querySelector('body').style.overflow = 'auto';
    closeContent('mobile');
  }, 500);
}

export function createHeader() {
  const char = checkUrl();

  document.querySelector('body').insertAdjacentHTML(
    'afterbegin',
    `
  <header id="header" class="wrap mx-auto mt-5">
    <div class="header__bar">
      <a href="${menuData[0].link}" id="logo"
        ><img
          loading="lazy"
          src="${logoUrl}"
          alt="${menuData[0].name}"
      /></a>
  
      <nav class="bar__nav">
        <ul id="nav-list" class="nav__list pl-0">
        </ul>
      </nav>
  
      <a
        id="nav-menu"
        class="bar__coffee-menu nav-item"
        href="${menuData[5].link}"
        >${menuData[5].name}
  
        ${CUP_ICON}
    
      </a>
  
      <button id="burger-btn"></button>
    </div>
  </header>
  <div class="pseudo mx-auto"></div>
  `,
  );
  const navItems = createMenuItems(char);
  document.querySelector('#nav-list').insertAdjacentHTML('afterbegin', navItems);
}
