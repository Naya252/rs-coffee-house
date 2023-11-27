import{B as e,C as s,A as t,a as o,b as a,G as n}from"./main-e04d39ef.js";const i="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house2/assets/img-hero-1fb4a687.svg",c="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house2/assets/video(2160p)-21ac9e89.mp4";document.querySelector("#enjoy").insertAdjacentHTML("afterbegin",`
<div class="enjoy__content">
  <video
    autoplay
    poster="${i}"
    muted
    loop>
    <source
      src="${c}"
      type="video/mp4" />
  </video>

  <div class="enjoy__content_offer-wrapper">
    <div class="enjoy__content_offer">
      <h1 class="heading-1 mb-10"><em class="text-accent">Enjoy</em> premium coffee at our charming cafe</h1>
      <p class="mb-10">
        With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination
        for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.
      </p>
      <a class="button-primary enjoy-btn" href="${e}menu/"> <span>Menu</span> ${s} </a>
    </div>
  </div>
</div>
`);document.querySelector("#favorite-coffee").insertAdjacentHTML("afterbegin",`
<h2 class="heading-2 mb-10">Choose your <em class="text-accent">favorite</em> coffee</h2>
<div class="slider">
  <div class="slider__content mx-auto">
    <div class="slider__content_img"></div>
    <div class="slider__content_text mt-5">
      <h3 class="heading-3">S’mores Frappuccino</h3>
      <p>
        This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.
      </p>
      <h3 class="heading-3">$5.50</h3>
    </div>
  </div>
  <div class="slider__buttons">
    <button class="slider__buttons_btn-left rounded-btn transparent-dark-btn">${t}</button>
    <button class="slider__buttons_btn-right rounded-btn transparent-dark-btn">${o}</button>
  </div>
  <div class="slider__controls">
    <button class="slider__controls_item active"></button>
    <button class="slider__controls_item"></button>
    <button class="slider__controls_item"></button>
  </div>
</div>
`);const r="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house2/assets/about-1-d836e95d.svg",l="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house2/assets/about-2-693e846d.svg",d="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house2/assets/about-3-667f0d6b.svg",u="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house2/assets/about-4-96517610.svg";document.querySelector("#about").insertAdjacentHTML("afterbegin",`
<h2 class="heading-2 mb-10">
  Resource is <em class="text-accent">the perfect and cozy place</em> where you can enjoy a variety of hot beverages,
  relax, catch up with friends, or get some work done.
</h2>
<div class="about__images">
  <div class="about__images_column">
    <div class="card large">
      <img
        src="${r}"
        alt="about-1" />
    </div>
    <div class="card">
      <img
        src="${l}"
        alt="about-2" />
    </div>
  </div>
  <div class="about__images_column">
    <div class="card">
      <img
        src="${d}"
        alt="about-3" />
    </div>
    <div class="card large">
      <img
        src="${u}"
        alt="about-4" />
    </div>
  </div>
</div>
`);document.querySelector("#mobile-app").insertAdjacentHTML("afterbegin",`
<div class="mobile-app__offer">
  <h2 class="heading-2"><em class="text-accent">Download</em> our apps to start ordering</h2>
  <p>
    Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are
  </p>
  <div class="mobile-app__offer_buttons">
    <button class="button-primary mobile-app-btn transparent-dark-btn svg-fill">
    ${a}
    <span class="button__text">
      <span class="caption">Available on the</span>
      <span>App Store</span>
    </span>
  </button>
  <button class="button-primary mobile-app-btn transparent-dark-btn svg-fill">
  ${n}
    <span class="button__text">
      <span class="caption">Available on</span>
      <span>Google Play</span>
    </span>
  </button>
  </div>
</div>
<div class="mobile-app__img">
</div>
`);
//# sourceMappingURL=main-1212ef39.js.map
