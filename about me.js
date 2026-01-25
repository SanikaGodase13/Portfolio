// Optional small header glow on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 0 20px rgba(127,0,255,0.3)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Toggle mobile menu
const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar ul");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});


// Scroll reveal for story blocks and cards
document.addEventListener('DOMContentLoaded', () => {
  const revealElems = document.querySelectorAll('.story-block, .card, .hero-left, .profile-frame');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        // stop observing once revealed
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealElems.forEach(el => observer.observe(el));

  // Optional: make CTA scroll smooth if linking within page
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href.length > 1 && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

