import '../../../sass/layouts/menu.module.scss';
import { TAB_COFFEE, TAB_TEA, TAB_DESSERT, REFRESH_ICON } from '../../../core/constants';
import { getTabData } from '../../../repository/products-repository';

let tabs = [
  { name: 'Coffee', img: TAB_COFFEE, items: [] },
  { name: 'Tea', img: TAB_TEA, items: [] },
  { name: 'Dessert', img: TAB_DESSERT, items: [] },
];
let activeTabName = 'coffee';
let currentDevice = null;
let isRefresh = false;

function getCurrentTab() {
  const tab = tabs.filter((el) => el.name.toLowerCase() === activeTabName);
  return tab[0];
}

function changeIsRefresh(dataLength, curLength) {
  isRefresh = dataLength !== curLength;
}

function changeVisibleRefresh() {
  const btn = document.getElementById('more-cards');
  if (!isRefresh) {
    btn.classList.remove('show');
    btn.classList.add('not-show');
  } else {
    btn.classList.remove('not-show');
    btn.classList.add('show');
  }
}

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
    <h3 class="heading-3 mt-auto">&#36;${el.price}</h3>
  </div>
</div>
`;
  });
  return cardsHtml;
}

export function getTabItems() {
  const tab = getCurrentTab();
  const itemsData =
    currentDevice === 'mobile'
      ? getTabData(activeTabName, 4, tab.items.length)
      : getTabData(activeTabName, 8, tab.items.length);
  tab.items = [...tab.items, ...itemsData.items];
  changeIsRefresh(itemsData.length, tab.items.length);
  const cardsHtml = renderItems(tab.items);
  document.querySelector('.menu__items').innerHTML = cardsHtml;

  changeVisibleRefresh();
}

export function changeActiveTab(name) {
  if (name) {
    activeTabName = name;
  }
}

export function removeTabItems() {
  tabs = tabs.map((tab) => ({ ...tab, items: [] }));
}

export function changeDevice(val) {
  currentDevice = val;
  removeTabItems();
  changeActiveTab();
  getTabItems();
}

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
  tabs.forEach((el) => {
    tabsHtml += `<button class="menu__tabs_tab" id="${el.name.toLowerCase()}">
  <span class="button_img-container">${el.img}</span>
  <span class="button_text">${el.name}</span>
  </button>`;
  });
  document.querySelector('.menu__tabs').insertAdjacentHTML('afterbegin', tabsHtml);
  document.querySelector('#coffee').classList.add('active');
}
