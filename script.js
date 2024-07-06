// JavaScript for toggling menu icon and navbar behavior

const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Toggle visibility of nav links on click
  menuIcon.classList.toggle('active'); // Toggle active state of menu icon
});

// Change navbar to sticky when scrolling down
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

// Smooth scrolling when clicking navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
