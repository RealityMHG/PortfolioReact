import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Work from "./components/Work";

import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import _ScrollTrigger, { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

/* Register ScrollTrigger with GSAP */
gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  const [visibleSection, setVisibleSection] = useState<string>("home");

  useGSAP(() => {
    const elements = gsap.utils.toArray<HTMLElement>(".reveal-up");

    elements.forEach((element) => {
      gsap.to(element, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "bottom 100%",
          scrub: true,
        },
      });
    });
  });

  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>("section");

    sections.forEach((section, index) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => setVisibleSection(section.id),
          onEnterBack: () => setVisibleSection(section.id),
          onLeave: () => {
            if (index < sections.length - 1) {
              setVisibleSection(sections[index + 1].id);
            }
          },
          onLeaveBack: () => {
            if (index > 0) {
              setVisibleSection(sections[index - 1].id);
            }
          },
        },
      });
    });
  });

  return (
    <ReactLenis root>
      <Header section={visibleSection}></Header>
      <main>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Work></Work>
        <Contact></Contact>
      </main>
    </ReactLenis>
  );
};

export default App;
