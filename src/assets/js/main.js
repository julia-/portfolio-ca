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
   
   $("#contact-form").submit(function(e){
     e.preventDefault();
     var $form = $(this);
     
     $.post($form.attr("action"), $form.serialize()).then(function(){
       alert("Thank you! I'll be in touch shortly!");
      //  $('.success').toggleClass('active');
       $("#contact-form")[0].reset();
      });
    });
 });