import { Heart, MapPin, Clock, TrendingUp, Info, Bookmark } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import './ImageWithFallback.css';
import './PlaceCard.css';

const PlaceCard = ({ place, onClick, isFavorite, onToggleFavorite }) => {
  const getTypeLabel = (type) => {
    const labels = {
      spiaggia: 'Spiaggia',
      trekking: 'Trekking',
      ristorante: 'Ristorante',
      panoramico: 'Vista Panoramica',
      esperienza: 'Esperienza',
      cultura: 'Cultura'
    };
    return labels[type] || type;
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      facile: '#4CAF50',
      media: '#FF9800',
      difficile: '#f44336'
    };
    return colors[difficulty] || '#666';
  };

  return (
    <div className="place-card" onClick={() => onClick(place)}>
      <div className="place-card-image">
        <ImageWithFallback
          src={place.image}
          alt={place.name}
          fallbackType={place.type}
          loading="lazy"
        />
        <span className="place-type-badge">{getTypeLabel(place.type)}</span>

        {/* Pulsante Preferiti */}
        <button
          className={`favorite-button ${isFavorite ? 'active' : ''}`}
          onClick={onToggleFavorite}
          title={isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
        >
          <Bookmark size={18} fill={isFavorite ? '#e63946' : 'none'} color={isFavorite ? '#e63946' : 'white'} />
        </button>

        {place.romantic && (
          <div className="romantic-badge">
            <Heart size={16} fill="white" color="white" />
          </div>
        )}
      </div>
      <div className="place-card-content">
        <h3>{place.name}</h3>
        <p className="place-description">{place.shortDescription}</p>

        <div className="place-info">
          {place.difficulty && (
            <span className="info-badge" style={{ background: getDifficultyColor(place.difficulty) }}>
              <TrendingUp size={14} />
              {place.difficulty.charAt(0).toUpperCase() + place.difficulty.slice(1)}
            </span>
          )}
          {place.duration && (
            <span className="info-badge">
              <Clock size={14} />
              {place.duration}
            </span>
          )}
          {place.priceRange && (
            <span className="info-badge">
              {place.priceRange}
            </span>
          )}
        </div>

        <button className="details-button">
          <Info size={16} />
          Scopri di più
        </button>
      </div>
    </div>
  );
};

export default PlaceCard;
