document.addEventListener("DOMContentLoaded", () => {
  // Scroll to Top Button
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show or hide the scroll to top button
  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Scroll to Top functionality
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Mobile Menu Toggle
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("nav-links");

  // Check if elements exist
  if (mobileMenu && navLinks) {
    mobileMenu.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Update the year in the footer
  document.getElementById("year").innerText = new Date().getFullYear();
});
