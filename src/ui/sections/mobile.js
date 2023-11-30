import '../../sass/layouts/mobile.scss';
import '../../sass/components/button.scss';
import { APPLE_ICON, GOOGLE_PLAY_ICON } from '../../core/constants';

export default function createMobileSection() {
  document.querySelector('#about').insertAdjacentHTML(
    'afterend',
    `
<section id="mobile-app" class="section">
  <div class="mobile-app__offer">
    <h2 class="heading-2"><em class="text-accent">Download</em> our apps to start ordering</h2>
    <p>
      Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are
    </p>
    <div class="mobile-app__offer_buttons">
      <button class="button-primary mobile-app-btn transparent-dark-btn svg-fill">
      ${APPLE_ICON}
      <span class="button__text">
        <span class="caption">Available on the</span>
        <span>App Store</span>
      </span>
    </button>
    <button class="button-primary mobile-app-btn transparent-dark-btn svg-fill">
    ${GOOGLE_PLAY_ICON}
      <span class="button__text">
        <span class="caption">Available on</span>
        <span>Google Play</span>
      </span>
    </button>
    </div>
  </div>
  <div class="mobile-app__img">
  </div>
</section>
`,
  );
}
