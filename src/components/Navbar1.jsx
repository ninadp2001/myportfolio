import { scrollToSection } from "../utils/scrollToSection";
function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        NinadPatil<span className="dot">.</span>
      </div>

      {/* Navigation */}
        <ul className="nav-links">
        <li onClick={() => scrollToSection("about")}>
            <span className="nav-item">
            <span className="nav-index">01</span>
            <span className="nav-text">// about</span>
            </span>
        </li>
        <li onClick={() => scrollToSection("expertise")}>
            <span className="nav-item">
            <span className="nav-index">02</span>
            <span className="nav-text">// expertise</span>
            </span>
        </li>
        <li onClick={() => scrollToSection("experience")}>
            <span className="nav-item">
            <span className="nav-index">04</span>
            <span className="nav-text">// experience</span>
            </span>
        </li>
        <li onClick={() => scrollToSection("work")}>
            <span className="nav-item">
            <span className="nav-index">03</span>
            <span className="nav-text">// work</span>
            </span>
        </li>
        <li onClick={() => scrollToSection("contact")}>
            <span className="nav-item">
            <span className="nav-index">05</span>
            <span className="nav-text">// contact</span>
            </span>
        </li>
        </ul>

    </nav>
  );
}

export default Navbar;
