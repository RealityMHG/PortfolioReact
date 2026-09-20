import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { profile } from "../data/portfolio";

const navigation = [
  { id: "case-study", label: "Case study" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -60% 0px" },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const handlePointer = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      )
        setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 761px)");
    const handleResize = () => {
      if (desktop.matches) setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    window.addEventListener("pointerdown", handlePointer);
    desktop.addEventListener("change", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("pointerdown", handlePointer);
      desktop.removeEventListener("change", handleResize);
    };
  }, [open]);

  return (
    <header
      className="site-header"
      ref={headerRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className="header-inner container">
        <a
          href="#home"
          className="wordmark"
          aria-label="Rafael Rêgo, home"
          onClick={() => setOpen(false)}
        >
          rafael rêgo<span>.</span>
        </a>
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}{" "}
          <span
            className={open ? "menu-glyph is-open" : "menu-glyph"}
            aria-hidden="true"
          >
            <span />
            <span />
          </span>
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`navigation ${open ? "is-open" : ""}`}
        >
          {navigation.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeSection === id ? "location" : undefined}
              onClick={() => {
                setOpen(false);
                document.getElementById(id)?.focus({ preventScroll: true });
              }}
            >
              {label}
            </a>
          ))}
          <a
            href={profile.cv}
            download="Rafael-Rego-CV-EN.pdf"
            className="nav-cv"
          >
            Résumé <Icon name="download" />
          </a>
        </nav>
      </div>
    </header>
  );
}
