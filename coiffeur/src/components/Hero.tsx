import siteData from "../config/siteData.json";
import Icon from "./Icon";

function StarRating({ rating }: { rating: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<Icon key={i} name="star" size={18} color="#f5c518" />);
    } else if (i - 0.5 <= rating) {
      stars.push(<Icon key={i} name="starHalf" size={18} color="#f5c518" />);
    } else {
      stars.push(<Icon key={i} name="starEmpty" size={18} color="#f5c518" />);
    }
  }
  return <div className="hero__stars">{stars}</div>;
}

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="accueil" className="hero">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${siteData.heroImage})` }}
      >
        <div className="hero__fallback" />
      </div>
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__category">{siteData.category}</p>
        <h1 className="hero__title">{siteData.name}</h1>
        <p className="hero__desc">{siteData.description}</p>
        <div className="hero__rating">
          <StarRating rating={siteData.rating} />
          <span className="hero__rating-text">
            {siteData.rating}/5 - {siteData.reviewCount} avis Google
          </span>
        </div>
        <div className="hero__cta">
          <a href={`tel:${siteData.phone}`} className="btn btn--primary">
            <Icon name="phone" size={18} />
            Appeler
          </a>
          <a href="#contact" className="btn btn--secondary" onClick={(e) => handleScroll(e, "#contact")}>
            Nous trouver
          </a>
        </div>
      </div>
    </section>
  );
}
