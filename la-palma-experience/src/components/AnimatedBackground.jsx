import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
    return (
        <div className="animated-background">
            {/* Gradient Mesh */}
            <div className="gradient-mesh"></div>

            {/* Animated Wave Patterns */}
            <svg className="wave-pattern wave-1" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path
                    fill="rgba(255, 255, 255, 0.1)"
                    d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,165.3C672,171,768,149,864,128C960,107,1056,85,1152,90.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
            </svg>

            <svg className="wave-pattern wave-2" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path
                    fill="rgba(255, 255, 255, 0.05)"
                    d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,112C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
            </svg>

            {/* Floating Orbs */}
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
        </div>
    );
};

export default AnimatedBackground;
