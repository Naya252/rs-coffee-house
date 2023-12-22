import getMenuItems from './navigateService';
import { CURRENT_PATH } from '../share/constants';

function removeClasses() {
  document.querySelectorAll(`.nav-item`).forEach((el) => {
    el.classList.remove('active');
  });
}

// drow underline for active menu item
function addMenuActive() {
  if (CURRENT_PATH.includes('menu')) {
    document.querySelector('#nav-menu').classList.add('active');
    document.querySelector('#nav-menu').style.pointerEvents = 'none';
  }
}

function intersectionCallback(entries) {
  entries.forEach((entry) => {
    const section = entry.target;
    if (entry.isIntersecting) {
      document.querySelectorAll(`.nav-item`).forEach((el) => {
        el.classList.toggle('active', el.getAttribute('id').replace('nav-', '') === section.id);
      });
    } else if (!entry.isIntersecting && !CURRENT_PATH.includes('menu')) {
      removeClasses();
    }
  });
}

const observer = new IntersectionObserver(intersectionCallback, {
  threshold: [0.5, 1],
});

function getEntries() {
  let data;
  if (CURRENT_PATH.includes('menu')) {
    addMenuActive();
    data = ['menu', 'footer'];
  } else {
    const { generalMenutems } = getMenuItems();
    const links = generalMenutems.map((el) => el.link.split('#'));
    data = links.map((el) => el[el.length - 1]);
  }
  return data;
}

export function watchActiveSection() {
  const entries = getEntries();
  entries.forEach((el) => {
    observer.observe(document.getElementById(el));
  });
}

export function unWatchSections() {
  const entries = getEntries();
  entries.forEach((el) => {
    observer.unobserve(document.getElementById(el));
  });
  removeClasses();
  addMenuActive();
}
