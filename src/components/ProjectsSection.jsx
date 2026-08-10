import React, { useState, useEffect } from 'react';
import DecryptedText from './DecryptedText';


const projectsData = [
  {
    id: '6g-research',
    title: 'Generative AI & ML for 6G Systems (Research Paper)',
    category: 'AI/ML & Research',
    role: 'Lead AI/ML Researcher',
    organization: 'FEST, Adani University',
    year: '2026',
    desc: 'Proposed a GenAI-native 6G co-design architecture integrating GAN-based channel estimation, Diffusion Model semantic communication, and a GenAI-DQN hybrid resource manager.',
    highlights: ['⚡ 52% Latency Cut', '📈 2.5x Throughput', '🌱 45% Energy Cut'],
    featured: true,
    accentColor: '#10b981',
    image: '/proj_6g_research.png',
    techStack: ['PyTorch', 'GenAI', 'GANs', 'Diffusion Models', 'DQN', 'Federated Learning', 'Python'],
    github: 'https://github.com/jenilmashru8-pixel',
    demo: '#',
    keyFeatures: [
      'GAN-based channel estimation under dynamic ultra-dense network topologies',
      'Diffusion Model semantic communication framework for bandwidth optimization',
      'GenAI-DQN hybrid resource manager with Federated Learning & Differential Privacy',
      'Neuromorphic GenAI inference targeting sub-100 μJ edge computation'
    ],
    detailedOverview: 'Authored a pioneering research paper introducing a holistic GenAI-native 6G co-design architecture. The work replaces traditional signal processing pipelines with generative deep learning models for dynamic channel estimation, semantic data transmission, and privacy-preserved decentralized resource allocation.',
    impactMetrics: [
      { label: 'Latency Cut', value: '52%' },
      { label: 'Throughput Boost', value: '2.5x' },
      { label: 'Energy Savings', value: '45%' },
      { label: 'Simulations', value: '1,000 Monte Carlo' }
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z"/>
        <path d="M12 12L2.1 12a10 10 0 0 0 17.8 5.7"/>
        <circle cx="12" cy="12" r="3" fill="#10b981" fillOpacity="0.3"/>
      </svg>
    )
  },
  {
    id: 'india-onion-proj',
    title: 'India Onion — Market Intelligence & AI Portal',
    category: 'Full-Stack Web',
    role: 'Frontend Developer Intern',
    organization: 'India Onion',
    year: '2026 (May – Jul)',
    desc: 'AI-powered agricultural market intelligence & monetization platform. Developed price-trend data pipelines, analytics dashboards, and AI module data feeds.',
    highlights: ['🌾 Commodity Feeds', '📊 AI Price Predictions', '💰 Report Monetization'],
    featured: true,
    accentColor: '#38bdf8',
    image: '/proj_india_onion.png',
    techStack: ['React', 'Next.js', 'Python Pipelines', 'AI Analytics', 'Tailwind CSS', 'REST API'],
    github: 'https://github.com/jenilmashru8-pixel',
    demo: '#',
    keyFeatures: [
      'Real-time price trend analytics dashboards for agricultural market commodities',
      'High-throughput Python data pipeline feeding live market data into AI prediction models',
      'Monetization and subscription flow integrations for market intelligence reports',
      'Responsive UI optimized for desktop and mobile agricultural traders'
    ],
    detailedOverview: 'Engineered the front-end platform and analytical data pipelines for the "INDIA ONION – Market Intelligence Portal". The platform empowers farmers, traders, and agricultural enterprises with real-time commodity price tracking, predictive AI analytics, and digital report monetization.',
    impactMetrics: [
      { label: 'Platform Type', value: 'AI Market Intel' },
      { label: 'Data Feeds', value: 'Real-time Python' },
      { label: 'Target Audience', value: 'Agri Traders' }
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    )
  },
  {
    id: 'nayara-pssr',
    title: 'Digital PSSR Web Application (Nayara Energy)',
    category: 'Full-Stack Web',
    role: 'Web Developer Intern',
    organization: 'Nayara Energy Limited',
    year: '2026 (Jun – Jul)',
    desc: 'Industrial web system for Pre-Commissioning & Startup Safety Review compliance. Digitized plant safety checklists, audit workflows, and real-time operational reporting.',
    highlights: ['🛡️ Refinery Safety', '📋 Checklist Workflows', '⏱️ Real-Time Auditing'],
    featured: false,
    accentColor: '#a855f7',
    image: '/proj_nayara_pssr.png',
    techStack: ['React', 'Node.js', 'Express', 'MySQL', 'CSS3', 'Workflow Engine'],
    github: 'https://github.com/jenilmashru8-pixel',
    demo: '#',
    keyFeatures: [
      'Digitized industrial paper-based Pre-Commissioning & Startup Safety Review (PSSR) checklists',
      'Multi-tiered Role-Based Access Control (RBAC) for engineers, safety auditors, and managers',
      'Automated audit tracking workflow engine with real-time compliance status logging',
      'Exportable audit reports and analytics dashboard for refinery safety management'
    ],
    detailedOverview: 'Built an industrial-grade web application during an internship at Nayara Energy Limited. The system digitizes critical safety compliance procedures, replacing manual paper checklists during refinery unit pre-commissioning to prevent safety oversights and streamline audit timelines.',
    impactMetrics: [
      { label: 'Domain', value: 'Refinery Safety' },
      { label: 'Audit Mode', value: 'Paperless Digital' },
      { label: 'Compliance', value: '100% Tracked' }
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    )
  },
  {
    id: 'traffic-iot',
    title: 'IoT Traffic Flow Control System',
    category: 'Mobile & IoT',
    role: 'IoT & Embedded Developer',
    organization: 'Adani University Project',
    year: '2025–2026',
    desc: 'IoT-integrated smart traffic management solution designed to monitor, model, and optimize traffic light timing and intersection congestion in real time.',
    highlights: ['🚦 Adaptive Timing', '📡 Sensor Array Mesh', '📈 Intersection Analytics'],
    featured: true,
    accentColor: '#f59e0b',
    image: '/proj_traffic_iot.png',
    techStack: ['IoT Sensors', 'Embedded C++', 'Python', 'Microcontrollers', 'Traffic Analytics'],
    github: 'https://github.com/jenilmashru8-pixel',
    demo: '#',
    keyFeatures: [
      'Real-time vehicle density detection using ultrasonic/optical sensor arrays and microcontrollers',
      'Dynamic signal timing algorithm adjusting green light duration based on live lane queue lengths',
      'Central Python control dashboard with live queue visualization and lane congestion metrics',
      'Emergency vehicle prioritization protocol for ambulances and emergency responders'
    ],
    detailedOverview: 'Designed and deployed an integrated hardware/software smart city traffic management solution. The system replaces static traffic light timers with adaptive sensor-driven timing, dynamically reducing vehicle idling and bottleneck congestion at busy urban intersections.',
    impactMetrics: [
      { label: 'System Type', value: 'IoT Smart City' },
      { label: 'Sensor Feed', value: '< 500ms Latency' },
      { label: 'Emergency Mode', value: 'Priority Override' }
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="2" width="12" height="20" rx="4"/>
        <circle cx="12" cy="7" r="2" fill="#ef4444"/>
        <circle cx="12" cy="12" r="2" fill="#eab308"/>
        <circle cx="12" cy="17" r="2" fill="#22c55e"/>
      </svg>
    )
  },
  {
    id: 'hostel-android',
    title: 'Hostel Management Android Application',
    category: 'Mobile & IoT',
    role: 'Android Developer Intern',
    organization: 'Brainy Beam Technologies',
    year: '2024 (Jun – Sep)',
    desc: 'Native Android application streamlining hostel operations, resident tracking, automated room allocations, and departmental revenue management.',
    highlights: ['🏨 Auto Room Allocation', '📱 Native Android App', '💵 Revenue Analytics'],
    featured: false,
    accentColor: '#ec4899',
    image: '/proj_hostel_android.png',
    techStack: ['Android SDK', 'Java', 'XML', 'SQLite', 'REST APIs', 'UI/UX Design'],
    github: 'https://github.com/jenilmashru8-pixel',
    demo: '#',
    keyFeatures: [
      'Automated room allocation engine matching resident preferences with hostel room inventory',
      'Resident record management, digital check-in/check-out logs, and attendance tracking',
      'Departmental revenue analytics module reporting room fees, amenities, and maintenance logs',
      'Offline-first SQLite local storage synchronized with remote RESTful web services'
    ],
    detailedOverview: 'Engineered native Android application modules during internship at Brainy Beam Technologies. Conducted client operational research to digitize hostel administration workflows and designed revenue reporting tools that helped hostel managers optimize room occupancy.',
    impactMetrics: [
      { label: 'Platform', value: 'Native Android (Java)' },
      { label: 'Data Store', value: 'SQLite + REST API' },
      { label: 'Target', value: 'Hostel Administration' }
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    )
  },
  {
    id: 'hotel-booking',
    title: 'Online Hotel Booking & Reservation System',
    category: 'Full-Stack Web',
    role: 'Web Developer Intern',
    organization: 'Miracle Technolabs',
    year: '2023 (Aug – Nov)',
    desc: 'Full-featured web application for online hotel reservations with dynamic room listings, interactive booking forms, user authentication, and guest management.',
    highlights: ['🏨 Dynamic Room Catalog', '🔐 Secure Auth', '📅 Interactive Booking'],
    featured: false,
    accentColor: '#06b6d4',
    image: '/proj_hotel_booking.png',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MySQL'],
    github: 'https://github.com/jenilmashru8-pixel',
    demo: '#',
    keyFeatures: [
      'Interactive room catalog with real-time price filtering and amenity tags',
      'Dynamic reservation engine validating dates and room availability',
      'User account portal for viewing booking history and managing reservations',
      'MySQL relational database schema managing guest profiles, rooms, and transaction records'
    ],
    detailedOverview: 'Built a full-stack hotel reservation platform during an internship at Miracle Technolabs. Designed responsive front-end interfaces connected to a RESTful Node.js backend and MySQL relational database to manage guests, rooms, and online reservations.',
    impactMetrics: [
      { label: 'Architecture', value: 'Full-Stack REST' },
      { label: 'Database', value: 'MySQL Relational' },
      { label: 'Interface', value: 'Responsive React' }
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    )
  },
  {
    id: 'wedding-guest',
    title: 'Wedding Guest List & RSVP Management System',
    category: 'Full-Stack Web',
    role: 'Full-Stack Developer',
    organization: 'Personal Project',
    year: '2024',
    desc: 'Digital guest list management system for organizing wedding invitations, RSVP tracking, table seating layouts, and guest attendance analytics.',
    highlights: ['💍 Live RSVP Tracking', '🪑 Seating Layout Engine', '✉️ Guest Analytics'],
    featured: false,
    accentColor: '#eab308',
    image: '/proj_wedding_guest.png',
    techStack: ['React', 'JavaScript', 'Node.js', 'Express', 'MySQL', 'CSS Grid'],
    github: 'https://github.com/jenilmashru8-pixel',
    demo: '#',
    keyFeatures: [
      'Digital invitation portal enabling guests to submit online RSVPs and meal choices',
      'Interactive table seating layout manager for event organizers',
      'Real-time guest count, attendance statistics, and dietary summary reports',
      'Exportable guest lists in CSV format for catering and venue management'
    ],
    detailedOverview: 'Developed an intuitive web platform to eliminate manual wedding guest tracking. Provides organizers with automated RSVP responses, dietary requirement tallies, and interactive seating chart tools.',
    impactMetrics: [
      { label: 'Focus', value: 'Event Logistics' },
      { label: 'Feature', value: 'Seating & RSVP' },
      { label: 'Export', value: 'CSV / Excel Ready' }
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <polyline points="16 11 18 13 22 9"/>
      </svg>
    )
  }
];

