class Slider {
  constructor(items, value, id) {
    this.value = value;
    this.items = items;
    this.movedItem = id;
  }

  changeSlider(val) {
    this.value += val;
    if (this.value > this.items.length) {
      this.value = 1;
    }
    if (this.value === 0) {
      this.value = this.items.length;
    }
  }

  getTranslate() {
    return window.getComputedStyle(this.getMovedItem(), null).getPropertyValue('translate');
  }

  getMovedItem() {
    return document.getElementById(this.movedItem);
  }

  calculateTranslate(value) {
    let currentTranslate = this.getTranslate();
    if (currentTranslate === 'none') {
      currentTranslate = 0;
    } else {
      currentTranslate = currentTranslate.slice(0, -1);
    }
    const formula = 100 / this.items.length;
    const movedItem = this.getMovedItem();

    if (value === 'before') {
      this.changeSlider(-1);

      if (this.value === 1) {
        movedItem.style.translate = `none`;
      }
      if (this.value === this.items.length) {
        movedItem.style.translate = `${-100 + formula}%`;
      }
      if (this.value !== 1 && this.value !== this.items.length) {
        movedItem.style.translate = `${currentTranslate - -formula}%`;
      }
    }
    if (value === 'after') {
      this.changeSlider(1);
      if (this.value === 1) {
        movedItem.style.translate = `none`;
      } else {
        movedItem.style.translate = `${currentTranslate - formula}%`;
      }
    }
  }

  defaultBehavior() {
    setTimeout(() => {
      this.calculateTranslate('after');
      this.defaultBehavior();
    }, 5000);
  }
}

const items = [
  {
    id: 1,
    name: 'S’mores Frappuccino',
    description:
      'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.',
    price: '5.50',
  },
  {
    id: 2,
    name: 'Caramel Macchiato',
    description:
      'Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.',
    price: '5.00',
  },
  {
    id: 2,
    name: 'Ice coffee',
    description: 'A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.',
    price: '4.50',
  },
];

export const slider = new Slider(items, 1, 'slider-wrapper');

export function setupSlider(element) {
  const watchSlider = (event) => {
    const beforeBtn = event.target.closest('.slider__buttons_btn-left');
    const afterBtn = event.target.closest('.slider__buttons_btn-right');

    if (afterBtn) {
      slider.calculateTranslate('after');
    }
    if (beforeBtn) {
      slider.calculateTranslate('before');
    }
  };
  element.addEventListener('click', (event) => watchSlider(event));
}
