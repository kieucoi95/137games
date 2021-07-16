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
  var home_partner = new Swiper("#home_partner", {
    speed: 500,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      480: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 5,
        spaceBetween: 40
      }
    }
  });

  // Count #section2
  var section2_to = 0;
  var section2 = $('#section2').offset().top;
  $(window).scroll(function() {
    if(($(window).scrollTop() + $(window).height()) >= section2) {
      section2_to ++;
    }
    if (section2_to  == 1) {
      count_();
    }
  });

});

function count_(e) {
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
      Counter: $(this).attr('data-count')
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
}
