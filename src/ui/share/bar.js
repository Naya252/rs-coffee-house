import logoUrl from '../../assets/img/logo.svg';
import '../../assets/sass/bar.scss';
import cupImg from '../../assets/icons/coffee-cup';

const menuData = [
  { name: 'logo', link: '/', anchor: 'enjoy' },
  { name: 'Favorite coffee', link: 'favourites-coffee' },
  { name: 'About', link: 'about' },
  { name: 'Mobile app', link: 'mobile-app' },
  { name: 'Contact us', link: 'footer' },
  { name: 'Menu', link: '/menu/' },
];

let char;
const path = window.location.pathname;
if (path === '/menu/') {
  char = '/#';
} else {
  char = '#';
}

document.querySelector('#header').innerHTML = `
<bar class="header__bar">
  <a href="/" id="logo"
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

    ${cupImg}
 
  </a>
</bar>
`;

const menuItems = menuData.slice(1, -1);
let navItems = '';
menuItems.forEach((el) => {
  navItems += `
  <li>
        <a
        id="nav-${el.link}"
          href="${char}${el.link}"
          class="nav-item">${el.name}</a>
  </li>
  `;
});

document.querySelector('#nav-list').innerHTML = navItems;

function setupActive(element, menuItem) {
  element.addEventListener('mouseover', () => menuItem.classList.add('active'));
  element.addEventListener('mouseleave', () => menuItem.classList.remove('active'));
}

if (path === '/menu/') {
  document.querySelector('#nav-menu').style.pointerEvents = 'none';
  document.querySelector('#nav-menu').classList.add('active');
} else {
  document.querySelector('#logo').style.pointerEvents = 'none';
  menuItems.forEach((el) => {
    setupActive(document.querySelector(`#${el.link}`), document.querySelector(`#nav-${el.link}`));
  });
}
