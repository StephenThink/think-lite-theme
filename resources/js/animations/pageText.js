// Import GSAP library and ScrollTrigger
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const pageText = (containerSelector, marker = false) => {

    const containers = document.querySelectorAll(containerSelector);

    containers.forEach(container => {
        Array.from(container.children).forEach(child => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: child,
                    start: "top 50%",
                    end: "bottom 20%",
                    toggleActions: "play none none none",
                    markers: marker,
                }
            });

            if (child.tagName === 'LI') {
                const icon = child.querySelector('#listIcon');
                const text = child.querySelector('#listText');
                tl.from(icon, {
                    autoAlpha: 0,
                    opacity: 0,
                    x: -10,
                    ease: 'back.out(1.7)',
                    duration: .5,
                    stagger: 0.5,
                    clearProps: "all"
                });
                tl.from(text, {
                    autoAlpha: 0,
                    opacity: 0,
                    x: 10,
                    ease: 'back.out(1.7)',
                    duration: .5,
                    stagger: 0.5,
                    clearProps: "all"
                });
            } else if (child.tagName === 'H3') {
                tl.from(child, {
                    autoAlpha: 0,
                    opacity: 0,
                    x: -50,
                    skewX: 50,
                    ease: 'back.out(3)',
                    duration: 1,
                    stagger: 0.5,
                    clearProps: "all"
                });
            } else {
                tl.from(child, {
                    autoAlpha: 0,
                    opacity: 0,
                    y: 10,
                    ease: 'back.out(1.7)',
                    duration: .5,
                    stagger: 0.5,
                    clearProps: "all"
                });
            }
        });
    });


}

export default pageText;
