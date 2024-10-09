let index = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.carousel-images img');
  index = (index + step + slides.length) % slides.length; // Cálculo do índice
  const offset = -index * 800; // Ajuste para o tamanho da imagem
  document.querySelector('.carousel-images').style.transform = `translateX(${offset}px)`;
}

// Adicione controles automáticos se desejar
setInterval(() => moveSlide(1), 3000); // Muda a imagem a cada 3 segundos