import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import DecryptedText from './DecryptedText';
import ScrollReveal from './ScrollReveal';

const certData = [
  // --- INTERNSHIPS & WORK ---
  {
    id: 'nayara-pssr',
    title: 'Nayara Energy — Digital PSSR Industrial Training',
    issuer: 'NAYARA ENERGY LIMITED',
    year: '2026',
    category: 'Internships & Work',
    desc: 'Certified Industrial Training on Digital PSSR (Pre-Commissioning & Startup Safety Review) at Nayara Energy Refinery Division under Head of Training Mr. Chirag Agara (23-06-2026 to 22-07-2026).',
    badgeColor: '#38bdf8',
    thumbnail: '/nayara_pssr_cert.png',
    file: '/nayara_pssr_cert.pdf',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    )
  },
  {
    id: 'india-onion',
    title: 'India Onion — Market Intelligence Portal Internship',
    issuer: 'INDIA ONION',
    year: '2026',
    category: 'Internships & Work',
    desc: 'Frontend Developer internship building AI agricultural market intelligence dashboards, price trend analytics, and data pipelines (Ref: ION/CERT/2026/5792).',
    badgeColor: '#10b981',
    thumbnail: '/india_onion_cert.png',
    file: '/india_onion_cert.pdf',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2"/>
        <path d="M7 8h10M7 12h10M7 16h6"/>
      </svg>
    )
  },
  {
    id: 'sukem-android',
    title: 'Su-kEm Tech Lab — Android Developer Internship',
    issuer: 'SU-KEM TECH LAB',
    year: '2024',
    category: 'Internships & Work',
    desc: 'Completed 45-day intensive Android App Development Internship Programme (27th Jun 2024 to 7th Aug 2024) engineering native Java & XML mobile modules.',
    badgeColor: '#a855f7',
    thumbnail: '/sukem_android_cert.png',
    images: ['/sukem_android_cert.png', '/sukem_offer_letter.png'],
    file: '/sukem_android_cert.pdf',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    )
  },
  {
    id: 'miracle',
    title: 'Miracle Technolabs — Web Developer Intern',
    issuer: 'MIRACLE TECHNOLABS',
    year: '2023',
    category: 'Internships & Work',
    desc: 'Built responsive web interfaces, React components, and optimized website load speed during 3-month internship (10/05/2023 to 10/08/2023).',
    badgeColor: '#f59e0b',
    thumbnail: '/miracle_cert.jpg',
    file: '/miracle_cert.jpg',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    )
  },
  {
    id: 'gtu-diploma',
    title: 'Diploma CS Engineering — Distinction (9.31 CGPA)',
    issuer: 'GTU / KALYAN POLYTECHNIC',
    year: '2026',
    category: 'Internships & Work',
    desc: 'Official Certificate of Passing awarded by Gujarat Technological University (GTU) for Diploma in Computer Science & Engineering at Kalyan Polytechnic with First Class with Distinction (9.31 CGPA, Enrolment No. 229830331033).',
    badgeColor: '#eab308',
    thumbnail: '/gtu_diploma_cert.jpg',
    file: '/gtu_diploma_cert.jpg',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    )
  },

  // --- HACKATHONS & COMPETITIONS ---
  {
    id: 'backend-prod',
    title: 'Backend Production Day Competition',
    issuer: 'Adani University (ASPDC)',
    year: '2026',
    category: 'Hackathons & Competitions',
    desc: 'Demonstrated backend engineering skills by building efficient, scalable web solutions under competitive live development constraints.',
    badgeColor: '#a855f7',
    thumbnail: '/backend_prod_cert.png',
    file: '/backend_prod_cert.pdf',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    )
  },
  {
    id: 'aetrix-hackathon',
    title: 'PDEU Aetrix 36-Hour Hackathon',
    issuer: 'PDEU (OSAIL & S&T Committee)',
    year: '2026',
    category: 'Hackathons & Competitions',
    desc: 'Certificate of Participation in Aetrix 36-Hour Hackathon (21st-22nd March 2026) recognizing innovation, technical excellence and problem solving skills in software engineering.',
    badgeColor: '#10b981',
    thumbnail: '/aetrix_hackathon_cert.png',
    file: '/aetrix_hackathon_cert.pdf',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        <circle cx="12" cy="12" r="4" fill="#10b981" fillOpacity="0.2"/>
      </svg>
    )
  },
  {
    id: 'drobotics',
    title: 'DROBOTICS Conclave 2026',
    issuer: 'Adani Defence & Adani University',
    year: '2026',
    category: 'Hackathons & Competitions',
    desc: 'Certified Certificate of Participation in Drobotics Conclave 2026 organized by Adani University Robotics Club & Adani Defence & Aerospace.',
    badgeColor: '#ec4899',
    thumbnail: '/drobotics_cert.jpeg',
    file: '/drobotics_cert.jpeg',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2"/>
        <circle cx="12" cy="5" r="2"/>
        <path d="M12 7v4M8 16h.01M16 16h.01"/>
      </svg>
    )
  },
  {
    id: 'tarkshaastra',
    title: 'TarkShaastra 2K26 24-Hour Hackathon',
    issuer: 'LDCE Lakshya 2.0',
    year: '2026',
    category: 'Hackathons & Competitions',
    desc: 'Participated in the Online Round for TarkShaastra 2k26 24-Hour Hackathon under Lakshya 2.0 TechFest at L.D. College of Engineering, Ahmedabad (5th April 2026).',
    badgeColor: '#38bdf8',
    thumbnail: '/tarkshaastra_cert.png',
    file: '/tarkshaastra_cert.pdf',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
        <line x1="14" y1="4" x2="10" y2="20"/>
      </svg>
    )
  },
  {
    id: 'sou-pm',
    title: 'State Champion Band & PM Narendra Modi Event',
    issuer: 'St. Xavier School, Jamnagar (SOU)',
    year: '2021',
    category: 'Hackathons & Competitions',
    desc: 'Achieved the title of State Champion with school band team and performed in front of Prime Minister Shri Narendra Modi at the Statue of Unity (Ref: SX/2021-22/189).',
    badgeColor: '#f59e0b',
    thumbnail: '/sou_champion_cert.jpg',
    file: '/sou_champion_cert.jpg',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  },

  // --- TECHNICAL CERTIFICATIONS ---
  {
    id: 'ibm-prompt',
    title: 'Prompt Engineering for Everyone',
    issuer: 'IBM Skills Network / Cognitive Class',
    year: '2025',
    category: 'Technical Certifications',
    desc: 'Generative AI prompting techniques, LLM tuning, chain-of-thought workflows, and AI application design certified by IBM & Cognitive Class.',
    badgeColor: '#38bdf8',
    thumbnail: '/ibm_prompt_cert.png',
    file: '/ibm_prompt_cert.pdf',
    externalLink: 'https://courses.cognitiveclass.ai/certificates/7535b83cfda54cd19c1c7a6c20975f97',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z"/>
        <path d="M12 12L2.1 12a10 10 0 0 0 17.8 5.7"/>
      </svg>
    )
  },
  {
    id: 'yuva-ai',
    title: 'Yuva AI for All',
    issuer: 'MeitY & NASSCOM FutureSkills Prime',
    year: '2025',
    category: 'Technical Certifications',
    desc: 'Artificial Intelligence foundations, Machine Learning model workflows, and emerging AI ecosystem principles certified by MeitY & NASSCOM.',
    badgeColor: '#10b981',
    thumbnail: '/yuva_ai_cert.png',
    file: '/yuva_ai_cert.pdf',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v8M8 12h8"/>
      </svg>
    )
  },

  // --- VOLUNTEERING & COMMUNITY ---
  {
    id: 'red-cross',
    title: 'Red Cross Society — Blood Donation Volunteer & Donor',
    issuer: 'Indian Red Cross Society (Ahmedabad Branch)',
    year: '2026',
    category: 'Volunteering & Community',
    desc: 'Voluntary service certificate for organizing Blood Donation Camp (Mission 25/25) at Adani University campus on 15th April 2026.',
    badgeColor: '#ef4444',
    thumbnail: '/redcross_volunteer_cert.png',
    images: ['/redcross_volunteer_cert.png', '/redcross_donor_cert.png'],
    file: '/redcross_volunteer_cert.pdf',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    )
  },
  {
    id: 'kukdukoo-fest',
    title: 'Kukdukoo Fest 2026 — Community Service Volunteer',
    issuer: 'Kukdukoo Fest & Adani International School',
    year: '2026',
    category: 'Volunteering & Community',
    desc: 'Completed 20 hours of community service as a volunteer managing the Ahmedabad edition of Kukdukoo Fest 2026 at Adani Shantigram Cricket Ground (14th-15th Feb 2026).',
    badgeColor: '#f59e0b',
    thumbnail: '/kukdukoo_fest_cert.png',
    file: '/kukdukoo_fest_cert.pdf',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  },
  {
    id: 'iete-volunteer',
    title: 'IETE West Zone Seminar & ISF Congress 2026',
    issuer: 'IETE Ahmedabad',
    year: '2026',
    category: 'Volunteering & Community',
    desc: 'Certificate of Appreciation for serving as Student Volunteer for IETE West Zone Seminar & ISF Congress on "Trends and Innovations in Aerospace Electronics" (7th-8th Feb 2026).',
    badgeColor: '#3b82f6',
    thumbnail: '/iete_volunteer_cert.png',
    file: '/iete_volunteer_cert.pdf',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    )
  },
  {
    id: 'ieee-volunteer',
    title: 'IEEE Certificate of Appreciation (AISYWLC 2025)',
    issuer: 'IEEE India Council & IEEE Gujarat Section',
    year: '2025',
    category: 'Volunteering & Community',
    desc: 'Awarded Certificate of Appreciation for exceptional dedication as a Volunteer organizing Cultural Night at AISYWLC 2025 (Adani University & Nirma University).',
    badgeColor: '#06b6d4',
    thumbnail: '/ieee_cert.jpg',
    file: '/ieee_cert.jpg',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    id: 'cyber-samwad',
    title: 'Cyber Samwad 2025 — National Cybersecurity Summit',
    issuer: 'IEEE Gujarat Section & Adani University',
    year: '2025',
    category: 'Volunteering & Community',
    desc: 'Certificate of Participation for CYBER SAMWAD 2025 – A National Cybersecurity Summit held on November 15, 2025 at Adani University, Ahmedabad, recognizing enthusiasm towards cyber awareness, digital safety, and responsible online practices.',
    badgeColor: '#10b981',
    thumbnail: '/cyber_samwad_cert.png',
    file: '/cyber_samwad_cert.png',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    )
  }
];

