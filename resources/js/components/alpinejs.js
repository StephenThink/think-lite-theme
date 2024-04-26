// Import the Alpine.js library as 'Alpine'.
import Alpine from 'alpinejs';

// Import the 'focus' plugin from '@alpinejs/focus'.
import focus from '@alpinejs/focus';
import {
    brick_gallery,
    dropdown,
    flip_card,
    full_card,
    navBar,
    slider,
    theme_changer,
} from "./alpinejs/index.js";
import "@markusantonwolf/ta-analytics/dist/ta-analytics.js"
import {collapse} from "@alpinejs/collapse";


// Define the 'alpinejs' function.
const alpinejs = () => {

    // Register the 'focus' plugin with Alpine.
    Alpine.plugin(focus);
    Alpine.plugin(collapse);

    // Add an event listener for the 'alpine:init' event.
    document.addEventListener("alpine:init", () => {
        // This is used for Modal Cards
        // Define a new Alpine data property called 'full_card'.
        Alpine.data('full_card', full_card);
        Alpine.data('brick_gallery', brick_gallery);
        // This is used for Flip Cards
        // Define another Alpine data property called 'flip_card'.
        Alpine.data('flip_card', flip_card);
        // This is used for the light/dark mode toggle
        // Define a new Alpine component called 'light-switch'.
        Alpine.data('theme_changer', theme_changer);
        Alpine.data('slider', slider);
        Alpine.data('dropdown', dropdown)
        Alpine.data('navBar', navBar)

    });

    // Set 'Alpine' as a global variable accessible from the window object.
    window.Alpine = Alpine;

    // Start Alpine.js to initialize the components and data properties.
    Alpine.start();
};

// Export the 'alpinejs' function as the default export of this module.
export default alpinejs;
