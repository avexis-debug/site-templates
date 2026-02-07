import { useState, useEffect } from "react";
import siteData from "../config/siteData.json";
import Icon from "./Icon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#accueil", label: "Accueil" },
    { href: "#a-propos", label: "A propos" },
    { href: "#services", label: "Services" },
    { href: "#galerie", label: "Galerie" },
    { href: "#avis", label: "Avis" },
    { href: "#contact", label: "Contact" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <a href="#accueil" className="navbar__logo" onClick={(e) => handleClick(e, "#accueil")}>
          {siteData.name}
        </a>
        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <Icon name={menuOpen ? "close" : "menu"} size={24} />
        </button>
        <ul className={`navbar__links${menuOpen ? " navbar__links--open" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
