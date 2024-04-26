import gsap from "gsap";

const pageLoadAnimation = (delay = 2) => {
    // Get the mainNav element
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.getElementById('navLinks')
    const dropDownChevron = document.querySelectorAll('#dropDownChevron');



        const tl = gsap.timeline({delay: 1});

        tl.from(mainNav, {
            y:-100,
            autoAlpha: 0,
            opacity: 0,
            duration: .5,
            ease: 'linear',
            clearProps: "all",
            delay: delay

        }, 0)

        tl.from(navLinks, {
            y: -100,
            opacity: 0,
            ease: "back.out(1.7)", // Adding a bounce effect
            duration: 1,
            delay: delay,
            clearProps: "all"

        },
            0.3);

    // if(dropDownChevron)
    // {
    //     tl.fromTo(dropDownChevron, {
    //         rotate: '-90deg',
    //         y: -100,
    //     },{
    //         rotate: 0,
    //         y: 0,
    //         stagger: .5,
    //         duration: 1,
    //         delay: delay,
    //
    //     }, 0.5)
    // }


}



export default pageLoadAnimation;
