import siteData from "../config/siteData.json";
import Icon from "./Icon";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const reviews = [
  {
    name: "Marie Dupont",
    rating: 5,
    text: "Un salon exceptionnel ! Claire et son equipe sont a l'ecoute et de tres bon conseil. Ma coloration est exactement ce que je voulais. Je recommande vivement.",
  },
  {
    name: "Thomas Bernard",
    rating: 5,
    text: "Meilleur coiffeur de Paris. La coupe est parfaite, l'ambiance est agreable et les prix sont corrects pour la qualite du service. J'y retourne chaque mois.",
  },
  {
    name: "Sophie Laurent",
    rating: 4,
    text: "Tres satisfaite de mon balayage ! Le resultat est naturel et lumineux. Le salon est magnifique et l'equipe tres professionnelle. A refaire sans hesiter.",
  },
];

function ReviewStars({ rating }: { rating: number }) {
  return (
    <div className="reviews__stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Icon
          key={i}
          name={i < rating ? "star" : "starEmpty"}
          size={16}
          color="#f5c518"
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="avis" className="reviews" ref={ref}>
      <div className={`reviews__container${isVisible ? " animate-in" : ""}`}>
        <h2 className="section-title">Avis Clients</h2>
        <div className="reviews__global">
          <div className="reviews__global-stars">
            {Array.from({ length: 5 }, (_, i) => {
              if (i + 1 <= Math.floor(siteData.rating)) {
                return <Icon key={i} name="star" size={24} color="#f5c518" />;
              } else if (i + 0.5 < siteData.rating) {
                return <Icon key={i} name="starHalf" size={24} color="#f5c518" />;
              }
              return <Icon key={i} name="starEmpty" size={24} color="#f5c518" />;
            })}
          </div>
          <p className="reviews__global-text">
            {siteData.rating}/5 basee sur {siteData.reviewCount} avis Google
          </p>
        </div>
        <div className="reviews__grid">
          {reviews.map((review, index) => (
            <div className="reviews__card" key={index}>
              <div className="reviews__avatar">
                {review.name.charAt(0)}
              </div>
              <div className="reviews__card-content">
                <div className="reviews__card-header">
                  <strong className="reviews__name">{review.name}</strong>
                  <ReviewStars rating={review.rating} />
                </div>
                <p className="reviews__text">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
