import { BASE_URL, CURRENT_PATH } from '../share/constants';

// generate nav items with correct url
export default function getMenuItems() {
  let menuData = [
    { name: 'logo', id: 'enjoy', anchor: 'enjoy', page: 'main' },
    { name: 'Favorite coffee', id: 'favorite-coffee', page: 'main' },
    { name: 'About', id: 'about', page: 'main' },
    { name: 'Mobile app', id: 'mobile-app', page: 'main' },
    { name: 'Contact us', id: 'footer', page: 'share' },
    { name: 'Menu', id: `menu`, page: 'menu' },
  ];

  // menu items for menu page
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
        val.isNotActive = true;
      }
      return val;
    });
  } else {
    // menu items for main page
    menuData = menuData.map((el, i) => {
      const val = { ...el };
      if (el.name === 'logo') {
        val.link = `${BASE_URL}#${val.page}`;
      }
      if ((el.page === 'main' && i > 0) || el.page === 'share') {
        val.link = `${BASE_URL}#${val.id}`;
      }
      if (el.page === 'menu') {
        val.link = `${BASE_URL}${val.page}/`;
        val.isNotActive = false;
      }
      return val;
    });
  }

  const generalMenutems = menuData.slice(1, -1);
  const menuItem = menuData[5];
  const logoItem = menuData[0];
  return { generalMenutems, menuItem, logoItem };
}
