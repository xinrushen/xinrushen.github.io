window.addEventListener('scroll', () => {
    const logo = document.getElementById('logo');
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        logo.style.fontSize = '24px'; // Shrink logo size
        header.style.padding = '5px'; // Reduce header padding
        header.style.background = 'rgba(255, 255, 255, 0.9)'; // Change background on scroll
    } else {
        logo.style.fontSize = '36px'; // Original logo size
        header.style.padding = '10px'; // Original header padding
        header.style.background = 'transparent'; // Reset background
    }
});
