import siteData from "../config/siteData.json";
import Icon from "./Icon";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className={`contact__container${isVisible ? " animate-in" : ""}`}>
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Venez nous rendre visite ou appelez-nous</p>
        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__info-item">
              <Icon name="phone" size={22} color={siteData.accentColor} />
              <div>
                <strong>Telephone</strong>
                <a href={`tel:${siteData.phone}`}>{siteData.phoneDisplay}</a>
              </div>
            </div>
            <div className="contact__info-item">
              <Icon name="mapPin" size={22} color={siteData.accentColor} />
              <div>
                <strong>Adresse</strong>
                <p>{siteData.address}</p>
              </div>
            </div>
            <div className="contact__info-item">
              <Icon name="clock" size={22} color={siteData.accentColor} />
              <div>
                <strong>Horaires</strong>
                <p>{siteData.hours}</p>
              </div>
            </div>
          </div>
          <div className="contact__map">
            <div className="contact__map-placeholder">
              <Icon name="mapPin" size={48} color={siteData.accentColor} />
              <p>{siteData.address}</p>
              <a
                href={siteData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Voir sur Google Maps
              </a>
            </div>
          </div>
        </div>
        <div className="contact__cta">
          <h3>Prenez rendez-vous des maintenant</h3>
          <a href={`tel:${siteData.phone}`} className="btn btn--primary btn--large">
            <Icon name="phone" size={20} />
            {siteData.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
