import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { MapPin, Navigation } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './ItineraryMap.css';

// Fix per le icone di Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Marker numerato per l'itinerario
const NumberedMarker = ({ place, index, onClick }) => {
  const icon = L.divIcon({
    html: `
      <div class="numbered-marker">
        <div class="marker-number">${index + 1}</div>
      </div>
    `,
    className: 'numbered-marker-container',
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36]
  });

  return (
    <Marker
      position={[place.lat, place.lng]}
      icon={icon}
      eventHandlers={{ click: onClick }}
    >
      <Popup>
        <div className="itinerary-popup">
          <div className="popup-header">
            <span className="popup-number">{index + 1}</span>
            <h4>{place.name}</h4>
          </div>
          <p className="popup-type">{place.type}</p>
          {place.shortDescription && (
            <p className="popup-description">{place.shortDescription}</p>
          )}
        </div>
      </Popup>
    </Marker>
  );
};

const ItineraryMap = ({ places, itinerary, onPlaceClick, height = '400px', distanceInfo }) => {
  // Get places in itinerary order
  const orderedPlaces = itinerary.places
    .map(id => places.find(p => p.id === id))
    .filter(Boolean);

  // Calculate center (average of all coordinates)
  const center = orderedPlaces.length > 0 ? {
    lat: orderedPlaces.reduce((sum, p) => sum + p.lat, 0) / orderedPlaces.length,
    lng: orderedPlaces.reduce((sum, p) => sum + p.lng, 0) / orderedPlaces.length
  } : { lat: 28.6835, lng: -17.7635 }; // La Palma default

  // Polyline path (connects stops in order)
  const polylinePath = orderedPlaces.map(p => [p.lat, p.lng]);

  // Calculate bounds for auto-fit
  const bounds = orderedPlaces.length > 0
    ? orderedPlaces.map(p => [p.lat, p.lng])
    : null;

  return (
    <div className="itinerary-map-wrapper" style={{ height }}>
      {orderedPlaces.length === 0 ? (
        <div className="map-empty-state">
          <MapPin size={48} />
          <p>Nessuna tappa trovata per questo itinerario</p>
        </div>
      ) : (
        <>
          {/* Map Legend */}
          <div className="map-legend">
            <div className="legend-item">
              <div className="legend-line"></div>
              <span>Percorso dell'itinerario</span>
            </div>
            <div className="legend-item">
              <Navigation size={16} />
              <span>{orderedPlaces.length} tappe · {itinerary.totalDuration}</span>
            </div>
            {distanceInfo && distanceInfo.totalKm > 0 && (
              <div className="legend-item legend-distance">
                <span className="legend-km">{distanceInfo.formatted}</span>
                <span className="legend-subtitle">distanza totale</span>
              </div>
            )}
          </div>

          <MapContainer
            center={[center.lat, center.lng]}
            zoom={10}
            bounds={bounds}
            boundsOptions={{ padding: [50, 50] }}
            style={{ height: '100%', width: '100%', borderRadius: '16px' }}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Polyline connecting all stops */}
            <Polyline
              positions={polylinePath}
              pathOptions={{
                color: '#e63946',
                weight: 4,
                opacity: 0.8,
                lineCap: 'round',
                lineJoin: 'round'
              }}
            />

            {/* Numbered markers for each stop */}
            {orderedPlaces.map((place, idx) => (
              <NumberedMarker
                key={place.id}
                place={place}
                index={idx}
                onClick={() => onPlaceClick && onPlaceClick(place)}
              />
            ))}
          </MapContainer>
        </>
      )}
    </div>
  );
};

export default ItineraryMap;
