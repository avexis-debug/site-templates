import siteData from "../config/siteData.json";
import Icon from "./Icon";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="services" ref={ref}>
      <div className={`services__container${isVisible ? " animate-in" : ""}`}>
        <h2 className="section-title">Nos Services</h2>
        <p className="section-subtitle">
          Des prestations de qualite pour sublimer votre style
        </p>
        <div className="services__grid">
          {siteData.services.map((service, index) => (
            <div
              className="services__card"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="services__icon">
                <Icon name={service.icon} size={32} color={siteData.accentColor} />
              </div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
