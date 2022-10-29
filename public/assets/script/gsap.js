//ANIMATION HOME PAGE
const homePage = document.querySelector(".home-image-wrapper");
const homeLetters = gsap.utils.toArray(".home-title-letter");


const TLhome = new gsap.timeline({delay:1});
TLhome.from(".home-image-wrapper", {
    opacity: 0,
    duration: 2,
    ease: "power3.out",
})

homeLetters.forEach((homeLetters) => {
  TLhome.from(homeLetters, {
      scale: 12,
      x: "-= 400",
      skewX: 30,
      skewY: 40,
      ease: "power3.out",
      duration: 2,
      opacity: -2,
    }, "-=1.8" );
});

gsap.to(".front-layer", {
    scrollTrigger: {
        trigger: ".home-page",
        start: "top top",
        end: "bottom +=400",
        scrub: true,
    },
    y: () => {
        return -homePage.offsetHeight / 20;
    },
    scale: 1.2,
})
gsap.to(".home-title", {
    scrollTrigger: {
        trigger: ".home-title",
        start: "top +=100",
        end: "+=400",
        scrub: true,
        pin: true,
    },
    y: () => {
        return -homePage.offsetHeight / 20;
    },
    scale: 0.6,
})

