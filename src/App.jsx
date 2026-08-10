import React from 'react';
import RotatingText from './components/RotatingText';
import DecryptedText from './components/DecryptedText';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
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
    </div>
  );
}
