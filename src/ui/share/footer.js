import '../../assets/sass/footer.scss';
import twitterImg from '../../assets/icons/twitter';
import instagramImg from '../../assets/icons/instagram';
import facebookPlayImg from '../../assets/icons/facebook';
import phoneImg from '../../assets/icons/phone';
import pinImg from '../../assets/icons/pin-alt';
import clockImg from '../../assets/icons/clock';

document.querySelector('#footer').innerHTML = `
<div class="footer__offer">
  <h2 class="heading-2 mb-10">
    <span class="text-light">Sip, Savor, Smile.</span> <br />
    <span class="text-accent accent">It’s coffee time!</span>
  </h2>
  <div id="socials"></div>
</div>
<div class="footer__contacts">
  <h3 class="heading-3 mb-9">Contact us</h3>
  <a
    class="link"
    href="#"
    ><span>${pinImg} 8558 Green Rd., LA</span></a
  >
  <a
    class="link"
    href="#"
    ><span>${phoneImg} +1 (603) 555-0123</span></a
  >
  <span class="link">${clockImg} Mon-Sat: 9:00 AM – 23:00 PM</span>
</div>
`;

const socialIcons = [twitterImg, instagramImg, facebookPlayImg];
let socialButtons = '';
socialIcons.forEach((el) => {
  socialButtons += `<button class="social__btn">${el}</button>`;
});
document.querySelector('#socials').innerHTML = socialButtons;
