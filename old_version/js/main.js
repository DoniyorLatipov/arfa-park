// top
document.addEventListener('DOMContentLoaded', function (event) {
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

  let watchVideoBtn = document.querySelectorAll('.watch-video-btn');
  videoWrapper = document.querySelector('.video-wrapper');
  closeBtn = document.querySelector('.video-wrapper .close-btn');
  body = document.querySelector('body');
  const videoElement = document.getElementById('videoElement');

  watchVideoBtn.forEach((watchVideoBtns) => {
    watchVideoBtns.addEventListener('click', () => {
      videoWrapper.classList.add('active');
      openModal();
    });
  });

  closeBtn.addEventListener('click', () => {
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
});

// modal
document.addEventListener('DOMContentLoaded', function (event) {
  const swiper = new Swiper('.modal-news-slider', {
    slidesPerView: 1,
    spaceBetween: 12,
    loop: true,
    navigation: {
      nextEl: '.modal-news-slider-button-next',
      prevEl: '.modal-news-slider-button-prev',
    },
  });

  let closeBtn = document.querySelectorAll('.modal .close-btn');
  modal = document.querySelectorAll('.modal');
  modalNews = document.querySelector('.modal.modal--news');
  body = document.querySelector('body');
  modalOverlay = document.querySelector('.modal-overlay');
  newsBtn = document.querySelectorAll('.news .news-list li .txt-wrapper .news-btn');
  requestBtn = document.querySelectorAll('.request-btn');
  modalRequest = document.querySelector('.modal.modal--request');
  links = document.querySelectorAll('a');

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

  requestBtn.forEach((newsBtns) => {
    newsBtns.addEventListener('click', () => {
      modalRequest.classList.add('active');
      modalOverlay.classList.add('active');
      openModal();
    });
  });

  newsBtn.forEach((newsBtns) => {
    newsBtns.addEventListener('click', () => {
      modalNews.classList.add('active');
      modalOverlay.classList.add('active');
      openModal();
    });
  });

  modalOverlay.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    closeModal();

    modal.forEach((element) => {
      element.classList.remove('active', 'success');
    });
  });

  closeBtn.forEach((closeBtns) => {
    closeBtns.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
      closeModal();

      modal.forEach((element) => {
        element.classList.remove('active', 'success');
      });
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
      modalOverlay.classList.remove('active');
      closeModal();

      modal.forEach((element) => {
        element.classList.remove('active');
      });
    }
  });
});

