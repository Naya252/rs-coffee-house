import '../../sass/layouts/menu.scss';
import {
  TAB_COFFEE,
  TAB_TEA,
  TAB_DESSERT,
  REFRESH_ICON,
  COFFEE_IMAGES,
  TEA_IMAGES,
  DESSERTS_IMAGES,
} from '../../core/constants';
import { getTabData } from '../../repository/products-repository';

const tabItems = [
  { name: 'Coffee', img: TAB_COFFEE },
  { name: 'Tea', img: TAB_TEA },
  { name: 'Dessert', img: TAB_DESSERT },
];
let coffeeItems = getTabData('coffee');
let teaItems = getTabData('tea');
let dessertsItems = getTabData('dessert');
coffeeItems = coffeeItems.map((el, i) => ({ ...el, img: COFFEE_IMAGES[i] }));
teaItems = teaItems.map((el, i) => ({ ...el, img: TEA_IMAGES[i] }));
dessertsItems = dessertsItems.map((el, i) => ({ ...el, img: DESSERTS_IMAGES[i] }));
console.log(coffeeItems);
console.log(teaItems);
console.log(dessertsItems);

document.querySelector('#header').insertAdjacentHTML(
  'afterend',
  `
<main class="wrap mx-auto mt-5">
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
  tabsHtml += `<button id="${el.name.toLowerCase()}">
  <span class="button_img-container">${el.img}</span>
  <span class="button_text">${el.name}</span>
  </button>`;
});
document.querySelector('.menu__tabs').insertAdjacentHTML('afterbegin', tabsHtml);
document.querySelector('#coffee').classList.add('active');

let cardsHtml = '';
coffeeItems.forEach((el) => {
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
document.querySelector('.menu__items').insertAdjacentHTML('afterbegin', cardsHtml);
