import { useRef, useEffect, useState, MouseEventHandler } from "react";

interface NavbarProps {
  navOpen: boolean;
  section: string;
}

export const navItems = [
  { label: "Home", link: "#home" },
  { label: "About", link: "#about" },
  { label: "Skills", link: "#skills" },
  { label: "Work", link: "#work" },
  { label: "Contact", link: "#contact" },
];

const Navbar = ({ navOpen, section }: NavbarProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeBox = useRef<HTMLDivElement | null>(null);
  const navLinks = useRef<(HTMLAnchorElement | null)[]>([]);

  const initActiveBox = () => {
    const currentActiveLink = navLinks.current[activeIndex];
    if (activeBox.current && currentActiveLink) {
      activeBox.current.style.top = `${currentActiveLink.offsetTop}px`;
      activeBox.current.style.left = `${currentActiveLink.offsetLeft}px`;
      activeBox.current.style.width = `${currentActiveLink.offsetWidth}px`;
      activeBox.current.style.height = `${currentActiveLink.offsetHeight}px`;
    }
  };

  useEffect(() => {
    initActiveBox();
    setActiveIndex(
      navItems.findIndex(({ label }) => label.toLowerCase() === section)
    );
    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox);
  }, [activeIndex, section]);

  const handleLinkClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    const index = navLinks.current.indexOf(event.currentTarget);
    setActiveIndex(index);
  };

  return (
    <nav
      className={`navbar shadow-sm shadow-stronger ${navOpen ? "active" : ""}`}
    >
      {navItems.map(({ label, link }, index) => (
        <a
          href={link}
          key={index}
          className={`nav-link ${activeIndex === index && "active"} ${
            index === 4 && "md:hidden"
          }`}
          ref={(el) => (navLinks.current[index] = el)}
          onClick={handleLinkClick}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

export default Navbar;
