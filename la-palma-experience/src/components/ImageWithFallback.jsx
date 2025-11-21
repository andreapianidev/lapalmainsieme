import { useState } from 'react';

const ImageWithFallback = ({
  src,
  alt,
  className = '',
  fallbackType = 'generic',
  loading = 'lazy'
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fallback images per tipo di POI
  const fallbackImages = {
    spiaggia: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    trekking: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
    ristorante: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    panoramico: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    esperienza: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
    cultura: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&q=80',
    generic: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80' // La Palma generic
  };

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`image-container ${className}`}>
      {isLoading && (
        <div className="image-placeholder">
          <div className="spinner"></div>
        </div>
      )}
      <img
        src={imageError ? fallbackImages[fallbackType] || fallbackImages.generic : src}
        alt={alt}
        onError={handleImageError}
        onLoad={handleImageLoad}
        loading={loading}
        className={isLoading ? 'loading' : 'loaded'}
      />
    </div>
  );
};

export default ImageWithFallback;
