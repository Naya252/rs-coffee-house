import '../../sass/layouts/footer.scss';
import '../../sass/components/button.scss';
import { TWITTER_ICON, INSTAGRAM_ICON, FACEBOOK_ICON, PHONE_ICON, PIN_ICON, CLOCK_ICON } from '../../core/constants';

document.querySelector('#footer').insertAdjacentHTML(
  'afterbegin',
  `
<div class="footer__offer">
  <h2 class="heading-2">
    <span class="text-light">Sip, Savor, Smile.</span>
    <span class="text-accent accent">It’s coffee time!</span>
  </h2>
  <div id="socials"></div>
</div>
<div class="footer__contacts">
  <h3 class="heading-3">Contact us</h3>
  <a
    class="link mb-1"
    target="_blank"
    href="https://www.google.com/maps/place/%D0%9F%D0%B0%D1%80%D0%BA+%D1%80%D0%B0%D0%B7%D0%B2%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B9+%22Magic+City%22/@41.3015407,69.2643463,14z/data=!4m15!1m8!3m7!1s0x38ae8b0cc379e9c3:0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YI!3b1!8m2!3d41.2994958!4d69.2400734!16zL20vMGZzbXk!3m5!1s0x38ae8bf3870c714d:0x6ddece20c220333b!8m2!3d41.3042866!4d69.2465277!16s%2Fg%2F11pbj1v2b_?entry=ttu"
    ><span>${PIN_ICON} 8558 Green Rd., LA</span></a
  >
  <a
    class="link mb-1"
    href="tel:+16035550123"
    ><span>${PHONE_ICON} +1 (603) 555-0123</span></a
  >
  <span class="link mb-1">${CLOCK_ICON} Mon-Sat: 9:00 AM – 23:00 PM</span>
</div>
`,
);

const socialIcons = [TWITTER_ICON, INSTAGRAM_ICON, FACEBOOK_ICON];
let socialButtons = '';
socialIcons.forEach((el) => {
  socialButtons += `<button class="social__btn rounded-btn transparent-light-btn">${el}</button>`;
});
document.querySelector('#socials').insertAdjacentHTML('afterbegin', socialButtons);
