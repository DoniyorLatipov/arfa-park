//for all flowes
const flowesPictures = document.querySelectorAll('.picture--hide');

function renderFlowPictures() {
  flowesPictures.forEach((picture) => {
    const rect = picture.getBoundingClientRect();

    const top = rect.top; // верхняя граница элемента относительно viewport

    const rangeStart = window.innerHeight;
    let rangeEnd = window.innerHeight * 0.35;

    if (picture.classList.contains('flow4-img')) {
      picture.style.setProperty('--scroll-percent', '100');
      rangeEnd = rangeEnd * 1.7; // 59.8wh ~ 60wh
    }

    if (top <= rangeStart && top >= rangeEnd) {
      // Вычисляем процент положения в диапазоне от 0 до 65vh
      const percent = ((top - rangeStart) / (rangeEnd - rangeStart)) * 100;
      picture.style.setProperty('--scroll-percent', percent);
    } else if (top < rangeEnd) {
      picture.style.setProperty('--scroll-percent', '100');
    } else if (top > rangeStart) {
      picture.style.setProperty('--scroll-percent', '0');
    }
  });
}

renderFlowPictures();

window.addEventListener('scroll', () => {
  renderFlowPictures();
});

let scrollPosition = 0;
function openModal() {
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  document.body.classList.add('freeze');
  document.body.style.top = `-${scrollPosition}px`;
}

function closeModal() {
  document.body.classList.remove('freeze');
  document.body.style.top = '';
  window.scrollTo(0, scrollPosition);
}

const watchVideoBtn = document.querySelector('.watch-video-btn');
const videoWrapper = document.querySelector('.video-wrapper');
const videoCloseBtn = document.querySelector('.video-wrapper .close-btn');
const videoElement = document.getElementById('videoElement');

watchVideoBtn.addEventListener('click', () => {
  videoWrapper.classList.add('active');
  openModal();
});

videoCloseBtn.addEventListener('click', () => {
  videoWrapper.classList.remove('active');
  closeModal();
  videoElement.pause();
});

document.addEventListener('keydown', function (e) {
  if (e.keyCode == 27) {
    videoWrapper.classList.remove('active');
    closeModal();
    videoElement.pause();
  }
});

// news swiper
new Swiper('.modal-news-slider', {
  slidesPerView: 1,
  spaceBetween: 12,
  loop: true,
  navigation: {
    nextEl: '.modal-news-slider-button-next',
    prevEl: '.modal-news-slider-button-prev',
  },
});

const modalCloseButtons = document.querySelectorAll('.modal .close-btn');
const modalOverlay = document.querySelector('.modal-overlay');

const modalButtons = document.querySelectorAll('.modal-button');
const modals = {
  news: document.querySelector('.modal.modal--news'),
  request: document.querySelector('.modal.modal--request'),
};

modalButtons.forEach((modalButton) =>
  modalButton.addEventListener('click', (e) => {
    const targetModal = e.target.dataset.href;

    modals[targetModal].classList.add('active');
    modalOverlay.classList.add('active');
    openModal();
  }),
);

modalOverlay.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
  closeModal();

  const activeModal = document.querySelector('.modal.active');
  activeModal.classList.remove('active', 'success');
});

modalCloseButtons.forEach((buttons) => {
  buttons.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    closeModal();

    const activeModal = document.querySelector('.modal.active');
    activeModal.classList.remove('active', 'success');
  });
});

document.addEventListener('keydown', function (e) {
  if (e.keyCode == 27) {
    modalOverlay.classList.remove('active');
    closeModal();

    const activeModal = document.querySelector('.modal.active');
    activeModal.classList.remove('active', 'success');
  }
});

// layouts
const layoutTabsSwiper = new Swiper('.tabs-slider', {
  slidesPerView: 3,
  direction: 'horizontal',
  allowTouchMove: false,
  allowTouchMove: false,
  breakpoints: {
    993: {
      slidesPerView: 'auto',
      direction: 'vertical',
    },
  },
});

new Swiper('.content-slider', {
  spaceBetween: 10,
  direction: 'vertical',
  // effect: 'fade',
  allowTouchMove: false,
  thumbs: {
    swiper: layoutTabsSwiper,
  },
  breakpoints: {
    769: {
      effect: 'slide',
    },
  },
});

