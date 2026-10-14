import { useRef, useState } from "react";

const navigation = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Work", "#work"],
  ["In the field", "#moments"],
  ["Ventures", "#ventures"],
  ["Credentials", "#credentials"],
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="container header-inner">
        <a href="#home" className="wordmark" aria-label="Umama home">
          Umama Harnekar
        </a>
        <button
          className="menu-toggle"
          ref={menuButton}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}{" "}
          <span aria-hidden="true">{menuOpen ? "×" : "+"}</span>
        </button>
        <nav
          id="main-navigation"
          className={menuOpen ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Let's talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
