class Slider {
  constructor(items, value, id, showDelay = 5000) {
    this.value = value;
    this.items = items;
    this.movedItem = id;
    this.showDelay = showDelay;
    this.interval = null;
    this.percent = 0;
    this.moveStart = null;
    this.moveEnd = null;
  }

  changeSlider(val) {
    this.value += val;
    if (this.value > this.items.length) {
      this.value = 1;
    }
    if (this.value === 0) {
      this.value = this.items.length;
    }

    this.animateProgress({ el: document.getElementById(`${this.value}-progress`) });
  }

  abortInterval({ el, to }) {
    clearInterval(this.interval);
    el.setAttribute('value', 0);
    el.classList.remove('active');
    this.calculateTranslate(to);
  }

  pauseInterval() {
    clearInterval(this.interval);
  }

  async animateProgress(data, currentPercent) {
    document.getElementById(`${this.value}-slide`).classList.add('active');
    data.el.classList.add('active');
    let percent;
    if (currentPercent) {
      percent = currentPercent;
    } else {
      percent = 0;
    }

    const step = this.showDelay / 100;

    const self = this;
    let interval = null;

    function progressTimer() {
      if (percent < 100) {
        percent += 1;
        this.percent = percent;
        data.el.setAttribute('value', percent);
      } else {
        document.getElementById(`${self.value}-slide`).classList.remove('active');
        self.abortInterval({ el: data.el, to: 'after' });
      }
    }
    interval = setInterval(progressTimer, step);
    this.interval = interval;
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
    this.animateProgress({ el: document.getElementById(`${this.value}-progress`) });
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
    id: 3,
    name: 'Ice coffee',
    description: 'A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.',
    price: '4.50',
  },
];

export const slider = new Slider(items, 1, 'slider-wrapper');

export function setupSlides(el) {
  const watchSlide = (event) => {
    const activeProgress = document.querySelector(`.slider__controls_item.active`);
    const currentPercent = activeProgress.getAttribute('value');

    if (event.type === 'pointerenter' && event.pointerType === 'mouse') {
      slider.pauseInterval();
    }

    if (event.type === 'pointerleave' && event.pointerType === 'mouse') {
      slider.animateProgress({ el: document.getElementById(`${slider.value}-progress`) }, +currentPercent);
    }

    function checkSwipe() {
      if (slider.moveStart && slider.moveEnd && slider.moveStart !== slider.moveEnd) {
        if (slider.moveStart > slider.moveEnd) {
          slider.abortInterval({ el: activeProgress, to: 'after' });
        } else {
          slider.abortInterval({ el: activeProgress, to: 'before' });
        }
        slider.moveStart = null;
        slider.moveEnd = null;
      }
    }

    // if (event.type === 'pointermove') {
    //   console.log('set ', event.getCoalescedEvents())
    // }

    if (event.type === 'gotpointercapture') {
      slider.moveStart = Math.round(event.offsetX);
    }
    if (event.type === 'lostpointercapture') {
      slider.moveEnd = Math.round(event.offsetX);
      checkSwipe();
    }
    // if (event.type === 'pointerup') {
    //   slider.moveStart = event.screenX;
    // }
    // if (event.type === 'pointerdown') {
    //   slider.moveEnd = event.screenX;
    //   checkSwipe();
    // }
  };
  el.addEventListener('pointerenter', (event) => watchSlide(event));
  el.addEventListener('pointerleave', (event) => watchSlide(event));
  // el.addEventListener('pointerdown', (event) => watchSlide(event));
  // el.addEventListener('pointerup', (event) => watchSlide(event));
  el.addEventListener('gotpointercapture', (event) => watchSlide(event));
  el.addEventListener('lostpointercapture', (event) => watchSlide(event));
  el.addEventListener('pointermove', (event) => watchSlide(event));
}

export function setupSlider(element) {
  const watchSlider = (event) => {
    const beforeBtn = event.target.closest('.slider__buttons_btn-left');
    const afterBtn = event.target.closest('.slider__buttons_btn-right');
    const activeProgress = document.querySelector(`.slider__controls_item.active`);

    if (afterBtn) {
      slider.abortInterval({ el: activeProgress, to: 'after' });
    }
    if (beforeBtn) {
      slider.abortInterval({ el: activeProgress, to: 'before' });
    }
  };
  element.addEventListener('click', (event) => watchSlider(event));
  document.querySelectorAll('.slider__content').forEach((el) => {
    setupSlides(el);
  });
}
