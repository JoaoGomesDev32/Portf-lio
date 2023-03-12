$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    $('.parallax').css('background-position-y', -(scrollTop * 0.5) + 'px');
  });
  
// Neste exemplo, vamos usar a biblioteca jQuery

$(document).ready(function() {
    // Animação de entrada dos projetos
    $(".project").each(function(index) {
      $(this).delay(100 * index).animate({ opacity: 1 }, 500);
    });
  });

