import siteData from "../config/siteData.json";
import Icon from "./Icon";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Gallery() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="galerie" className="gallery" ref={ref}>
      <div className={`gallery__container${isVisible ? " animate-in" : ""}`}>
        <h2 className="section-title">Galerie</h2>
        <p className="section-subtitle">Decouvrez nos realisations</p>
        <div className="gallery__grid">
          {siteData.gallery.map((img, index) => (
            <div className="gallery__item" key={index}>
              <img
                src={img.src}
                alt={img.alt}
                className="gallery__image"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex";
                }}
              />
              <div className="gallery__image-fallback" style={{ display: "none" }}>
                <Icon name="scissors" size={32} />
              </div>
              <div className="gallery__overlay">
                <p className="gallery__overlay-text">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
