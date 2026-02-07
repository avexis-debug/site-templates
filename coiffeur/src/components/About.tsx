import siteData from "../config/siteData.json";
import Icon from "./Icon";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="a-propos" className="about" ref={ref}>
      <div className={`about__container${isVisible ? " animate-in" : ""}`}>
        <div className="about__image-wrapper">
          <img
            src={siteData.aboutImage}
            alt={`Interieur du salon ${siteData.name}`}
            className="about__image"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
              (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex";
            }}
          />
          <div className="about__image-fallback" style={{ display: "none" }}>
            <Icon name="scissors" size={48} />
          </div>
        </div>
        <div className="about__text">
          <h2 className="section-title">A propos</h2>
          <p className="about__description">{siteData.description}</p>
          <div className="about__stats">
            <div className="about__stat">
              <Icon name="star" size={20} color={siteData.accentColor} />
              <span><strong>{siteData.rating}/5</strong> Note Google</span>
            </div>
            <div className="about__stat">
              <Icon name="clock" size={20} color={siteData.accentColor} />
              <span><strong>{siteData.hours}</strong></span>
            </div>
            <div className="about__stat">
              <Icon name="mapPin" size={20} color={siteData.accentColor} />
              <span><strong>{siteData.city}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
