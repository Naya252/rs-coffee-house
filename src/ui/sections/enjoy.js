import '../../sass/enjoy.scss';
import { CUP_ICON, BASE_URL } from '../../core/constants';
import imgUrl from '../../assets/video/img-hero.svg';
import videoUrl from '../../assets/video/video (2160p).mp4';

document.querySelector('#enjoy').insertAdjacentHTML(
  'afterbegin',
  `
<div class="enjoy__content">
  <video
    autoplay
    poster="${imgUrl}"
    muted
    loop>
    <source
      src="${videoUrl}"
      type="video/mp4" />
  </video>

  <div class="enjoy__content_offer-wrapper">
    <div class="enjoy__content_offer">
      <h1 class="heading-1 mb-10"><em class="text-accent">Enjoy</em> premium coffee at our charming cafe</h1>
      <p class="mb-10">
        With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination
        for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.
      </p>
      <a class="button-primary" href="${BASE_URL}menu/"> <span>Menu</span> ${CUP_ICON} </a>
    </div>
  </div>
</div>
`,
);
