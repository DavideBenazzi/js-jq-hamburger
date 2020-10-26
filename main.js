var menu = $('.hamburger-menu');

$('.header-right > a').click( function() {
  menu.show();
});

$('.hamburger-menu > a').click( function() {
  menu.hide();
});
