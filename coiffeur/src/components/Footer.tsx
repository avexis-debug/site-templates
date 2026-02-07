import siteData from "../config/siteData.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#a-propos", label: "A propos" },
    { href: "#services", label: "Services" },
    { href: "#galerie", label: "Galerie" },
    { href: "#avis", label: "Avis" },
    { href: "#contact", label: "Contact" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__col">
          <h3 className="footer__brand">{siteData.name}</h3>
          <p className="footer__tagline">{siteData.category}</p>
          <p className="footer__address">{siteData.address}</p>
        </div>
        <div className="footer__col">
          <h4 className="footer__heading">Navigation</h4>
          <ul className="footer__nav">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <p>
            <a href={`tel:${siteData.phone}`}>{siteData.phoneDisplay}</a>
          </p>
          <p>{siteData.hours}</p>
          <p>
            <a href={siteData.googleMapsUrl} target="_blank" rel="noopener noreferrer">
              Voir sur Google Maps
            </a>
          </p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {currentYear} {siteData.name}. Tous droits reserves.</p>
      </div>
    </footer>
  );
}
