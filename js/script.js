function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

window.addEventListener('scroll', () => {
    const logo = document.getElementById('logo');
    const navbar = document.querySelector('navbar');
    
    if (window.scrollY > 50) {
        logo.style.fontSize = '14px'; // Shrink logo size
        navbar.style.padding = '5px'; // Reduce header padding
        navbar.style.background = 'transparent'; // Change background on scroll
    } else {
        logo.style.fontSize = '36px'; // Original logo size
        navbar.style.padding = '10px'; // Original header padding
        navbar.style.background = 'transparent'; // Reset background
    }
});
