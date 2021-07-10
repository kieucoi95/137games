var $ = jQuery;
$(window).scroll(function() {
  var header_height = $('header').height();
  if($(window).scrollTop() > 2*header_height) {
      $('.header-fix').addClass('active');
  } else {
    $('.header-fix').removeClass('active');
  }
});
