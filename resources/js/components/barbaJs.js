// Import necessary modules
import barba from '@barba/core';
import gsap from 'gsap';
import {alpinejs, pageLoad} from './index.js';

// Define the barbaJs function with an optional debug parameter
const barbaJs = function (debug = false) {
    // Get the type of animation from the data attribute
    const animateType = document.querySelector('body').dataset.barbaAnimate;
    let leaveAnimation, enterAnimation;

    // Select the main navigation element
    const mainNav = document.getElementById('mainNav');
    const delay = 1;
    const duration = 1;




    // Grab everything on the webpage
    const hideThings = () => {
        const thingsToHide = document.querySelectorAll('h1, h2, h3, h4, p, section');
        thingsToHide.forEach((item) => {
            gsap.set(item, {
                opacity: 0,
            })
        })

    }

    const showThings = () => {
        const thingsToShow = document.querySelectorAll('h1, h2, h3, h4, p, section');
        thingsToShow.forEach((item) => {
            gsap.set(item, {
                clearProps: true
            })
        })

    }

    const hideNav = (tl) => {
        tl.to(mainNav, {
            y: '-100%',
            duration: duration / 2
        }, 0);
    }

    // Switch statement to handle different animation types
    switch (animateType) {
        case 'overlay':
            // Create a new div element for curtains
            const overlayDiv = document.createElement('div');
            overlayDiv.classList.add('overlay');

            // Append the Overlay div to the body of the HTML document
            document.body.appendChild(overlayDiv);

            const overlayLeave = () => {
                const tl = gsap.timeline(
                    {
                        duration: duration,
                    });
                hideNav(tl)

                tl.fromTo(overlayDiv,
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                    }, 1)

                return tl;
            };

            const overlayEnter = () => {
                const tl = gsap.timeline({
                    delay: 1,
                    duration: duration,
                });

                tl.fromTo(overlayDiv,
                    {
                        opacity: 1,
                    },
                    {
                        opacity: 0,
                    }, 0)

                return tl;
            };


            leaveAnimation = () => {
                return overlayLeave();
            };
            enterAnimation = () => {
                return overlayEnter();
            };

            break;
        case 'blinds':
            // Create a new div element for curtains
            const blindsDiv = document.createElement('div');
            blindsDiv.classList.add('blinds');

            // Create four divs for blinds
            for (let i = 1; i <= 4; i++) {
                const blindDiv = document.createElement('div');
                blindDiv.classList.add('blind');
                blindDiv.classList.add('bg-primary');
                blindsDiv.appendChild(blindDiv);
            }

            // Append the curtains div to the body of the HTML document
            document.body.appendChild(blindsDiv);

            const blindLeave = (data) => {
                const tl = gsap.timeline({
                    duration: duration,
                });

                hideNav(tl)

                // Animation for blinds 1 and 3
                tl.fromTo(blindsDiv.children[0], {y: '-100%'}, {y: '0%'}, duration);
                tl.fromTo(blindsDiv.children[2], {y: '-100%'}, {y: '0%'}, duration);
                tl.fromTo(blindsDiv.children[1], {y: '100%'}, {y: '0%'}, duration);
                tl.fromTo(blindsDiv.children[3], {y: '100%'}, {y: '0%'}, duration);

                return tl;
            };

            const blindEnter = (data) => {
                const tl = gsap.timeline({
                    delay: 0.5,
                    duration: duration,
                });

                // Animation for blinds 2 and 4
                tl.fromTo(blindsDiv.children[0], {y: '0%'}, {y: '100%'}, 0);
                tl.fromTo(blindsDiv.children[2], {y: '0%'}, {y: '100%'}, 0);
                tl.fromTo(blindsDiv.children[1], {y: '0%'}, {y: '-100%'}, 0);
                tl.fromTo(blindsDiv.children[3], {y: '0%'}, {y: '-100%'}, 0);

                return tl;
            };


            leaveAnimation = (data) => {
                // console.log(data);

                return blindLeave(data);
            };
            enterAnimation = (data) => {
                // console.log(data);

                return blindEnter(data);
            };

            break;
        case 'curtains':
            // Create a new div element for curtains
            const curtainsDiv = document.createElement('div');
            curtainsDiv.classList.add('curtains');

            // Create a div for left curtain
            const leftCurtainDiv = document.createElement('div');
            leftCurtainDiv.classList.add('left');
            leftCurtainDiv.classList.add('bg-primary');

            // Create a div for right curtain
            const rightCurtainDiv = document.createElement('div');
            rightCurtainDiv.classList.add('right');
            rightCurtainDiv.classList.add('bg-primary');

            // Append the left and right divs to the curtains div
            curtainsDiv.appendChild(leftCurtainDiv);
            curtainsDiv.appendChild(rightCurtainDiv);

            // Append the curtains div to the body of the HTML document
            document.body.appendChild(curtainsDiv);

            const curtainLeave = (data) => {

                const tl = gsap.timeline({
                    duration: duration,

                })

                hideNav(tl)

                tl.fromTo(curtainsDiv.children[0], {
                    x: '-100%'
                }, {
                    x: '0%',
                }, delay / 2)

                tl.fromTo(curtainsDiv.children[1],
                    {
                        x: '100%',
                    },
                    {
                        x: '0%',
                    }, delay / 2)

                return tl
            }

            const curtainEnter = (data) => {

                const tl = gsap.timeline({
                    delay: .5,
                    duration: duration,

                })

                tl.fromTo(curtainsDiv.children[0], {
                    x: '0%'
                }, {
                    x: '-100%',
                }, 0)

                tl.fromTo(curtainsDiv.children[1],
                    {
                        x: '0%',
                    },
                    {
                        x: '100%',
                    }, 0)

                return tl
            }


            leaveAnimation = (data) => {
                // console.log('Curtain leave hook triggered!');
                return curtainLeave(data);
            };
            enterAnimation = (data) => {
                // console.log('Curtain enter hook triggered!');
                return curtainEnter(data);
            };

            break;
        case 'rotation':
            leaveAnimation = (data) => {
                console.log('Rotation leave hook triggered!');
                return gsap.to(data.current.container, {
                    rotationY: 90,
                    duration: duration,

                });
            };
            enterAnimation = (data) => {
                console.log('Rotation enter hook triggered!');
                gsap.from(data.next.container, {
                    rotationY: -90,
                    duration: duration,

                });
            };
            break;
        case 'zoom':
            leaveAnimation = (data) => {
                console.log('Zoom leave hook triggered!');
                return gsap.to(data.current.container, {
                    scale: 4,
                    duration: duration,
                    transformOrigin: 'center',

                });
            };
            enterAnimation = (data) => {
                console.log('Zoom enter hook triggered!');
                gsap.from(data.next.container, {
                    scale: 4,
                    duration: duration,
                    transformOrigin: 'center',

                });
            };
            break;
        case 'slide':

            // Create a new div element for curtains
            const coverArtDiv = document.createElement('div');
            coverArtDiv.classList.add('coverArt');

            // Append the curtains div to the body of the HTML document
            document.body.appendChild(coverArtDiv);

            leaveAnimation = (data) => {
                console.log('Slide leave hook triggered!');

                // return gsap.to(data.current.container, {
                //     x: '-100%',
                //     duration: duration,
                //     onComplete: () => {
                //         data.current.container.remove();
                //     }
                // });
                return gsap.fromTo(coverArtDiv, {
                    x: '-100%',
                }, {
                    x: '0%',
                    duration: delay / 2,

                });
            };
            enterAnimation = (data) => {
                console.log('Slide enter hook triggered!');
                // gsap.from(data.next.container, {
                //     x: '100%',
                //     duration: duration,
                //     onComplete: () => {
                //         // pageLoad();
                //     }
                // });
                gsap.fromTo(coverArtDiv, {
                        x: 0,
                    },
                    {
                        x: '100%',
                        duration: delay / 2,

                    }
                );
            };
            break;
        case 'opacity':
            leaveAnimation = (data) => {
                console.log('Opacity leave hook triggered!');
                console.log(data);
                return gsap.to(data.current.container, {
                    opacity: 0,
                    duration: duration,
                    onComplete: () => {
                        data.current.container.remove();
                    }
                });
            };
            enterAnimation = (data) => {
                console.log('Opacity enter hook triggered!');
                gsap.from(data.next.container, {
                    opacity: 0,
                    duration: duration,
                    onComplete: () => {
                        // pageLoad();
                    }
                });
            };
            break;
        case 'none':
            return;
        default:
            console.error('Invalid barba-animate-type value.');
            return;
    }

    // get the wrapper
    // const wrapper = document.querySelector('body');


    barba.init({
        debug: debug,
        transitions: [{
            // sync: true,
            name: animateType,
            once(data) {
                gsap.fromTo(
                    document.body, {
                        opacity: 0
                    },
                    {
                        opacity: 1,
                        duration: 1,
                        clearProps: true
                    })

                pageLoad(delay)
            },
            leave: leaveAnimation,
            enter: enterAnimation
        }]
    });

    barba.hooks.beforeEnter((data) => {
        data.current.container.remove();
        hideThings(data)
    })

    barba.hooks.beforeLeave((data) => {
        // Toggling the Hamburger Menu
        const hamburger = document.getElementById('hamburger');
        console.log(hamburger.dataset.stateType);

    })

    barba.hooks.enter((data) => {
        window.scrollTo(0, 0);
    });


    barba.hooks.after(() => {
        showThings();
        pageLoad(delay);
    });



}
export default barbaJs;
