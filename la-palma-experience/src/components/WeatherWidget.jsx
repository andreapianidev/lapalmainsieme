import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Wind, Thermometer, CloudSnow, CloudLightning, Droplets } from 'lucide-react';
import { getWeather, getWeatherIcon as getWeatherIconType } from '../services/weatherService';

const WeatherWidget = ({ lat, lng }) => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getWeather(lat, lng);
                setWeather(data);
            } catch (err) {
                console.error('Weather fetch error:', err);
                setError('Meteo non disponibile');
            } finally {
                setLoading(false);
            }
        };

        if (lat && lng) {
            fetchWeather();
        }
    }, [lat, lng]);

    const getWeatherIcon = (code) => {
        const iconType = getWeatherIconType(code);
        const iconProps = { size: 24, strokeWidth: 2 };

        switch (iconType) {
            case 'sun':
                return <Sun {...iconProps} className="text-yellow-500" />;
            case 'cloud':
                return <Cloud {...iconProps} className="text-gray-400" />;
            case 'cloud-rain':
                return <CloudRain {...iconProps} className="text-blue-500" />;
            case 'cloud-snow':
                return <CloudSnow {...iconProps} className="text-blue-300" />;
            case 'cloud-lightning':
                return <CloudLightning {...iconProps} className="text-purple-500" />;
            default:
                return <Cloud {...iconProps} className="text-gray-400" />;
        }
    };

    if (loading) return <div className="weather-loading">Caricamento meteo...</div>;
    if (error) return null;
    if (!weather) return null;

    return (
        <div className="weather-widget" style={{
            background: 'linear-gradient(to right, #f8f9fa, #e9ecef)',
            padding: '12px',
            borderRadius: '8px',
            marginTop: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {getWeatherIcon(weather.weatherCode)}
                <div>
                    <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                        {weather.description}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Wind size={12} />
                            {Math.round(weather.windSpeed)} km/h
                        </span>
                        {weather.humidity && (
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Droplets size={12} />
                                {weather.humidity}%
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                <Thermometer size={18} />
                {weather.temperature}°C
            </div>
        </div>
    );
};

export default WeatherWidget;
