import { useState, useEffect, useRef } from 'react';
import { Search, X, MapPin } from 'lucide-react';
import './SearchBar.css';

const SearchBar = ({ places, onPlaceSelect, className = '' }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Filtra i luoghi in base alla query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredPlaces([]);
      setIsOpen(false);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = places.filter(place => {
      const nameMatch = place.name.toLowerCase().includes(query);
      const typeMatch = place.type.toLowerCase().includes(query);
      const descMatch = place.shortDescription?.toLowerCase().includes(query) || false;
      const locationMatch = place.idealFor?.toLowerCase().includes(query) || false;

      return nameMatch || typeMatch || descMatch || locationMatch;
    });

    setFilteredPlaces(filtered.slice(0, 8)); // Massimo 8 risultati
    setIsOpen(filtered.length > 0);
    setSelectedIndex(-1);
  }, [searchQuery, places]);

  // Chiudi dropdown quando si clicca fuori
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Gestione tasti keyboard
  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev =>
          prev < filteredPlaces.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && filteredPlaces[selectedIndex]) {
          handlePlaceSelect(filteredPlaces[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  const handlePlaceSelect = (place) => {
    onPlaceSelect(place);
    setSearchQuery('');
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredPlaces([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const getTypeEmoji = (type) => {
    const emojis = {
      spiaggia: '🏖️',
      trekking: '🥾',
      ristorante: '🍽️',
      panoramico: '📸',
      esperienza: '✨',
      cultura: '🏛️'
    };
    return emojis[type] || '📍';
  };

  return (
    <div className={`search-bar-container ${className}`} ref={searchRef}>
      <div className="search-input-wrapper">
        <Search className="search-icon" size={20} />
        <input
          ref={inputRef}
          type="text"
          className="search-input"
          placeholder="Cerca luoghi, spiagge, ristoranti..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => searchQuery && setIsOpen(true)}
        />
        {searchQuery && (
          <button className="search-clear" onClick={clearSearch} aria-label="Cancella ricerca">
            <X size={18} />
          </button>
        )}
      </div>

      {isOpen && filteredPlaces.length > 0 && (
        <div className="search-dropdown">
          <div className="search-results-header">
            {filteredPlaces.length} {filteredPlaces.length === 1 ? 'risultato' : 'risultati'}
          </div>
          <ul className="search-results">
            {filteredPlaces.map((place, index) => (
              <li
                key={place.id}
                className={`search-result-item ${index === selectedIndex ? 'selected' : ''}`}
                onClick={() => handlePlaceSelect(place)}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                <span className="result-emoji">{getTypeEmoji(place.type)}</span>
                <div className="result-content">
                  <div className="result-name">{place.name}</div>
                  <div className="result-type">{place.type}</div>
                </div>
                <MapPin size={16} className="result-icon" />
              </li>
            ))}
          </ul>
        </div>
      )}

      {searchQuery && !isOpen && filteredPlaces.length === 0 && (
        <div className="search-dropdown">
          <div className="search-no-results">
            Nessun risultato per "{searchQuery}"
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
