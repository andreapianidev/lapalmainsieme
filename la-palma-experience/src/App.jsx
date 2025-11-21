import { useState, useMemo, useEffect } from 'react';
import { Map, List, Heart, Search, Navigation, Share2, MapPin, ArrowLeft, Moon, Sun } from 'lucide-react';
import MapView from './components/MapView';
import PlaceCard from './components/PlaceCard';
import PlaceDetail from './components/PlaceDetail';
import Filters from './components/Filters';
import Logo from './components/Logo';
import AnimatedBackground from './components/AnimatedBackground';
import { places, centerCoordinates } from './data/places';
import { itineraries } from './data/itineraries';
import { useFavorites } from './hooks/useFavorites';
import './App.css';

function App() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid', 'map', 'itineraries'
  const [activeFilter, setActiveFilter] = useState('tutti');
  const [showOnlyRomantic, setShowOnlyRomantic] = useState(false);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [sortByDistance, setSortByDistance] = useState(false);
  const [activeItinerary, setActiveItinerary] = useState(null);

  // Dark Mode State
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Hook per gestire i preferiti
  const { favorites, isFavorite, toggleFavorite, favoritesCount } = useFavorites();

  // Filtra i luoghi in base ai filtri attivi
  const filteredPlaces = useMemo(() => {
    let filtered = places;

    if (activeItinerary) {
      filtered = filtered.filter(place => activeItinerary.places.includes(place.id));
    }

    // Filtra per tipo
    if (activeFilter !== 'tutti' && !activeItinerary) { // Apply type filter only if not viewing an itinerary
      filtered = filtered.filter(place => place.type === activeFilter);
    }

    // Filtra per luoghi romantici
    if (showOnlyRomantic && !activeItinerary) { // Apply romantic filter only if not viewing an itinerary
      filtered = filtered.filter(place => place.romantic === true);
    }

    // Filtra per preferiti
    if (showOnlyFavorites) {
      filtered = filtered.filter(place => favorites.includes(place.id));
    }

    // Filtra per ricerca testuale
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(place =>
        place.name.toLowerCase().includes(query) ||
        place.description.toLowerCase().includes(query) ||
        place.shortDescription.toLowerCase().includes(query) ||
        place.type.toLowerCase().includes(query) ||
        (place.idealFor && place.idealFor.toLowerCase().includes(query))
      );
    }

    // Ordina per distanza se attivo
    if (sortByDistance && userLocation) {
      filtered = [...filtered].sort((a, b) => {
        const distA = Math.sqrt(Math.pow(a.lat - userLocation.lat, 2) + Math.pow(a.lng - userLocation.lng, 2));
        const distB = Math.sqrt(Math.pow(b.lat - userLocation.lat, 2) + Math.pow(b.lng - userLocation.lng, 2));
        return distA - distB;
      });
    }

    return filtered;
  }, [activeFilter, showOnlyRomantic, showOnlyFavorites, searchQuery, favorites, sortByDistance, userLocation, activeItinerary]);

  const mapCenter = useMemo(() => {
    if (activeItinerary && filteredPlaces.length > 0) {
      const avgLat = filteredPlaces.reduce((sum, p) => sum + p.lat, 0) / filteredPlaces.length;
      const avgLng = filteredPlaces.reduce((sum, p) => sum + p.lng, 0) / filteredPlaces.length;
      return { lat: avgLat, lng: avgLng };
    }
    return centerCoordinates;
  }, [activeItinerary, filteredPlaces]);

  // Gestione geolocalizzazione
  const handleNearMe = () => {
    if (sortByDistance) {
      setSortByDistance(false);
      return;
    }

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setSortByDistance(true);
        setViewMode('map');
      }, (error) => {
        console.error("Error getting location:", error);
        alert("Impossibile ottenere la tua posizione. Assicurati di aver dato i permessi.");
      });
    } else {
      alert("La geolocalizzazione non è supportata dal tuo browser.");
    }
  };

  // Gestione condivisione preferiti
  const handleShareFavorites = () => {
    const favoritePlaces = places.filter(place => favorites.includes(place.id));
    if (favoritePlaces.length === 0) {
      alert("Non hai ancora aggiunto preferiti!");
      return;
    }

    const textList = favoritePlaces.map(p => `- ${p.name} (${p.type})`).join('\n');
    const shareText = `I miei luoghi preferiti a La Palma:\n${textList}\n\nScopri di più su La Palma Experience!`;

    navigator.clipboard.writeText(shareText).then(() => {
      alert("Lista copiata negli appunti! Puoi incollarla su WhatsApp o dove vuoi.");
    }).catch(err => {
      console.error('Errore nella copia:', err);
    });
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      {/* Header */}
      <header className="header">
        {/* Animated Background */}
        <AnimatedBackground />

        <div className="header-content">
          <div className="header-title">
            <h1>
              <Logo size={50} className="header-logo" />
              La Palma Experience
            </h1>
            <p>Scopri l'isola più romantica delle Canarie</p>
          </div>

          <div className="header-actions">
            {/* Dark Mode Toggle */}
            <button
              className="dark-mode-toggle"
              onClick={toggleDarkMode}
              title={darkMode ? "Modalità chiara" : "Modalità scura"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Badge Preferiti */}
            <button
              className={`favorites-badge ${showOnlyFavorites ? 'active' : ''}`}
              onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
              title={showOnlyFavorites ? "Mostra tutti" : "Mostra solo preferiti"}
            >
              <Heart size={20} fill={showOnlyFavorites ? 'white' : 'none'} />
              {favoritesCount > 0 && (
                <span className="favorites-count">{favoritesCount}</span>
              )}
            </button>

            {/* Share Favorites Button */}
            {showOnlyFavorites && favoritesCount > 0 && (
              <button
                className="share-btn"
                onClick={handleShareFavorites}
                title="Condividi lista preferiti"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', marginLeft: '10px' }}
              >
                <Share2 size={20} />
              </button>
            )}

            {/* Toggle View Mode */}
            <div className="view-toggle">
              <button
                className={viewMode === 'grid' ? 'active' : ''}
                onClick={() => setViewMode('grid')}
                title="Vista griglia"
              >
                <List size={20} />
                <span>Lista</span>
              </button>
              <button
                className={`icon-button ${viewMode === 'map' ? 'active' : ''}`}
                onClick={() => setViewMode('map')}
                title="Mappa"
              >
                <Map size={20} />
              </button>
              <button
                className={`icon-button ${viewMode === 'itineraries' ? 'active' : ''}`}
                onClick={() => {
                  setViewMode('itineraries');
                  setActiveItinerary(null);
                }}
                title="Itinerari"
              >
                <MapPin size={20} />
              </button>
            </div>

            {/* Near Me Button */}
            <button
              className={`near-me-btn ${sortByDistance ? 'active' : ''}`}
              onClick={handleNearMe}
              title="Vicino a me"
              style={{
                marginLeft: '10px',
                background: sortByDistance ? '#e63946' : 'rgba(255,255,255,0.2)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'white'
              }}
            >
              <Navigation size={20} fill={sortByDistance ? 'white' : 'none'} />
            </button>
          </div>
        </div>

        {/* Barra di Ricerca */}
        <div className="search-container">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Cerca spiagge, trekking, ristoranti..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button
              className="search-clear"
              onClick={() => setSearchQuery('')}
              title="Cancella ricerca"
            >
              ×
            </button>
          )}
        </div>
      </header>

      {/* Filters */}
      {!activeItinerary && viewMode !== 'itineraries' && (
        <Filters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          showOnlyRomantic={showOnlyRomantic}
          onRomanticToggle={() => setShowOnlyRomantic(!showOnlyRomantic)}
        />
      )}

      {/* Main Content */}
      <main className="main-content">
        {viewMode === 'itineraries' && !activeItinerary ? (
          <div className="places-grid">
            {itineraries.map(itinerary => (
              <div key={itinerary.id} className="place-card" onClick={() => {
                setActiveItinerary(itinerary);
                setViewMode('map');
              }}>
                <div className="card-image-container">
                  <img src={itinerary.image} alt={itinerary.title} loading="lazy" />
                  <div className="card-badge">Itinerario</div>
                </div>
                <div className="card-content">
                  <h3>{itinerary.title}</h3>
                  <p className="short-description">{itinerary.description}</p>
                  <div className="card-footer">
                    <span>{itinerary.totalDuration}</span>
                    <span>{itinerary.difficulty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : viewMode === 'map' || activeItinerary ? (
          <>
            {activeItinerary && (
              <div style={{ padding: '10px', background: '#f0f7ff', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={() => {
                  setActiveItinerary(null);
                  setViewMode('itineraries');
                }} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                  <ArrowLeft size={20} />
                </button>
                <div>
                  <strong>{activeItinerary.title}</strong>
                  <span style={{ fontSize: '12px', marginLeft: '10px', color: '#666' }}>
                    {activeItinerary.places.length} tappe
                  </span>
                </div>
              </div>
            )}
            <MapView
              places={filteredPlaces}
              center={mapCenter}
              onPlaceClick={setSelectedPlace}
              userLocation={userLocation}
              itinerary={activeItinerary}
            />
          </>
        ) : (
          <div className="places-grid">
            {filteredPlaces.length > 0 ? (
              filteredPlaces.map(place => (
                <PlaceCard
                  key={place.id}
                  place={place}
                  onClick={setSelectedPlace}
                  isFavorite={isFavorite(place.id)}
                  onToggleFavorite={(e) => {
                    e.stopPropagation();
                    toggleFavorite(place.id);
                  }}
                />
              ))
            ) : (
              <div className="no-results">
                <p>Nessun luogo trovato {searchQuery ? `per "${searchQuery}"` : 'con i filtri selezionati'}.</p>
                <button
                  className="reset-filters"
                  onClick={() => {
                    setActiveFilter('tutti');
                    setShowOnlyRomantic(false);
                    setShowOnlyFavorites(false);
                    setSearchQuery('');
                  }}
                >
                  Reimposta tutto
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Place Detail Modal */}
      {selectedPlace && (
        <PlaceDetail
          place={selectedPlace}
          onClose={() => setSelectedPlace(null)}
        />
      )}

      {/* Footer */}
      <footer className="footer">
        <p>
          Made with <Heart size={14} fill="#e63946" color="#e63946" /> per coppie che amano l'avventura
        </p>
      </footer>
    </div>
  );
}

export default App;