const resolutionBtn3d = document.querySelector('.resolution-btns .btn-3d');
const resolutionBtn2d = document.querySelector('.resolution-btns .btn-2d');
const layoutsOverlays = document.querySelector('.layouts .content-banner .content-slider');

function switchResolution(from, to) {
  to.classList.add('active');
  from.classList.remove('active');

  layoutsOverlays.classList.add(to.dataset.direction);
  layoutsOverlays.classList.remove(from.dataset.direction);
}

resolutionBtn3d.addEventListener('click', () => {
  switchResolution(resolutionBtn2d, resolutionBtn3d);
});

resolutionBtn2d.addEventListener('click', () => {
  switchResolution(resolutionBtn3d, resolutionBtn2d);
});

// photo swiper
const activeMarker = document.querySelector('.photo-slider-wrapper .bottom-wrapper .active-marker');

const photoTabsSwiper = new Swiper('.photo-slider-thumbs', {
  allowTouchMove: false,
  spaceBetween: 4,
  slidesPerView: 'auto',
});

const photoContentSwiper = new Swiper('.photo-slider', {
  // spaceBetween: 0,
  // effect: 'fade',
  allowTouchMove: false,
  thumbs: {
    swiper: photoTabsSwiper,
  },
  navigation: {
    nextEl: '.photo-slider-button-next',
    prevEl: '.photo-slider-button-prev',
  },
  breakpoints: {
    0: {
      allowTouchMove: true, // на маленьких экранах — включен свайп
    },
    1200: {
      allowTouchMove: false, // от 1000px и выше — свайп отключен
    },
  },
  on: {
    slideChange: function () {
      const activeIndex = photoContentSwiper.activeIndex;
      activeMarker.style.transform = `translateX(${activeIndex * 40}px)`;
    },
  },
});

const leftBtn = document.querySelector('.photo-slider-wrapper .photo-slider-button-prev');
const rightBtn = document.querySelector('.photo-slider-wrapper .photo-slider-button-next');
const sliderPag = document.querySelectorAll(
  '.photo-slider-wrapper .bottom-wrapper .photo-slider-thumbs .swiper-slide',
);
const slider = document.querySelector('.photo-slider-wrapper .photo-slider');

rightBtn.addEventListener('click', () => {
  slider.classList.add('left');

  setTimeout(() => {
    slider.classList.remove('left');
  }, 600);
});

sliderPag.forEach((sliderPags) => {
  sliderPags.addEventListener('click', () => {
    slider.classList.add('left');

    setTimeout(() => {
      slider.classList.remove('left');
    }, 600);
  });
});

leftBtn.addEventListener('click', () => {
  slider.classList.add('right');

  setTimeout(() => {
    slider.classList.remove('right');
  }, 600);
});

// photo swiper button
const photoBtn = document.querySelector('.layouts .photo-banner .photo-btn');
const photoSliderWrapper = document.querySelector('.photo-slider-wrapper');
const closeBtn = document.querySelector('.photo-slider-wrapper .bottom-wrapper .close-btn');

photoBtn.addEventListener('click', () => {
  photoSliderWrapper.classList.add('active');
  openModal();
});

closeBtn.addEventListener('click', () => {
  photoSliderWrapper.classList.remove('active');
  closeModal();
});

document.addEventListener('keydown', function (e) {
  if (e.keyCode == 27) {
    photoSliderWrapper.classList.remove('active');
    closeModal();
  }
});

// villas
const tabs = document.querySelectorAll('.villas .villas-top .tabs-wrapper .tab');
const contents = document.querySelectorAll('.villas .villas-bottom .content');
const maps = document.querySelectorAll('.villas .villas-map .placemark-pic');

tabs.forEach((tab) => {
  tab.addEventListener('click', function () {
    tabs.forEach((tab) => tab.classList.remove('active'));
    contents.forEach((content) => content.classList.remove('active'));

    const targetId = this.dataset.targetElement;
    const targetConten = Array.from(contents).find((el) => el.id === `${targetId}-content`);
    const targetMap = Array.from(maps).find((el) => el.id === `${targetId}-map`);

    targetConten.classList.add('active');
    targetMap.classList.add('active');
    this.classList.add('active');
  });
});

// about
new Swiper('.objects-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.objects-slider-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.objects-slider-button-next',
    prevEl: '.objects-slider-button-prev',
  },
  breakpoints: {
    601: {
      slidesPerView: 2,
      spaceBetween: 2,
      loop: false,
    },

    769: {
      slidesPerView: 'auto',
      spaceBetween: 12,
      loop: false,
    },
  },
});

