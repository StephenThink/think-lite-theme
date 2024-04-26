import gsap from "gsap";

export default () => ({
    isNavBarOpen: false,
    openNav() {
        this.isNavBarOpen = true;
        document.body.classList.add('disable-scroll');
    },
    closeNav() {
        this.isNavBarOpen = false;
        document.body.classList.remove('disable-scroll');
    },
    toggleNav() {
        this.isNavBarOpen = !this.isNavBarOpen;
        if (this.isNavBarOpen) {
            document.body.classList.add('disable-scroll');
        } else {
            document.body.classList.remove('disable-scroll');
        }
    },
    init() {
        window.addEventListener('close-nav', () => this.closeNav());
        this.isNavBarOpen = false;
        // this.$watch('isNavBarOpen', (value) => {
        //
        //     const mobileNav = document.getElementById('mobileNav');
        //
        //     if (value) {
        //         // Trigger GSAP animation when mobileNavOpen is true
        //         gsap.fromTo(mobileNav, {
        //             y: -100
        //         },{
        //             duration: 0.5,
        //             y: 0, // Assuming the initial state is hidden off-screen to the left
        //             ease: "power1.out",
        //         });
        //     } else {
        //         // Optionally, animate the menu closing
        //         gsap.fromTo(mobileNav,{
        //             y: 0
        //         }, {
        //             duration: 0.5,
        //             y: "-100%", // Hide off-screen to the left
        //             ease: "power1.in",
        //         });
        //     }
        // });
    },
});
