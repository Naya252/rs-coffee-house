import '../../../sass/layouts/_favorite.module.scss';
import '../../../sass/components/_button.module.scss';
import { ARROW_LEFT_ICON, ARROW_RIGHT_ICON } from '../../../share/constants';
import { slider, setupSlider } from '../../../services/sliderService';

function createSlides() {
  let slidesHtml = ``;
  slider.items.forEach((el) => {
    slidesHtml += `
    <div class="slide-wrapper" id="${el.id}-slide-wrapper" oncontextmenu="return false">
      <div id="${el.id}-slide" class="slider__content mx-auto">
        <div class="slider__content_img"></div>
        <div class="slider__content_text mt-5">
          <h3 class="heading-3">${el.name}</h3>
          <p>
            ${el.description}
          </p>
          <h3 class="heading-3">$${el.price}</h3>
        </div>
      </div>
    </div>
    `;
  });
  return slidesHtml;
}

function createProgressItems() {
  let progressHtml = ``;
  slider.items.forEach((el) => {
    progressHtml += `<progress id="${el.id}-progress" class="slider__controls_item" value="0" max="100"></progress>`;
  });
  return progressHtml;
}

export default function createFavoriteSection() {
  const slidesHtml = createSlides();
  const progressHtml = createProgressItems();
  document.querySelector('#enjoy').insertAdjacentHTML(
    'afterend',
    `
  <section id="favorite-coffee" class="section">
    <h2 class="heading-2 mb-10">Choose your <em class="text-accent">favorite</em> coffee</h2>
    <div class="slider" id="slider">
    <div id="slider-wrapper">
      ${slidesHtml}
      </div>
        <button class="slider__buttons slider__buttons_btn-left rounded-btn transparent-dark-btn">${ARROW_LEFT_ICON}</button>
        <button class="slider__buttons slider__buttons_btn-right rounded-btn transparent-dark-btn">${ARROW_RIGHT_ICON}</button>
      <div class="slider__controls">
      ${progressHtml}
      </div>
    </div>
  </section>
  `,
  );

  setupSlider(document.querySelector('.slider'));
  slider.defaultBehavior();
}
