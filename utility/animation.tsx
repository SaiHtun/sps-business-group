import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const scrollShrinkAnimation = (ref) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(ref, {
    borderRadius: "+=30px",
    scaleX: 0.97,
    duration: 1.6,
    scrollTrigger: {
      trigger: ref,
      start: "top top",
      end: "bottom center",
      scrub: true,
    },
  });
};
