ScrollTrigger.create({
  animation: gsap.from(".logo", {
    y: "50vh",
    scale: 6,
    yPercent: -50,
  }),
  scrub: true,
  trigger: ".content",
  start: "top bottom",
  endTrigger: ".content",
  end: "top center",
});
