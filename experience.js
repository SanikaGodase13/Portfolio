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

// Scroll Animation for Timeline Items
const timelineItems = document.querySelectorAll('.timeline-item');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  timelineItems.forEach(item => {
    const boxTop = item.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      item.classList.add('show');
    } else {
      item.classList.remove('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


