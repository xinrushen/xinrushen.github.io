ScrollTrigger.create({
  animation: gsap.from("#logo", {
    y: "50vh",
    scale: 6,
    yPercent: -50,
  }),
  scrub: true,
  trigger: ".section .content",
  start: "top bottom",
  endTrigger: ".section .content",
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