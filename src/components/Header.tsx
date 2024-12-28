import { useState } from "react";
import Navbar from "./Navbar";

export interface HeaderProps {
  section: string;
}

const Header = ({ section }: HeaderProps) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-light to-light/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <a href="/" className="logo justify-self-start">
          <img
            src="/images/logo.png"
            width={40}
            height={40}
            className="rounded-md shadow-sm shadow-stronger hover:shadow-lg hover:shadow-stronger hover:scale-125 transition-all"
            alt="Rafael Rego"
          ></img>
        </a>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} section={section}></Navbar>
        </div>

        <a
          href="#contact"
          className={`btn ${
            section === "contact" ? "btn-border" : "btn-secondary"
          } shadow-sm shadow-stronger max-md:hidden md:justify-self-end hover:bg-stronger hover:text-background hover:shadow-lg hover:shadow-stronger transition-all active:bg-strong`}
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
