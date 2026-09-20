import { useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CaseStudy from "./components/CaseStudy";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    mainRef.current
      ?.querySelectorAll("[data-reveal]")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <CustomCursor />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1}>
        <Hero />
        <CaseStudy />
        <Experience />
        <About />
        <Contact />
      </main>
      <footer className="site-footer container">
        <a
          className="wordmark"
          href="#home"
          aria-label="Rafael Rêgo, back to top"
        >
          rafael rêgo<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Rafael Rêgo</p>
        <a className="text-link" href="#home">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </>
  );
}
