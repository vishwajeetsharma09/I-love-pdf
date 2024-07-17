document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const navLinks = document.querySelectorAll("nav ul li a");
  const ctaButtons = document.querySelectorAll(".cta-buttons a");

  // Sticky header functionality
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  // Smooth scrolling for navigation links and CTA buttons
  const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
      behavior: "smooth",
    });
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      smoothScroll(event.target.getAttribute("href"));
    });
  });

  ctaButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      smoothScroll(event.target.getAttribute("href"));
    });
  });
});
