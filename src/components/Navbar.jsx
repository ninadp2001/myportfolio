import { useState } from "react";
import { scrollToSection } from "../utils/scrollToSection";

const MENU = [
  { id: "about", index: "01" },
  { id: "experience", index: "02" },
  { id: "work", index: "03" },
  { id: "expertise", index: "04" },
  { id: "contact", index: "05" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (section) => {
    scrollToSection(section);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${menuOpen ? "nav-mobile-open" : ""}`}>
      {/* Logo */}
      <div className="nav-logo">
        NinadPatil<span className="dot">.</span>
      </div>

      {/* Desktop links */}
      <ul className="nav-links">
        {MENU.map(({ id, index }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                handleNav(id);
              }}
            >
              <span className="nav-index">{index}</span>
              <span className="nav-text">// {id}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        type="button"
        className="nav-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;
