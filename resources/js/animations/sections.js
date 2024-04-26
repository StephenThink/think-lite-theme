// Import GSAP library and ScrollTrigger
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {pageText} from "./index.js";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);
const sections = (marker = false) => {

//     Functions
    const subHeadings = (marker) => {
        const headings = document.querySelectorAll('#subHeading');

        // Create a master timeline
        headings.forEach(item => {
            const title = item.querySelector('#subHeadingTitle');
            const content = item.querySelector('#subHeadingContent');

            // Create a timeline for each subheading
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 50%", // Adjust this value as needed
                    end: "bottom 20%", // Adjust this value as needed
                    toggleActions: "play none none none",
                    markers: marker // Set to true for debugging, remove in production
                }
            });

            // Animation for title
            if (title) {
                tl.from(title, {
                    autoAlpha: 0,
                    opacity: 0,
                    y: 10,
                    ease: "back.out(1.7)",
                    duration: .5,
                });
            }
            // Animation for content
            if (content) {
                tl.from(content, {
                    autoAlpha: 0,
                    opacity: 0,
                    y: 10,
                    ease: "back.out(1.7)",
                    duration: .5,
                });
            }
        });
    };

    const quotations = (marker) => {
        // Select quotations within the section
        const quotations = document.querySelectorAll('#quotation');

        // Loop through each quotation
        quotations.forEach((item, index) => {
            const icon = item.querySelector('svg');
            const quote = item.querySelector('#quoteText');

            // Create GSAP timeline for the animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%", // Adjust this value as needed
                    end: "bottom 20%", // Adjust this value as needed
                    toggleActions: "play none none none",
                    markers: marker, // Set to true for debugging, remove in production
                }
            });

            // Animation for the icon
            tl.from(icon, {
                autoAlpha: 0,
                opacity: 0,
                y: 20,
                ease: 'back.out(1.7)',
                duration: .5,
                clearProps: "all"
            });

            // Animation for the quote text
            tl.from(quote, {
                autoAlpha: 0,
                opacity: 0,
                y: 20,
                ease: 'back.out(1.7)',
                duration: .5,
                clearProps: "all"
            });
        });
    }

    const fullWidthBoxes = (marker) => {
// Find all Full Width Boxes
        const fullWidthBoxes = document.querySelectorAll('#fullWidthBox');

        // Loop through each Full Width Box
        fullWidthBoxes.forEach(box => {
            const icon = box.querySelector('#fullWidthBoxIcon');
            const title = box.querySelector('#fullWidthBoxTitle');
            const content = box.querySelector('#fullWidthBoxContent');

            // Create GSAP timeline for the animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: box,
                    start: "top 50%", // Adjust this value as needed
                    end: "bottom 20%", // Adjust this value as needed
                    toggleActions: "play none none none",
                    markers: marker, // Set to true for debugging, remove in production
                }
            });

            // Animation for the box
            tl.from(box, {
                autoAlpha: 0,
                opacity: 0,
                ease: 'back.out(1.3)',
                duration: 1,
                clearProps: "all"
            });

            // Animation for the icon if exists
            if (icon) {
                tl.from(icon, {
                    autoAlpha: 0,
                    opacity: 0,
                    x: 100,
                    rotation: '360deg',
                    ease: 'back.out(1.7)',
                    duration: 1,
                    clearProps: "all"
                });
            }

            // Animation for the title if exists
            if (title) {
                tl.from(title, {
                    autoAlpha: 0,
                    opacity: 0,
                    y: 20,
                    ease: 'back.out(1.7)',
                    duration: .5,
                    clearProps: "all"
                });
            }

            // Animation for the content if exists
            if (content) {
                tl.from(content, {
                    autoAlpha: 0,
                    opacity: 0,
                    y: 20,
                    ease: 'back.out(1.7)',
                    duration: .5,
                    clearProps: "all"
                });
            }
        });
    }

    const teamList = (marker) => {
        // Get the team list element and its members
        const teamList = document.getElementById('teamList');
        const members = teamList.querySelectorAll('#teamMember');

        // Iterate over each team member
        members.forEach((member, index) => {
            // Get the elements inside each member
            const mugshot = member.querySelector('img');
            const name = member.querySelector('#teamMemberName');
            const position = member.querySelector('#teamMemberPosition');
            const socials = member.querySelector('#teamMemberSocialLinks');

            // Create a timeline for animations
            const tl = gsap.timeline({
                // Set ScrollTrigger for each member
                scrollTrigger: {
                    trigger: member, // Set trigger element
                    start: "top 50%", // Adjust start position as needed
                    end: "bottom 20%", // Adjust end position as needed
                    toggleActions: "play none none none", // Set toggle actions
                    markers: marker // Show markers for debugging if true
                }
            });

            // Animate mugshot
            if (mugshot) {
                // Get the dimensions of the image
                const mugshotWidth = mugshot.offsetWidth;
                const mugshotHeight = mugshot.offsetHeight;
                const centerX = mugshotWidth / 2;
                const centerY = mugshotHeight / 2;

                // Animate mugshot scaling
                tl.fromTo(
                    mugshot,
                    {
                        scale: 0, // Start with no scale
                        transformOrigin: "center center" // Set transform origin
                    },
                    {
                        scale: 1, // Scale to 100%
                        transformOrigin: "center center", // Set transform origin
                        duration: 3, // Animation duration
                        ease: "back.out(1.7)", // Easing function
                        clearProps: "all" // Clear properties after animation
                    }
                );
            }

            // Animate name
            if (name) {
                tl.from(
                    name,
                    {
                        autoAlpha: 0, // Start with opacity 0
                        opacity: 0,
                        y: 10, // Move vertically by 10px
                        ease: "back.out(1.7)", // Easing function
                        duration: .5, // Animation duration
                        clearProps: "all" // Clear properties after animation
                    },
                    "< 1" // Animation relative starting point
                );
            }

            // Animate position
            if (position) {
                tl.from(
                    position,
                    {
                        autoAlpha: 0, // Start with opacity 0
                        opacity: 0,
                        y: 10, // Move vertically by 10px
                        ease: "back.out(1.7)", // Easing function
                        duration: .5, // Animation duration
                        clearProps: "all" // Clear properties after animation
                    },
                    "< 1" // Animation relative starting point
                );
            }

            // Animate social links
            if (socials) {
                tl.from(
                    socials,
                    {
                        autoAlpha: 0, // Start with opacity 0
                        opacity: 0,
                        y: 10, // Move vertically by 10px
                        ease: "back.out(1.7)", // Easing function
                        duration: .5, // Animation duration
                        clearProps: "all" // Clear properties after animation
                    },
                    "< 1" // Animation relative starting point
                );
            }
        });
    };

    const threeStackBoxes = (marker) => {
        // Get the container for the uneven stack section
        const stackContainer = document.querySelector('#threeStackBoxes');

        // Get all the boxes within the uneven stack section
        const boxes = stackContainer.querySelectorAll('#box');

        // Loop through each box
        boxes.forEach((box, index) => {
            // Get the icon, title, and content elements within the box
            const icon = box.querySelector('.boxIcon');
            const title = box.querySelector('.boxTitle');
            const content = box.querySelector('.boxContent');

            // Create a timeline for the box animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: box,
                    start: "top 50%", // Adjust this value as needed
                    end: "bottom 20%", // Adjust this value as needed
                    toggleActions: "play none none none",
                    markers: marker // Set to true for debugging, remove in production
                }
            });

            // Add animations to the timeline with a delay
            tl.from(box, {
                autoAlpha: 0,
                opacity: 0,
                y: 10,
                ease: 'linear',
                duration: .5,
                // clearProps: "all"
            }, index * 0.1); // Adjust delay based on index for staggered effect

            // Check if icon, title, and content exist before animating
            if (icon) {
                tl.from(icon, {
                    autoAlpha: 0,
                    opacity: 0,
                    y: 10,
                    ease: 'linear',
                    duration: .5,
                    clearProps: "all"
                }, index * 0.1); // Add delay based on index for staggered effect
            }
            if (title) {
                tl.from(title, {
                    autoAlpha: 0,
                    opacity: 0,
                    y: 10,
                    ease: "back.out(1.7)",
                    duration: .5,
                    clearProps: "all"
                }, index * 0.1); // Add delay based on index for staggered effect
            }
            if (content) {
                tl.from(content, {
                    autoAlpha: 0,
                    opacity: 0,
                    y: 10,
                    ease: "back.out(1.7)",
                    duration: .5,
                    clearProps: "all"
                }, index * 0.1); // Add delay based on index for staggered effect
            }
        });
    };

    const unevenStack = (marker) => {
        // Get all the boxes within the uneven stack section
        const boxes = document.querySelectorAll('#unevenStackBox');

        // Loop through each box
        boxes.forEach(box => {
            // Get the icon, title, and content elements within the box
            const icon = box.querySelector('#unEvenStackBoxIcon');
            const title = box.querySelector('#unEvenStackBoxTitle');
            const content = box.querySelector('#unEvenStackBoxContent');

            // Create a timeline for the box animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: box,
                    start: "top 50%", // Adjust this value as needed
                    end: "bottom 20%", // Adjust this value as needed
                    toggleActions: "play none none none",
                    markers: marker // Set to true for debugging, remove in production

                }
            });

            // Add animations to the timeline
            tl.from(box, {
                autoAlpha: 0,
                opacity: 0,
                y: 10,
                ease: 'linear',
                duration: .5,
                clearProps: "all"
            });
            if (icon) {
                tl.from(icon, {
                    autoAlpha: 0,
                    opacity: 0,
                    y: 10,
                    ease: 'linear',
                    duration: .5,
                    clearProps: "all"
                });
            }
            if (title) {
                tl.from(title, {
                    autoAlpha: 0,
                    opacity: 0,
                    y: 10,
                    ease: "back.out(1.7)",
                    duration: .5,
                    clearProps: "all"
                });
            }
            if (content) {
                tl.from(content, {
                    autoAlpha: 0,
                    opacity: 0,
                    y: 10,
                    ease: "back.out(1.7)",
                    duration: .5,
                    clearProps: "all"
                });
            }
        });
    };

    const forms = (marker) => {
// Select form sections within the section
        const formSections = document.querySelectorAll('#formSection');

        // Loop through each form section
        formSections.forEach((item, index) => {
            const content = item.querySelector('#formContent');

            // Create GSAP timeline for the animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 50%", // Adjust this value as needed
                    end: "bottom 20%", // Adjust this value as needed
                    toggleActions: "play none none none",
                    markers: marker, // Set to true for debugging, remove in production
                }
            });

            // Animation for the form content
            tl.from(content, {
                autoAlpha: 0,
                opacity: 0,
                y: 20,
                ease: 'back.out(1.7)',
                duration: .5,
                clearProps: "all"
            });
        });
    }

    const fullImages = (marker) => {
// Find all Full Width Images
        const fullImages = document.querySelectorAll('#fullImage')
        // Loop through each Full Image
        fullImages.forEach(image => {
            // Create GSAP timeline for the animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: image,
                    start: "top 50%", // Adjust this value as needed
                    end: "bottom 20%", // Adjust this value as needed
                    toggleActions: "play none none none",
                    markers: marker, // Set to true for debugging, remove in production
                }
            });

            // Animation for the image
            tl.from(image, {
                autoAlpha: 0,
                opacity: 0,
                y: 20,
                ease: 'back.out(1.7)',
                duration: .5,
                clearProps: "all"
            });
        });
    }

    const fullWidthVideos = (marker) => {
// Find all Full Width Videos
        const fullWidthVideos = document.querySelectorAll('#fullWidthVideo');

        // Loop through each Full Width Video
        fullWidthVideos.forEach(video => {

            // Create GSAP timeline for the animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: video,
                    start: "top 50%", // Adjust this value as needed
                    end: "bottom 20%", // Adjust this value as needed
                    toggleActions: "play none none none",
                    markers: marker, // Set to true for debugging, remove in production
                }
            });

            // Animation for the box
            tl.from(video, {
                autoAlpha: 0,
                opacity: 0,
                y: 20,
                ease: 'back.out(1.3)',
                duration: 1,
                clearProps: "all"
            });

        });
    }

    const galleries = (marker) => {
// Select galleries within the section
        const galleries = document.querySelectorAll('.masonry-wrapper');

        // Loop through each gallery
        galleries.forEach(gallery => {
            const images = gallery.querySelectorAll('.masonry-item');
            // Loop through each image
            images.forEach((item) => {
                // Create GSAP timeline for the animation
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: item,
                        start: "top 50%", // Adjust this value as needed
                        end: "bottom 20%", // Adjust this value as needed
                        toggleActions: "play none none none",
                        markers: marker, // Set to true for debugging, remove in production
                    }
                });

                // Animation for the image
                tl.from(item, {
                    autoAlpha: 0,
                    opacity: 0,
                    y: 20,
                    ease: 'back.out(1.7)',
                    duration: .5,
                    clearProps: "all"
                });
            });
        });
    }

    const landscapeImages = (marker) => {
// Select landscape image containers within the section

        // Select landscape image containers within the section
        const landImages = document.querySelectorAll('#landscapeImageContainer');

        // Loop through each landscape image container
        landImages.forEach((item, index) => {
            // Select landscape image text within the container
            const landContent = item.querySelector('#landscapeImageText');

            // Create GSAP timeline for the animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 50%", // Adjust this value as needed
                    end: "bottom 20%", // Adjust this value as needed
                    toggleActions: "play none none none",
                    markers: marker, // Set to true for debugging, remove in production
                }
            });

            // Animation for the container
            if (item) {
                tl.from(item, {
                    autoAlpha: 0,
                    opacity: 0,
                    y: 20,
                    ease: 'back.out(1.7)',
                    duration: 1,
                    stagger: 0.5,
                    clearProps: "all"
                });
            }

            // Animation for the content
            if (landContent) {
                tl.from(landContent.children, {
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
    }

    const portraitImages = (marker) => {
        // Select portrait image containers within the section
        const portImages = document.querySelectorAll('#portraitImageContainer');

        // Loop through each portrait image container
        portImages.forEach((item, index) => {
            // Create GSAP timeline for the animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 20%", // Adjust this value as needed
                    end: "bottom 20%", // Adjust this value as needed
                    toggleActions: "play none none none",
                    markers: marker, // Set to true for debugging, remove in production
                }
            });

            // Animation for the container
            if (item) {
                tl.from(item, {
                    autoAlpha: 0,
                    opacity: 0,
                    y: 20,
                    ease: 'back.out(1.7)',
                    duration: .5,
                    stagger: 0.5,
                    clearProps: "all"
                });
            }
        });
    }

    const sectionText = (marker) => {
        pageText('#sectionContent', marker)
    }

    const sectionLists = (marker) => {
        const listItem = document.querySelectorAll('#listContent li')



        // Loop through each body paragraph
        listItem.forEach((item) => {
            const text = item.querySelector('#listText')
            const icon = item.querySelector('#listIcon')



            // Create a GSAP timeline for the paragraph animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 50%", // Adjust this value as needed
                    end: "bottom 20%", // Adjust this value as needed
                    toggleActions: "play none none none",
                    markers: marker, // Set to true for debugging, remove in production
                }
            });

            // Animate the paragraph
            tl.from(icon, {
                autoAlpha: 0,
                opacity: 0,
                x: -40,
                rotation: '180deg',
                ease: 'back.out(1.7)',
                duration: .5,
                // stagger: 0.5,
                clearProps: "all"
            }, 0);

            // Animate the paragraph
            tl.from(text, {
                autoAlpha: 0,
                opacity: 0,
                x: 40,
                ease: 'back.out(1.7)',
                duration: .5,
                // stagger: 0.5,
                clearProps: "all"
            }, 0);
        });





    }






