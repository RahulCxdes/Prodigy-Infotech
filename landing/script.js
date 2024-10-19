// JavaScript for changing navbar style on scroll
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    
    // Add class when the page is scrolled
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('mobile-menu');
  const navList = document.getElementById('nav-list');
  
  menuToggle.addEventListener('click', function () {
    navList.classList.toggle('active');
  });
  