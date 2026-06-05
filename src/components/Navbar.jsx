import { useState } from "react";
import { scrollToSection } from "../utils/scrollToSection";

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
        <li onClick={() => handleNav("about")}>
          <span className="nav-item">
            <span className="nav-index">01</span>
            <span className="nav-text">// about</span>
          </span>
        </li>
        <li onClick={() => handleNav("expertise")}>
          <span className="nav-item">
            <span className="nav-index">02</span>
            <span className="nav-text">// expertise</span>
          </span>
        </li>
        <li onClick={() => handleNav("experience")}>
          <span className="nav-item">
            <span className="nav-index">04</span>
            <span className="nav-text">// experience</span>
          </span>
        </li>
        <li onClick={() => handleNav("work")}>
          <span className="nav-item">
            <span className="nav-index">03</span>
            <span className="nav-text">// work</span>
          </span>
        </li>
        <li onClick={() => handleNav("contact")}>
          <span className="nav-item">
            <span className="nav-index">05</span>
            <span className="nav-text">// contact</span>
          </span>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <div
        className="nav-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
