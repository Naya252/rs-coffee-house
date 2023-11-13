import './src/sass/style.scss';
import './src/ui/share/bar';
import './src/ui/share/footer';

document.addEventListener('DOMContentLoaded', () => {
  alert('DOM готов!');
});

window.onload = function() { // можно также использовать window.addEventListener('load', (event) => {
    alert('Страница загружена');

    // к этому моменту картинка загружена
    // alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
  };
