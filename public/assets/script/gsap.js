
//ANIMATION HOME PAGE
const homePage = document.querySelector(".home-image-wrapper")
const homeLetters = gsap.utils.toArray(".home-title-letter")
const waterFall = gsap.utils.toArray(".main-waterfall")


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

//ANIM COMPASS

const compass = document.querySelector('.compass')
let compassPosTop = compass.offsetTop
let compassPosLeft = (window.innerWidth*0.25)

document.addEventListener('mousemove', (e) => {

    gsap.to(compass, {
        rotate: (e.offsetX - compassPosLeft)*0.03,
        transformOrigin: "center",
        ease: "power3",
    })
})

//ANIM WATERFALL
waterFall.forEach(layer => {
    const depth = layer.dataset.depth;
    gsap.to(layer, {
        scrollTrigger : {
            trigger: '.main-waterfall-wrapper',
            start : "center bottom",
            end : "+=600 top", 
            markers : true,
            scrub: true,
        },
        y : (layer.offsetHeight*depth),
        scale: 1.5,
    })
})

