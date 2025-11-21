import {
  X,
  Heart,
  MapPin,
  Clock,
  TrendingUp,
  Compass,
  Mountain,
  Users,
  CheckCircle,
  AlertCircle,
  Info,
  Utensils,
  DollarSign,
  Navigation,
  Activity
} from 'lucide-react';
import WeatherWidget from './WeatherWidget';
import ImageWithFallback from './ImageWithFallback';
import ShareButton from './ShareButton';
import './ImageWithFallback.css';

const PlaceDetail = ({ place, onClose }) => {
  if (!place) return null;

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

  const openInMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-image">
          <ImageWithFallback
            src={place.image}
            alt={place.name}
            fallbackType={place.type}
            loading="eager"
          />
          <div className="modal-image-overlay">
            <h1>{place.name}</h1>
            <div className="modal-badges">
              <span className="modal-type-badge">{getTypeLabel(place.type)}</span>
              {place.romantic && (
                <span className="modal-romantic-badge">
                  <Heart size={16} fill="white" color="white" />
                  Romantico
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="modal-body">
          <div className="detail-content">
            <WeatherWidget lat={place.lat} lng={place.lng} />

            <p className="description">{place.description}</p>
          </div>

          {place.idealFor && (
            <div className="modal-section">
              <h3><Users size={20} /> Ideale per</h3>
              <p className="ideal-for">{place.idealFor}</p>
            </div>
          )}

          <div className="modal-info-grid">
            {place.difficulty && (
              <div className="info-item">
                <TrendingUp size={18} color={getDifficultyColor(place.difficulty)} />
                <div>
                  <strong>Difficoltà</strong>
                  <p style={{ color: getDifficultyColor(place.difficulty) }}>
                    {place.difficulty.charAt(0).toUpperCase() + place.difficulty.slice(1)}
                  </p>
                </div>
              </div>
            )}

            {place.duration && (
              <div className="info-item">
                <Clock size={18} />
                <div>
                  <strong>Durata</strong>
                  <p>{place.duration}</p>
                </div>
              </div>
            )}

            {place.distance && (
              <div className="info-item">
                <Compass size={18} />
                <div>
                  <strong>Distanza</strong>
                  <p>{place.distance}</p>
                </div>
              </div>
            )}

            {place.technicalInfo ? (
              // Se ci sono dati tecnici dettagliati
              <>
                <div className="info-item full-width">
                  <Activity size={18} />
                  <div>
                    <strong>Tipo Percorso</strong>
                    <p>{place.pathType || 'N/D'}</p>
                  </div>
                </div>
                <div className="info-item">
                  <Mountain size={18} />
                  <div>
                    <strong>Dislivello</strong>
                    <p>+{place.technicalInfo.elevationGain}m / -{place.technicalInfo.elevationLoss}m</p>
                  </div>
                </div>
                <div className="info-item">
                  <TrendingUp size={18} color={getDifficultyColor(place.difficulty)} />
                  <div>
                    <strong>Livello</strong>
                    <p>{place.technicalInfo.difficultyLevel}/5</p>
                  </div>
                </div>
              </>
            ) : (
              // Fallback per vecchi dati
              place.elevation && (
                <div className="info-item">
                  <Mountain size={18} />
                  <div>
                    <strong>Dislivello</strong>
                    <p>{place.elevation}</p>
                  </div>
                </div>
              )
            )}

            {place.priceRange && (
              <div className="info-item">
                <DollarSign size={18} />
                <div>
                  <strong>Prezzo</strong>
                  <p>{place.priceRange}</p>
                </div>
              </div>
            )}

            {place.bestTime && (
              <div className="info-item">
                <Clock size={18} />
                <div>
                  <strong>Momento migliore</strong>
                  <p>{place.bestTime}</p>
                </div>
              </div>
            )}

            {place.access && (
              <div className="info-item">
                <Navigation size={18} />
                <div>
                  <strong>Accesso</strong>
                  <p>{place.access}</p>
                </div>
              </div>
            )}

            {place.cuisine && (
              <div className="info-item">
                <Utensils size={18} />
                <div>
                  <strong>Cucina</strong>
                  <p>{place.cuisine}</p>
                </div>
              </div>
            )}
          </div>

          {place.facilities && place.facilities.length > 0 && (
            <div className="modal-section">
              <h3><CheckCircle size={20} /> Servizi disponibili</h3>
              <div className="facilities-list">
                {place.facilities.map((facility, index) => (
                  <span key={index} className="facility-badge">
                    {facility}
                  </span>
                ))}
              </div>
            </div>
          )}

          {place.specialties && place.specialties.length > 0 && (
            <div className="modal-section">
              <h3><Utensils size={20} /> Specialità</h3>
              <div className="facilities-list">
                {place.specialties.map((specialty, index) => (
                  <span key={index} className="facility-badge">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          )}

          {place.whatToBring && place.whatToBring.length > 0 && (
            <div className="modal-section">
              <h3><CheckCircle size={20} /> Cosa portare</h3>
              <ul className="tips-list">
                {place.whatToBring.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {place.highlights && place.highlights.length > 0 && (
            <div className="modal-section">
              <h3><CheckCircle size={20} /> Da non perdere</h3>
              <ul className="tips-list">
                {place.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}

          {place.tips && (
            <div className="modal-section tips-section">
              <h3><Info size={20} /> Consigli utili</h3>
              <p>{place.tips}</p>
            </div>
          )}

          {place.reservation && (
            <div className="modal-section reservation-section">
              <h3><AlertCircle size={20} /> Prenotazione</h3>
              <p>{place.reservation}</p>
            </div>
          )}

          <div className="modal-actions">
            <ShareButton place={place} />
            <button className="maps-button" onClick={openInMaps}>
              <MapPin size={18} />
              Apri in Google Maps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;
