var swiper = new Swiper(".hero__swiper", {
	centeredSlides: true,
	effect: "fade",
	// loop: true,
	grabCursor: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
});
var benefitsSwiper = new Swiper(".benefits__swiper", {
	centeredSlides: true,
	effect: "slide",
	// loop: true,
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
	for (const key in data[attr]) {
		// console.log(key);
		if (document.getElementsByClassName(key).length != 0) {
			// if there is one element, and the element is string
			if (typeof data[attr][key] == "string") {
				if (data[attr][key].includes("<br")) {
					document.getElementsByClassName(key)[0].innerHTML = data[attr][key];
				} else {
					document.getElementsByClassName(key)[0].innerText = data[attr][key];
				}
			} else if (typeof data[attr][key] == "object") {
				if (key == "form" || key == "contact__send") {
					// console.log(data[attr][key]);
					// console.log("sada");
				} else {
					for (
						let index = 0;
						index < document.getElementsByClassName(key).length;
						index++
					) {
						if (data[attr][key][index].includes("<br")) {
							document.getElementsByClassName(key)[index].innerHTML =
								data[attr][key][index];
						} else {
							document.getElementsByClassName(key)[index].innerText =
								data[attr][key][index];
						}
					}
				}
			}
		}
	}

	for (const selectorKey in data[attr]["form"]) {
		document
			.getElementsByClassName(selectorKey)[0]
			.setAttribute("placeholder", data[attr]["form"][selectorKey]);
	}

	document
		.getElementsByClassName("contact__send")[0]
		.setAttribute("value", data[attr]["contact__send"]);
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
		hero__text: [
			"We design places where you can live.",
			"We design places where you can workout.",
			"We design places where you can eat.",
			"We design places where you can work.",
		],
		"hero__view-all": [
			"View all projects.",
			"View all projects.",
			"View all projects.",
			"View all projects.",
		],
		navigation__title: "Navigation",
		navigation__link: [
			"Benefits",
			"Our team",
			"Recent projects",
			"Consultation service",
			"Contact us",
		],
		benefits__title:
			"We accompany you from the concept to the realization of the project.",
		"benefits__slide-text": [
			"We develop planning solutions and design concept. We make a photorealistic 3D visualization of all premises.<br /><br /> On the basis of an approved design, we develop detailed working project for the implementation of the project.",
			"We are engaged in preparing commercial offers for each position from different suppliers. <br /><br /> We pick up furniture, plumbing, lighting, materials, colors, processing, invoices, etc., according to the design-project.",
			"We are engaged in preparing commercial offers for each position from different suppliers. <br /><br /> We pick up furniture, plumbing, lighting, materials, colors, processing, invoices, etc., according to the design-project.",
			"In the course of author's supervision, the main designer goes to control the compliance of performed repair and finishing works by design-project. <br /><br /> And also, if necessary, make adjustments to the working drawings.",
		],
		opinion__text:
			"We strongly believe that architecture is not a simple proportion of the height and the width, it’s a worldview which tells people a lot about you.",
		team__title: "Arch team.",
		team__text:
			"The team we have assembled is on the same wavelength with our clients. Day after day we create an project from scratch or transform apartments, workspaces or restaurants.",
		team__link: "Meet our team.",
		projects__title: "Recent projects.",
		projects__text:
			"Our work might be discussed for a long time with the great pleasure. <br /><br /> The most essential task for us it to create the design which is in congruence with your taste as well as practical reasons.",
		projects__link: "View all projects.",
		consultation__title: "Consultation service.",
		consultation__text:
			'So that your dream does not break on the rocks of reality, however comes to life in the acquired property, we want to provide our assistance in the form of the service "Consulting at the stage of choosing a real estate". <br /><br /> Creating a technical task for design, based on the completed brief, we develop a planning solution. <br /><br /> As a conclusion, we give our expert opinion on the property. We will discuss all the pros and cons of the initial data of the premises, on the basis of which you freely make the right decision to purchase it.',
		consultation__link: "View all services.",
		"footer__contacts-title": "Contacts",
		"footer__contacts-info": "You can call us, write or visit.",
		"footer__contacts-btn": "Get in touch",
		info__title: ["Adress.", "Phone.", "Mail."],
		footer__copyright: "© Copyright 2022. All rights reserved",
		footer__made: "Made by Agence Dn’D.",
		"footer__list-title": ["Arch", "Projects", "Services"],
		footer__link: [
			"About.",
			"Career.",
			"Awards.",
			"Restaurant and bar.",
			"Corporate space.",
			"Residential.",
			"Retail.",
			"Hotels.",
			"Civic and cultural.",
			"Consultation.",
			"Realisation.",
			"Author’s supervision.",
			"Equipment.",
		],
		form__title: "Contact.",
		form: {
			contact__name: "Name",
			contact__email: "Email",
			"contact__text-input": "Area",
			"contact__message-input": "Your message",
		},
		"form-option": ["Property type", "First type", "Second type", "Third type"],
		contact__send: "Send",
	},
	russian: {
		"header__btn-contact": "Контакты",

		hero__text: [
			"Мы проектируем места, где вы могли бы жить.",
			"Мы проектируем места, где вы можете тренироваться.",
			"Мы проектируем места, где вы можете поесть.",
			"Мы проектируем места, где вы могли бы работать.",
		],
		"hero__view-all": [
			"Просмотреть все проекты.",
			"Просмотреть все проекты.",
			"Просмотреть все проекты.",
			"Просмотреть все проекты.",
		],
		navigation__title: "Навигация",
		navigation__link: [
			"Преимущества",
			"Наша команда",
			"Последние проекты",
			"Сервис консультаций",
			"Свяжитесь с нами",
		],
		benefits__title: "Мы сопровождаем вас от концепции до реализации проекта.",
		"benefits__slide-text": [
			"Мы разрабатываем планировочные решения и дизайн-концепцию. Мы создаем фотореалистичную 3D визуализацию всех помещений.<br /><br /> На основе утвержденного дизайна, мы разрабатываем детальный рабочий проект для реализации проекта.",
			"Мы занимаемся подготовкой коммерческих предложений для каждой позиции от разных поставщиков. <br /><br /> Мы подбираем мебель, сантехнику, освещение, материалы, цвета, обработку, инвойсы и т.д. в соответствии с дизайн-проектом.",
			"Мы занимаемся подготовкой коммерческих предложений для каждой позиции от разных поставщиков. <br /><br /> Мы подбираем мебель, сантехнику, освещение, материалы, цвета, обработку, инвойсы и т.д. в соответствии с дизайн-проектом.",
			"В процессе авторского надзора главный дизайнер выезжает контролировать соответствие выполненных ремонтно-отделочных работ дизайн-проекту. <br /><br /> А также, при необходимости, вносит изменения в рабочие чертежи.",
		],

		opinion__text:
			"Мы твердо верим, что архитектура - это не простое соотношение высоты и ширины, это мировоззрение, которое многое говорит людям о вас.",
		team__title: "Arch команда.",
		team__text:
			"Команда, которую мы собрали, находится на одной волне с нашими клиентами. День за днем мы создаем проект с нуля или преображаем квартиры, рабочие пространства или рестораны.",
		team__link: "Познакомьтесь с нашей командой.",
		projects__title: "Недавние проекты.",
		projects__text:
			"Нашу работу можно обсуждать долго и с большим удовольствием. <br /><br /> Для нас самая важная задача - создать дизайн, который соответствует вашему вкусу, а также практическим причинам.",
		projects__link: "Посмотреть все проекты.",
		consultation__title: "Консультация.",
		consultation__text:
			'Чтобы ваша мечта не разбилась о скалы реальности, а стала живой в приобретенном имуществе, мы хотим предоставить нашу помощь в виде услуги "Консультирование на этапе выбора недвижимости". <br /><br /> Создавая техническое задание на дизайн, на основе заполненного брифа, мы разрабатываем планировочное решение. <br /><br /> В заключение, мы даем наш экспертный отзыв о недвижимости. Мы обсудим все плюсы и минусы исходных данных помещения, на основании которых вы свободно примете правильное решение о его покупке.',
		consultation__link: "Посмотреть все услуги.",
		"footer__contacts-title": "Контакты",
		"footer__contacts-info": "Позвоните, напишите или зайдите",
		"footer__contacts-btn": "Связаться",
		info__title: ["Адрес.", "Телефон.", "Почта."],
		footer__copyright: "© Copyright 2022. Все права защищены",
		footer__made: "Сделано Agence Dn’D.",
		"footer__list-title": ["Arch", "Проекты", "Услуги"],
		footer__link: [
			"О нас.",
			"Карьера.",
			"Награды.",
			"Рестораны и бары.",
			"Корпоративные пространства.",
			"Жилые помещения.",
			"Торговые помещения.",
			"Отели.",
			"Гражданские и культурные объекты.",
			"Консультация.",
			"Реализация.",
			"Авторский надзор.",
			"Оборудование.",
		],
		form__title: "Контакты.",
		form: {
			contact__name: "Имя",
			contact__email: "Электронная почта",
			"contact__text-input": "Площадь",
			"contact__message-input": "Ваше сообщение",
		},
		"form-option": [
			"Тип недвижимости",
			"Первый тип",
			"Второй тип",
			"Третий тип",
		],
		contact__send: "Отправить",
	},
};