document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const nav = document.querySelector('nav');
  const logo = document.getElementById('logo');
  const navLinks = document.querySelectorAll('nav ul li a');
  const btnShow = document.querySelector('.btn-show');

  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
  });

  logo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
      nav.classList.remove('active');
      hamburgerMenu.classList.remove('active');
    });
  });

  btnShow.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = btnShow.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });

  // Ocultar nav cuando se toca fuera de él
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !hamburgerMenu.contains(event.target)) {
      nav.classList.remove('active');
      hamburgerMenu.classList.remove('active');
    }
  });
});
