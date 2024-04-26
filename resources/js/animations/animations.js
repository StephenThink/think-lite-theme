import {
    pageLoadAnimation,
    footer,
    pageContent
} from "./index.js";

const animations = (disabled = false, marker = false, delay) => {

    if (disabled) {
        console.info('PageLoad Animations Disabled, to reactivate remove true from pageLoadAnimation in the site.js file.')
        return
    }

    pageLoadAnimation(delay);

    const componentPageContent = document.getElementById('pageContent')
    if (componentPageContent)
    {
        pageContent(marker, delay);
    }

    footer(marker);
}

export default animations;
