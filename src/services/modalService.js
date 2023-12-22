import { size } from './resizeBody';

// change header styles with opened modal
export function computedHeaderWidth(left, currentDevice) {
  const paddings = window.getComputedStyle(document.querySelector('body')).padding.split(' ');
  let padding = paddings[1].slice(0, -2);
  let width = window.getComputedStyle(document.querySelector('body')).width.slice(0, -2);
  width = Number(width);
  padding = Number(padding);

  const cur = size.curInline;

  let curLeft = left - padding;
  if (currentDevice === 'desktop' && cur >= 1440) {
    width -= 16;
    curLeft -= 8;
  }
  if (currentDevice === 'desktop' && cur >= 768 && cur < 1440) {
    width -= 16;
  }

  return { width: width - padding * 2, padding, left: curLeft };
}

export function openModal(currentDevice) {
  document.querySelector('body').classList.add('scroll-not-visible');
  const header = document.querySelector('#header');
  const posHeaderBeforeModal = header.getBoundingClientRect();
  document.querySelector('.pseudo').classList.add('show');
  header.classList.add('show-always');
  if (posHeaderBeforeModal.y === 0) {
    header.classList.remove('mt-5');
  }

  const posHeaderAfterModal = header.getBoundingClientRect();
  const { width, padding, left } = computedHeaderWidth(posHeaderBeforeModal.x, currentDevice);

  header.style.top = `${Math.abs(posHeaderAfterModal.y)}px`;
  header.style.left = `${left}px`;
  header.style.padding = `0 ${padding}px`;
  header.style.width = `${width}px`;
  if (posHeaderAfterModal.y === 20) {
    header.classList.remove('mt-5');
  }
  if (currentDevice === 'desktop') {
    document.querySelector('body').classList.add('static-width');
  }
}

export function closeModal() {
  document.querySelector('body').classList.remove('scroll-not-visible');
  document.querySelector('body').classList.remove('static-width');
  const header = document.querySelector('#header');
  header.classList.remove('show-always');
  header.classList.add('mt-5');
  header.style.top = 0;
  header.style.left = 0;
  header.style.padding = 0;
  header.style.width = null;
  document.querySelector('.pseudo').classList.remove('show');
}
