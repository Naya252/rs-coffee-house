import logoUrl from '../../../assets/img/logo.svg';
import '../../../sass/layouts/_bar.module.scss';
import { CUP_ICON, BASE_URL, CURRENT_PATH } from '../../../share/constants';
import { showModal as changeMenu, closeModal as closeContent, getMenuItems } from '../../../services/navigateService';
import { setupBurgerModal } from '../../../services/setupBurger';

// TODO провести рефакторинг и добавить на линк меню # для модального окна
// вообще разобрать функции бара, меню, модалки
// добавить закрытие модалки при ресайзе
// завершани анимацию - потом переходить на др страницу
function createMenuItems() {
  let navItems = '';
  const { generalMenutems } = getMenuItems();
  generalMenutems.forEach((el) => {
    navItems += `
    <li>
          <a
          id="nav-${el.id}"
            href="${el.link}"
            class="nav-item ">${el.name}</a>
    </li>
    `;
  });
  return navItems;
}

export function createMenu() {
  const { menuItem } = getMenuItems();
  const block = document.createElement('div');
  block.classList.add('side-container');
  let navItems = createMenuItems();
  navItems += `<a
  id="nav-menu"
  style="margin-top: 40px"
  class="bar__coffee-menu nav-item"
  href="${menuItem.link}"
  >${menuItem.name}

  ${CUP_ICON}

</a>`;
  const menuModal = `
  <ul class="side-menu"></ul>
  `;

  block.innerHTML = menuModal;

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
  const { logoItem, menuItem } = getMenuItems();
  const navItems = createMenuItems();

  document.querySelector('body').insertAdjacentHTML(
    'afterbegin',
    `
  <header id="header" class="wrap mx-auto mt-5">
    <div class="header__bar">
      <a href="${logoItem.link}" id="logo"
        ><img
          loading="lazy"
          src="${logoUrl}"
          alt="${logoItem.name}"
      /></a>
  
      <nav class="bar__nav">
        <ul id="nav-list" class="nav__list pl-0">
        </ul>
      </nav>
  
      <a
        id="nav-menu"
        class="bar__coffee-menu nav-item"
        href="${menuItem.link}"
        >${menuItem.name}
  
        ${CUP_ICON}
    
      </a>
  
      <button id="burger-btn"></button>
    </div>
  </header>
  <div class="pseudo mx-auto"></div>
  `,
  );
  document.querySelector('#nav-list').insertAdjacentHTML('afterbegin', navItems);
}
