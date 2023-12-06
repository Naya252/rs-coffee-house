export function showModal(currentDevice) {
  document.querySelector('body').classList.add('scroll-not-visible');
  const header = document.querySelector('#header');
  const posHeaderBeforeModal = header.getBoundingClientRect();
  document.querySelector('.pseudo').classList.add('show');
  header.classList.add('show-always');
  if (posHeaderBeforeModal.y === 0) {
    header.classList.remove('mt-5');
  }

  console.log(posHeaderBeforeModal);
  const posHeaderAfterModal = header.getBoundingClientRect();
  header.style.top = `${Math.abs(posHeaderAfterModal.y)}px`;
  header.style.left = `${posHeaderBeforeModal.x}px`;
  header.style.width = `${posHeaderBeforeModal.width}px`;
  if (posHeaderAfterModal.y === 20) {
    header.classList.remove('mt-5');
  }
  if (currentDevice === 'desktop') {
    document.querySelector('body').classList.add('static-width');
    header.style.left = `${posHeaderBeforeModal.x - 8}px`;
  }
}

export function closeModal(currentDevice) {
  document.querySelector('body').classList.remove('scroll-not-visible');
  const header = document.querySelector('#header');
  header.classList.remove('show-always');
  header.classList.add('mt-5');
  header.style.top = 0;
  header.style.left = 0;
  header.style.width = null;
  document.querySelector('.pseudo').classList.remove('show');

  if (currentDevice === 'desktop') {
    document.querySelector('body').classList.remove('static-width');
  }
}