//     SubHeading
    const componentSubHeading = document.getElementById('subHeading')
    if (componentSubHeading) {
        subHeadings(marker);
    }

//     Quotation
    const componentQuotations = document.getElementById('quotation')
    if (componentQuotations) {
        quotations(marker)
    }

//     Full Width Box
    const componentFullWidthBoxes = document.getElementById('fullWidthBox')
    if (componentFullWidthBoxes) {
        fullWidthBoxes(marker)
    }

//     Team List
    const componentTeamList = document.getElementById('teamList')
    if (componentTeamList) {
        teamList(marker);
    }

//     Three Stack Boxes
    const componentThreeStackBoxes = document.getElementById('threeStackBoxes');
    if (componentThreeStackBoxes) {

        threeStackBoxes(marker);
    }

//     Uneven Boxes
    const componentUnevenStack = document.getElementById('unevenStackSection')
    if (componentUnevenStack)
    {
        unevenStack(marker);
    }

//     Form
    const componentForm = document.getElementById('formSection')
    if (componentForm) {
        forms(marker)
    }


//     Full Image
    const componentFullImages = document.getElementById('fullImage')
    if (componentFullImages) {
        fullImages(marker)
    }

//     Video
    const componentFullWidthVideos = document.getElementById('fullWidthVideo')
    if (componentFullWidthVideos) {
        fullWidthVideos(marker)
    }

//     Gallery
    const componentGalleries = document.getElementsByClassName('masonry-wrapper')
    if (componentGalleries) {
        galleries(marker)
    }

//     Two Column Box

//     Images Landscape
    const componentLandscapeImage = document.getElementById('landscapeImageContainer')
    if (componentLandscapeImage) {
        landscapeImages(marker);
    }

//     Images Portrait
    const componentPortraitImage = document.getElementById('portraitImageContainer')
    if (componentPortraitImage) {
        portraitImages(marker);
    }

//     Section Text
    const componentSectionText = document.getElementById('sectionContent')
    if (componentSectionText) {
        sectionText(marker)
    }

//     Lists
    const componentLists = document.getElementById('listContent')
    if (componentLists) {
        sectionLists(marker)
    }


};

export default sections;
