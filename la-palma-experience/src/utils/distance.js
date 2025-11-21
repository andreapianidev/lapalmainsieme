/**
 * Calculate distance between two GPS coordinates using Haversine formula
 * @param {number} lat1 - Latitude of first point
 * @param {number} lng1 - Longitude of first point
 * @param {number} lat2 - Latitude of second point
 * @param {number} lng2 - Longitude of second point
 * @returns {number} Distance in kilometers
 */
export const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
};

/**
 * Convert degrees to radians
 * @param {number} degrees
 * @returns {number} Radians
 */
const toRad = (degrees) => {
  return degrees * (Math.PI / 180);
};

/**
 * Calculate total distance for an itinerary
 * @param {Array} places - Array of place objects with lat/lng
 * @param {Array} placeIds - Array of place IDs in order
 * @returns {Object} Object with totalKm (number) and formatted (string)
 */
export const calculateItineraryDistance = (places, placeIds) => {
  if (!placeIds || placeIds.length < 2) {
    return { totalKm: 0, formatted: '0 km' };
  }

  let totalDistance = 0;
  const orderedPlaces = placeIds
    .map(id => places.find(p => p.id === id))
    .filter(Boolean);

  for (let i = 0; i < orderedPlaces.length - 1; i++) {
    const current = orderedPlaces[i];
    const next = orderedPlaces[i + 1];

    if (current && next && current.lat && current.lng && next.lat && next.lng) {
      const distance = calculateDistance(
        current.lat,
        current.lng,
        next.lat,
        next.lng
      );
      totalDistance += distance;
    }
  }

  return {
    totalKm: Math.round(totalDistance * 10) / 10, // Round to 1 decimal
    formatted: `${Math.round(totalDistance)} km`
  };
};

/**
 * Get estimated driving time based on distance
 * Assumes average speed of 40 km/h (mountain roads)
 * @param {number} distanceKm - Distance in kilometers
 * @returns {string} Formatted time estimate
 */
export const estimateDrivingTime = (distanceKm) => {
  const avgSpeed = 40; // km/h for La Palma's winding roads
  const hours = distanceKm / avgSpeed;

  if (hours < 1) {
    const minutes = Math.round(hours * 60);
    return `~${minutes} min`;
  } else if (hours < 2) {
    const minutes = Math.round((hours % 1) * 60);
    return `~1h ${minutes > 0 ? `${minutes}min` : ''}`;
  } else {
    const wholeHours = Math.floor(hours);
    const minutes = Math.round((hours % 1) * 60);
    return `~${wholeHours}h ${minutes > 0 ? `${minutes}min` : ''}`;
  }
};
