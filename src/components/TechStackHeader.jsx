import React from 'react';
import RotatingText from './RotatingText';

export default function TechStackHeader() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '24px' }}>
      <span className="section-tag" style={{ marginBottom: '12px' }}>// MY ARSENAL</span>
      <h2 className="tech-heading">
        <span>Technologies i</span>
        <RotatingText
          texts={['engineer', 'architect', 'deploy', 'orchestrate', 'scale', 'master']}
          mainClassName="tech-rotate-text"
          staggerFrom="last"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-120%', opacity: 0 }}
          staggerDuration={0.025}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          rotationInterval={2200}
        />
      </h2>
      <p className="tech-subheading">
        Building modern web experiences with cutting-edge tools and frameworks
      </p>
    </div>
  );
}
