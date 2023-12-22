import '../../../sass/layouts/_menu.module.scss';
import '../../../sass/components/_modal.module.scss';
import '../../../sass/components/_button.module.scss';
import '../../../sass/components/_tab.module.scss';

import { TAB_COFFEE, TAB_TEA, TAB_DESSERT, REFRESH_ICON, INFO_ICON } from '../../../share/constants';
import { getTabData } from '../../../repository/products-repository';
import { showModal as changeMenu, closeModal as closeContent } from '../../../services/navigateService';
import { setupModal } from '../../../services/setupMenu';
import { toInert, fromInert } from '../../../services/inertService';
import loadImage from '../../../services/setupImg';

let tabs = [
  { name: 'Coffee', img: TAB_COFFEE, items: [] },
  { name: 'Tea', img: TAB_TEA, items: [] },
  { name: 'Dessert', img: TAB_DESSERT, items: [] },
];
let activeTabName = 'coffee';
let currentDevice = null;
let isRefresh = false;
let lastFocus = null;

class Order {
  constructor(price, total, isShow, size = { value: 's', price: 0 }, additives = []) {
    this.size = size;
    this.additives = additives;
    this.price = price;
    this.total = total;
    this.isShow = isShow;
  }

  change(value) {
    this.size.value = 's';
    this.size.price = 0;
    this.additives = [];
    this.total = null;
    this.price = value.price;
    this.calculateTotal();
  }

  changeSize(size, price) {
    this.size.value = size;
    this.size.price = price;
    this.calculateTotal();
  }

  changeAdditivies(value, price, element) {
    if (this.additives.some((el) => el.name === value)) {
      this.additives = this.additives.filter((el) => el.name !== value);
      element.classList.remove('active');
    } else {
      this.additives.push({ name: value, price });
      element.classList.add('active');
    }
    this.calculateTotal();
  }

  calculateTotal() {
    let sumAdditivies = 0;
    if (this.additives.length) {
      sumAdditivies = parseFloat('0.5') * this.additives.length;
    }
    const sum = parseFloat(this.price) + parseFloat(this.size.price) + parseFloat(sumAdditivies);
    this.total = parseFloat(sum).toFixed(2);
    if (this.isShow) {
      document.querySelector('.total-price').innerHTML = `&#36;${this.total}`;
    }
  }

  isActive(value) {
    return value === this.size.value ? 'active' : '';
  }

  changeVisible(value) {
    this.isShow = value;
  }
}

export const order = new Order();

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
<button class="card" id="${el.id}-${el.category}">
  <div class="card__img loader">
    <img
      class="img"
      loading="lazy"
      src="${el.img}"
      alt="${el.name}" />
  </div>
  <div class="card__info">
    <h3 class="heading-3 mb-3">${el.name}</h3>
    <p class="text-three-rows">${el.description}</p>
    <h3 class="heading-3 mt-auto">&#36;${el.price}</h3>
  </div>
</button>
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
  document.querySelectorAll('.img').forEach((el) => {
    loadImage(el);
  });
}

export function changeActiveTab(name) {
  if (name) {
    activeTabName = name;
  }
}

export function removeTabItems() {
  tabs = tabs.map((tab) => ({ ...tab, items: [] }));
}

export function changeDevice(size) {
  currentDevice = size;
  removeTabItems();
  changeActiveTab();
  getTabItems();
}

export function createMenuSection() {
  document.querySelector('.pseudo').insertAdjacentHTML(
    'afterend',
    `
<main id="main" class="wrap mx-auto mt-5">
  <section id="menu">
    <h1 style="display: none">Menu</h1>  
    <h2 class="heading-2 mb-10 mx-auto">Behind each of our cups hides an <em class="text-accent">amazing surprise</em></h2>
    <div class="menu__tabs tabs mb-10"></div>
    <div class="menu__items"></div>
    <button id="more-cards" class="rounded-btn transparent-dark-btn">${REFRESH_ICON}</button>
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

// Генерация контролов модалки
function generateTab(arr, name) {
  let html = ``;
  let controls = [];
  for (const [key, value] of Object.entries(arr)) {
    controls.push({ ...value, title: key[0] });
  }

  controls = controls.map((el) => Object.values(el));

  function getTitle(el) {
    let title;
    if (name === 'sizes') {
      title = el[2].toUpperCase();
    } else {
      title = +el[2] + 1;
    }
    return title;
  }

  controls.forEach((el) => {
    html += `<button class="${name}__tab tab ${order.isActive(el[2])}" price="${el[1]}" value="${el[2]}">
    <span class="tab__img-container"><span>${getTitle(el)}</span></span>
    <span>${el[0]}</span>
    </button>`;
  });
  return html;
}
// Генерация модалки
export function showOrderModal(item, card) {
  order.change(item);
  lastFocus = card;

  document.querySelector('#footer').insertAdjacentHTML(
    'afterend',
    `<div id="modal" aria-hidden="true">
  <div class="modal__wrap">
    <div class="modal__content">
    </div>
  </div>
</div>`,
  );

  const modal = document.querySelector('#modal');
  modal.classList.add('modal--active');
  const content = document.querySelector('.modal__content');
  content.innerHTML = `
<div class="modal__img">
<div class="loader modal-img-wrapper" style="position:relative; min-height: 200px">
  <img loading="lazy" class="modal-img img"  alt="${item.name}" src="${item.img}">
  </img>
</div>
</div>
<div class="modal__text">
  <div>
    <h3 class="heading-3 mb-3">${item.name}</h3>
    <p class="description">${item.description}</p>
  </div>
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
    <h3 class="heading-3 total-price">&#36;${order.total}</h3>
  </div>
  <div class="alert">
    ${INFO_ICON}
    <p class="caption">The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
  </div>
  <button class="modal__close transparent-dark-btn fill-btn">Close</button>

</div>
  `;
  changeMenu(currentDevice);
  setupModal(document.querySelector(`#modal`));

  setTimeout(() => {
    content.classList.add('content--active');
    order.changeVisible(true);
    loadImage(document.querySelector('.modal-img'));
    document.querySelector('.sizes__tab.tab.active').focus();
    toInert(modal);
  }, 100);
}

export function closeModal() {
  console.log('close')
  const content = document.querySelector('.modal__content');
  content.classList.remove('content--active');

  setTimeout(() => {
    content.innerHTML = ``;
    const modal = document.querySelector('#modal');
    modal.classList.remove('modal--active');
    order.changeVisible(false);
    closeContent(currentDevice);
    fromInert();
    lastFocus.focus();
    lastFocus = null;
    setTimeout(() => {
      document.querySelector('body').removeChild(modal);
    }, 100);
  }, 100);
}
