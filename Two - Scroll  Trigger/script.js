let cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
    cursor.style.left = (e.pageX - 25) + "px";
    cursor.style.top = (e.pageY - 25) + "px";

})
gsap.from(".page1 span", {
    duration: .4,
    y: -100,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".page1",
        scrub: 2,
        pin: true
    }
})

gsap.to(".to-right", {
    x: "200%",
    scrollTrigger: {
        trigger: ".page2",
        scrub: 3,
        start: "top 30%"
    }
})
gsap.to(".to-left", {

    x: "-200%",
    scrollTrigger: {
        trigger: ".page2",
        scrub: 1,
        start: "top 30%"
    }
})