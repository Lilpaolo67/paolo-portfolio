import { useState, useEffect } from 'react';
import { 
  Ship, 
  Compass, 
  Wind, 
  Coffee, 
  Cpu, 
  Sun, 
  Moon,  
  CheckCircle, 
  Mail, 
  ExternalLink,
  ChevronRight,
  Shield,
  Smartphone,
  Camera,
  Layers,
  Menu,
  X
} from 'lucide-react';
import './App.css';

const PropellerIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    width={size} 
    height={size} 
    className={`propeller-icon ${className}`}
  >
    <circle cx="12" cy="12" r="3" fill="currentColor" />
    <path d="M12 9c1.5-2.5 1-6-0.5-8-1 2.5-1 6 0.5 8z" fill="currentColor" />
    <path d="M15 12c2.5 1.5 6 1 8-0.5-2.5-1-6-1 8 0.5z" fill="currentColor" />
    <path d="M12 15c-1.5 2.5-1 6 0.5 8 1-2.5 1-6-0.5-8z" fill="currentColor" />
    <path d="M9 12c-2.5-1.5-6-1-8 0.5 2.5 1 6 1 8-0.5z" fill="currentColor" />
  </svg>
);

const AmbientWaves = () => {
  return (
    <div className="ambient-waves">
      <div className="ambient-wave top-wave">
        <svg viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="ambient-wave-path" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" />
          </defs>
          <g className="parallax">
            <use href="#ambient-wave-path" x="48" y="0" fill="rgba(56, 189, 248, 0.03)" />
            <use href="#ambient-wave-path" x="48" y="3" fill="rgba(45, 212, 191, 0.02)" />
          </g>
        </svg>
      </div>
      <div className="ambient-wave mid-wave">
        <svg viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <g className="parallax">
            <use href="#ambient-wave-path" x="48" y="0" fill="rgba(45, 212, 191, 0.02)" />
            <use href="#ambient-wave-path" x="48" y="5" fill="rgba(56, 189, 248, 0.015)" />
          </g>
        </svg>
      </div>
      <div className="ambient-wave bottom-wave">
        <svg viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <g className="parallax">
            <use href="#ambient-wave-path" x="48" y="0" fill="rgba(56, 189, 248, 0.04)" />
            <use href="#ambient-wave-path" x="48" y="3" fill="rgba(45, 212, 191, 0.03)" />
            <use href="#ambient-wave-path" x="48" y="5" fill="rgba(56, 189, 248, 0.02)" />
          </g>
        </svg>
      </div>
    </div>
  );
};

