(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const L=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.166 9.76667V11.6667C14.166 14.8883 11.5543 17.5 8.33268 17.5C5.11102 17.5 2.49935 14.8883 2.49935 11.6667V9.76667C2.49935 9.4353 2.76798 9.16667 3.09935 9.16667H13.566C13.8974 9.16667 14.166 9.4353 14.166 9.76667Z" stroke="curentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.99935 7.49996C9.99935 6.66663 10.5946 5.83329 11.7851 5.83329V5.83329C13.1 5.83329 14.166 4.7673 14.166 3.45234V2.91663" stroke="curentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66732 7.5V7.08333C6.66732 5.70262 7.78661 4.58333 9.16732 4.58333V4.58333C10.0878 4.58333 10.834 3.83714 10.834 2.91667V2.5" stroke="curentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.334 9.16663H15.4173C16.5679 9.16663 17.5007 10.0994 17.5007 11.25C17.5007 12.4006 16.5679 13.3333 15.4173 13.3333H14.1673" stroke="curentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,Q=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z" stroke="curentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,F=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="curentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="curentColor"/>
<path d="M17.5 6.51L17.51 6.49889" stroke="curentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,O=`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z"
    stroke="curentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`,P=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0984 12.2516L11.6665 12.9166C9.34845 11.7531 7.91654 10.4166 7.08321 8.33329L7.72483 4.89154L6.51197 1.66663L3.72946 1.66663C2.60191 1.66663 1.71466 2.59958 1.90108 3.71161C2.29888 6.08454 3.37231 10.0391 6.24987 12.9166C9.27338 15.9401 13.5661 17.3318 16.1378 17.9288C17.299 18.1983 18.3332 17.2908 18.3332 16.0988L18.3332 13.4843L15.0984 12.2516Z" stroke="curentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,R=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6663 8.33329C16.6663 12.0152 9.99967 18.3333 9.99967 18.3333C9.99967 18.3333 3.33301 12.0152 3.33301 8.33329C3.33301 4.65139 6.31778 1.66663 9.99967 1.66663C13.6816 1.66663 16.6663 4.65139 16.6663 8.33329Z" stroke="curentColor" stroke-width="1.5"/>
<path d="M10.0003 9.16667C10.4606 9.16667 10.8337 8.79357 10.8337 8.33333C10.8337 7.8731 10.4606 7.5 10.0003 7.5C9.54009 7.5 9.16699 7.8731 9.16699 8.33333C9.16699 8.79357 9.54009 9.16667 10.0003 9.16667Z" fill="curentColor" stroke="curentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,T=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_217_1736)">
<path d="M10 5L10 10L15 10" stroke="curentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0003 18.3333C14.6027 18.3333 18.3337 14.6023 18.3337 9.99996C18.3337 5.39759 14.6027 1.66663 10.0003 1.66663C5.39795 1.66663 1.66699 5.39759 1.66699 9.99996C1.66699 14.6023 5.39795 18.3333 10.0003 18.3333Z" stroke="curentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_217_1736">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>`,U=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5 12H6M6 12L12 6M6 12L12 18" stroke="curentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,J=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18" stroke="curentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,G=`<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.7063 18.6307C26.6694 14.6324 30.0641 12.6872 30.2193 12.5966C28.2967 9.86366 25.3169 9.49026 24.2697 9.46048C21.767 9.20369 19.3393 10.9206 18.0644 10.9206C16.764 10.9206 14.8008 9.48529 12.6848 9.52747C9.96196 9.56841 7.41468 11.1055 6.01762 13.4923C3.13444 18.359 5.28474 25.5108 8.04705 29.4446C9.42884 31.3712 11.0435 33.5223 13.1569 33.4466C15.2245 33.3635 15.9968 32.1614 18.4919 32.1614C20.9641 32.1614 21.6893 33.4466 23.8447 33.3983C26.0637 33.3635 27.4608 31.463 28.7942 29.519C30.3911 27.3108 31.0323 25.1362 31.0578 25.0245C31.0056 25.0071 26.7483 23.4229 26.7063 18.6307Z" fill="curentColor"/>
<path d="M22.6347 6.87268C23.7468 5.51675 24.5076 3.67205 24.2964 1.80005C22.6869 1.86952 20.674 2.88554 19.5149 4.21169C18.4893 5.38029 17.5732 7.29571 17.8099 9.097C19.6179 9.2285 21.4743 8.20752 22.6347 6.87268Z" fill="curentColor"/>
</svg>`,N=`<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.7558 3.20309C3.39335 3.57302 3.18359 4.14896 3.18359 4.89483V31.4995C3.18359 32.2454 3.39335 32.8213 3.7558 33.1913L3.84525 33.2725L19.1359 18.3701V18.0182L3.84525 3.11587L3.7558 3.20309Z" fill="curentColor"/>
<path d="M26.0776 23.34L20.9863 18.3701V18.0182L26.0837 13.0482L26.1979 13.1129L32.2345 16.4618C33.9573 17.4122 33.9573 18.9761 32.2345 19.9325L26.1979 23.2754L26.0776 23.34Z" fill="curentColor"/>
<path d="M25.2733 24.2008L20.0617 19.1196L4.68164 34.1167C5.25384 34.7031 6.18695 34.7738 7.24807 34.1873L25.2733 24.2008Z" fill="curentColor"/>
<path d="M25.2733 12.1876L7.24807 2.20103C6.18695 1.62058 5.25384 1.69125 4.68164 2.27772L20.0617 17.2688L25.2733 12.1876Z" fill="curentColor"/>
</svg>`,H=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.8883 13.5C21.1645 18.3113 17.013 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C16.1006 2 19.6248 4.46819 21.1679 8" stroke="curentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 8H21.4C21.7314 8 22 7.73137 22 7.4V3" stroke="curentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,V=`<svg width="16" height="16" style="min-width: 16px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_268_12877)">
<path d="M8 7.66663V11" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 5.00667L8.00667 4.99926" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00004C14.6663 4.31814 11.6816 1.33337 7.99967 1.33337C4.31778 1.33337 1.33301 4.31814 1.33301 8.00004C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_268_12877">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>`,q="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/coffee-1-ffdd7d23.svg",W="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/coffee-2-ec13b162.svg",K="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/coffee-3-b3754dc7.svg",D="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/coffee-4-5be7bdc8.svg",Y="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/coffee-5-15f5ed2a.svg",Z="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/coffee-6-191d055e.svg",X="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/coffee-7-8cbb8963.svg",$="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/coffee-8-3d8babb0.svg",ee="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/tea-1-053ab71f.svg",te="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/tea-2-6191e6f4.svg",oe="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/tea-3-95752280.svg",ne="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/tea-4-11d053b8.svg",se="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/dessert-1-eec2589e.svg",ae="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/dessert-2-7733706d.svg",ie="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/dessert-3-9e21dcf0.svg",ce="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/dessert-4-689cfc80.svg",re="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/dessert-5-d165eb60.svg",de="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/dessert-6-f2b5723e.svg",le="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/dessert-7-81a54a95.svg",me="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/dessert-8-63ac01b3.svg",pe=`
<img width="16" height="16" alt="coffee" src="data:image/png;base64,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">
`,ue=`
<img width="16" height="16" alt="tea" src="data:image/png;base64,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">
`,ge=`
<img width="16" height="16" alt="dessert" src="data:image/png;base64,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">
`,f=L,he=Q,fe=F,be=O,ve=P,Ce=R,Ae=T,we=U,ye=J,Ee=G,ke=N,Se=H,Ie=V,je=pe,xe=ue,Be=ge,Me=[q,W,K,D,Y,Z,X,$],ze=[ee,te,oe,ne],_e=[se,ae,ie,ce,re,de,le,me],{BASE_URL:r}={BASE_URL:"https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},d=window.location.pathname,Le="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/logo-5f25b395.svg";const c=[{name:"logo",link:"enjoy",anchor:"enjoy"},{name:"Favorite coffee",link:"favorite-coffee"},{name:"About",link:"about"},{name:"Mobile app",link:"mobile-app"},{name:"Contact us",link:"footer"},{name:"Menu",link:`${r}menu/`}],b=c.slice(1,-1);function v(){let e;const t="#";d.includes("menu")?(e=`${r}#`,c[0].link=r):(e="#",c[0].link=`${r}#enjoy`);let o="";document.querySelector("body").insertAdjacentHTML("afterbegin",`
  <header id="header" class="wrap mx-auto mt-5">
    <div class="header__bar">
      <a href="${c[0].link}" id="logo"
        ><img
          src="${Le}"
          alt="${c[0].name}"
      /></a>
  
      <nav class="bar__nav">
        <ul id="nav-list" class="nav__list pl-0">
        </ul>
      </nav>
  
      <a
        id="nav-menu"
        class="bar__coffee-menu nav-item"
        href="${c[5].link}"
        >${c[5].name}
  
        ${f}
    
      </a>
  
      <button id="burger-btn"></button>
    </div>
  </header>
  `),b.forEach(n=>{o+=`
    <li>
          <a
          id="nav-${n.link}"
            href="${n.link==="footer"?t+n.link:e+n.link}"
            class="nav-item">${n.name}</a>
    </li>
    `}),document.querySelector("#nav-list").insertAdjacentHTML("afterbegin",o)}const Qe="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/img-hero-1fb4a687.svg",Fe="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/video(2160p)-21ac9e89.mp4";function Oe(){document.querySelector("#header").insertAdjacentHTML("afterend",`
  <main id="main" class="wrap mx-auto">
    <section id="enjoy" class="section mt-5">
      <div class="enjoy__content">
        <video
          autoplay
          poster="${Qe}"
          muted
          loop>
          <source
            src="${Fe}"
            type="video/mp4" />
        </video>
  
        <div class="enjoy__content_offer-wrapper">
          <div class="enjoy__content_offer">
            <h1 class="heading-1 mb-10"><em class="text-accent">Enjoy</em> premium coffee at our charming cafe</h1>
            <p class="mb-10">
              With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination
              for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.
            </p>
            <a class="button-primary enjoy-btn" href="${r}menu/"> <span>Menu</span> ${f} </a>
          </div>
        </div>
      </div>
    </section>
  </main>
  `)}function Pe(){document.querySelector("#enjoy").insertAdjacentHTML("afterend",`
  <section id="favorite-coffee" class="section">
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
        <button class="slider__buttons_btn-left rounded-btn transparent-dark-btn">${we}</button>
        <button class="slider__buttons_btn-right rounded-btn transparent-dark-btn">${ye}</button>
      </div>
      <div class="slider__controls">
        <button class="slider__controls_item active"></button>
        <button class="slider__controls_item"></button>
        <button class="slider__controls_item"></button>
      </div>
    </div>
  </section>
  `)}const Re="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/about-1-d836e95d.svg",Te="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/about-2-693e846d.svg",Ue="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/about-3-667f0d6b.svg",Je="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house3/assets/about-4-96517610.svg";function Ge(){document.querySelector("#favorite-coffee").insertAdjacentHTML("afterend",`
  <section id="about" class="section">
    <h2 class="heading-2 mb-10">
      Resource is <em class="text-accent">the perfect and cozy place</em> where you can enjoy a variety of hot beverages,
      relax, catch up with friends, or get some work done.
    </h2>
    <div class="about__images">
      <div class="about__images_column">
        <div class="card large">
          <img
            src="${Re}"
            alt="about-1" />
        </div>
        <div class="card">
          <img
            src="${Te}"
            alt="about-2" />
        </div>
      </div>
      <div class="about__images_column">
        <div class="card">
          <img
            src="${Ue}"
            alt="about-3" />
        </div>
        <div class="card large">
          <img
            src="${Je}"
            alt="about-4" />
        </div>
      </div>
    </div>
  </section>
  `)}function Ne(){document.querySelector("#about").insertAdjacentHTML("afterend",`
<section id="mobile-app" class="section">
  <div class="mobile-app__offer">
    <h2 class="heading-2"><em class="text-accent">Download</em> our apps to start ordering</h2>
    <p>
      Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are
    </p>
    <div class="mobile-app__offer_buttons">
      <button class="button-primary mobile-app-btn transparent-dark-btn svg-fill">
      ${Ee}
      <span class="button__text">
        <span class="caption">Available on the</span>
        <span>App Store</span>
      </span>
    </button>
    <button class="button-primary mobile-app-btn transparent-dark-btn svg-fill">
    ${ke}
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
`)}function C(){document.querySelector("#main").insertAdjacentHTML("afterend",`
<footer id="footer" class="wrap mx-auto mt-auto mb-10">
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
      ><span>${Ce} 8558 Green Rd., LA</span></a
    >
    <a
      class="link mb-1"
      href="tel:+16035550123"
      ><span>${ve} +1 (603) 555-0123</span></a
    >
    <span class="link mb-1">${Ae} Mon-Sat: 9:00 AM – 23:00 PM</span>
  </div>
</footer>
`);const e=[he,fe,be];let t="";e.forEach(o=>{t+=`<button class="social__btn rounded-btn transparent-light-btn">${o}</button>`}),document.querySelector("#socials").insertAdjacentHTML("afterbegin",t)}function He(){v(),Oe(),Pe(),Ge(),Ne(),C()}const Ve=[{name:"Irish coffee",description:"Fragrant black coffee with Jameson Irish whiskey and whipped milk",price:"7.00",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Kahlua coffee",description:"Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",price:"7.00",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Honey raf",description:"Espresso with frothed milk, cream and aromatic honey",price:"5.50",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Ice cappuccino",description:"Cappuccino with soft thick foam in summer version with ice",price:"5.00",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Espresso",description:"Classic black coffee",price:"4.50",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Latte",description:"Espresso coffee with the addition of steamed milk and dense milk foam",price:"5.50",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Latte macchiato",description:"Espresso with frothed milk and chocolate",price:"5.50",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Coffee with cognac",description:"Fragrant black coffee with cognac and whipped cream",price:"6.50",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Moroccan",description:"Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",price:"4.50",category:"tea",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Lemon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Ginger",description:"Original black tea with fresh ginger, lemon and honey",price:"5.00",category:"tea",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Lemon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Cranberry",description:"Invigorating black tea with cranberry and honey",price:"5.00",category:"tea",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Lemon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Sea buckthorn",description:"Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",price:"5.50",category:"tea",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Lemon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Marble cheesecake",description:"Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",price:"3.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Red velvet",description:"Layer cake with cream cheese frosting",price:"4.00",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Cheesecakes",description:"Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",price:"4.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Creme brulee",description:"Delicate creamy dessert in a caramel basket with wild berries",price:"4.00",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Pancakes",description:"Tender pancakes with strawberry jam and fresh strawberries",price:"4.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Honey cake",description:"Classic honey cake with delicate custard",price:"4.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Chocolate cake",description:"Cake with hot chocolate filling and nuts with dried apricots",price:"5.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Black forest",description:"A combination of thin sponge cake with cherry jam and light chocolate mousse",price:"6.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]}],qe=[...Me,...ze,..._e],We=Ve.map((e,t)=>({...e,id:t+1,img:qe[t]}));function A(e){return[...We].filter(t=>t.category===e)}function g(e,t,o){const n=A(e).map(s=>{const{id:a,name:i,description:B,price:M,category:z,img:_}={...s};return{id:a,name:i,description:B,price:M,category:z,img:_}});return{items:n.slice(o,o+t),length:n.length}}function Ke(e,t){return A(t).filter(n=>n.id===+e)[0]}let m=[{name:"Coffee",img:je,items:[]},{name:"Tea",img:xe,items:[]},{name:"Dessert",img:Be,items:[]}],p="coffee",w=null,y=!1;function De(){return m.filter(t=>t.name.toLowerCase()===p)[0]}function Ye(e,t){y=e!==t}function Ze(){const e=document.getElementById("more-cards");y?(e.classList.remove("not-show"),e.classList.add("show")):(e.classList.remove("show"),e.classList.add("not-show"))}function Xe(e){let t="";return e.forEach(o=>{t+=`
<div class="card" id="${o.id}-${o.category}">
  <div class="card__img">
    <img
      src="${o.img}"
      alt="${o.name}" />
  </div>
  <div class="card__info">
    <h3 class="heading-3 mb-3">${o.name}</h3>
    <p class="text-three-rows">${o.description}</p>
    <h3 class="heading-3 mt-auto">&#36;${o.price}</h3>
  </div>
</div>
`}),t}function u(){const e=De(),t=w==="mobile"?g(p,4,e.items.length):g(p,8,e.items.length);e.items=[...e.items,...t.items],Ye(t.length,e.items.length);const o=Xe(e.items);document.querySelector(".menu__items").innerHTML=o,Ze()}function E(e){e&&(p=e)}function k(){m=m.map(e=>({...e,items:[]}))}function $e(e){w=e,k(),E(),u()}function et(){document.querySelector("#header").insertAdjacentHTML("afterend",`
<main id="main" class="wrap mx-auto mt-5">
  <section id="menu">
    <h1 style="display: none">Menu</h1>  
    <h2 class="heading-2 mb-10 mx-auto">Behind each of our cups hides an <em class="text-accent">amazing surprise</em></h2>
    <div class="menu__tabs mb-10"></div>
    <div class="menu__items"></div>
    <button id="more-cards" class="rounded-btn transparent-dark-btn">${Se}</button>
    <div id="modal" aria-hidden="true">
      <div class="modal__wrap">
        <div class="modal__content">
        </div>
      </div>
    </div>
  </section>
</main>
`);let e="";m.forEach(t=>{e+=`<button class="menu__tabs_tab" id="${t.name.toLowerCase()}">
  <span class="button_img-container">${t.img}</span>
  <span class="button_text">${t.name}</span>
  </button>`}),document.querySelector(".menu__tabs").insertAdjacentHTML("afterbegin",e),document.querySelector("#coffee").classList.add("active")}function tt(e){document.querySelector("#modal").classList.add("modal--active");const o=document.querySelector(".modal__content");o.innerHTML=`
<img class="modal_img" alt="${e.name}" src="${e.img}" />
<div class="modal__text">
  <h3 class="heading-3">${e.name}</h3>
  <p class="description">${e.description}</p>
  <div>
    <p>Size</p>
  </div>
  <div>
    <p>Additives</p>
  </div>
  <div class="total">
    <h3 class="heading-3">Total:</h3>
    <h3 class="heading-3">&#36;${e.price}</h3>
  </div>
  <div class="alert">
    ${Ie}
    <p class="caption">The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
  </div>
  <button class="modal__close transparent-dark-btn fill-btn">Close</button>

</div>
  `,setTimeout(()=>{o.classList.add("content--active")},100)}function ot(){const e=document.querySelector(".modal__content");e.classList.remove("content--active"),setTimeout(()=>{e.innerHTML="",document.querySelector("#modal").classList.remove("modal--active")},100)}function nt(e){const t=o=>{const n=o.target.closest("#more-cards");n&&n&&u()};e.addEventListener("click",o=>t(o))}function st(e){const t=o=>{const n=o.target.closest(".modal__close");n&&n&&ot()};e.addEventListener("click",o=>t(o))}function at(e){const t=o=>{const n=o.target.closest(".card");if(n&&n){const s=n.getAttribute("id").split("-"),a=Ke(s[0],s[1]);tt(a)}};e.addEventListener("click",o=>t(o))}function it(e){const t=o=>{const n=o.target.closest(".menu__tabs_tab");n&&n&&document.querySelectorAll(".menu__tabs_tab").forEach(s=>{s.classList.toggle("active",s===n),s===n&&(k(),E(s.id),u())})};e.addEventListener("click",o=>t(o))}function ct(){v(),et(),C(),it(document.querySelector(".menu__tabs")),nt(document.querySelector("#more-cards")),at(document.querySelector(".menu__items")),st(document.querySelector("#modal"))}function S(){document.querySelectorAll(".nav-item").forEach(e=>{e.classList.remove("active")})}function I(){d.includes("menu")&&(document.querySelector("#nav-menu").classList.add("active"),document.querySelector("#nav-menu").style.pointerEvents="none")}function rt(e){e.forEach(t=>{const o=t.target;t.isIntersecting?document.querySelectorAll(".nav-item").forEach(n=>{n.classList.toggle("active",n.getAttribute("id").replace("nav-","")===o.id)}):!t.isIntersecting&&d===`${r}`&&S()})}const j=new IntersectionObserver(rt,{threshold:[.5,1]});function x(){let e;return d.includes("menu")?(I(),e=["menu","footer"]):e=b.map(t=>t.link),e}function dt(){x().forEach(t=>{j.observe(document.getElementById(t))})}function lt(){x().forEach(t=>{j.unobserve(document.getElementById(t))}),S(),I()}let h=null,l=null;const mt=new ResizeObserver(e=>{const[{inlineSize:t}]=e[0].borderBoxSize;t>1024&&dt(),t<=1024&&lt();function o(n,s){function a(i){s&&(h=s),l=i,(s&&n!==s&&n!==null||s===null)&&$e(l)}t>768&&a("desktop"),t<=768&&a("mobile")}o(h,l)});mt.observe(document.querySelector("body"));d.includes("menu")?ct():He();
//# sourceMappingURL=main-fbd4c350.js.map
