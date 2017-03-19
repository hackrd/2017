var $banner = $('#nav');
var $banner_links = $('.nav-link');
var nav_barHeight = $banner.height();
var appear_value = $('#header').height();
var scroll_top = $(window).scrollTop();


$(document).scroll(function() {

  scroll_top = $(window).scrollTop();

  if (scroll_top >= appear_value) {
    $banner.addClass('nav-bar-fix');
    $banner_links.addClass('nav-bar-link-fix');
    $banner_links.css('color','black');                 // For some reason bootstrap keeps overriding the nav-bar-link-fix class so the text color had to be added on to the inline css
  }
  else {
    $banner.removeClass('nav-bar-fix');
    $banner_links.removeClass('nav-bar-link-fix');
    $banner_links.css('color','white');
  }
})
