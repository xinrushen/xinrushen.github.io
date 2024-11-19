// Logo Varying Size While Scrolling
ScrollTrigger.create({
  animation: gsap.from(".logo", {
    x: "42.4vh",
    y: "61.4vh",
    scale: 6,
    yPercent: -50,
  }),
  scrub: true,
  trigger: "#about",
  start: "top bottom",
  endTrigger: "#about",
  end: "top center",
});

// const sidePanel = document.getElementById('sidepanel');
// const sidePanel = document.getElementById('sidepanel');
// const sidePanel = document.getElementById('sidepanel');

// Function to Open the Sidepanel
function openNav() {
  document.getElementById("sidepanel").style.width = "250px";
}

// Function to Close the Sidepanel
function closeNav() {
  document.getElementById("sidepanel").style.width = "0";
}

// Function to Open the Searchpanel
function openSearch() {
  document.getElementById("searchpanel").style.width = "250px";
}

// Function to Close the Searchpanel
function closeSearch() {
  document.getElementById("searchpanel").style.width = "0";
}

// Function to Open the Languagepanel
function openLang() {
  document.getElementById("langpanel").style.width = "250px";
}

// Function to Close the Languagepanel
function closeLang() {
  document.getElementById("langpanel").style.width = "0";
}



// // Close the side panel if clicked outside of it
// document.addEventListener('click', (event) => {
//   // If the click is outside the sidepanel and the toggle button, close the panel
//   if (!sidePanel.contains(event.target) && !toggleBtn.contains(event.target)) {
//       sidePanel.classList.remove('open');
//   }
// });

// // Prevent the click event from propagating inside the side panel (so it won't close)
// sidePanel.addEventListener('click', (event) => {
//   event.stopPropagation();
// });

// Smooth the page transition while clicking on the items on the sidepanel
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
        });
    });
});

// Smooth the page transition while using keyboard input (up/down arrow)
const sections = document.querySelectorAll('.section');
    let currentSection = 0;

    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            sections[index].scrollIntoView({ behavior: 'smooth' });
            currentSection = index;
        }
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowDown') {
            scrollToSection(currentSection + 1);
        } else if (event.key === 'ArrowUp') {
            scrollToSection(currentSection - 1);
        }
    });

// Light Mode
const toggleIcon = document.getElementById('light_mode');

if (localStorage.getItem('light_mode') === 'enabled') {
    document.body.classList.add('light_mode');
    toggleIcon.textContent = 'dark_mode';
}

toggleIcon.addEventListener('click', () => {
    document.body.classList.toggle('light_mode');
    if (document.body.classList.contains('light_mode')) {
        localStorage.setItem('light_mode', 'enabled');
        toggleIcon.textContent = 'dark_mode';
    } else {
        localStorage.setItem('light_mode', 'disabled');
        toggleIcon.textContent = 'light_mode';
    }
});

// Select all the shapes
const shapes = document.querySelectorAll('.shape');

// Listen for the scroll event
window.addEventListener('scroll', function() {
    // Get the current scroll position
    const scrollY = window.scrollY;

    // Loop through each shape and apply alternate movement
    shapes.forEach((shape, index) => {
        // Alternate left (-100vw) and right (100vw) based on index
        let direction = (index % 2 === 1) ? -100 : 100; // -100 for left, 100 for right
        
        if (scrollY > 80) {
            shape.style.transform = `translateX(${direction}vw)`; // Move shape sideways
            //shape.style.opacity = '0'; // Fade out the shape
        } else {
            shape.style.transform = 'translateX(0)'; // Reset shape position
            //shape.style.opacity = '1'; // Reset opacity to fully visible
        }
    });
});