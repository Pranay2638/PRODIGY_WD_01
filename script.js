const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('menu-toggle');
const sections = document.querySelectorAll('section');


window.addEventListener('scroll', () => {
  
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

 
  let currentSectionId = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - navbar.offsetHeight;
    const sectionHeight = section.offsetHeight;
    const scrollPos = window.scrollY;

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    
  });
});


navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(link.getAttribute('href'));
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - navbar.offsetHeight,
        behavior: 'smooth',
      });
    }
  });
});


menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('responsive');
});


