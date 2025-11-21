import React, { useState, useEffect } from 'react';
import { Heart, ArrowUp, Github, Mail, MapPin, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          {/* Main Footer Section */}
          <div className="footer-main">
            {/* Brand Column */}
            <div className="footer-column brand-column">
              <h3 className="footer-brand">
                <span className="brand-icon">🌴</span>
                La Palma Experience
              </h3>
              <p className="footer-tagline">
                Scopri l'isola più romantica delle Canarie
              </p>
              <div className="footer-badge">
                <MapPin size={16} />
                <span>La Palma, Canary Islands</span>
              </div>
            </div>

            {/* Links Column */}
            <div className="footer-column">
              <h4 className="footer-title">Esplora</h4>
              <ul className="footer-links">
                <li><a href="#spiagge">🏖️ Spiagge</a></li>
                <li><a href="#trekking">🥾 Trekking</a></li>
                <li><a href="#ristoranti">🍽️ Ristoranti</a></li>
                <li><a href="#panorami">📸 Panorami</a></li>
              </ul>
            </div>

            {/* Info Column */}
            <div className="footer-column">
              <h4 className="footer-title">Informazioni</h4>
              <ul className="footer-links">
                <li><a href="#about">Chi Siamo</a></li>
                <li><a href="#contact">Contatti</a></li>
                <li><a href="#privacy">Privacy</a></li>
                <li><a href="#terms">Termini</a></li>
              </ul>
            </div>

            {/* Social Column */}
            <div className="footer-column">
              <h4 className="footer-title">Seguici</h4>
              <div className="footer-social">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                  <Twitter size={20} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link github">
                  <Github size={20} />
                </a>
                <a href="mailto:hello@lapalma.com" className="social-link email">
                  <Mail size={20} />
                </a>
              </div>
              <p className="footer-newsletter">
                Rimani aggiornato sulle novità!
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              <Heart size={16} fill="#e63946" color="#e63946" className="heart-icon" />
              <span>
                {currentYear} La Palma Experience. Made with love for adventure seekers.
              </span>
            </div>
            <div className="footer-credits">
              <span>Designed with Canarian vibes</span>
              <span className="volcanic-dot">•</span>
              <span>Powered by passion</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Torna su"
        title="Torna su"
      >
        <ArrowUp size={24} />
        <span className="back-to-top-text">Top</span>
      </button>
    </>
  );
};

export default Footer;
