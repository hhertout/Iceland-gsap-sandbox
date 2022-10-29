

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