const myDiv = document.querySelector('.bg');

// Create a GSAP timeline
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3 .bg",
        start: "top 0",
        end: "top -300%",
        scrub: true
    }
});

// Define the colors and durations for each segment of the animation
const colors = ["rgb(166, 255, 0)",
 "rgb(166, 255, 0)",
 "rgb(0, 255, 13)",
 "rgb(0, 255, 34)",
 "rgb(0, 255, 179)",
 "rgb(0, 255, 242)",
 "rgb(0, 204, 255)",
 "rgb(0, 110, 255)",
 "rgb(0, 60, 255)",
 "rgb(47, 0, 255)",
 "rgb(119, 0, 255)",
 "rgb(191, 0, 255)",
 "rgb(255, 0, 119)",
 "rgb(255, 0, 106)",
 "rgb(255, 0, 0)",


];
const durations = [3, 3, 3,3,3,3,3,3,3,3,3,3,3,3]; // Duration for each color transition

// Loop through the colors and durations to create animations
for (let i = 0; i < colors.length; i++) {
    tl.to(myDiv, {
        backgroundColor: colors[i],
        duration: durations[i],
    });
}
Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.textAnimate("h1,p,h3,h4,h5,h6,h2,a" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
// You can add more colors and durations as needed
const tl2    = gsap.timeline(tl)