import '../../../sass/layouts/_about.module.scss';
import about1Url from '../../../assets/img/photo/about-1.webp';
import about2Url from '../../../assets/img/photo/about-2.webp';
import about3Url from '../../../assets/img/photo/about-3.webp';
import about4Url from '../../../assets/img/photo/about-4.webp';

export default function createAboutSection() {
  document.querySelector('#favorite-coffee').insertAdjacentHTML(
    'afterend',
    `
  <section id="about" class="section">
    <h2 class="heading-2 mb-10">
      Resource is <em class="text-accent">the perfect and cozy place</em> where you can enjoy a variety of hot beverages,
      relax, catch up with friends, or get some work done.
    </h2>
    <div class="about__images">
      <div class="about__images_column">
        <div class="card large">
          <img
            loading="lazy"
            src="${about1Url}"
            alt="about-1" />
        </div>
        <div class="card">
          <img
            loading="lazy"
            src="${about2Url}"
            alt="about-2" />
        </div>
      </div>
      <div class="about__images_column">
        <div class="card">
          <img
            loading="lazy"
            src="${about3Url}"
            alt="about-3" />
        </div>
        <div class="card large">
          <img
            loading="lazy"
            src="${about4Url}"
            alt="about-4" />
        </div>
      </div>
    </div>
  </section>
  `,
  );
}
