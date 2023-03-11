$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    $('.parallax').css('background-position-y', -(scrollTop * 0.5) + 'px');
  });
  
  // Adicionar animação aos botões de "Ver Projeto"
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.backgroundColor = '#fff';
      button.style.color = '#333';
    });
    button.addEventListener('mouseout', () => {
      button.style.backgroundColor = '#333';
      button.style.color = '#fff';
    });
  });

