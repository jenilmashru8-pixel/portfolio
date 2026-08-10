import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TechStackHeader from './components/TechStackHeader';
import CertificatesSection from './components/CertificatesSection';
import ProjectsSection from './components/ProjectsSection';

const rootElement = document.getElementById('fullstack-root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const techHeaderRoot = document.getElementById('techstack-header-root');
if (techHeaderRoot) {
  const root = ReactDOM.createRoot(techHeaderRoot);
  root.render(
    <React.StrictMode>
      <TechStackHeader />
    </React.StrictMode>
  );
}

const certRoot = document.getElementById('certificates-root');
if (certRoot) {
  const root = ReactDOM.createRoot(certRoot);
  root.render(
    <React.StrictMode>
      <CertificatesSection />
    </React.StrictMode>
  );
}

const projectsRoot = document.getElementById('projects-root');
if (projectsRoot) {
  const root = ReactDOM.createRoot(projectsRoot);
  root.render(
    <React.StrictMode>
      <ProjectsSection />
    </React.StrictMode>
  );
}


