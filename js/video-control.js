document.addEventListener("DOMContentLoaded", function () {
  const videoContainer = document.querySelector(".video-funciona"); // Cambiar a how-work
  const video = videoContainer.querySelector(".video-info");
  const playPauseBtn = videoContainer.querySelector(".play-btn");
  const playPauseLabel = videoContainer.querySelector("label");

  // Reproducir o pausar el video al hacer clic en el botón
  playPauseBtn.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      playPauseLabel.classList.add("hide"); // Ocultar el botón de play
    } else {
      video.pause();
      playPauseLabel.classList.remove("hide"); // Mostrar el botón de play
    }
  });

  // Mostrar el botón de play al finalizar el video
  video.addEventListener("ended", function () {
    playPauseBtn.checked = false; // Restablecer el estado del checkbox
    playPauseLabel.classList.remove("hide"); // Mostrar el botón de play
  });

  // Mostrar el botón de pausa solo al hacer hover en el video
  videoContainer.addEventListener("mouseenter", function () {
    if (!video.paused) {
      playPauseLabel.classList.remove("hide"); // Mostrar el botón de pausa
    }
  });

  videoContainer.addEventListener("mouseleave", function () {
    if (!video.paused) {
      playPauseLabel.classList.add("hide"); // Ocultar el botón de pausa
    }
  });

  // Activar pantalla completa al hacer doble clic en el video
  video.addEventListener("dblclick", function () {
    if (video.requestFullscreen) {
      video.requestFullscreen(); // Pantalla completa para navegadores modernos
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Pantalla completa para Safari
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen(); // Pantalla completa para IE/Edge
    }
  });
});