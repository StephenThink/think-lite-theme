// This is all you.

import "@fontsource/poppins";
import {alpinejs, barbaJs} from "./components/index.js";
import smoothScroll from "./components/lenis/lenis.js";
import {animations} from "./animations/index.js";
import gsapScrollTriggerLenis from "./components/lenis/gsapScrollTriggerLenis.js";
import {navBar} from "./components/alpinejs/index.js";


barbaJs()
gsapScrollTriggerLenis()
alpinejs();


