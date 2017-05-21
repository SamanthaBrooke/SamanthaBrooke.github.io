$(document).ready(function() {

  $('.old').mouseenter(function() {
    $('.footnote').addClass('showme');
  });


  $('.old').mouseleave(function() {
    $('.footnote').removeClass('showme');
  });


});
