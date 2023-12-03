import '../../../sass/layouts/_menu.module.scss';
import '../../../sass/components/_modal.module.scss';
import '../../../sass/components/_button.module.scss';
import '../../../sass/components/_tab.module.scss';

import { TAB_COFFEE, TAB_TEA, TAB_DESSERT, REFRESH_ICON, INFO_ICON } from '../../../core/constants';
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
<div class="card" id="${el.id}-${el.category}">
  <div class="card__img">
    <img
      loading="lazy"
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
    <div class="menu__tabs tabs mb-10"></div>
    <div class="menu__items"></div>
    <button id="more-cards" class="rounded-btn transparent-dark-btn">${REFRESH_ICON}</button>
    <div id="modal" aria-hidden="true">
      <div class="modal__wrap">
        <div class="modal__content">
        </div>
      </div>
    </div>
  </section>
</main>
`,
  );

  let tabsHtml = '';
  tabs.forEach((el) => {
    tabsHtml += `<button class="menu__tabs_tab tab" id="${el.name.toLowerCase()}">
  <span class="tab__img-container">${el.img}</span>
  <span class="tab__text">${el.name}</span>
  </button>`;
  });
  document.querySelector('.menu__tabs').insertAdjacentHTML('afterbegin', tabsHtml);
  document.querySelector('#coffee').classList.add('active');
}

function generateTab(arr, name) {
  console.log('generate ', name);
  let html = ``;
  let tabs = [];
  for (const [key, value] of Object.entries(arr)) {
    tabs.push({ ...value, title: key[0] });
  }

  tabs = tabs.map((el) => Object.values(el));

  tabs.forEach((el) => {
    html += `<button class="${name}_tab tab" price="${el[1]}">
    <span class="tab__img-container"><span>${el[2].toUpperCase()}</span></span>
    <span>${el[0]}</span>
    </button>`;
  });
  return html;
}

export function showOrderModal(item) {
  console.log(item);
  const modal = document.querySelector('#modal');
  modal.classList.add('modal--active');
  const content = document.querySelector('.modal__content');
  content.innerHTML = `
<img loading="lazy" class="modal_img" alt="${item.name}" src="${item.img}" />
<div class="modal__text">
  <h3 class="heading-3">${item.name}</h3>
  <p class="description">${item.description}</p>
  <div class="size">
    <p "class="size__title">Size</p>
    <div class="tabs sizes__tabs">
      ${generateTab(item.sizes, 'sizes')}
    </div>
  </div>
  <div class="additives">
    <p "class="additives__title">Additives</p>
    <div class="tabs additives__tabs">
      ${generateTab(item.additives, 'additives')}
    </div>
  </div>
  <div class="total">
    <h3 class="heading-3">Total:</h3>
    <h3 class="heading-3">&#36;${item.price}</h3>
  </div>
  <div class="alert">
    ${INFO_ICON}
    <p class="caption">The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
  </div>
  <button class="modal__close transparent-dark-btn fill-btn">Close</button>

</div>
  `;
  console.log(content);

  setTimeout(() => {
    content.classList.add('content--active');
  }, 100);
}

//--------------
// TODO: change animate of close modal
//--------------
export function closeModal() {
  const content = document.querySelector('.modal__content');
  content.classList.remove('content--active');

  setTimeout(() => {
    content.innerHTML = ``;
    const modal = document.querySelector('#modal');
    modal.classList.remove('modal--active');
  }, 100);
}
