import '../../sass/about.scss';
import about1Url from '../../assets/img/photo/about-1.svg';
import about2Url from '../../assets/img/photo/about-2.svg';
import about3Url from '../../assets/img/photo/about-3.svg';
import about4Url from '../../assets/img/photo/about-4.svg';

document.querySelector('#about').insertAdjacentHTML(
  'afterbegin',
  `
<h2 class="heading-2 mb-10">
  Resource is <em class="text-accent">the perfect and cozy place</em> where you can enjoy a variety of hot beverages,
  relax, catch up with friends, or get some work done.
</h2>
<div class="about__images">
  <div class="about__images_column">
    <div class="card large">
      <img
        src="${about1Url}"
        alt="about-1" />
    </div>
    <div class="card">
      <img
        src="${about2Url}"
        alt="about-2" />
    </div>
  </div>
  <div class="about__images_column">
    <div class="card">
      <img
        src="${about3Url}"
        alt="about-3" />
    </div>
    <div class="card large">
      <img
        src="${about4Url}"
        alt="about-4" />
    </div>
  </div>
</div>
`,
);
