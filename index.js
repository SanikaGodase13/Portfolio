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

// Subtle floating animation for hero image
const heroImg = document.querySelector('.hero-image img');

if (heroImg) {
  let y = 0;
  setInterval(() => {
    y = y === 0 ? 10 : 0;
    heroImg.style.transform = `translateY(${y}px)`;
  }, 2000);
}

// Starfield background for About Me section
const canvas = document.getElementById('aboutStars');
const ctx = canvas.getContext('2d');

let starsArray = [];
let w, h;

function initCanvas() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = document.getElementById('about-me').offsetHeight;
  starsArray = [];
  for (let i = 0; i < 100; i++) {
    starsArray.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.2,
      speed: Math.random() * 0.5 + 0.2
    });
  }
}
initCanvas();

function animateStars() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'white';
  starsArray.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
    star.y -= star.speed;
    if (star.y < 0) star.y = h;
  });
  requestAnimationFrame(animateStars);
}
animateStars();

window.addEventListener('resize', initCanvas);

// Animate timeline items when they appear in viewport
const timelineItems = document.querySelectorAll(".timeline-item");

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 100;
}

function revealTimeline() {
  timelineItems.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealTimeline);
window.addEventListener("load", revealTimeline);


// Simple reveal animation when scrolling into view
const cards = document.querySelectorAll(".experience-card");

const revealCards = () => {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", revealCards);

// Reveal animation for project cards
const projectCards = document.querySelectorAll(".project-card");

const revealProjects = () => {
  const triggerBottom = window.innerHeight * 0.85;
  projectCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom){
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", revealProjects);


// Optional interactive tilt effect
document.addEventListener("mousemove", (e) => {
  const container = document.querySelector(".galaxy-container");
  const x = (window.innerWidth / 2 - e.pageX) / 60;
  const y = (window.innerHeight / 2 - e.pageY) / 60;
  container.style.transform = `rotateY(${x}deg) rotateX(${15 + y}deg)`;
});


// Optional helper: highlight categories when a chip is clicked (visual feedback).
// Safe to include — non-blocking, unobtrusive.
document.addEventListener('click', (e) => {
  const chip = e.target.closest('.ts-chip');
  if(!chip) return;
  // quick pulse effect
  chip.animate([
    { transform: 'scale(1)' },
    { transform: 'scale(1.06)' },
    { transform: 'scale(1)' }
  ], { duration: 300, easing: 'ease' });
});


// Contact form validation and feedback
document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    alert("Please fill all fields before sending your message.");
  } else {
    alert("Thanks for reaching out! Your message has been sent successfully.");

    // Clear the form fields after submission
    setTimeout(() => {
      document.getElementById("contactForm").reset();
    }, 100);
  }
});


