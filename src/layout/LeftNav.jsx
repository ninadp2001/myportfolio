import { useState, useEffect } from "react";
import { scrollToSection } from "../utils/scrollToSection";

const MENU = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "expertise", label: "Expertise" },
  { id: "contact", label: "Contact" },
];

function LeftNav() {
  const [activeId, setActiveId] = useState("about");

  // Scroll-spy: highlight the last section whose top has passed 40% of the screen
  useEffect(() => {
    const updateActive = () => {
      const line = window.innerHeight * 0.4;
      let current = MENU[0].id;
      for (const { id } of MENU) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= line) current = id;
      }
      setActiveId(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  return (
    <aside className="left-nav">
      <div className="left-nav-inner">
        <div className="left-profile">
          <div className="left-name">
            Ninad Patil
          </div>

          <div className="left-role">
            Software Developer | Java • Backend • SQL • APIs
          </div>

          <div className="left-tagline">
            I build reliable, scalable systems.
          </div>
        </div>

        <ul className="left-menu">
          {MENU.map(({ id, label }) => (
            <li key={id} className={`nav-item ${activeId === id ? "active" : ""}`}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default LeftNav;
