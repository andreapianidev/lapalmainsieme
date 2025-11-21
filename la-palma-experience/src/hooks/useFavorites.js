import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'laPalmaFavorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    // Carica i preferiti da localStorage all'inizializzazione
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Errore nel caricare i preferiti:', error);
      return [];
    }
  });

  // Salva i preferiti in localStorage ogni volta che cambiano
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Errore nel salvare i preferiti:', error);
    }
  }, [favorites]);

  const isFavorite = (placeId) => {
    return favorites.includes(placeId);
  };

  const toggleFavorite = (placeId) => {
    setFavorites(prev => {
      if (prev.includes(placeId)) {
        // Rimuovi dai preferiti
        return prev.filter(id => id !== placeId);
      } else {
        // Aggiungi ai preferiti
        return [...prev, placeId];
      }
    });
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite,
    clearFavorites,
    favoritesCount: favorites.length
  };
};
