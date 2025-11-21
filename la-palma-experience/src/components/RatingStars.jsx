import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import './RatingStars.css';

const RatingStars = ({ itineraryId }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [hasRated, setHasRated] = useState(false);

  // Load existing rating on mount
  useEffect(() => {
    const ratings = JSON.parse(localStorage.getItem('itineraryRatings') || '{}');
    if (ratings[itineraryId]) {
      setRating(ratings[itineraryId]);
      setHasRated(true);
    }
  }, [itineraryId]);

  const handleRating = (value) => {
    setRating(value);
    setHasRated(true);

    // Save to localStorage
    const ratings = JSON.parse(localStorage.getItem('itineraryRatings') || '{}');
    ratings[itineraryId] = value;
    localStorage.setItem('itineraryRatings', JSON.stringify(ratings));
  };

  return (
    <div className="rating-stars-container">
      <div className="rating-header">
        <h4>Valuta questo itinerario</h4>
        {hasRated && <span className="rating-thanks">Grazie per la tua recensione!</span>}
      </div>
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            className="star-button"
            onClick={() => handleRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            aria-label={`Valuta ${star} stelle`}
          >
            <Star
              size={32}
              fill={(hover || rating) >= star ? '#FFD700' : 'none'}
              stroke={(hover || rating) >= star ? '#FFD700' : '#ddd'}
              strokeWidth={2}
            />
          </button>
        ))}
      </div>
      <p className="rating-label">
        {rating > 0 ? `${rating} ${rating === 1 ? 'stella' : 'stelle'}` : 'Clicca per valutare'}
      </p>
    </div>
  );
};

export default RatingStars;
