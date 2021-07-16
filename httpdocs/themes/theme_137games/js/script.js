var $ = jQuery;
$(window).scroll(function() {
  var header_height = $('header').height();
  if($(window).scrollTop() > 2*header_height) {
      $('.header-fix').addClass('active');
  } else {
    $('.header-fix').removeClass('active');
  }
});

$('.btn-menu-mobile').click(function (e) {
  e.preventDefault();
  $('#header-mobile, .bg-main-menu-mb').addClass('active');
});

$('.bg-main-menu-mb').click(function (e) {
  e.preventDefault();
  $('#header-mobile, .bg-main-menu-mb').removeClass('active');
});
