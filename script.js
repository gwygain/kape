document.addEventListener('DOMContentLoaded', function() {
  // Page Navigation
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');
  
  function navigateTo(pageId) {
    // Hide all pages
    pages.forEach(page => {
      page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update active nav link
    navLinks.forEach(link => {
      if (link.getAttribute('data-page') === pageId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
    
    // Scroll to top when changing pages
    window.scrollTo(0, 0);
  }
  
  // Add click event to navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const pageId = this.getAttribute('data-page');
      navigateTo(pageId);
    });
  });
  
  // Menu button on home page
  const menuBtn = document.getElementById('menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', function(e) {
      e.preventDefault();
      navigateTo('menu');
    });
  }
  
  // Form submission (just prevent default for demo)
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Form submitted! (This is a demo, no data is actually sent)');
    });
  }
});

