document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carrousel-track');
  const items = Array.from(track.children);
  const itemWidth = items[0].getBoundingClientRect().width;

  // Multiplicar los items para evitar espacios en blanco
  const itemsToAdd = Math.ceil(window.innerWidth / itemWidth) * 2; // Multiplicar por 2 para PC
  for (let i = 0; i < itemsToAdd; i++) {
    items.forEach(item => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });
  }

  let currentPosition = 0;

  function moveCarousel() {
    currentPosition -= 1;
    if (currentPosition <= -itemWidth) {
      currentPosition = 0;
      track.appendChild(track.firstElementChild);
    }
    track.style.transform = `translateX(${currentPosition}px)`;
    requestAnimationFrame(moveCarousel);
  }

  moveCarousel();
});
