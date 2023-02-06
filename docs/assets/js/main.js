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
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".benefits__btn-next",
    prevEl: ".benefits__btn-prev",
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});
console.log(2)