// layouts
document.addEventListener('DOMContentLoaded', function (event) {
  var swiper = new Swiper('.tabs-slider', {
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
  var swiper2 = new Swiper('.content-slider', {
    spaceBetween: 10,
    direction: 'vertical',
    // effect: 'fade',
    allowTouchMove: false,
    thumbs: {
      swiper: swiper,
    },
    breakpoints: {
      769: {
        effect: 'slide',
      },
    },
  });

  let resolutionBtn3d = document.querySelector('.resolution-btns .btn-3d');
  resolutionBtn2d = document.querySelector('.resolution-btns .btn-2d');
  layoutsOverlays = document.querySelectorAll(
    '.layouts .content-banner .content-slider .swiper-slide',
  );
  // swiperSlide = document.querySelectorAll('.layouts .txt-wrapper .tabs-slider .swiper-slide')
  // swiperSlideSize = document.querySelectorAll('.layouts .content-banner .content-slider .swiper-slide .left .size')

  // swiperSlide.forEach(swiperSlides => {
  //     swiperSlides.addEventListener('click', () => {
  //         swiperSlideSize.forEach(swiperSlideSizes => {
  //             swiperSlideSizes.classList.add('active')
  //         });
  //     })
  // });

  resolutionBtn3d.addEventListener('click', () => {
    resolutionBtn3d.classList.add('active');
    resolutionBtn2d.classList.remove('active');

    layoutsOverlays.forEach((element) => {
      element.classList.add('to-left');
      element.classList.remove('to-right');
    });

    // swiperSlideSize.forEach(swiperSlideSizes => {
    //     swiperSlideSizes.classList.add('active')
    // });
  });

  resolutionBtn2d.addEventListener('click', () => {
    resolutionBtn3d.classList.remove('active');
    resolutionBtn2d.classList.add('active');

    layoutsOverlays.forEach((element) => {
      element.classList.remove('to-left');
      element.classList.add('to-right');
    });

    // swiperSlideSize.forEach(swiperSlideSizes => {
    //     swiperSlideSizes.classList.remove('active')
    // });
  });
});

document.addEventListener('DOMContentLoaded', function (event) {
  var swiper = new Swiper('.photo-slider-thumbs', {
    allowTouchMove: false,
    spaceBetween: 4,
    slidesPerView: 'auto',
  });

  var swiper2 = new Swiper('.photo-slider', {
    // spaceBetween: 0,
    // effect: 'fade',
    allowTouchMove: false,
    thumbs: {
      swiper: swiper,
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
        const activeIndex = swiper2.activeIndex;
        activeMarker.style.transform = `translateX(${activeIndex * 40}px)`;
      },
    },
  });

  const activeMarker = document.querySelector(
    '.photo-slider-wrapper .bottom-wrapper .active-marker',
  );

  let leftBtn = document.querySelector('.photo-slider-wrapper .photo-slider-button-prev');
  rightBtn = document.querySelector('.photo-slider-wrapper .photo-slider-button-next');
  sliderPag = document.querySelectorAll(
    '.photo-slider-wrapper .bottom-wrapper .photo-slider-thumbs .swiper-slide',
  );
  slider = document.querySelector('.photo-slider-wrapper .photo-slider');

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
});

document.addEventListener('DOMContentLoaded', function (event) {
  let photoBtn = document.querySelectorAll('.layouts .photo-banner .photo-btn');
  photoSliderWrapper = document.querySelector('.photo-slider-wrapper');
  closeBtn = document.querySelector('.photo-slider-wrapper .bottom-wrapper .close-btn');
  body = document.querySelector('body');

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

  photoBtn.forEach((photoBtns) => {
    photoBtns.addEventListener('click', () => {
      photoSliderWrapper.classList.add('active');
      openModal();
    });
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
});

// villas
document.addEventListener('DOMContentLoaded', function (event) {
  const tabs = document.querySelectorAll('.villas .villas-top .tabs-wrapper .tab');
  const tabContent = document.querySelectorAll('.villas .villas-bottom .content');
  const tabPlacemark = document.querySelectorAll('.villas .villas-map .placemark-pic');

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', function () {
      tabs.forEach((tab) => tab.classList.remove('active'));
      this.classList.add('active');
      tabContent.forEach((content) => content.classList.add('hidden'));
      tabContent[i].classList.remove('hidden');
      tabPlacemark.forEach((content) => content.classList.add('hidden'));
      tabPlacemark[i].classList.remove('hidden');
    });
  });
});

// about
document.addEventListener('DOMContentLoaded', function (event) {
  const swiper = new Swiper('.objects-slider', {
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
});

//for all flowes

document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.fade-in-down');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Отключает повторную анимацию
        }
      });
    },
    {
      threshold: 0.8, // Срабатывает, когда 10% элемента попали в поле зрения
    },
  );

  elements.forEach((el) => {
    observer.observe(el);
  });

  const flowesPictures = document.querySelectorAll('.picture--hide');

  flowesPictures.forEach((picture) => {
    const rect = picture.getBoundingClientRect();

    const top = rect.top; // верхняя граница элемента относительно viewport

    const rangeStart = window.innerHeight;
    const rangeEnd = window.innerHeight * 0.35;

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

  window.addEventListener('scroll', () => {
    flowesPictures.forEach((picture) => {
      const rect = picture.getBoundingClientRect();

      const top = rect.top; // верхняя граница элемента относительно viewport

      const rangeStart = window.innerHeight;
      const rangeEnd = window.innerHeight * 0.35;

      if (picture.classList.contains('flow4-img')) {
        picture.style.setProperty('--scroll-percent', '100');
        const rangeEnd = window.innerHeight * 0.6;

        if (top <= rangeStart && top >= rangeEnd) {
          const percent = ((top - rangeStart) / (rangeEnd - rangeStart)) * 100;
          picture.style.setProperty('--scroll-percent', percent);
        } else if (top < rangeEnd) {
          picture.style.setProperty('--scroll-percent', '100');
        } else if (top > rangeStart) {
          picture.style.setProperty('--scroll-percent', '0');
        }

        return;
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
    console.log(unmaskedValue, unmaskedValue.length);

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

  if (window.scrollY > 100) {
    toTopBtn.classList.remove('hide');
  } else {
    toTopBtn.classList.add('hide');
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      toTopBtn.classList.remove('hide');
    } else {
      toTopBtn.classList.add('hide');
    }
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
});
