var swiper = new Swiper(".hero__swiper", {
  centeredSlides: true,
  effect: "fade",
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
var benefitsSwiper = new Swiper(".benefits__swiper", {
  centeredSlides: true,
  effect: "slide",
  loop: true,
  grabCursor: true,
  autoHeight: true,
  navigation: {
    nextEl: ".benefits__btn-next",
    prevEl: ".benefits__btn-prev",
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});
var benefitsSwiper = new Swiper(".projects__swiper", {
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  navigation: {
    nextEl: ".benefits__btn-next",
    prevEl: ".benefits__btn-prev",
  },
  scrollbar: {
    el: ".projects__scrollbar",
    hide: false,
  },
  breakpoints: {
    // when window width is >= 998px
    998: {
      spaceBetween: 40,
    },
  },
});
function toggleScroll() {
  document.body.classList.toggle("stop-scrolling");
}

// let navigation = document.getElementById("navigation");
// let link__nav = document.getElementsByClassName("navigation__link");
// let active = document.getElementById("header__burger");
// let closeBlock = document.getElementById("close-block");
// let closeBtn = document.getElementById("close-btn");

// active.addEventListener("click", () => {
//   navigation.classList.toggle("navigation_show");
//   toggleScroll();
// });

// closeBlock.addEventListener("click", () => {
//   navigation.classList.toggle("navigation_show");
//   toggleScroll();
// });
// closeBtn.addEventListener("click", () => {
//   navigation.classList.toggle("navigation_show");
//   toggleScroll();
// });

// for (let index = 0; index < link__nav.length; index++) {
//   const element = link__nav[index];
//   element.addEventListener("click", () => {
//     navigation.classList.toggle("navigation_show");
//     toggleScroll();
//   });
// }

let navigation = document.getElementById("navigation");
let toggleElemets = [
  document.getElementById("header__burger"),
  document.getElementById("close-block"),
  document.getElementById("close-btn"),
];

let link__nav = document.getElementsByClassName("navigation__link");
for (let index = 0; index < link__nav.length; index++) {
  const element = link__nav[index];
  toggleElemets.push(element);
}

for (let index = 0; index < toggleElemets.length; index++) {
  toggleElemets[index].addEventListener("click", () => {
    navigation.classList.toggle("navigation_show");
    toggleScroll();
  });
}