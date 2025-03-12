document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carrousel-track");
  const items = Array.from(track.children);
  
  // Quintuplicamos los elementos para que no haya espacios en blanco
  for (let i = 0; i < 4; i++) { // Se añaden 4 copias (total 5x)
      items.forEach(item => {
          const clone = item.cloneNode(true);
          track.appendChild(clone);
      });
  }
});
