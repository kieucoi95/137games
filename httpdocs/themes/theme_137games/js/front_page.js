var $ = jQuery;

$(document).ready(function () {
  var banner_home = new Swiper("#home_banner", {
    speed: 500,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var home_our_team = new Swiper("#home_our_team", {
    speed: 500,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
