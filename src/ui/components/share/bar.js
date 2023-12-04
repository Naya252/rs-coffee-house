import logoUrl from '../../../assets/img/logo.svg';
import '../../../sass/layouts/_bar.module.scss';
import { CUP_ICON, BASE_URL, CURRENT_PATH } from '../../../core/constants';

const menuData = [
  { name: 'logo', link: 'enjoy', anchor: 'enjoy' },
  { name: 'Favorite coffee', link: 'favorite-coffee' },
  { name: 'About', link: 'about' },
  { name: 'Mobile app', link: 'mobile-app' },
  { name: 'Contact us', link: 'footer' },
  { name: 'Menu', link: `${BASE_URL}menu/` },
];

export const MENU_ITEMS = menuData.slice(1, -1);

export function createHeader() {
  let char;
  const footerChar = '#';

  if (CURRENT_PATH.includes('menu')) {
    char = `${BASE_URL}#`;
    menuData[0].link = BASE_URL;
  } else {
    char = '#';
    menuData[0].link = `${BASE_URL}#enjoy`;
  }
  let navItems = '';

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

  MENU_ITEMS.forEach((el) => {
    navItems += `
    <li>
          <a
          id="nav-${el.link}"
            href="${el.link === 'footer' ? footerChar + el.link : char + el.link}"
            class="nav-item">${el.name}</a>
    </li>
    `;
  });

  document.querySelector('#nav-list').insertAdjacentHTML('afterbegin', navItems);
}
