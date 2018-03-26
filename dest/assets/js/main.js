$(document).ready(function() {
  $('.menu').click(function() {
    $('.menu').toggleClass('menu--active')
    $('.menu--close').toggleClass('menu--active')
    $('.nav').toggleClass('nav--active')
  })

  $('nav').click(function() {
    $('.menu').toggleClass('menu--active')
    $('.menu--close').toggleClass('menu--active')
    $('.nav').toggleClass('nav--active')
  })

  $('#contact-form').submit(function(e) {
    e.preventDefault()
    var $form = $(this)

    $.post($form.attr('action'), $form.serialize()).then(function() {
      alert("Thank you! I'll be in touch shortly!")
      //  $('.success').toggleClass('active');
      $('#contact-form')[0].reset()
    })
  })
})