const categories = ['All', 'AI/ML & Research', 'Full-Stack Web', 'Mobile & IoT'];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const filteredProjects = activeTab === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeTab);

  return (
    <div style={{ width: '100%' }}>
      {/* Header Block */}
      <div className="cert-header-center">
        <span className="section-tag" style={{ display: 'inline-block', marginBottom: '8px' }}>
          // FEATURED WORK & CODE
        </span>
        <h2 className="cert-heading" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <DecryptedText
            text="Projects & Innovations"
            speed={40}
            maxIterations={12}
            sequential={true}
            animateOn="view"
            revealDirection="start"
            className="revealed-title"
            encryptedClassName="encrypted-title"
          />
        </h2>
        <p className="cert-subheading">
          A showcase of AI/ML research papers, full-stack web platforms, native Android applications, and IoT systems
        </p>

        {/* Category Filter Pills */}
        <div className="cert-filter-container">
          {categories.map(cat => {
            const count = cat === 'All' ? projectsData.length : projectsData.filter(p => p.category === cat).length;
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                className={`cert-filter-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                <span>{cat}</span>
                <span className="cert-filter-count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-cards-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card glass-card in-view">
            <div className="project-card-header">
              <span className="cert-issuer-tag" style={{ borderColor: project.accentColor, color: project.accentColor, background: `${project.accentColor}18` }}>
                {project.category}
              </span>
              {project.featured && (
                <span className="project-featured-badge">
                  ★ FEATURED
                </span>
              )}
            </div>

            <div className="project-preview-box">
              {project.image ? (
                <img src={project.image} alt={project.title} className="project-preview-img" />
              ) : (
                <div className="project-icon-wrapper">
                  {project.icon}
                </div>
              )}
            </div>

            <div className="project-card-body">
              {/* Highlight Tag Strip */}
              <div className="project-highlights-strip">
                {project.highlights.map((h, i) => (
                  <span key={i} className="highlight-pill" style={{ color: project.accentColor, borderColor: `${project.accentColor}33`, background: `${project.accentColor}0d` }}>
                    {h}
                  </span>
                ))}
              </div>

              <h3 className="project-title">
                <DecryptedText
                  text={project.title}
                  speed={35}
                  maxIterations={8}
                  sequential={true}
                  animateOn="hover"
                  revealDirection="start"
                  className="title-revealed"
                  encryptedClassName="title-encrypted"
                />
              </h3>
              
              <div className="project-meta-row">
                <span className="meta-item"><strong>Role:</strong> {project.role}</span>
                <span className="meta-dot">•</span>
                <span className="meta-item"><strong>Year:</strong> {project.year}</span>
              </div>

              <p className="project-desc">{project.desc}</p>

              {/* Key Feature Bullets in Card */}
              <div className="project-card-features">
                <span className="features-title">Key Highlights:</span>
                <ul>
                  {project.keyFeatures.slice(0, 2).map((feat, idx) => (
                    <li key={idx}>
                      <span className="feat-check" style={{ color: project.accentColor }}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="tags-container" style={{ marginTop: '16px', marginBottom: '20px' }}>
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-card-footer">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-action-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>Code Repository</span>
              </a>

              <button
                type="button"
                className="project-action-btn secondary"
                onClick={() => setSelectedProject(project)}
              >
                <span>View Full Details</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div
            className="project-modal-card glass-card"
            onClick={(e) => e.stopPropagation()}
            style={{ borderTop: `3px solid ${selectedProject.accentColor}` }}
          >
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-category-wrap">
                <span className="cert-issuer-tag" style={{ borderColor: selectedProject.accentColor, color: selectedProject.accentColor, background: `${selectedProject.accentColor}18` }}>
                  {selectedProject.category}
                </span>
                {selectedProject.featured && (
                  <span className="project-featured-badge">
                    ★ FEATURED
                  </span>
                )}
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close detail modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Title & Subtitle */}
            <div className="modal-title-section">
              <div className="modal-icon-header">
                {selectedProject.icon}
                <div>
                  <h3 className="modal-project-title">{selectedProject.title}</h3>
                  <div className="modal-meta">
                    <span><strong>Role:</strong> {selectedProject.role}</span>
                    <span className="meta-dot">•</span>
                    <span><strong>Org:</strong> {selectedProject.organization}</span>
                    <span className="meta-dot">•</span>
                    <span><strong>Year:</strong> {selectedProject.year}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Image Banner */}
            {selectedProject.image && (
              <div className="modal-banner-box" style={{ width: '100%', height: '200px', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}

            {/* Impact Metrics Grid */}
            <div className="modal-metrics-grid">
              {selectedProject.impactMetrics.map((metric, i) => (
                <div key={i} className="metric-box" style={{ borderColor: `${selectedProject.accentColor}30` }}>
                  <div className="metric-value" style={{ color: selectedProject.accentColor }}>{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Detailed Overview */}
            <div className="modal-section">
              <h4 className="modal-section-heading">Detailed Overview</h4>
              <p className="modal-overview-text">{selectedProject.detailedOverview}</p>
            </div>

            {/* Key Engineering Features */}
            <div className="modal-section">
              <h4 className="modal-section-heading">Key Features & Architecture</h4>
              <ul className="modal-features-list">
                {selectedProject.keyFeatures.map((feat, idx) => (
                  <li key={idx}>
                    <span className="feat-bullet" style={{ color: selectedProject.accentColor }}>✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="modal-section">
              <h4 className="modal-section-heading">Technologies & Frameworks</h4>
              <div className="tags-container">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="tech-chip" style={{ background: 'rgba(255,255,255,0.06)', color: '#ffffff' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="modal-footer">
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="project-action-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>View GitHub Repository</span>
              </a>

              <button
                type="button"
                className="project-action-btn secondary"
                onClick={() => setSelectedProject(null)}
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

