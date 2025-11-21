import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Heart } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import './MapView.css';
import L from 'leaflet';

// Fix per le icone di Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Funzione per ottenere l'icona giusta in base al tipo
const getIconForType = (type) => {
  const iconMap = {
    spiaggia: '🏖️',
    trekking: '🥾',
    ristorante: '🍽️',
    panoramico: '📸',
    esperienza: '✨',
    cultura: '🏛️'
  };
  return iconMap[type] || '📍';
};

// Componente per i marker personalizzati
const CustomMarker = ({ place, onPlaceClick }) => {
  const icon = L.divIcon({
    html: `<div style="font-size: 28px;">${getIconForType(place.type)}</div>`,
    className: 'custom-marker',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });

  return (
    <Marker
      position={[place.lat, place.lng]}
      icon={icon}
      eventHandlers={{
        click: () => onPlaceClick(place)
      }}
    >
      <Popup>
        <div className="popup-content">
          <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>
            {place.romantic && <Heart size={16} color="red" style={{ display: 'inline', marginRight: '4px' }} />}
            {place.name}
          </h3>
          <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#666' }}>
            {place.shortDescription}
          </p>
          <button
            onClick={() => onPlaceClick(place)}
            style={{
              background: '#e63946',
              color: 'white',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            Vedi dettagli
          </button>
        </div>
      </Popup>
    </Marker>
  );
};

const MapView = ({ places, center, onPlaceClick, userLocation, itinerary }) => {
  // Calcola il percorso dell'itinerario se attivo
  const itineraryPath = itinerary
    ? itinerary.places.map(id => {
      const place = places.find(p => p.id === id);
      return place ? [place.lat, place.lng] : null;
    }).filter(Boolean)
    : null;

  return (
    <div className="map-container">
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={center.zoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup
          chunkedLoading
          spiderfyOnMaxZoom={true}
        >
          {places.map(place => (
            <CustomMarker
              key={place.id}
              place={place}
              onPlaceClick={onPlaceClick}
            />
          ))}
        </MarkerClusterGroup>

        {/* Render Trails (Trekking) */}
        {places.map(place => (
          place.trail && (
            <Polyline
              key={`trail-${place.id}`}
              positions={place.trail}
              pathOptions={{ color: '#e63946', weight: 4, opacity: 0.7, dashArray: '10, 10' }}
            />
          )
        ))}

        {/* Render Itinerary Path */}
        {itineraryPath && (
          <Polyline
            positions={itineraryPath}
            pathOptions={{ color: '#4285F4', weight: 5, opacity: 0.8 }}
          />
        )}

        {userLocation && (
          <Marker
            position={[userLocation.lat, userLocation.lng]}
            icon={L.divIcon({
              html: '<div style="background-color: #4285F4; width: 15px; height: 15px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 5px rgba(0,0,0,0.3);"></div>',
              className: 'user-location-marker',
              iconSize: [20, 20],
              iconAnchor: [10, 10]
            })}
          >
            <Popup>Tu sei qui</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapView;