const lenis = new Lenis({
  duration: 1.8,
  smooth: true,
  smoothTouch: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const links = document.querySelectorAll('a.scroll-link');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const toTopBtn = document.querySelector('.to-top-button');
    toTopBtn.classList.add('hide-special');

    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    lenis.scrollTo(targetElement);

    setTimeout(() => {
      toTopBtn.classList.remove('hide-special');
    }, 3000);
  });
});

const sizes = document.querySelectorAll('.layouts .content-banner .content-slider .size');
const sizeBoxes = document.querySelectorAll('.layouts .content-banner .content-slider .size-box');
const sizesConteiner = document.querySelector('.layouts .content-banner .content-slider');

sizesConteiner.addEventListener('click', (e) => {
  const el = e.target;
  console.log(el);

  const isSize =
    e.target.classList.contains('size') ||
    e.target.classList.contains('size-box') ||
    e.target.parentElement.classList.contains('size') ||
    e.target.parentElement.classList.contains('size-box');

  if (window.innerWidth < 600 && isSize) {
    // Закрываем другие
    sizes.forEach((size) => {
      if (size === el) return;
      size.classList.remove('active');
    });

    sizeBoxes.forEach((sizeBox) => {
      if (sizeBox === el) return;
      sizeBox.classList.remove('active');
    });

    // Переключаем текущий
    el.classList.toggle('active');
  }
});

function openSuccessModal({ name, phone }) {
  const modalRequest = document.querySelector('.modal.modal--request');
  const successModal = modalRequest.querySelector('.right-wrapper');

  const nameField = successModal.querySelector('#nameData');
  const phoneField = successModal.querySelector('#phoneData');

  nameField.textContent = name || 'Здравствуйте';
  phoneField.textContent = phone || 'вашему номеру телефона';

  modalRequest.classList.add('success');
}

const phoneInput = document.getElementById('phone');
const clientForm = document.getElementById('clientForm');

Inputmask({
  mask: '+9 (999) 999-99-99',
  showMaskOnHover: false,
  showMaskOnFocus: true,
}).mask(phoneInput);

phoneInput.addEventListener('input', function () {
  const unmaskedValue = phoneInput.inputmask.unmaskedvalue();
  if (unmaskedValue.length === 11) {
    phoneInput.setCustomValidity('');
  } else {
    phoneInput.setCustomValidity('Пожалуйста, введите корректный номер телефона.');
  }
});

clientForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const unmaskedValue = phoneInput.inputmask.unmaskedvalue();

  if (unmaskedValue.length !== 11) {
    phoneInput.reportValidity();
    return;
  }

  const formData = new FormData(clientForm);
  const data = Object.fromEntries(formData.entries());

  openSuccessModal(data);

  setTimeout(() => {
    clientForm.reset();
  }, 500);
});

const toTopBtn = document.querySelector('.to-top-button');
toTopBtn.addEventListener('click', () => {
  toTopBtn.classList.add('hide');

  lenis.scrollTo(0);
});

function renderToTopBtn() {
  if (window.scrollY > 100) {
    toTopBtn.classList.remove('hide');
  } else {
    toTopBtn.classList.add('hide');
  }
}

renderToTopBtn();

window.addEventListener('scroll', () => {
  renderToTopBtn();
});

const cookieBanner = document.querySelector('.cookie-banner');
const cookieCloseButton = cookieBanner.querySelector('#cookieCloseButton');

if (document.cookie.indexOf('cookieAccepted=true') === -1) {
  cookieBanner.classList.add('active');
}

cookieCloseButton.addEventListener('click', () => {
  cookieBanner.classList.remove('active');
  document.cookie = 'cookieAccepted=true; max-age=31536000; path=/'; // 1 год
});

const fullVideoButton = document.getElementById('fullVideoButton');
const video = document.getElementById('videoElement');

fullVideoButton.addEventListener('click', () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    // Safari
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    // IE11
    video.msRequestFullscreen();
  } else if (video.mozRequestFullScreen) {
    // Firefox
    video.mozRequestFullScreen();
  } else if (video.webkitEnterFullscreen) {
    // Chrome
    video.webkitEnterFullscreen();
  }
});
