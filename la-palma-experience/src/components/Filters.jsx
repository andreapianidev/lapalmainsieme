import { Heart, MapPin } from 'lucide-react';

const Filters = ({ activeFilter, onFilterChange, showOnlyRomantic, onRomanticToggle }) => {
  const filters = [
    { value: 'tutti', label: 'Tutti i luoghi', icon: '🌴' },
    { value: 'spiaggia', label: 'Spiagge', icon: '🏖️' },
    { value: 'trekking', label: 'Trekking', icon: '🥾' },
    { value: 'ristorante', label: 'Ristoranti', icon: '🍽️' },
    { value: 'panoramico', label: 'Panorami', icon: '📸' },
    { value: 'esperienza', label: 'Esperienze', icon: '✨' },
    { value: 'cultura', label: 'Cultura', icon: '🏛️' }
  ];

  return (
    <div className="filters-container">
      <div className="filters-scroll">
        {filters.map(filter => (
          <button
            key={filter.value}
            className={`filter-button ${activeFilter === filter.value ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.value)}
          >
            <span className="filter-icon">{filter.icon}</span>
            <span className="filter-label">{filter.label}</span>
          </button>
        ))}
      </div>

      <button
        className={`romantic-toggle ${showOnlyRomantic ? 'active' : ''}`}
        onClick={onRomanticToggle}
        title="Mostra solo luoghi romantici"
      >
        <Heart size={18} fill={showOnlyRomantic ? 'white' : 'none'} />
        <span>Solo romantici</span>
      </button>
    </div>
  );
};

export default Filters;
