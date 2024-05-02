// Import the Alpine.js library as 'Alpine'.
import Alpine from 'alpinejs';

// Import the 'focus' plugin from '@alpinejs/focus'.
import focus from '@alpinejs/focus';
import {
    brick_gallery,
    dropdown,
    flip_card,
    full_card, globe_locations, map_locations,
    navBar, report_term, report_yearly,
    slider,
    theme_changer,
} from "./alpinejs/index.js";
import "@markusantonwolf/ta-analytics/dist/ta-analytics.js"
import {collapse} from "@alpinejs/collapse";
import mixed_information from "./alpinejs/mixed_information.js";
import report_year from "./alpinejs/report_yearly.js";


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
        Alpine.data('mixed_information', mixed_information)
        Alpine.data('map_locations', map_locations)
        Alpine.data('globe_locations', globe_locations)
        Alpine.data('report_yearly', report_yearly)
        Alpine.data('report_term', report_term)

    });

    // Set 'Alpine' as a global variable accessible from the window object.
    window.Alpine = Alpine;

    // Start Alpine.js to initialize the components and data properties.
    Alpine.start();
};

// Export the 'alpinejs' function as the default export of this module.
export default alpinejs;
