const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const closeModalButton = document.querySelectorAll('[data-close-button]');

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });

  links.forEach((link, index) => {
    if (link.style.animation) {
        link.style.animation = ''
    } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
    }
});
    hamburger.classList.toggle('toggle');
});
