document.addEventListener("DOMContentLoaded", function () {
  const videoContainer = document.querySelector(".video-funciona"); // Cambiar a how-work
  const video = videoContainer.querySelector("video");
  const playPauseBtn = videoContainer.querySelector(".play-pause-btn");
  const title = videoContainer.querySelector("h2");
  const overlay = videoContainer.querySelector(".overlay"); // Seleccionar el overlay

  playPauseBtn.addEventListener("click", function () {
      if (video.paused) {
          video.play();
          playPauseBtn.classList.remove("fa-play");
          playPauseBtn.classList.add("fa-pause");
          title.style.opacity = "0"; // Ocultar el título
          overlay.style.opacity = "0"; // Ocultar el overlay
      } else {
          video.pause();
          playPauseBtn.classList.remove("fa-pause");
          playPauseBtn.classList.add("fa-play");
          title.style.opacity = "1"; // Mostrar el título
          overlay.style.opacity = "0.5"; // Volver a mostrar el overlay con transparencia
      }
  });

  // Mostrar botón de pausa al pasar el mouse sobre el video
  videoContainer.addEventListener("mouseenter", function () {
      if (!video.paused) {
          playPauseBtn.style.opacity = "1";
      }
  });

  // Ocultar botón al salir del video
  videoContainer.addEventListener("mouseleave", function () {
      if (!video.paused) {
          playPauseBtn.style.opacity = "0";
      }
  });

  // Asegurar que el botón y overlay reaparecen cuando el video termina
  video.addEventListener("ended", function () {
      playPauseBtn.classList.remove("fa-pause");
      playPauseBtn.classList.add("fa-play");
      title.style.opacity = "1"; // Mostrar el título
      overlay.style.opacity = "0.5"; // Restaurar overlay
      playPauseBtn.style.opacity = "1"; // Asegurar que el botón de play sea visible
  });
});
