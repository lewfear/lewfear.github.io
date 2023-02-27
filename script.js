// Parallax scrolling effect
window.addEventListener("scroll", function() {
    let header = document.querySelector("section#parallax");
    header.style.backgroundPositionY = -window.pageYOffset + "px";
  });
  
  // Smooth scrolling effect for navigation
  document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  
  
  // Form validation
  const contactForm = document.querySelector('form');
  const nameInput = contactForm.elements.name;
  const emailInput = contactForm.elements.email;
  const messageInput = contactForm.elements.message;
  
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    if (!validateName(nameInput.value)) {
      alert('Please enter a valid name');
      nameInput.focus();
      return;
    }
  
    if (!validateEmail(emailInput.value)) {
      alert('Please enter a valid email address');
      emailInput.focus();
      return;
    }
  
    if (!validateMessage(messageInput.value)) {
      alert('Please enter a message');
      messageInput.focus();
      return;
    }
  
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'email.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          alert('Your message has been sent successfully!');
          // Form submit animation
          document.querySelector("form").addEventListener("submit", function() {
            let submitButton = document.querySelector("input[type='submit']");
            submitButton.style.backgroundColor = "green";
            submitButton.value = "Sent";
          });
          contactForm.reset();
        } else {
          alert('There was an error sending your message');
        }
      }
    };
    xhr.send(`name=${nameInput.value}&email=${emailInput.value}&message=${messageInput.value}`);
  });
  
  function validateName(name) {
    return name.trim().length > 0;
  }
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validateMessage(message) {
    return message.trim().length > 0;
  }
  
  
  
  
  // Portfolio item hover effect
  document.querySelectorAll(".portfolio-item").
  forEach(function(item) {
    item.addEventListener("mouseover", function() {
      this.style.backgroundColor = "lightgray";
    });
    item.addEventListener("mouseout", function() {
      this.style.backgroundColor = "transparent";
    });
  });
  
  // Responsive Navigation Menu
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbar = document.querySelector('.navbar');
  
  navbarToggle.addEventListener('click', function() {
    navbar.querySelector('ul').classList.toggle('active');
  });
  
  
  // Portfolio Filter
  const filterButtons = document.querySelectorAll('.filter-button');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      filterButtons.forEach(function(button) {
        button.classList.remove('active');
      });
      button.classList.add('active');
  
      const filter = button.getAttribute('data-filter');
  
      portfolioItems.forEach(function(item) {
        if (filter === 'all') {
          item.style.display = 'block';
        } else if (item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  
  // Personal Photos Lightbox
  const photos = Array.from(document.querySelectorAll('.personal-photos img'));
  photos.forEach(function(photo) {
    photo.addEventListener('click', function() {
      const lightbox = document.createElement('div');
      lightbox.classList.add('lightbox');
      lightbox.innerHTML = `
        <img src="${this.src}" alt="${this.alt}">
        <p>${this.alt}</p>
      `;
      document.body.appendChild(lightbox);
  
      lightbox.addEventListener('click', function() {
        lightbox.remove();
      });
    });
  });
  
  // Dropdown from click on headers
  function toggleContainer(header, container) {
    header.addEventListener('click', function() {
      if (container.style.display === '' || container.style.display === 'none') {
        container.style.display = 'block';
      } else {
        container.style.display = 'none';
      }
    });
  }
  
  toggleContainer(document.querySelector('.map-header'), document.querySelector('.map-container'));
  toggleContainer(document.querySelector('.personal-writting-header'), document.querySelector('.personal-writting-container'));
  toggleContainer(document.querySelector('.resume-header'), document.querySelector('.resume-thumbnail-container'));
  toggleContainer(document.querySelector('.personal-blog-header'), document.querySelector('.personal-blog-container'));
  toggleContainer(document.querySelector('.personal-photos-header'), document.querySelector('.personal-photos-container'));
  toggleContainer(document.querySelector('.personal-library-header'), document.querySelector('.personal-library-container'));
  toggleContainer(document.querySelector('.personal-charity-work-header'), document.querySelector('.personal-charity-work-container'));
  
  
  
  
  
  
  // Social Media Widgets
  // ...
  
  // Blog Section
  // ...
  
  // Search Functionality
  // ...
  
  