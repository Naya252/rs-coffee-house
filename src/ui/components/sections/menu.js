import '../../../sass/layouts/menu.module.scss';
import { TAB_COFFEE, TAB_TEA, TAB_DESSERT, REFRESH_ICON } from '../../../core/constants';
import { getTabData } from '../../../repository/products-repository';

export function getTabItems(name, device) {
  const itemsData = device === 'mobile' ? getTabData(name, 4) : getTabData(name, 8);
  return itemsData.items;
}

const tabItems = [
  { name: 'Coffee', img: TAB_COFFEE, items: [] },
  { name: 'Tea', img: TAB_TEA, items: [] },
  { name: 'Dessert', img: TAB_DESSERT, items: [] },
];
let activeTabName = 'coffee';

function renderItems(items) {
  let cardsHtml = '';
  items.forEach((el) => {
    cardsHtml += `
<div class="card">
  <div class="card__img">
    <img
      src="${el.img}"
      alt="${el.name}" />
  </div>
  <div class="card__info">
    <h3 class="heading-3 mb-3">${el.name}</h3>
    <p class="text-three-rows">${el.description}</p>
    <h3 class="heading-3 mt-auto">${el.price}</h3>
  </div>
</div>
`;
  });
  return cardsHtml;
}

export function changeActiveTab(val) {
  console.log(val.name);
  if (val.name) {
    activeTabName = val.name;
  }
  tabItems.forEach((el) => {
    if (el.name.toLocaleLowerCase() === activeTabName) {
      el.items = getTabItems(activeTabName, val.device);
    }
  });
  const activeTab = tabItems.filter((el) => el.name.toLocaleLowerCase() === activeTabName);

  const cardsHtml = renderItems(activeTab[0].items);
  document.querySelector('.menu__items').innerHTML = cardsHtml;
}
export const ACTIVE_TAB = activeTabName;

export function createMenuSection() {
  document.querySelector('#header').insertAdjacentHTML(
    'afterend',
    `
<main id="main" class="wrap mx-auto mt-5">
  <section id="menu">
    <h1 style="display: none">Menu</h1>  
    <h2 class="heading-2 mb-10 mx-auto">Behind each of our cups hides an <em class="text-accent">amazing surprise</em></h2>
    <div class="menu__tabs mb-10"></div>
    <div class="menu__items"></div>
    <button id="more-cards" class="rounded-btn transparent-dark-btn">${REFRESH_ICON}</button>
  </section>
</main>
`,
  );

  let tabsHtml = '';
  tabItems.forEach((el) => {
    tabsHtml += `<button class="menu__tabs_tab" id="${el.name.toLowerCase()}">
  <span class="button_img-container">${el.img}</span>
  <span class="button_text">${el.name}</span>
  </button>`;
  });
  document.querySelector('.menu__tabs').insertAdjacentHTML('afterbegin', tabsHtml);
  document.querySelector('#coffee').classList.add('active');

  changeActiveTab({ name: 'coffee' });
}
