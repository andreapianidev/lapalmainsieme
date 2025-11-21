import React from 'react';
import './SkeletonLoader.css';

// Card Skeleton - Per la griglia di PlaceCard
export const CardSkeleton = () => (
  <div className="skeleton-card">
    <div className="skeleton-card-image skeleton-shimmer" />
    <div className="skeleton-card-content">
      <div className="skeleton-title skeleton-shimmer" />
      <div className="skeleton-text skeleton-shimmer" />
      <div className="skeleton-text skeleton-shimmer short" />
      <div className="skeleton-badges">
        <div className="skeleton-badge skeleton-shimmer" />
        <div className="skeleton-badge skeleton-shimmer" />
      </div>
      <div className="skeleton-button skeleton-shimmer" />
    </div>
  </div>
);

// Grid Skeleton - Griglia completa di cards
export const GridSkeleton = ({ count = 6 }) => (
  <div className="places-grid">
    {Array.from({ length: count }).map((_, index) => (
      <CardSkeleton key={index} />
    ))}
  </div>
);

// Modal Skeleton - Per PlaceDetail
export const ModalSkeleton = () => (
  <div className="modal-overlay">
    <div className="modal-content skeleton-modal">
      <div className="skeleton-modal-close skeleton-shimmer" />
      <div className="skeleton-modal-image skeleton-shimmer" />
      <div className="skeleton-modal-body">
        <div className="skeleton-title large skeleton-shimmer" />
        <div className="skeleton-text skeleton-shimmer" />
        <div className="skeleton-text skeleton-shimmer" />
        <div className="skeleton-text skeleton-shimmer short" />
        <div className="skeleton-info-grid">
          <div className="skeleton-info-item skeleton-shimmer" />
          <div className="skeleton-info-item skeleton-shimmer" />
          <div className="skeleton-info-item skeleton-shimmer" />
        </div>
        <div className="skeleton-section skeleton-shimmer" />
        <div className="skeleton-section skeleton-shimmer" />
      </div>
    </div>
  </div>
);

// Map Skeleton - Per MapView
export const MapSkeleton = () => (
  <div className="map-skeleton">
    <div className="map-skeleton-content">
      <div className="map-skeleton-icon">🗺️</div>
      <p>Caricamento mappa interattiva...</p>
      <div className="map-skeleton-progress">
        <div className="map-skeleton-bar" />
      </div>
    </div>
  </div>
);

// Search Skeleton - Per SearchBar
export const SearchSkeleton = () => (
  <div className="search-skeleton skeleton-shimmer" />
);

// Weather Skeleton - Per WeatherWidget
export const WeatherSkeleton = () => (
  <div className="weather-skeleton">
    <div className="weather-skeleton-icon skeleton-shimmer" />
    <div className="weather-skeleton-text">
      <div className="skeleton-text skeleton-shimmer short" />
      <div className="skeleton-text skeleton-shimmer" />
    </div>
  </div>
);

// Empty State - Nessun risultato
export const EmptyState = ({
  icon = '🔍',
  title = 'Nessun risultato trovato',
  message = 'Prova a modificare i filtri di ricerca',
  action,
  actionLabel = 'Reimposta filtri'
}) => (
  <div className="empty-state">
    <div className="empty-state-icon">{icon}</div>
    <h3 className="empty-state-title">{title}</h3>
    <p className="empty-state-message">{message}</p>
    {action && (
      <button className="empty-state-action" onClick={action}>
        {actionLabel}
      </button>
    )}
  </div>
);

// Favorites Empty State - Specializzato per preferiti vuoti
export const FavoritesEmptyState = ({ onExplore }) => (
  <div className="empty-state favorites-empty">
    <div className="empty-state-illustration">
      <div className="heart-container">
        <div className="heart-icon">❤️</div>
        <div className="heart-pulse" />
      </div>
    </div>
    <h3 className="empty-state-title">Nessun preferito ancora</h3>
    <p className="empty-state-message">
      Inizia ad esplorare La Palma e aggiungi i tuoi luoghi preferiti!
      <br />
      Tocca il cuore su qualsiasi luogo per salvarlo qui.
    </p>
    <button className="empty-state-action primary" onClick={onExplore}>
      🌴 Esplora i luoghi
    </button>
  </div>
);

// Error State - Errore nel caricamento
export const ErrorState = ({
  title = 'Qualcosa è andato storto',
  message = 'Si è verificato un errore. Riprova più tardi.',
  onRetry
}) => (
  <div className="error-state">
    <div className="error-state-icon">⚠️</div>
    <h3 className="error-state-title">{title}</h3>
    <p className="error-state-message">{message}</p>
    {onRetry && (
      <button className="error-state-action" onClick={onRetry}>
        🔄 Riprova
      </button>
    )}
  </div>
);

// Loading Spinner - Generico
export const LoadingSpinner = ({ size = 'medium', message }) => (
  <div className={`loading-spinner ${size}`}>
    <div className="spinner-icon">
      <div className="spinner-circle" />
      <div className="spinner-wave" />
    </div>
    {message && <p className="spinner-message">{message}</p>}
  </div>
);

// Inline Loader - Per caricamenti inline
export const InlineLoader = () => (
  <div className="inline-loader">
    <div className="inline-dot" />
    <div className="inline-dot" />
    <div className="inline-dot" />
  </div>
);

export default {
  CardSkeleton,
  GridSkeleton,
  ModalSkeleton,
  MapSkeleton,
  SearchSkeleton,
  WeatherSkeleton,
  EmptyState,
  FavoritesEmptyState,
  ErrorState,
  LoadingSpinner,
  InlineLoader
};
