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



// Select elements
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Open Lightbox
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    lightbox.classList.add('active');
    lightboxImg.src = item.src;
    currentIndex = index;
  });
});

// Close Lightbox
closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

// Navigate Previous
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
  lightboxImg.src = galleryItems[currentIndex].src;
});

// Navigate Next
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
  lightboxImg.src = galleryItems[currentIndex].src;
});

// Close on outside click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.classList.remove('active');
});

// Keyboard Controls
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') lightbox.classList.remove('active');
  if (e.key === 'ArrowRight') nextBtn.click();
  if (e.key === 'ArrowLeft') prevBtn.click();
});


