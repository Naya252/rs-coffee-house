import '../../sass/layouts/menu.scss';
import coffee1Url from '../../assets/img/coffee/coffee-1.svg';
import coffee2Url from '../../assets/img/coffee/coffee-2.svg';
import coffee3Url from '../../assets/img/coffee/coffee-3.svg';
import coffee4Url from '../../assets/img/coffee/coffee-4.svg';
import coffee5Url from '../../assets/img/coffee/coffee-5.svg';
import coffee6Url from '../../assets/img/coffee/coffee-6.svg';
import coffee7Url from '../../assets/img/coffee/coffee-7.svg';
import coffee8Url from '../../assets/img/coffee/coffee-8.svg';
import { REFRESH_ICON } from '../../core/constants';

const tabItems = [
  { name: 'Coffee', img: '&#9749;' },
  { name: 'Tea', img: '&#129750;' },
  { name: 'Dessert', img: '&#127856;' },
];

const coffeeItems = [
  {
    name: 'Irish coffee',
    descriptions: 'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
    price: '$7.00',
    img: coffee1Url,
  },
  {
    name: 'Kahlua coffee',
    descriptions: 'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
    price: '$7.00',
    img: coffee2Url,
  },
  {
    name: 'Honey raf',
    descriptions: 'Espresso with frothed milk, cream and aromatic honey',
    price: '$5.50',
    img: coffee3Url,
  },
  {
    name: 'Ice cappuccino',
    descriptions: 'Cappuccino with soft thick foam in summer version with ice',
    price: '$5.00',
    img: coffee4Url,
  },
  {
    name: 'Espresso',
    descriptions: 'Classic black coffee',
    price: '$4.50',
    img: coffee5Url,
  },
  {
    name: 'Latte',
    descriptions: 'Espresso coffee with the addition of steamed milk and dense milk foam',
    price: '$5.50',
    img: coffee6Url,
  },
  {
    name: 'Latte macchiato',
    descriptions: 'Espresso with frothed milk and chocolate',
    price: '$5.50',
    img: coffee7Url,
  },
  {
    name: 'Coffeewith cognac',
    descriptions: 'Fragrant black coffee with cognac and whipped cream',
    price: '$6.50',
    img: coffee8Url,
  },
];

document.querySelector('#menu').insertAdjacentHTML(
  'afterbegin',
  `
<h1 style="display: none">Menu</h1>  
<h2 class="heading-2 mb-10 mx-auto">Behind each of our cups hides an <em class="text-accent">amazing surprise</em></h2>
<div class="menu__tabs mb-10"></div>
<div class="menu__items"></div>
<button id="more-cards" class="rounded-btn transparent-dark-btn">${REFRESH_ICON}</button>
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
        alt="bout-3" />
    </div>
    <div class="card__info">
      <h3 class="heading-3 mb-3">${el.name}</h3>
      <p class="text-three-rows">${el.descriptions}</p>
      <h3 class="heading-3 mt-auto">${el.price}</h3>
    </div>
  </div>
  `;
});
document.querySelector('.menu__items').insertAdjacentHTML('afterbegin', cardsHtml);