interface Product {
  id: string;
  name: string;
  status: 'Launched' | 'In Development' | 'Concept';
  desc: string;
  longDesc: string;
  icon: React.ReactNode;
  specs: string[];
}

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeProduct, setActiveProduct] = useState<string>('feeder');
  const [spinDegree, setSpinDegree] = useState<number>(0);
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Handle Navbar Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme Toggle Effect
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Compass spin effect
  const handleCompassClick = () => {
    setSpinDegree(prev => prev + 360 + Math.random() * 180);
  };

  // Contact Form Submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setContactSubmitted(true);
    }
  };

  const products: Product[] = [
    {
      id: 'feeder',
      name: 'FUR Smart Feeder',
      status: 'Launched',
      desc: 'Elegant pet care device featuring sealed food storage and companion camera.',
      longDesc: 'A design-first automatic pet feeder created to merge seamlessly into modern living rooms. Features airtight food fresh-locking mechanisms, micro-gram portion accuracy, and an ultra-wide angle HD night-vision camera for continuous reassurance.',
      icon: <Camera className="product-icon" size={24} />,
      specs: ['1080p camera with two-way audio', 'Double-lock food preservation', 'Backup battery power system', 'Homewizie App control']
    },
    {
      id: 'coffee',
      name: 'BREW Smart Coffee Hub',
      status: 'In Development',
      desc: 'Minimalist coffee machine with automatic bean detection and customized schedules.',
      longDesc: 'Engineered for coffee purists who value visual serenity. Designed as an ambient, stone-textured fixture. Detects cup size and bean type via weight sensors, pre-heating and custom-extracting on schedule for calmer mornings.',
      icon: <Coffee className="product-icon" size={24} />,
      specs: ['Precision thermal block system', 'Integrated burr grinder', 'Auto-scheduling & ambient status glow', 'Fits flush against backsplash']
    },
    {
      id: 'purifier',
      name: 'AER Smart Purifier',
      status: 'Concept',
      desc: 'Ambient, fabric-wrapped air filter with whisper-quiet operation and organic indicator lights.',
      longDesc: 'A sculptural take on home air purification. Wrapped in high-grade acoustic fabrics. Operates beneath 20dB to maintain auditory calm while using localized sensors to dynamically adapt to allergen spikes.',
      icon: <Wind className="product-icon" size={24} />,
      specs: ['True HEPA H13 filtration', 'Organic light indicator loop', 'Sound-absorbing fabric panels', 'Ultra-low power sleep state']
    }
  ];

  const selectedProduct = products.find(p => p.id === activeProduct) || products[0];

  return (
    <>
      <AmbientWaves />
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#hero" className="nav-logo">
            <Compass 
              className="compass-logo" 
              size={28} 
              style={{ 
                transform: `rotate(${spinDegree}deg)`, 
                transition: 'transform 1.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
                cursor: 'pointer'
              }}
              onClick={handleCompassClick}
            />
            <span>Paolo Ando</span>
          </a>
          
          <div className="nav-links">
            <a href="#hero" className="nav-link">Home</a>
            <a href="#journey" className="nav-link">The Voyage</a>
            <a href="#homewizie" className="nav-link">Homewizie</a>
            <a href="#skills" className="nav-link">Expertise</a>
            <a href="#contact" className="nav-link">Start Engines</a>
          </div>

          <div className="nav-actions">
            <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#contact" className="anchor-btn desktop-only">
              <PropellerIcon size={16} />
              <span>Start Engines</span>
            </a>
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#hero" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#journey" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>The Voyage</a>
          <a href="#homewizie" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Homewizie</a>
          <a href="#skills" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Expertise</a>
          <a href="#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Start Engines</a>
          <a href="#contact" className="anchor-btn mobile-anchor-btn" onClick={() => setMobileMenuOpen(false)}>
            <PropellerIcon size={16} />
            <span>Start Engines</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container hero-content">
          <div>
            <div className="hero-badge">
              <Ship size={14} />
              <span>Marine Engineering to CEO</span>
            </div>
            <h1 className="hero-title">
              Scale the Market with<br />
              Engineered Precision.
            </h1>
            <p className="hero-subtitle">
              Used to be a Marine Engineer, where everything had to be perfect. Now, I use that same experience to fix technical problems. I don't just sell you an equipment, I provide reliable products and solve the issues that people face everyday. Work with us to unlock your full potential.
            </p>
            <div className="hero-buttons">
              <a href="#journey" className="btn-primary">
                Explore My Voyage
                <PropellerIcon size={18} />
              </a>
              <a href="#homewizie" className="btn-secondary">
                View Homewizie
              </a>
            </div>
          </div>

          {/* Premium Floating Interactive Widget */}
          <div className="hero-visual">
            <div className="portrait-container">
              <div className="portrait-header">
                <Compass 
                  className="compass-icon" 
                  size={20} 
                  onClick={handleCompassClick}
                  style={{ 
                    transform: `rotate(${spinDegree}deg)`,
                    transition: 'transform 1s cubic-bezier(0.1, 0.8, 0.2, 1)',
                    cursor: 'pointer'
                  }}
                />
                <div className="device-dot"></div>
              </div>

              <div className="portrait-photo">
                <div className="helm-wrapper">
                  <img 
                    src="/profile.jpg" 
                    alt="Paolo Ando" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      borderRadius: '50%',
                      border: '2px solid var(--card-border)'
                    }} 
                  />
                </div>
                <div className="status-text">
                  <h3 className="status-name">Paolo Ando</h3>
                  <p className="status-title">CEO, Homewizie</p>
                </div>
              </div>

              <div className="portrait-footer">
                <span>LAT: 14.5995° N</span>
                <span>LON: 120.9842° E</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Ocean Waves */}
        <div className="wave-container">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" />
            </defs>
            <g className="parallax">
              <use href="#gentle-wave" x="48" y="0" fill="rgba(56, 189, 248, 0.08)" />
              <use href="#gentle-wave" x="48" y="3" fill="rgba(45, 212, 191, 0.05)" />
              <use href="#gentle-wave" x="48" y="5" fill="rgba(56, 189, 248, 0.03)" />
              <use href="#gentle-wave" x="48" y="7" fill="var(--bg-color)" opacity="0.9" />
            </g>
          </svg>
        </div>
      </section>

      {/* The Journey Section */}
      <section id="journey" className="section" style={{ background: 'rgba(255,255,255, 0.01)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">The Logbook</span>
            <h2 className="section-title">The Career Transition</h2>
            <p className="section-desc">
              My journey from navigating vast oceanic currents to steering a design-led technology startup.
            </p>
          </div>

          <div className="timeline">
            {/* Sailor Item */}
            <div className="timeline-item sea">
              <div className="timeline-node" />
              <div className="timeline-content">
                <div className="timeline-date">
                  <PropellerIcon size={14} /> 2025 — 2026
                </div>
                <h3 className="timeline-role">Marine Systems Engineer</h3>
                <p className="timeline-company">Global Maritime Cargo Fleets</p>
                <p className="timeline-body">
                  Directed operation and maintenance of gas turbines, multi-megawatt diesel engines, hydraulic steering systems, and electrical distribution plants on trans-oceanic vessels. Managed engine room crew and implemented strict redundancy protocols under heavy sea conditions. Charted engineering courses where equipment failure was not an option, seeding my obsession with system resilience, thermodynamics, and structural efficiency now utilized at Homewizie.
                </p>
                <div className="timeline-tags">
                  <span className="tag">Thermodynamics</span>
                  <span className="tag">Propulsion Plants</span>
                  <span className="tag">Hydraulic Systems</span>
                  <span className="tag">Failure Redundancy</span>
                </div>
              </div>
            </div>

            {/* CEO Item */}
            <div className="timeline-item ceo">
              <div className="timeline-node" />
              <div className="timeline-content">
                <div className="timeline-date">
                  <PropellerIcon size={14} /> 2026 — Present
                </div>
                <h3 className="timeline-role">CEO</h3>
                <p className="timeline-company">Homewizie Inc.</p>
                <p className="timeline-body">
                  Steering Homewizie's strategic pivot toward high-ticket B2B sales and enterprise smart space integrations. Leading commercial partnerships with boutique hotels, premium residential developers, and smart workspace environments to deploy custom ambient technology systems at scale. Managing corporate relationships, contract negotiations, and the hardware-software B2B distribution pipeline.
                </p>
                <div className="timeline-tags">
                  <span className="tag">B2B Enterprise</span>
                  <span className="tag">High-Ticket Sales</span>
                  <span className="tag">Smart Space Systems</span>
                  <span className="tag">Key Account Dev</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Homewizie Showcase Section */}
      <section id="homewizie" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">The Venture</span>
            <h2 className="section-title">B2B Smart Space Integrations</h2>
            <p className="section-desc">
              Homewizie designs and deploys custom ambient technology systems for luxury hospitality, corporate workspaces, and high-end residential projects.
            </p>
          </div>

          <div className="grid-2col">
            {/* Brand Intro Card */}
            <div className="brand-showcase">
              <h3 className="brand-logo-large">home<span>wizie</span></h3>
              <p className="brand-tagline">“Technology is best when it serves as ambient support, not constant distraction.”</p>
              <p className="brand-philosophy">
                We partner with high-end property developers, boutique hoteliers, and architects to deploy high-ticket ambient hardware solutions. By combining premium materials like stone and acoustic fabrics with industrial-grade reliability, we deliver custom smart ecosystems that elevate tenant satisfaction and guest wellness.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <span className="tag" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                  <Shield size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                  Enterprise Grade
                </span>
                <span className="tag" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                  <Layers size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                  B2B Smart Ecosystems
                </span>
                <span className="tag" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                  <Smartphone size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                  High-Ticket Integration
                </span>
              </div>
            </div>

            {/* Dynamic Product Selector */}
            <div className="product-slider">
              {/* Product list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                {products.map(p => (
                  <div 
                    key={p.id}
                    onClick={() => setActiveProduct(p.id)}
                    className={`product-card ${activeProduct === p.id ? 'active' : ''}`}
                  >
                    <div className="product-img-placeholder">
                      {p.icon}
                    </div>
                    <div className="product-info">
                      <div className="product-status-wrapper" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className={`product-status ${p.status === 'Launched' ? 'launched' : ''}`}>
                          {p.status}
                        </span>
                      </div>
                      <h4 className="product-name">{p.name}</h4>
                      <p className="product-desc">{p.desc}</p>
                    </div>
                    <ChevronRight size={18} style={{ opacity: activeProduct === p.id ? 1 : 0.3, transition: '0.2s' }} />
                  </div>
                ))}
              </div>

              {/* Product Deep Detail Card */}
              <div 
                style={{ 
                  background: 'rgba(255,255,255,0.02)', 
                  border: '1px solid var(--card-border)', 
                  borderRadius: '16px', 
                  padding: '2rem',
                  transition: 'opacity 0.3s ease-in-out'
                }}
              >
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {selectedProduct.name} Details
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  {selectedProduct.longDesc}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {selectedProduct.specs.map((spec, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-color)' }}>
                      <CheckCircle size={12} style={{ color: 'var(--accent)' }} />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="skills" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Skill Set</span>
            <h2 className="section-title">Core Competencies</h2>
            <p className="section-desc">
              My skill set bridges physical navigation, industrial design leadership, and software/hardware alignment.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon-box">
                <Ship size={24} />
              </div>
              <h3 className="skill-title">Nautical Command</h3>
              <p className="skill-description">
                Extensive experience directing teams in high-stress offshore conditions. Deep familiarity with shipboard mechanics, weather routing, and strict safety redundancies.
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-icon-box">
                <Layers size={24} />
              </div>
              <h3 className="skill-title">Design Philosophy</h3>
              <p className="skill-description">
                Rooted in functional minimalism. Designing consumer tech products by removing visual friction and focusing on tactile, ambient value.
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-icon-box">
                <Cpu size={24} />
              </div>
              <h3 className="skill-title">IoT & Electronics</h3>
              <p className="skill-description">
                Bridging app controls with hardware mechanics. Understanding smart cameras, airtight seals, motors, sensor feeds, and local network setups.
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-icon-box">
                <Compass size={24} />
              </div>
              <h3 className="skill-title">Strategic Execution</h3>
              <p className="skill-description">
                Coordinating capital raising, product supply chains, certification gates, and launching products from scratch into e-commerce ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Get in Touch</span>
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-desc">
              Whether you want to discuss Homewizie projects, smart home ideas, marine systems, or business opportunities.
            </p>
          </div>

          <div className="contact-grid">
            {/* Info Column */}
            <div className="contact-info">
              <div>
                <h3 className="contact-title-small">Let's Build Together</h3>
                <p className="contact-subtitle">
                  Reach out directly or send a message using the form below. Let's make something great together.
                </p>
              </div>

              <div className="contact-method">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>paolo@homewizie.com</p>
                </div>
              </div>


            </div>

            {/* Form Column */}
            <div className="contact-card">
              {contactSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <CheckCircle size={48} style={{ color: 'var(--accent)', marginBottom: '1.5rem', display: 'inline-block' }} />
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Message Sent</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                    Thank you, {formData.name}. Your message was sent successfully. I will read it and reply as soon as possible.
                  </p>
                  <button 
                    onClick={() => { setContactSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                    className="btn-secondary"
                    style={{ marginTop: '2rem' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="form-input" 
                      required 
                      value={formData.name}
                      onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Your Name" 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="form-input" 
                      required 
                      value={formData.email}
                      onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your.email@domain.com" 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="form-input" 
                      value={formData.subject}
                      onChange={e => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      placeholder="Business Partnership / Homewizie Question" 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      className="form-input" 
                      required 
                      value={formData.message}
                      onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Write your message here..."
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    <span>Send Message</span>
                    <PropellerIcon size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontStyle: 'italic', fontWeight: 600 }}>
            <Compass size={18} style={{ color: 'var(--primary)' }} />
            <span>Paolo Ando &copy; {new Date().getFullYear()}</span>
          </div>
          
          <p className="footer-copyright">
            Designed for Ambient Calmness & Maritime Resilience. All rights reserved.
          </p>

          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://homewizie.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Homewizie Site">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
