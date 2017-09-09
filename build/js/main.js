$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('.menu-toggle').toggleClass('active');
    $('.close').toggleClass('active');
    $('body').toggleClass('noscroll');
    $('.nav-menu').toggleClass('active');
    $('.nav-menu').click(function () {
      $('.menu-toggle').toggleClass('active');
      $('.close').toggleClass('active');
      $('body').toggleClass('noscroll');
      $('.nav-menu').toggleClass('active');
    });
   });
 });