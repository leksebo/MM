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

  // Smooth Scrolling for Anchor Links
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Form Validation
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      let valid = true;
      const inputs = this.querySelectorAll("input, textarea");
      inputs.forEach((input) => {
        if (!input.checkValidity()) {
          valid = false;
          input.classList.add("invalid");
        } else {
          input.classList.remove("invalid");
        }
      });
      if (!valid) {
        e.preventDefault();
      }
    });
  });

  // Event Tracking for Navigation Links
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      console.log(`Navigation link clicked: ${link.getAttribute("href")}`);
    });
  });
});
