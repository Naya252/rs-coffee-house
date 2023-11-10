const main = [
  { name: 'Logo', link: '' },
  { name: 'Favorite coffee', link: '#favourites-coffee' },
  { name: 'About', link: '#about' },
  { name: 'Mobile app', link: '#mobele-app' },
  { name: 'Contact us', link: '#footer' },
  { name: 'Menu', link: '/menu/' },
];
const menu = [
  { name: 'logo', link: '/' },
  { name: 'Favorite coffee', link: '/#favourites-coffee' },
  { name: 'About', link: '/#about' },
  { name: 'Mobile app', link: '/#mobele-app' },
  { name: 'Contact us', link: '/#footer' },
  { name: 'Menu', link: '' },
];
const path = window.location.pathname;
const menuItems = path === '/menu/' ? [...menu] : [...main];

document.querySelector('#header').innerHTML = `
<bar class="header__bar">
  <a href="/"
    ><img
      src="/src/assets/img/logo.svg"
      alt="${menuItems[0].name}"
  /></a>

  <nav class="bar__nav">
    <ul class="nav__list pl-0">
      <li>
        <a
          href="${menuItems[1].link}"
          class="nav-item"
          >${menuItems[1].name}</a
        >
      </li>
      <li>
        <a
          href="${menuItems[2].link}"
          class="nav-item"
          >${menuItems[2].name}</a
        >
      </li>
      <li>
        <a
          href="${menuItems[3].link}"
          class="nav-item"
          >${menuItems[3].name}</a
        >
      </li>
      <li>
        <a
          href="${menuItems[4].link}"
          class="nav-item"
          >${menuItems[4].name}</a
        >
      </li>
    </ul>
  </nav>

  <a
    class="bar__coffee-menu nav-item"
    href="${menuItems[5].link}"
    >${menuItems[5].name}
    <img
      class="bar__coffee-menu_cup nav-item mb-1 ml-2"
      src="/src/assets/icons/coffee-cup.svg"
      alt="menu" />
  </a>
</bar>
`;
