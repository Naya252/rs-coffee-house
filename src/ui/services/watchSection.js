import { MENU_ITEMS } from '../share/bar';
import { BASE_URL, CURRENT_PATH } from '../../core/constants';

function intersectionCallback(entries) {
  entries.forEach((entry) => {
    const section = entry.target;
    if (entry.isIntersecting) {
      document.querySelectorAll(`.nav-item`).forEach((el) => {
        el.classList.toggle('active', el.getAttribute('id').replace('nav-', '') === section.id);
      });
    } else if (!entry.isIntersecting && CURRENT_PATH === `${BASE_URL}`) {
      document.querySelectorAll(`.nav-item`).forEach((el) => {
        el.classList.remove('active');
      });
    }
  });
}

const observer = new IntersectionObserver(intersectionCallback, {
  threshold: [0.5, 1],
});

export default function watchActiveSection() {
  if (CURRENT_PATH.includes('menu')) {
    document.querySelector('#nav-menu').classList.add('active');
    document.querySelector('#nav-menu').style.pointerEvents = 'none';
    ['menu', 'footer'].forEach((el) => {
      observer.observe(document.getElementById(el));
    });
  } else {
    MENU_ITEMS.forEach((el) => {
      observer.observe(document.getElementById(el.link));
    });
  }
}
