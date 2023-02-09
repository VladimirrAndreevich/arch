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
console.log(2)