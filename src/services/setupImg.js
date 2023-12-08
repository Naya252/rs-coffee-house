export default function loadImage(el) {
  const loadImg = (event) => {
    const img = event.target.closest('.img');
    img.parentElement.classList.remove('loader');
    img.classList.remove('loader');
  };
  el.addEventListener('load', (event) => loadImg(event));
}
