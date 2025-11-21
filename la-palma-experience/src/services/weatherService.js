/**
 * Weather Service - Multi-provider weather data fetcher with caching
 * Supports: Open-Meteo (free), OpenWeatherMap, WeatherAPI.com
 */

const WEATHER_CACHE_KEY = 'la-palma-weather-cache';
const CACHE_DURATION = parseInt(import.meta.env.VITE_WEATHER_CACHE_DURATION || '30') * 60 * 1000; // minutes to ms
const ENABLE_CACHE = import.meta.env.VITE_WEATHER_ENABLE_CACHE !== 'false';

// Weather providers configuration
const PROVIDERS = {
  'open-meteo': {
    name: 'Open-Meteo',
    needsApiKey: false,
    fetch: async (lat, lng) => {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m`
      );
      const data = await response.json();

      return {
        temperature: Math.round(data.current.temperature_2m),
        weatherCode: data.current.weather_code,
        windSpeed: data.current.wind_speed_10m,
        humidity: data.current.relative_humidity_2m,
        description: getWeatherDescription(data.current.weather_code),
        provider: 'open-meteo'
      };
    }
  },

  'openweathermap': {
    name: 'OpenWeatherMap',
    needsApiKey: true,
    fetch: async (lat, lng, apiKey) => {
      if (!apiKey) {
        throw new Error('OpenWeatherMap API key required');
      }

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric&lang=it`
      );
      const data = await response.json();

      if (data.cod !== 200) {
        throw new Error(data.message || 'Weather fetch failed');
      }

      return {
        temperature: Math.round(data.main.temp),
        weatherCode: mapOpenWeatherToCode(data.weather[0].id),
        windSpeed: data.wind.speed * 3.6, // m/s to km/h
        humidity: data.main.humidity,
        description: data.weather[0].description,
        provider: 'openweathermap'
      };
    }
  },

  'weatherapi': {
    name: 'WeatherAPI.com',
    needsApiKey: true,
    fetch: async (lat, lng, apiKey) => {
      if (!apiKey) {
        throw new Error('WeatherAPI key required');
      }

      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lng}&lang=it`
      );
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      return {
        temperature: Math.round(data.current.temp_c),
        weatherCode: mapWeatherAPIToCode(data.current.condition.code),
        windSpeed: data.current.wind_kph,
        humidity: data.current.humidity,
        description: data.current.condition.text,
        provider: 'weatherapi'
      };
    }
  }
};

/**
 * Get weather data for a location
 * @param {number} lat - Latitude
 * @param {number} lng - Longitude
 * @returns {Promise<Object>} Weather data
 */
export async function getWeather(lat, lng) {
  // Check cache first
  if (ENABLE_CACHE) {
    const cached = getCachedWeather(lat, lng);
    if (cached) {
      return cached;
    }
  }

  // Get provider configuration
  const primaryProvider = import.meta.env.VITE_WEATHER_PROVIDER || 'open-meteo';
  const fallbackProvider = import.meta.env.VITE_WEATHER_FALLBACK_PROVIDER || 'open-meteo';

  try {
    // Try primary provider
    const weather = await fetchFromProvider(primaryProvider, lat, lng);

    // Cache the result
    if (ENABLE_CACHE) {
      cacheWeather(lat, lng, weather);
    }

    return weather;
  } catch (primaryError) {
    console.warn(`Primary weather provider (${primaryProvider}) failed:`, primaryError.message);

    // Try fallback provider if different from primary
    if (fallbackProvider !== primaryProvider) {
      try {
        const weather = await fetchFromProvider(fallbackProvider, lat, lng);

        // Cache the result
        if (ENABLE_CACHE) {
          cacheWeather(lat, lng, weather);
        }

        return weather;
      } catch (fallbackError) {
        console.error(`Fallback weather provider (${fallbackProvider}) failed:`, fallbackError.message);
        throw new Error('All weather providers failed');
      }
    }

    throw primaryError;
  }
}

/**
 * Fetch weather from a specific provider
 */
async function fetchFromProvider(providerName, lat, lng) {
  const provider = PROVIDERS[providerName];

  if (!provider) {
    throw new Error(`Unknown weather provider: ${providerName}`);
  }

  // Get API key if needed
  let apiKey = null;
  if (provider.needsApiKey) {
    apiKey = getApiKey(providerName);
    if (!apiKey) {
      throw new Error(`API key required for ${provider.name}`);
    }
  }

  return await provider.fetch(lat, lng, apiKey);
}

/**
 * Get API key for a provider
 */
function getApiKey(providerName) {
  const keys = {
    'openweathermap': import.meta.env.VITE_OPENWEATHERMAP_API_KEY,
    'weatherapi': import.meta.env.VITE_WEATHERAPI_KEY
  };

  return keys[providerName];
}

/**
 * Cache weather data
 */
function cacheWeather(lat, lng, weather) {
  try {
    const cache = JSON.parse(localStorage.getItem(WEATHER_CACHE_KEY) || '{}');
    const key = `${lat.toFixed(4)},${lng.toFixed(4)}`;

    cache[key] = {
      data: weather,
      timestamp: Date.now()
    };

    // Clean old cache entries (keep last 50)
    const entries = Object.entries(cache);
    if (entries.length > 50) {
      const sorted = entries.sort((a, b) => b[1].timestamp - a[1].timestamp);
      const newCache = Object.fromEntries(sorted.slice(0, 50));
      localStorage.setItem(WEATHER_CACHE_KEY, JSON.stringify(newCache));
    } else {
      localStorage.setItem(WEATHER_CACHE_KEY, JSON.stringify(cache));
    }
  } catch (error) {
    console.warn('Failed to cache weather:', error);
  }
}

/**
 * Get cached weather data
 */
function getCachedWeather(lat, lng) {
  try {
    const cache = JSON.parse(localStorage.getItem(WEATHER_CACHE_KEY) || '{}');
    const key = `${lat.toFixed(4)},${lng.toFixed(4)}`;
    const cached = cache[key];

    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      return cached.data;
    }

    return null;
  } catch (error) {
    console.warn('Failed to read weather cache:', error);
    return null;
  }
}

/**
 * Clear weather cache
 */
export function clearWeatherCache() {
  try {
    localStorage.removeItem(WEATHER_CACHE_KEY);
  } catch (error) {
    console.warn('Failed to clear weather cache:', error);
  }
}

/**
 * Get weather description from WMO code (used by Open-Meteo)
 */
function getWeatherDescription(code) {
  const descriptions = {
    0: 'Sereno',
    1: 'Prevalentemente sereno',
    2: 'Parzialmente nuvoloso',
    3: 'Nuvoloso',
    45: 'Nebbia',
    48: 'Nebbia con brina',
    51: 'Pioggerella leggera',
    53: 'Pioggerella moderata',
    55: 'Pioggerella densa',
    61: 'Pioggia leggera',
    63: 'Pioggia moderata',
    65: 'Pioggia forte',
    71: 'Neve leggera',
    73: 'Neve moderata',
    75: 'Neve forte',
    77: 'Granuli di neve',
    80: 'Rovesci leggeri',
    81: 'Rovesci moderati',
    82: 'Rovesci violenti',
    85: 'Nevicate leggere',
    86: 'Nevicate forti',
    95: 'Temporale',
    96: 'Temporale con grandine leggera',
    99: 'Temporale con grandine forte'
  };

  return descriptions[code] || 'Variabile';
}

/**
 * Map OpenWeatherMap condition ID to WMO code
 */
function mapOpenWeatherToCode(owmId) {
  // Thunderstorm
  if (owmId >= 200 && owmId < 300) return 95;
  // Drizzle
  if (owmId >= 300 && owmId < 400) return 51;
  // Rain
  if (owmId >= 500 && owmId < 600) {
    if (owmId < 520) return 61;
    return 80;
  }
  // Snow
  if (owmId >= 600 && owmId < 700) return 71;
  // Atmosphere (fog, mist, etc.)
  if (owmId >= 700 && owmId < 800) return 45;
  // Clear
  if (owmId === 800) return 0;
  // Clouds
  if (owmId === 801) return 1;
  if (owmId === 802) return 2;
  if (owmId >= 803) return 3;

  return 0;
}

/**
 * Map WeatherAPI condition code to WMO code
 */
function mapWeatherAPIToCode(weatherApiCode) {
  const mapping = {
    1000: 0,   // Sunny/Clear
    1003: 2,   // Partly cloudy
    1006: 3,   // Cloudy
    1009: 3,   // Overcast
    1030: 45,  // Mist
    1063: 61,  // Patchy rain possible
    1066: 71,  // Patchy snow possible
    1069: 51,  // Patchy sleet possible
    1072: 51,  // Patchy freezing drizzle
    1087: 95,  // Thundery outbreaks possible
    1114: 71,  // Blowing snow
    1117: 75,  // Blizzard
    1135: 45,  // Fog
    1147: 48,  // Freezing fog
    1150: 51,  // Patchy light drizzle
    1153: 53,  // Light drizzle
    1168: 51,  // Freezing drizzle
    1171: 55,  // Heavy freezing drizzle
    1180: 61,  // Patchy light rain
    1183: 61,  // Light rain
    1186: 63,  // Moderate rain
    1189: 63,  // Moderate rain
    1192: 65,  // Heavy rain
    1195: 65,  // Heavy rain
    1198: 61,  // Light freezing rain
    1201: 63,  // Moderate/heavy freezing rain
    1204: 51,  // Light sleet
    1207: 53,  // Moderate/heavy sleet
    1210: 71,  // Patchy light snow
    1213: 71,  // Light snow
    1216: 73,  // Patchy moderate snow
    1219: 73,  // Moderate snow
    1222: 75,  // Patchy heavy snow
    1225: 75,  // Heavy snow
    1237: 77,  // Ice pellets
    1240: 80,  // Light rain shower
    1243: 81,  // Moderate/heavy rain shower
    1246: 82,  // Torrential rain shower
    1249: 51,  // Light sleet showers
    1252: 53,  // Moderate/heavy sleet showers
    1255: 85,  // Light snow showers
    1258: 86,  // Moderate/heavy snow showers
    1261: 77,  // Light ice pellet showers
    1264: 77,  // Moderate/heavy ice pellet showers
    1273: 96,  // Patchy light rain with thunder
    1276: 99,  // Moderate/heavy rain with thunder
    1279: 96,  // Patchy light snow with thunder
    1282: 99   // Moderate/heavy snow with thunder
  };

  return mapping[weatherApiCode] || 0;
}

/**
 * Get weather icon component name based on WMO code
 */
export function getWeatherIcon(code) {
  if (code === 0 || code === 1) return 'sun';
  if (code === 2 || code === 3) return 'cloud';
  if (code >= 45 && code <= 48) return 'cloud';
  if (code >= 51 && code <= 67) return 'cloud-rain';
  if (code >= 71 && code <= 77) return 'cloud-snow';
  if (code >= 80 && code <= 82) return 'cloud-rain';
  if (code >= 95) return 'cloud-lightning';

  return 'cloud';
}
