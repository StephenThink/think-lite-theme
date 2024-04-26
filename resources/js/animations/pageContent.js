// Import GSAP library and ScrollTrigger
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {pageText, sections} from "./index.js";
import d from "../../../public/vendor/statamic/cp/build/assets/form-address-field-2fcc0cf5.js";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

/**
 * Animates page content using GSAP and ScrollTrigger.
 */
const pageContent = (marker = false, delay = 0) => {
    // functions
    const componentHero = (marker) => {
        const heroes = document.querySelectorAll('#hero')

        heroes.forEach(hero => {
        const heroHeader = hero.querySelector('#hero_heading');
        const heroSubHeader = hero.querySelector('#hero_sub_heading');



        // Create a GSAP timeline for the paragraph animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: hero,
                start: "top 50%", // Adjust this value as needed
                end: "bottom 100%", // Adjust this value as needed
                toggleActions: "play none none none",
                markers: marker, // Set to true for debugging, remove in production
            }
        });

                    tl.fromTo([heroHeader, heroSubHeader], {
                y: 10,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                ease: "back.out(1.4)", // Adding a bounce effect
                duration: 1,
                stagger: 0.5,
                delay: delay,
                clearProps: "all"
            });

        })
    }

    const componentPageText = (marker) => {
        pageText('#bodyContent', marker)
    }

    const componentCollection = (marker) => {
// Get all collection sections in the item
        const collectionSections = document.querySelectorAll('#collectionSection');

        // Loop through each collection section
        collectionSections.forEach(collectionContent => {
            // Get all cards in the collection section
            const cards = collectionContent.querySelectorAll('#card');

            // Loop through each card
            cards.forEach((card, index) => {
                // Create a GSAP timeline for the card animation
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: card,
                        start: "top 50%", // Adjust this value as needed
                        end: "bottom 20%", // Adjust this value as needed
                        toggleActions: "play none none none",
                        markers: marker, // Set to true for debugging, remove in production
                    }
                });

                // Animate the card
                tl.from(card, {
                    autoAlpha: 0,
                    opacity: 0,
                    y: 10,
                    ease: 'back.out(1.7)',
                    duration: .5,
                    delay: 0.5 * index,
                    clearProps: "all"
                });
            });

        });
    }

    const callToActions = (marker) => {
        // Get the container for the uneven stack section
        const callToActions = document.querySelectorAll('#callToAction');

        callToActions.forEach((item) => {
            const content = item.querySelector('#ctaContent');
            const buttons = item.querySelector('#ctaButtons');

            // Create a timeline for the box animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 50%", // Adjust this value as needed
                    end: "bottom 20%", // Adjust this value as needed
                    toggleActions: "play none none none",
                    markers: marker // Set to true for debugging, remove in production
                }
            });

            if (content) {
                // Animation for content
                tl.from(content.children, {
                    autoAlpha: 0,
                    opacity: 0,
                    y: 10,
                    ease: "back.out(1.7)",
                    duration: 1,
                    stagger: 1,
                    clearProps: "all"
                });
            }

            if (buttons) {
                // Animation for buttons
                tl.from(buttons.children, {
                    autoAlpha: 0,
                    opacity: 0,
                    y: 10,
                    ease: "back.out(1.7)",
                    duration: 1,
                    clearProps: "all",
                    stagger: 0.5
                });
            }
        });
    };


    // Hero
    const hero = document.getElementById('hero')
    if (hero) {
        componentHero(marker)
    }

    // Section
    const componentSection = document.getElementById('sectionComponent')
    if (componentSection) {
        sections(marker)
    }

    // Text
    const componentPageTexts = document.getElementById('bodyContent')
    if (componentPageTexts)
    {
        componentPageText(marker)
    }


    // Collections
    const componentCollections = document.getElementById('collectionSection')
    if (componentCollections) {
        componentCollection(marker)
    }

    // Call to Actions
    const componentCallToAction = document.getElementById('callToAction');
    if (componentCallToAction) {
        callToActions(marker);
    }
};

export default pageContent;
