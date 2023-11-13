import logoUrl from '../../assets/img/logo.svg';
import '../../sass/bar.scss';
import { CUP_ICON, BASE_URL } from '../../core/constants';

const menuData = [
  { name: 'logo', link: 'enjoy', anchor: 'enjoy' },
  { name: 'Favorite coffee', link: 'favorite-coffee' },
  { name: 'About', link: 'about' },
  { name: 'Mobile app', link: 'mobile-app' },
  { name: 'Contact us', link: 'footer' },
  { name: 'Menu', link: `${BASE_URL}menu/` },
];

let char;
const footerChar = '#';
const path = window.location.pathname;

if (path === '/naya252-JSFE2023Q4/coffee-house/menu/') {
  char = `${BASE_URL}#`;
  menuData[0].link = BASE_URL;
} else {
  char = '#';
  menuData[0].link = `${BASE_URL}#enjoy`;
}

document.querySelector('#header').insertAdjacentHTML(
  'afterbegin',
  `
<bar class="header__bar">
  <a href="${menuData[0].link}" id="logo"
    ><img
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
</bar>
`,
);

const menuItems = menuData.slice(1, -1);
let navItems = '';
menuItems.forEach((el) => {
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

function setupActive(element, menuItem) {
  element.addEventListener('mouseover', () => menuItem.classList.add('active'));
  element.addEventListener('mouseleave', () => menuItem.classList.remove('active'));
}

if (path === '/naya252-JSFE2023Q4/coffee-house/menu/') {
  document.querySelector('#nav-menu').style.pointerEvents = 'none';
  document.querySelector('#nav-menu').classList.add('active');
} else {
  menuItems.forEach((el) => {
    setupActive(document.querySelector(`#${el.link}`), document.querySelector(`#nav-${el.link}`));
  });
}
