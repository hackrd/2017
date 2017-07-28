var $banner = $('#nav');
var $banner_links = $('.nav-link');
var nav_barHeight = $banner.height();
var appear_value = $('#header').height();
var scroll_top = $(window).scrollTop();


$(document).ready(function() {

  $(document).scroll(function() {

    scroll_top = $(window).scrollTop();

    if (scroll_top >= appear_value) {
      $banner.addClass('navbar-default');
      $banner.removeClass('navbar-inverse');
      $banner.addClass('navbar-light');
      $banner.removeClass('navbar-fix');
    }
    else {
      $banner.removeClass('navbar-default');
      $banner.addClass('navbar-inverse');
      $banner.removeClass('navbar-light');
      $banner.addClass('navbar-fix');
    }
  })
})
