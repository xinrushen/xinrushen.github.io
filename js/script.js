// Logo Varying Size While Scrolling
ScrollTrigger.create({
  animation: gsap.from(".logo", {
    y: "50vh",
    scale: 6,
    yPercent: -50,
  }),
  scrub: true,
  trigger: "#about",
  start: "top bottom",
  endTrigger: "#about",
  end: "top center",
});

// Function to Open the Sidepanel
function openNav() {
  document.getElementById("sidepanel").style.width = "250px";
}

// Function to Close the Sidepanel
function closeNav() {
  document.getElementById("sidepanel").style.width = "0";
}

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

// Dark Mode
const toggleIcon = document.getElementById('dark-mode');

toggleIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleIcon.textContent = 'light_mode';
    } else {
        toggleIcon.textContent = 'dark_mode';
    }
});