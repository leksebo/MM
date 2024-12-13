// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Entry Page - Auto select first radio on load
  const firstRadio = document.querySelector("#toggle1");
  if (firstRadio) {
    firstRadio.checked = true;
  }
});
