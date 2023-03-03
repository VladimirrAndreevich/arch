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

let isNavOpen = false;
for (let index = 0; index < toggleElemets.length; index++) {
  toggleElemets[index].addEventListener("click", () => {
    if (!isNavOpen) {
      navigation.classList.toggle("navigation_show");
      toggleScroll();
    } else {
      navigation.classList.toggle("navigation_test");
      setTimeout(function () {
        navigation.classList.toggle("navigation_show");
        navigation.classList.toggle("navigation_test");
        toggleScroll();
      }, 400);
    }

    isNavOpen = !isNavOpen;
  });
}
let activeLang = document.querySelector("#active-lang");
// console.log(activeLange.innerHTML.trim());
let changeLang = document.querySelectorAll(".change-lang");

function translatePage(attr) {
	let prevEl;
	let index = 0;

	for (const key in data[attr]) {
		if (document.getElementsByClassName(key).length != 0) {
			document.getElementsByClassName(key)[0].innerHTML = data[attr][key];
		}
	}
}

changeLang.forEach((element) => {
	element.addEventListener("click", () => {
		if (element.classList.contains("active") == false) {
			activeLang.innerHTML = element.innerHTML;

			changeLang.forEach((someEl) => {
				someEl.classList.toggle("active");
			});

			translatePage(element.getAttribute("language"));
		}
	});
});
let data = {
	english: {
		"header__btn-contact": "Contact Us",
	},
	russian: {
		"header__btn-contact": "Контакты",
	},
};