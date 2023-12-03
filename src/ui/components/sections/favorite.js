import '../../../sass/layouts/_favorite.module.scss';
import '../../../sass/components/_button.module.scss';
import { ARROW_LEFT_ICON, ARROW_RIGHT_ICON } from '../../../core/constants';

export default function createFavoriteSection() {
  document.querySelector('#enjoy').insertAdjacentHTML(
    'afterend',
    `
  <section id="favorite-coffee" class="section">
    <h2 class="heading-2 mb-10">Choose your <em class="text-accent">favorite</em> coffee</h2>
    <div class="slider">
      <div class="slider__content mx-auto">
        <div class="slider__content_img"></div>
        <div class="slider__content_text mt-5">
          <h3 class="heading-3">S’mores Frappuccino</h3>
          <p>
            This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.
          </p>
          <h3 class="heading-3">$5.50</h3>
        </div>
      </div>
      <div class="slider__buttons">
        <button class="slider__buttons_btn-left rounded-btn transparent-dark-btn">${ARROW_LEFT_ICON}</button>
        <button class="slider__buttons_btn-right rounded-btn transparent-dark-btn">${ARROW_RIGHT_ICON}</button>
      </div>
      <div class="slider__controls">
        <button class="slider__controls_item active"></button>
        <button class="slider__controls_item"></button>
        <button class="slider__controls_item"></button>
      </div>
    </div>
  </section>
  `,
  );
}
