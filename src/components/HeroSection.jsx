import React from 'react';
import ScrollExpand from './ScrollExpand';
import RotatingText from './RotatingText';

export default function HeroSection() {
  return (
    <ScrollExpand
      title="Jenil Mashru"
      scrollHint="↓ Scroll down to expand portfolio"
      startWidth={44}
      startHeight={52}
      startRadius={24}
      endRadius={0}
      scrollDistance={1.0}
      useWindowScroll={true}
      overlayScrim={0.2}
    >
      <div className="hero-content" style={{ opacity: 1, padding: '40px 24px' }}>
        {/* Availability Badge */}
        <div className="badge-wrapper">
          <div className="availability-badge" id="badge">
            <span className="green-dot"></span>
            <span className="badge-text">Actively Seeking Job Opportunities</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="main-heading parallax-heading" id="heading">
          <RotatingText
            texts={[
              'Full-stack Developer',
              'AI / ML Developer',
              'Software Engineer'
            ]}
            mainClassName="revealed"
            staggerFrom="first"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-120%', opacity: 0 }}
            staggerDuration={0.03}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            rotationInterval={2600}
          />
        </h1>

        {/* Description */}
        <p className="description parallax-desc">
          Building elegant digital experiences with modern web technologies. Specialized in Full Stack Development, AI/ML solutions, and scalable architecture.
        </p>

        {/* Buttons Group */}
        <div className="buttons-group parallax-buttons">
          <a href="#contact" className="btn magnetic-btn">
            <span>Get in Touch</span>
          </a>

          <a href="#projects" className="btn magnetic-btn">
            <span>View Project</span>
          </a>

          <a href="https://github.com/jenilmashru8-pixel" target="_blank" rel="noopener noreferrer" className="btn-gray-box magnetic-btn" aria-label="Github Profile">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </ScrollExpand>
  );
}
