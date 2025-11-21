import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import './PhotoGallery.css';

const PhotoGallery = ({ photos, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const slideRef = useRef(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Touch handlers for swipe gestures
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }

    // Reset
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isFullscreen) {
        if (e.key === 'ArrowLeft') handlePrevious();
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'Escape') setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  if (!photos || photos.length === 0) {
    return (
      <div className="gallery-empty">
        <p>Nessuna foto disponibile per questo itinerario</p>
      </div>
    );
  }

  return (
    <>
      <div className="photo-gallery">
        {/* Main image container */}
        <div
          className="gallery-main"
          ref={slideRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={photos[currentIndex].url}
            alt={photos[currentIndex].caption || `${title} - Foto ${currentIndex + 1}`}
            className="gallery-image"
          />

          {/* Navigation arrows */}
          {photos.length > 1 && (
            <>
              <button
                className="gallery-nav gallery-nav-left"
                onClick={handlePrevious}
                aria-label="Foto precedente"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="gallery-nav gallery-nav-right"
                onClick={handleNext}
                aria-label="Foto successiva"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Fullscreen button */}
          <button
            className="gallery-fullscreen-btn"
            onClick={() => setIsFullscreen(true)}
            aria-label="Visualizza a schermo intero"
          >
            <Maximize2 size={20} />
          </button>

          {/* Counter */}
          <div className="gallery-counter">
            {currentIndex + 1} / {photos.length}
          </div>
        </div>

        {/* Caption */}
        {photos[currentIndex].caption && (
          <div className="gallery-caption">
            {photos[currentIndex].caption}
          </div>
        )}

        {/* Dots navigation */}
        {photos.length > 1 && (
          <div className="gallery-dots">
            {photos.map((_, idx) => (
              <button
                key={idx}
                className={`gallery-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(idx)}
                aria-label={`Vai alla foto ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Thumbnail strip */}
        {photos.length > 1 && (
          <div className="gallery-thumbnails">
            {photos.map((photo, idx) => (
              <button
                key={idx}
                className={`gallery-thumbnail ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(idx)}
              >
                <img src={photo.url} alt={`Thumbnail ${idx + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen modal */}
      {isFullscreen && (
        <div className="gallery-fullscreen" onClick={() => setIsFullscreen(false)}>
          <button
            className="gallery-fullscreen-close"
            onClick={() => setIsFullscreen(false)}
            aria-label="Chiudi"
          >
            <X size={32} />
          </button>

          <div
            className="gallery-fullscreen-content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={photos[currentIndex].url}
              alt={photos[currentIndex].caption || `${title} - Foto ${currentIndex + 1}`}
            />

            {photos.length > 1 && (
              <>
                <button
                  className="gallery-nav gallery-nav-left fullscreen"
                  onClick={handlePrevious}
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  className="gallery-nav gallery-nav-right fullscreen"
                  onClick={handleNext}
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            <div className="gallery-fullscreen-counter">
              {currentIndex + 1} / {photos.length}
            </div>

            {photos[currentIndex].caption && (
              <div className="gallery-fullscreen-caption">
                {photos[currentIndex].caption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
