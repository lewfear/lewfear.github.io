const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
});

const slider = document.querySelector('.slider');
const photoGallery = document.querySelector('.photo-gallery');
const slides = [...photoGallery.querySelectorAll('img')];

let slideIndex = 0; // Set initial slide index to 0
displaySlide(slideIndex); // Display the first slide on page load

function displaySlide(index) {
  const currentSlide = slides[index];
  const currentSrc = currentSlide.getAttribute('src');

  const slide = document.querySelector('.slide');
  slide.style.backgroundImage = `url(${currentSrc})`;

  const activeSlide = document.querySelector('.slide.active');
  if (activeSlide) {
    activeSlide.classList.remove('active');
  }
  slide.classList.add('active');
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  displaySlide(slideIndex);
}

let slideTimer = setInterval(nextSlide, 5000);

slider.addEventListener('mouseenter', () => {
  clearInterval(slideTimer);
});

slider.addEventListener('mouseleave', () => {
  slideTimer = setInterval(nextSlide, 5000);
});

document.querySelector('.prev').addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  displaySlide(slideIndex);
});

document.querySelector('.next').addEventListener('click', nextSlide);

// Get all the images in the photo-gallery
const photoGalleryImages = document.querySelectorAll('.photo-gallery img');

// Add a click event listener to each image in the photo-gallery
photoGalleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    // Set the slideIndex to the index of the clicked image
    slideIndex = index;
    // Display the clicked image as the active slide
    displaySlide(slideIndex);
  });
});


    

// Social Media Widgets
// ...

// Blog Section
// ...

// Search Functionality
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const articles = document.querySelectorAll('article');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.toLowerCase();
  
  // Loop through all articles and hide/show them based on the search term
  articles.forEach((article) => {
    const title = article.querySelector('h3').textContent.toLowerCase();
    const content = article.querySelector('p').textContent.toLowerCase();
    
    if (title.includes(searchTerm) || content.includes(searchTerm)) {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
  });
});
