/**
 * Main JavaScript file for handling website interactivity and accessibility features
 * Waits for the DOM to be fully loaded before executing any code
 */
document.addEventListener("DOMContentLoaded", () => {
  /**
   * Blog Post Expansion Functionality
   * Handles the expansion and collapse of blog posts with smooth scrolling
   * Includes accessibility attributes for screen readers
   */
  const blogPosts = document.querySelectorAll(".blog-post");

  blogPosts.forEach((post) => {
    const readMoreBtn = post.querySelector(".read-more");
    const closeBtn = post.querySelector(".close-post");
    const content = post.querySelector(".post-full-content");

    // Set up read more button functionality
    if (readMoreBtn && content) {
      readMoreBtn.addEventListener("click", () => {
        const isExpanded = readMoreBtn.getAttribute("aria-expanded") === "true";
        // Toggle aria-expanded for accessibility
        readMoreBtn.setAttribute("aria-expanded", !isExpanded);
        // Toggle content visibility
        content.hidden = isExpanded;
        post.classList.toggle("expanded");
        // Smooth scroll to expanded content
        if (!isExpanded) {
          content.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }

    // Set up close button functionality
    if (closeBtn && content) {
      closeBtn.addEventListener("click", () => {
        // Reset expansion state
        readMoreBtn.setAttribute("aria-expanded", "false");
        content.hidden = true;
        post.classList.remove("expanded");
        // Smooth scroll back to post start
        post.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  });

  /**
   * Mobile Navigation Toggle
   * Handles the mobile menu button functionality with accessibility support
   * Uses aria-expanded to indicate menu state to screen readers
   */
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      // Toggle aria-expanded state
      navToggle.setAttribute("aria-expanded", !isExpanded);
      // Toggle navigation visibility
      navLinks.classList.toggle("active");
    });
  }

  /**
   * Form Validation with Accessibility
   * Implements client-side form validation with accessibility features
   * Adds appropriate ARIA attributes and error handling
   */
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    const inputs = form.querySelectorAll("input, textarea");

    // Mark required fields with aria-required
    inputs.forEach((input) => {
      if (input.required) {
        input.setAttribute("aria-required", "true");
      }
    });

    // Handle form submission and validation
    form.addEventListener("submit", function (e) {
      let valid = true;

      inputs.forEach((input) => {
        const errorDiv = input.parentElement.querySelector(".error-message");
        if (!input.checkValidity()) {
          valid = false;
          // Mark invalid fields for screen readers
          input.setAttribute("aria-invalid", "true");
          // Display validation message
          errorDiv.textContent = input.validationMessage;
        } else {
          // Clear invalid state and error message
          input.setAttribute("aria-invalid", "false");
          errorDiv.textContent = "";
        }
      });

      if (!valid) {
        e.preventDefault();
        // Focus first invalid field for better user experience
        const firstInvalid = form.querySelector("[aria-invalid='true']");
        firstInvalid?.focus();
      }
    });
  });

  /**
   * Current Page Indicator
   * Sets the current page indicator in navigation
   * Uses aria-current for accessibility
   */
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const currentLink = document.querySelector(
    `.nav-links a[href="${currentPage}"]`
  );
  if (currentLink) {
    currentLink.setAttribute("aria-current", "page");
  }
});
