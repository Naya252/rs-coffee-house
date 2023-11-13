import"./main-fbdcba6b.js";const c="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house/assets/coffee-1-ffdd7d23.svg",i="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house/assets/coffee-2-ec13b162.svg",t="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house/assets/coffee-3-b3754dc7.svg",a="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house/assets/coffee-4-5be7bdc8.svg",n="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house/assets/coffee-5-15f5ed2a.svg",f="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house/assets/coffee-6-191d055e.svg",r="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house/assets/coffee-7-8cbb8963.svg",m="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house/assets/coffee-8-3d8babb0.svg",h=[{name:"Coffee",img:"&#9749;"},{name:"Tea",img:"&#129750;"},{name:"Dessert",img:"&#127856;"}],l=[{name:"Irish coffee",descriptions:"Fragrant black coffee with Jameson Irish whiskey and whippedmilk",price:"$7.00",img:c},{name:"Kahlua coffee",descriptions:"Classic coffee with milk and Kahlua liqueur under acap of frothed milk",price:"$7.00",img:i},{name:"Honey raf",descriptions:"Espresso with frothed milk, cream andaromatic honey",price:"$5.50",img:t},{name:"Ice cappuccino",descriptions:"Cappuccino with soft thick foam in summerversion with ice",price:"$5.00",img:a},{name:"Espresso",descriptions:"Classic black coffee",price:"$4.50",img:n},{name:"Latte",descriptions:"Espresso coffee with the addition of steamed milk and dense milk foam",price:"$5.50",img:f},{name:"Latte macchiato",descriptions:"Espresso with frothed milk and chocolate",price:"$5.50",img:r},{name:"Coffeewith cognac",descriptions:"Fragrant black coffee with cognac and whipped cream",price:"$6.50",img:m}];document.querySelector("#menu").insertAdjacentHTML("afterbegin",`
<h2 class="heading-2 mb-10 mx-auto">Behind each of our cups hides an <em class="text-accent">amazing surprise</em></h2>
<div class="menu__tabs mb-10"></div>
<div class="menu__items"></div>
`);let s="";h.forEach(e=>{s+=`<button id="${e.name.toLowerCase()}">
  <span class="button_img-container">${e.img}</span>
  ${e.name}</button>`});document.querySelector(".menu__tabs").insertAdjacentHTML("afterbegin",s);document.querySelector("#coffee").classList.add("active");let o="";l.forEach(e=>{o+=`
  <div class="card">
    <div class="card__img">
      <img
        src="${e.img}"
        alt="bout-3" />
    </div>
    <div class="card__info">
      <h3 class="heading-3 mb-3">${e.name}</h3>
      <p>${e.descriptions}</p>
      <h3 class="heading-3 mt-auto">${e.price}</h3>
    </div>
  </div>
  `});document.querySelector(".menu__items").insertAdjacentHTML("afterbegin",o);
//# sourceMappingURL=menu-d226b02f.js.map
