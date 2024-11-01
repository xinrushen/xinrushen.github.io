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

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
        });
    });
});

document.addEventListener('keydown', function(event) {
  const viewportHeight = window.innerHeight;
  if (event.key === 'ArrowDown') {
      window.scrollBy({
          top: viewportHeight,
          behavior: 'smooth'
      });
  } else if (event.key === 'ArrowUp') {
      window.scrollBy({
          top: -viewportHeight,
          behavior: 'smooth'
      });
  }
});