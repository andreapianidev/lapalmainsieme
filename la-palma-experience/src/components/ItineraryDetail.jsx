import { useState, lazy, Suspense, useMemo, useEffect } from 'react';
import {
  X,
  Clock,
  TrendingUp,
  Euro,
  MapPin,
  Calendar,
  Backpack,
  Hotel,
  Info,
  Share2,
  Heart,
  Check,
  ChevronDown,
  ChevronUp,
  Map as MapIcon,
  Sparkles,
  Navigation,
  Camera
} from 'lucide-react';
import { places } from '../data/places';
import { calculateItineraryDistance, estimateDrivingTime } from '../utils/distance';
import { downloadICSFile } from '../utils/calendar';
import './ItineraryDetail.css';

// Lazy load components for better performance
const ItineraryMap = lazy(() => import('./ItineraryMap'));
const PhotoGallery = lazy(() => import('./PhotoGallery'));
const RatingStars = lazy(() => import('./RatingStars'));

const ItineraryDetail = ({ itinerary, onClose, onPlaceClick, allItineraries }) => {
  const [expandedDay, setExpandedDay] = useState(itinerary.days ? itinerary.days[0]?.day : null);
  const [checkedItems, setCheckedItems] = useState({});
  const [saved, setSaved] = useState(false);

  // Check if itinerary is already saved
  useEffect(() => {
    const savedItineraries = JSON.parse(localStorage.getItem('savedItineraries') || '[]');
    setSaved(savedItineraries.includes(itinerary.id));
  }, [itinerary.id]);

  // Get places data
  const itineraryPlaces = places.filter(p => itinerary.places.includes(p.id));

  // Calculate total distance
  const distanceInfo = useMemo(() => {
    return calculateItineraryDistance(places, itinerary.places);
  }, [itinerary.places]);

  // Estimate driving time
  const drivingTime = useMemo(() => {
    return estimateDrivingTime(distanceInfo.totalKm);
  }, [distanceInfo.totalKm]);

  // Badge tags
  const tagEmojis = {
    'romantico': '💕',
    'coppie': '👫',
    'avventura': '🎒',
    'relax': '😌',
    'natura': '🌿',
    'stelle': '⭐',
    'gastronomia': '🍷',
    'fotografia': '📸',
    'geologia': '🌋',
    'educativo': '📚'
  };

  // Handle checklist toggle
  const toggleCheckItem = (item) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  // Save/Unsave itinerary
  const handleSave = () => {
    const savedItineraries = JSON.parse(localStorage.getItem('savedItineraries') || '[]');

    if (saved) {
      // Remove from saved
      const updatedSaved = savedItineraries.filter(id => id !== itinerary.id);
      localStorage.setItem('savedItineraries', JSON.stringify(updatedSaved));
      setSaved(false);
    } else {
      // Add to saved
      if (!savedItineraries.includes(itinerary.id)) {
        savedItineraries.push(itinerary.id);
        localStorage.setItem('savedItineraries', JSON.stringify(savedItineraries));
        setSaved(true);
      }
    }
  };

  // Share itinerary
  const handleShare = async () => {
    const shareData = {
      title: `${itinerary.title} - La Palma Experience`,
      text: `Scopri questo fantastico itinerario: ${itinerary.title}!\n\n${itinerary.description}`,
      url: `${window.location.origin}?itinerary=${itinerary.id}`
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${shareData.text}\n\n${shareData.url}`);
      alert('Link copiato negli appunti!');
    }
  };

  // Get similar itineraries (same tags)
  const similarItineraries = allItineraries
    .filter(i => i.id !== itinerary.id && i.tags?.some(tag => itinerary.tags?.includes(tag)))
    .slice(0, 3);

  return (
    <div className="itinerary-detail-overlay" onClick={onClose}>
      <div className="itinerary-detail-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="itinerary-close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        {/* Hero Section */}
        <div className="itinerary-hero" style={{ backgroundImage: `url(${itinerary.image})` }}>
          <div className="itinerary-hero-overlay">
            <div className="itinerary-hero-content">
              <h1>{itinerary.title}</h1>
              <p className="itinerary-subtitle">{itinerary.description}</p>

              {/* Tags */}
              {itinerary.tags && (
                <div className="itinerary-tags">
                  {itinerary.tags.map(tag => (
                    <span key={tag} className="itinerary-tag">
                      {tagEmojis[tag] || '✨'} {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="itinerary-content">
          {/* Action Buttons */}
          <div className="itinerary-actions">
            <button className="itinerary-action-btn primary" onClick={handleSave}>
              <Heart size={18} fill={saved ? 'currentColor' : 'none'} />
              {saved ? 'Salvato!' : 'Salva Itinerario'}
            </button>
            <button className="itinerary-action-btn" onClick={handleShare}>
              <Share2 size={18} />
              Condividi
            </button>
            <button className="itinerary-action-btn" onClick={() => downloadICSFile(itinerary)}>
              <Calendar size={18} />
              Aggiungi al Calendario
            </button>
          </div>

          {/* Stats Box */}
          <div className="itinerary-stats">
            <div className="stat-item">
              <Clock size={20} />
              <div>
                <span className="stat-label">Durata</span>
                <span className="stat-value">{itinerary.totalDuration}</span>
              </div>
            </div>
            <div className="stat-item">
              <TrendingUp size={20} />
              <div>
                <span className="stat-label">Difficoltà</span>
                <span className="stat-value">{itinerary.difficulty}</span>
              </div>
            </div>
            {itinerary.budget && (
              <div className="stat-item">
                <Euro size={20} />
                <div>
                  <span className="stat-label">Budget</span>
                  <span className="stat-value">{itinerary.budget}</span>
                </div>
              </div>
            )}
            <div className="stat-item">
              <MapPin size={20} />
              <div>
                <span className="stat-label">Tappe</span>
                <span className="stat-value">{itinerary.places.length} luoghi</span>
              </div>
            </div>
            {distanceInfo.totalKm > 0 && (
              <div className="stat-item">
                <Navigation size={20} />
                <div>
                  <span className="stat-label">Distanza</span>
                  <span className="stat-value">{distanceInfo.formatted} · {drivingTime}</span>
                </div>
              </div>
            )}
          </div>

          {/* Highlights */}
          {itinerary.highlights && (
            <section className="itinerary-section">
              <h2><Sparkles size={24} /> Highlights</h2>
              <div className="highlights-grid">
                {itinerary.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item">
                    <Check size={18} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Photo Gallery */}
          {itinerary.photos && itinerary.photos.length > 0 && (
            <section className="itinerary-section">
              <h2><Camera size={24} /> Galleria Fotografica</h2>
              <Suspense fallback={<div className="map-loading" style={{height: '300px'}}>Caricamento galleria...</div>}>
                <PhotoGallery
                  photos={itinerary.photos}
                  title={itinerary.title}
                />
              </Suspense>
            </section>
          )}

          {/* Itinerary Map */}
          <section className="itinerary-section">
            <h2><MapIcon size={24} /> Mappa del Percorso</h2>
            <Suspense fallback={<div className="map-loading">Caricamento mappa...</div>}>
              <ItineraryMap
                places={places}
                itinerary={itinerary}
                onPlaceClick={onPlaceClick}
                height="450px"
                distanceInfo={distanceInfo}
              />
            </Suspense>
          </section>

          {/* Timeline Giorno per Giorno */}
          {itinerary.days && itinerary.days.length > 0 && (
            <section className="itinerary-section">
              <h2><Calendar size={24} /> Programma Giorno per Giorno</h2>
              <div className="timeline">
                {itinerary.days.map(day => (
                  <div key={day.day} className="day-card">
                    <div
                      className="day-header"
                      onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                    >
                      <div className="day-title">
                        <span className="day-number">Giorno {day.day}</span>
                        <h3>{day.title}</h3>
                      </div>
                      {expandedDay === day.day ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>

                    {expandedDay === day.day && (
                      <div className="day-activities">
                        {day.activities.map((activity, idx) => {
                          const place = activity.placeId ? places.find(p => p.id === activity.placeId) : null;
                          return (
                            <div key={idx} className="activity-item">
                              <div className="activity-time">{activity.time}</div>
                              <div className="activity-content">
                                {place && (
                                  <div
                                    className="activity-place"
                                    onClick={() => {
                                      onPlaceClick(place);
                                      onClose();
                                    }}
                                  >
                                    <MapPin size={16} />
                                    {place.name}
                                  </div>
                                )}
                                <p className="activity-description">{activity.description}</p>
                                <span className="activity-duration">⏱️ {activity.duration}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Places Grid (se non ci sono days) */}
          {(!itinerary.days || itinerary.days.length === 0) && (
            <section className="itinerary-section">
              <h2><MapIcon size={24} /> Luoghi da Visitare</h2>
              <div className="itinerary-places-grid">
                {itineraryPlaces.map((place, idx) => (
                  <div
                    key={place.id}
                    className="itinerary-place-card"
                    onClick={() => {
                      onPlaceClick(place);
                      onClose();
                    }}
                  >
                    <div className="place-number">{idx + 1}</div>
                    <img src={place.image} alt={place.name} />
                    <div className="place-info">
                      <h4>{place.name}</h4>
                      <p>{place.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Budget Breakdown */}
          {itinerary.budgetBreakdown && (
            <section className="itinerary-section">
              <h2><Euro size={24} /> Budget Dettagliato</h2>
              <div className="budget-breakdown">
                {Object.entries(itinerary.budgetBreakdown).map(([key, value]) => (
                  <div key={key} className="budget-item">
                    <span className="budget-label">
                      {key === 'accommodation' && '🏨 Alloggio'}
                      {key === 'food' && '🍽️ Cibo e Bevande'}
                      {key === 'transport' && '🚗 Trasporti'}
                      {key === 'activities' && '🎫 Attività'}
                    </span>
                    <span className="budget-value">{value}</span>
                  </div>
                ))}
                <div className="budget-total">
                  <span>Totale Stimato</span>
                  <span>{itinerary.budget}</span>
                </div>
              </div>
            </section>
          )}

          {/* Best Time */}
          {itinerary.bestTime && (
            <section className="itinerary-section best-time">
              <h2><Calendar size={24} /> Periodo Migliore</h2>
              <div className="best-time-card">
                <p>{itinerary.bestTime}</p>
              </div>
            </section>
          )}

          {/* Cosa Portare */}
          {itinerary.packing && (
            <section className="itinerary-section">
              <h2><Backpack size={24} /> Cosa Portare</h2>
              <div className="packing-list">
                {itinerary.packing.map((item, idx) => (
                  <div
                    key={idx}
                    className={`packing-item ${checkedItems[item] ? 'checked' : ''}`}
                    onClick={() => toggleCheckItem(item)}
                  >
                    <div className="checkbox">
                      {checkedItems[item] && <Check size={14} />}
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Dove Dormire */}
          {itinerary.accommodation && (
            <section className="itinerary-section">
              <h2><Hotel size={24} /> Dove Dormire</h2>
              <p className="accommodation-suggestion">{itinerary.accommodation.suggestion}</p>
              {itinerary.accommodation.options && (
                <div className="accommodation-options">
                  {itinerary.accommodation.options.map((option, idx) => (
                    <div key={idx} className="accommodation-card">
                      <div className="accommodation-header">
                        <h4>{option.name}</h4>
                        <span className="price-badge">{option.price}</span>
                      </div>
                      <p>{option.type}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Tips */}
          {itinerary.tips && itinerary.tips.length > 0 && (
            <section className="itinerary-section">
              <h2><Info size={24} /> Consigli Utili</h2>
              <div className="tips-list">
                {itinerary.tips.map((tip, idx) => (
                  <div key={idx} className="tip-item">
                    <span className="tip-icon">💡</span>
                    <p>{tip}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          {itinerary.faq && itinerary.faq.length > 0 && (
            <section className="itinerary-section">
              <h2><Info size={24} /> Domande Frequenti</h2>
              <div className="faq-list">
                {itinerary.faq.map((item, idx) => (
                  <div key={idx} className="faq-item">
                    <h4>{item.question}</h4>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Rating Section */}
          <section className="itinerary-section">
            <Suspense fallback={null}>
              <RatingStars itineraryId={itinerary.id} />
            </Suspense>
          </section>

          {/* Itinerari Simili */}
          {similarItineraries.length > 0 && (
            <section className="itinerary-section">
              <h2>Potrebbero Interessarti Anche</h2>
              <div className="similar-itineraries">
                {similarItineraries.map(similar => (
                  <div
                    key={similar.id}
                    className="similar-card"
                    onClick={() => window.location.href = `?itinerary=${similar.id}`}
                  >
                    <img src={similar.image} alt={similar.title} />
                    <div className="similar-info">
                      <h4>{similar.title}</h4>
                      <p>{similar.totalDuration} · {similar.difficulty}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItineraryDetail;
