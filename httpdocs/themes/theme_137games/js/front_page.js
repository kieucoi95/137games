var $ = jQuery;

$(document).ready(function () {
  var banner_home = new Swiper("#home_banner", {
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
});
