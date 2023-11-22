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
<div class="header__bar">
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
</div>
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

function intersectionCallback(entries) {
  entries.forEach((entry) => {
    const section = entry.target;
    if (entry.isIntersecting) {
      document.querySelectorAll(`.nav-item`).forEach((el) => {
        el.classList.toggle('active', el.getAttribute('id').replace('nav-', '') === section.id);
      });
    } else if (!entry.isIntersecting && path === '/naya252-JSFE2023Q4/coffee-house/') {
      document.querySelectorAll(`.nav-item`).forEach((el) => {
        el.classList.remove('active');
      });
    }
  });
}

const observer = new IntersectionObserver(intersectionCallback, {
  threshold: [0.5, 1],
});

if (path === '/naya252-JSFE2023Q4/coffee-house/menu/') {
  document.querySelector('#nav-menu').classList.add('active');
  document.querySelector('#nav-menu').style.pointerEvents = 'none';
  ['menu', 'footer'].forEach((el) => {
    observer.observe(document.getElementById(el));
  });
} else {
  menuItems.forEach((el) => {
    observer.observe(document.getElementById(el.link));
  });
}
