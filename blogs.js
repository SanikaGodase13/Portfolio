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


// Optional small animation on load
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".blog-card");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    setTimeout(() => {
      card.style.transition = "all 0.8s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 150);
  });
});