const categories = [
  'All',
  'Internships & Work',
  'Technical Certifications',
  'Hackathons & Competitions',
  'Volunteering & Community'
];

export default function CertificatesSection() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Close modal on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredCerts = activeTab === 'All'
    ? certData
    : certData.filter(c => c.category.toLowerCase() === activeTab.toLowerCase());

  const openModal = (cert, e) => {
    if (e) e.stopPropagation();
    setSelectedCert(cert);
    setActiveImageIdx(0);
  };

  const closeModal = () => {
    setSelectedCert(null);
    setActiveImageIdx(0);
  };

  return (
    <div style={{ width: '100%' }}>
      <div className="cert-header-center">
        <span className="section-tag" style={{ display: 'inline-block', marginBottom: '8px' }}>
          // PROFESSIONAL MILESTONES & HACKATHONS
        </span>
        
        <h2 className="cert-heading" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <DecryptedText
            text="Certificates & Awards"
            speed={40}
            maxIterations={12}
            sequential={true}
            animateOn="view"
            revealDirection="start"
            className="revealed-title"
            encryptedClassName="encrypted-title"
          />
        </h2>

        <ScrollReveal
          enableBlur={true}
          baseOpacity={0.1}
          baseRotation={3}
          blurStrength={4}
          containerClassName="cert-scroll-reveal"
        >
          A verified showcase of hackathons, technical certifications, state achievements, and community volunteer work
        </ScrollReveal>

        <div className="cert-stats-bar">
          <span className="cert-stat-badge">
            <strong>{certData.length}+</strong> Verified Credentials
          </span>
          <span className="cert-stat-divider">•</span>
          <span className="cert-stat-badge">
            <strong>10+</strong> Organizations & Industry Partners
          </span>
          <span className="cert-stat-divider">•</span>
          <span className="cert-stat-badge"><strong>2021–2026</strong></span>
        </div>
      </div>

      <div className="cert-filter-container">
        {categories.map(cat => {
          const count = cat === 'All' ? certData.length : certData.filter(i => i.category.toLowerCase() === cat.toLowerCase()).length;
          const isActive = activeTab.toLowerCase() === cat.toLowerCase();
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

      <div className="cert-cards-grid">
        {filteredCerts.map((cert) => (
          <div key={cert.id} className="cert-card glass-card in-view">
            <div className="cert-card-header">
              <span className="cert-issuer-tag" style={{ borderColor: cert.badgeColor, color: cert.badgeColor, background: `${cert.badgeColor}18` }}>
                {cert.issuer}
              </span>
              <span className="cert-year-tag">{cert.year}</span>
            </div>

            <div
              className="cert-card-preview"
              onClick={(e) => cert.thumbnail && openModal(cert, e)}
              style={{ cursor: cert.thumbnail ? 'pointer' : 'default' }}
            >
              {cert.thumbnail ? (
                <div className="cert-img-wrapper">
                  <img
                    src={cert.thumbnail}
                    alt={cert.title}
                    className="cert-preview-img"
                  />
                  <div className="cert-hover-overlay">
                    <span className="cert-hover-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                      Preview Photo
                    </span>
                  </div>
                </div>
              ) : (
                <div className="cert-svg-graphic">
                  {cert.icon}
                </div>
              )}
            </div>

            <div className="cert-card-body">
              <h3 className="cert-title" onClick={(e) => cert.thumbnail && openModal(cert, e)} style={{ cursor: cert.thumbnail ? 'pointer' : 'default' }}>
                <DecryptedText
                  text={cert.title}
                  speed={35}
                  maxIterations={8}
                  sequential={true}
                  animateOn="hover"
                  revealDirection="start"
                  className="title-revealed"
                  encryptedClassName="title-encrypted"
                />
              </h3>
              <p className="cert-category" style={{ color: cert.badgeColor }}>{cert.category}</p>
              <p className="cert-desc">{cert.desc}</p>
            </div>

            <div className="cert-card-footer" style={{ display: 'flex', gap: '8px' }}>
              {cert.thumbnail && (
                <button
                  onClick={(e) => openModal(cert, e)}
                  className="cert-link-btn"
                  style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', cursor: 'pointer', flex: 1, padding: '8px 12px', borderRadius: '8px' }}
                >
                  PREVIEW PHOTO <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '4px' }}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button>
              )}

              {cert.file ? (
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link-btn"
                  style={{ textDecoration: 'none', flex: 1, display: 'inline-flex', justifyContent: 'center', background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#10b981', padding: '8px 12px', borderRadius: '8px' }}
                >
                  VIEW PDF <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '4px' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              ) : cert.externalLink ? (
                <a
                  href={cert.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link-btn"
                  style={{ textDecoration: 'none', flex: 1, display: 'inline-flex', justifyContent: 'center', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#38bdf8', padding: '8px 12px', borderRadius: '8px' }}
                >
                  VERIFY <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '4px' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      {/* FULL-SCREEN CERTIFICATE PHOTO LIGHTBOX MODAL (PORTALED TO BODY) */}
      {selectedCert && createPortal(
        <div className="cert-modal-backdrop" onClick={closeModal}>
          <div className="cert-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="cert-modal-header">
              <div>
                <span className="cert-issuer-tag" style={{ borderColor: selectedCert.badgeColor, color: selectedCert.badgeColor, background: `${selectedCert.badgeColor}18` }}>
                  {selectedCert.issuer}
                </span>
                <h2 className="cert-modal-title">{selectedCert.title}</h2>
                <p className="cert-modal-subtitle">{selectedCert.category} • {selectedCert.year}</p>
              </div>
              <button className="cert-modal-close" onClick={closeModal} aria-label="Close modal">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Page / Image Switcher if multiple images exist */}
            {selectedCert.images && selectedCert.images.length > 1 && (
              <div className="cert-modal-page-tabs">
                {selectedCert.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`cert-page-tab-btn ${activeImageIdx === idx ? 'active' : ''}`}
                    onClick={() => setActiveImageIdx(idx)}
                  >
                    Page {idx + 1}
                  </button>
                ))}
              </div>
            )}

            {/* Modal Main Image */}
            <div className="cert-modal-body">
              <a
                href={selectedCert.images ? selectedCert.images[activeImageIdx] : selectedCert.thumbnail}
                target="_blank"
                rel="noopener noreferrer"
                title="Click to open image in full resolution"
                style={{ display: 'inline-block', textAlign: 'center' }}
              >
                <img
                  src={selectedCert.images ? selectedCert.images[activeImageIdx] : selectedCert.thumbnail}
                  alt={selectedCert.title}
                  className="cert-modal-img"
                />
              </a>
            </div>

            {/* Modal Footer */}
            <div className="cert-modal-footer">
              <p className="cert-modal-desc">{selectedCert.desc}</p>
              <div className="cert-modal-actions">
                <a
                  href={selectedCert.images ? selectedCert.images[activeImageIdx] : selectedCert.thumbnail}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gray-box"
                  style={{ textDecoration: 'none', padding: '10px 18px', fontSize: '0.85rem' }}
                >
                  Full Res Image ↗
                </a>
                {selectedCert.file && (
                  <a
                    href={selectedCert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn magnetic-btn"
                    style={{ textDecoration: 'none', padding: '10px 20px', fontSize: '0.85rem' }}
                  >
                    <span>Open / Download PDF</span>
                  </a>
                )}
                <button
                  className="btn-gray-box"
                  onClick={closeModal}
                  style={{ padding: '10px 20px', fontSize: '0.85rem', cursor: 'pointer' }}
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

