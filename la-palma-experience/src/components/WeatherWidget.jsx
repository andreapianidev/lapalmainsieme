import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Wind, Thermometer } from 'lucide-react';

const WeatherWidget = ({ lat, lng }) => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,weather_code,wind_speed_10m`
                );
                const data = await response.json();
                setWeather(data.current);
            } catch (err) {
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
        if (code <= 1) return <Sun size={24} className="text-yellow-500" />;
        if (code <= 3) return <Cloud size={24} className="text-gray-400" />;
        if (code <= 67) return <CloudRain size={24} className="text-blue-400" />;
        return <Cloud size={24} className="text-gray-400" />;
    };

    const getWeatherDescription = (code) => {
        if (code === 0) return 'Sereno';
        if (code <= 3) return 'Nuvoloso';
        if (code <= 48) return 'Nebbia';
        if (code <= 67) return 'Pioggia';
        if (code <= 77) return 'Neve';
        return 'Variabile';
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
                {getWeatherIcon(weather.weather_code)}
                <div>
                    <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                        {getWeatherDescription(weather.weather_code)}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Wind size={12} />
                        {weather.wind_speed_10m} km/h
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                <Thermometer size={18} />
                {Math.round(weather.temperature_2m)}°C
            </div>
        </div>
    );
};

export default WeatherWidget;
