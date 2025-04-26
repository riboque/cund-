

const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
let intervalTime = 25000;
let autoSlideInterval;

function updateCarousel() {
  const offset = -currentIndex * 100;
  track.style.transform = `translateX(${offset}%)`;
}

function goToNextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}

function goToPrevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
}

function restartInterval() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(goToNextSlide, intervalTime);
}

// Botões manuais
nextButton.addEventListener('click', () => {
  goToNextSlide();
  restartInterval();
});

prevButton.addEventListener('click', () => {
  goToPrevSlide();
  restartInterval();
});

// Iniciar carrossel automático
autoSlideInterval = setInterval(goToNextSlide, intervalTime);
k






