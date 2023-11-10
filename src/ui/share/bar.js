import logoUrl from '../../assets/img/logo.svg';
import cupUrl from '../../assets/icons/coffee-cup.svg';

const menuItems = [
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
      alt="${menuItems[0].name}"
  /></a>

  <nav class="bar__nav">
    <ul class="nav__list pl-0">
      <li>
        <a
        id="nav-${menuItems[1].link}"
          href="${char}${menuItems[1].link}"
          class="nav-item"
          >${menuItems[1].name}</a
        >
      </li>
      <li>
        <a
        id="nav-${menuItems[2].link}"
          href="${char}${menuItems[2].link}"
          class="nav-item"
          >${menuItems[2].name}</a
        >
      </li>
      <li>
        <a
        id="nav-${menuItems[3].link}"
          href="${char}${menuItems[3].link}"
          class="nav-item"
          >${menuItems[3].name}</a
        >
      </li>
      <li>
        <a
        id="nav-${menuItems[4].link}"
          href="${char}${menuItems[4].link}"
          class="nav-item"
          >${menuItems[4].name}</a
        >
      </li>
    </ul>
  </nav>

  <a
    id="nav-menu"
    class="bar__coffee-menu nav-item"
    href="${menuItems[5].link}"
    >${menuItems[5].name}
    <img
      class="bar__coffee-menu_cup nav-item mb-1 ml-2"
      src="${cupUrl}"
      alt="menu" />
  </a>
</bar>
`;

if (path === '/menu/') {
  document.querySelector('#nav-menu').style.pointerEvents = 'none';
  document.querySelector('#nav-menu').classList.add('active');
} else {
  document.querySelector('#logo').style.pointerEvents = 'none';
}
const menu = menuItems.slice(1, -1);

function setupActive(element, menuItem) {
  element.addEventListener('mouseover', () => menuItem.classList.add('active'));
  element.addEventListener('mouseleave', () => menuItem.classList.remove('active'));
}

menu.forEach((el) => {
  setupActive(document.querySelector(`#${el.link}`), document.querySelector(`#nav-${el.link}`));
});
