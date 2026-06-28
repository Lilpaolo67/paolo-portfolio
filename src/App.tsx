import { useState, useEffect, useRef } from 'react';
import { Send, X, MessageSquare, Mail, ExternalLink, Download } from 'lucide-react';
import './index.css';

/* â”€â”€â”€ Animated Boat Scene â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const BoatScene = () => {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: `${(i * 37) % 100}%`,
    top: `${(i * 17) % 55}%`,
    delay: `${((i * 0.3) % 3).toFixed(2)}s`,
    duration: `${(2 + (i % 3)).toFixed(2)}s`,
    size: `${(1 + (i % 2)).toFixed(1)}px`,
  }));
  return (
    <div className="boat-scene">
      {stars.map(s => (
        <div key={s.id} className="star" style={{ left: s.left, top: s.top, animationDelay: s.delay, animationDuration: s.duration, width: s.size, height: s.size }} />
      ))}
      <div className="moon" />
      <div className="horizon-glow" />
      <svg className="ocean-svg" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a0520" />
            <stop offset="60%" stopColor="#0f0a2e" />
            <stop offset="100%" stopColor="#1a1040" />
          </linearGradient>
          <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0d2060" />
            <stop offset="100%" stopColor="#050d30" />
          </linearGradient>
          <linearGradient id="hullGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#0f0c2e" />
          </linearGradient>
          <linearGradient id="sailGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f8f8ff" />
            <stop offset="100%" stopColor="#c7d2fe" />
          </linearGradient>
          <filter id="portGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <clipPath id="seaClip"><rect x="0" y="270" width="800" height="230" /></clipPath>
        </defs>
        <rect width="800" height="500" fill="url(#skyGrad)" />
        <ellipse cx="400" cy="340" rx="25" ry="120" fill="rgba(167,139,250,0.06)" />
        <rect x="0" y="270" width="800" height="230" fill="url(#seaGrad)" />
        <g clipPath="url(#seaClip)">
          <path className="wave wave1" d="M-100,280 Q50,265 200,280 Q350,295 500,280 Q650,265 800,280 Q950,295 1100,280 L1100,500 L-100,500 Z" fill="rgba(99,102,241,0.12)" />
          <path className="wave wave2" d="M-100,295 Q100,280 300,295 Q500,310 700,295 Q900,280 1100,295 L1100,500 L-100,500 Z" fill="rgba(99,102,241,0.10)" />
          <path className="wave wave3" d="M-100,308 Q150,295 400,308 Q650,321 900,308 Q1050,295 1200,308 L1200,500 L-100,500 Z" fill="rgba(67,56,202,0.15)" />
        </g>
        <g className="boat-bob">
          {/* ── Luxury Yacht ── */}

          {/* Main hull — wide, sleek, pointed bow */}
          <path d="M210,308 L530,308 L545,318 Q400,332 255,318 Z" fill="url(#hullGrad)" stroke="#4338ca" strokeWidth="1.5" />
          {/* Hull waterline accent stripe */}
          <path d="M255,318 Q400,328 545,318" stroke="#6366f1" strokeWidth="2" fill="none" opacity="0.8" />
          {/* Bow point */}
          <path d="M530,308 L555,310 Q548,320 545,318 L530,318 Z" fill="#1e1b4b" stroke="#4338ca" strokeWidth="1" />

          {/* Main deck surface */}
          <rect x="220" y="296" width="310" height="13" rx="2" fill="#16133a" stroke="#3730a3" strokeWidth="1" />

          {/* Lower cabin (main body) */}
          <rect x="260" y="262" width="220" height="35" rx="4" fill="url(#hullGrad)" stroke="#4338ca" strokeWidth="1.2" />
          {/* Lower cabin windows — row of 5 */}
          <rect x="272" y="270" width="22" height="14" rx="3" fill="rgba(165,180,252,0.18)" stroke="#6366f1" strokeWidth="1" />
          <rect x="303" y="270" width="22" height="14" rx="3" fill="rgba(165,180,252,0.18)" stroke="#6366f1" strokeWidth="1" />
          <rect x="334" y="270" width="22" height="14" rx="3" fill="rgba(165,180,252,0.18)" stroke="#6366f1" strokeWidth="1" />
          <rect x="365" y="270" width="22" height="14" rx="3" fill="rgba(165,180,252,0.18)" stroke="#6366f1" strokeWidth="1" />
          <rect x="396" y="270" width="22" height="14" rx="3" fill="rgba(165,180,252,0.15)" stroke="#6366f1" strokeWidth="1" />
          {/* Window inner glow */}
          <rect x="274" y="272" width="18" height="10" rx="2" fill="rgba(99,102,241,0.12)" />
          <rect x="305" y="272" width="18" height="10" rx="2" fill="rgba(99,102,241,0.12)" />
          <rect x="336" y="272" width="18" height="10" rx="2" fill="rgba(99,102,241,0.12)" />
          <rect x="367" y="272" width="18" height="10" rx="2" fill="rgba(99,102,241,0.12)" />

          {/* Bridge deck (upper cabin) */}
          <rect x="290" y="237" width="165" height="28" rx="4" fill="#1a1745" stroke="#4338ca" strokeWidth="1.2" />
          {/* Bridge windows — panoramic wraparound */}
          <rect x="298" y="242" width="148" height="14" rx="3" fill="rgba(165,180,252,0.2)" stroke="#6366f1" strokeWidth="1" />
          <line x1="340" y1="242" x2="340" y2="256" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
          <line x1="380" y1="242" x2="380" y2="256" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
          <line x1="420" y1="242" x2="420" y2="256" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />

          {/* Top sundeck */}
          <rect x="305" y="225" width="135" height="13" rx="3" fill="#12104a" stroke="#3730a3" strokeWidth="1" />

          {/* Radar mast */}
          <line x1="370" y1="225" x2="370" y2="185" stroke="#e2e8f0" strokeWidth="2" />
          <line x1="355" y1="195" x2="385" y2="195" stroke="#e2e8f0" strokeWidth="1.5" />
          {/* Radar dish */}
          <ellipse cx="370" cy="192" rx="12" ry="5" fill="none" stroke="#a5b4fc" strokeWidth="1.5" />
          <line x1="370" y1="192" x2="370" y2="187" stroke="#a5b4fc" strokeWidth="1.5" />
          {/* Radar spin glow */}
          <circle cx="370" cy="192" r="3" fill="#6366f1" opacity="0.7" filter="url(#portGlow)" />
          {/* Antenna */}
          <line x1="440" y1="225" x2="440" y2="200" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="440" cy="199" r="2" fill="#a5b4fc" />

          {/* Deck railings */}
          <line x1="220" y1="296" x2="220" y2="285" stroke="#475569" strokeWidth="1" />
          <line x1="530" y1="296" x2="530" y2="285" stroke="#475569" strokeWidth="1" />
          <line x1="220" y1="291" x2="530" y2="291" stroke="#334155" strokeWidth="0.8" />

          {/* Person silhouette on upper sundeck */}
          {/* Body */}
          <rect x="415" y="213" width="7" height="13" rx="2" fill="#818cf8" />
          {/* Head */}
          <circle cx="418" cy="210" r="4.5" fill="#a5b4fc" />
          {/* Arm waving */}
          <path d="M422,217 Q433,209 437,205" stroke="#818cf8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Legs */}
          <line x1="416" y1="226" x2="414" y2="233" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
          <line x1="420" y1="226" x2="422" y2="233" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />

          {/* Bow wake spray */}
          <path d="M545,315 Q565,305 580,310 Q565,318 545,320 Z" fill="rgba(165,180,252,0.12)" />
          <path d="M548,318 Q570,310 585,316" stroke="rgba(165,180,252,0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Stern flag */}
          <line x1="220" y1="285" x2="220" y2="270" stroke="#94a3b8" strokeWidth="1.5" />
          <path d="M220,270 L235,274 L220,278 Z" fill="#6366f1" />
        </g>
        <g opacity="0.3">
          <line className="shimmer" x1="150" y1="340" x2="250" y2="340" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round" />
          <line className="shimmer shimmer2" x1="540" y1="355" x2="630" y2="355" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" />
          <line className="shimmer shimmer3" x1="100" y1="370" x2="180" y2="370" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" />
          <line className="shimmer" x1="600" y1="380" x2="700" y2="380" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      </svg>
      <div className="scene-bottom-fade" />
    </div>
  );
};

/* â”€â”€â”€ Loading Screen â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const LoadingScreen = ({ visible }: { visible: boolean }) => (
  <div className={`loading-screen ${visible ? '' : 'loading-screen--hidden'}`}>
    <div className="loading-spinner-wrap">
      <div className="loading-ring" />
      <div className="loading-ring-spin" />
    </div>
    <p className="loading-text">LOADING</p>
  </div>
);

/* â”€â”€â”€ GitHub Calendar â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const GitHubCalendar = () => (
  <div className="github-calendar-floating">
    <h3 className="gh-cal-title">
      <svg role="img" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ color: '#6366f1', flexShrink: 0 }}>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
      GitHub Contributions
    </h3>
    <div className="gh-cal-img-wrap">
      <img src="https://ghchart.rshah.org/ec4899/Lilpaolo67" alt="Lilpaolo67 GitHub Contributions" style={{ width: '100%', height: 'auto', display: 'block' }} />
    </div>
  </div>
);

/* â”€â”€â”€ Main App â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export default function App() {
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'assistant' | 'user'; content: string }>>([
    { role: 'assistant', content: "Hi! I'm Paolo's virtual assistant. Ask me anything about his Marine Engineering background, Homewizie B2B integrations, or how to work together!" }
  ]);
  const [chatLoading, setChatLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setReady(true), 300);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const sendChat = async (text: string) => {
    if (!text.trim()) return;
    const msgs = [...chatMessages, { role: 'user' as const, content: text }];
    setChatMessages(msgs);
    setChatLoading(true);
    setChatInput('');
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setChatMessages([...msgs, { role: 'assistant' as const, content: data.response }]);
    } catch {
      setChatMessages([...msgs, { role: 'assistant' as const, content: "Sorry, I'm unavailable right now. Email Paolo at paolo@homewizie.com!" }]);
    } finally {
      setChatLoading(false);
    }
  };

  const projects = [
    { name: 'FUR AI SMART FEEDER', desc: 'AI-powered automatic pet feeder with 1080p camera, app control, and airtight food preservation. Currently live on e-commerce.', status: 'Launched', tech: ['IoT', 'App Control', 'Hardware'], link: 'https://fur.homewizie.com/' },
    { name: 'Homewizie B2B Platform', desc: 'Smart space integration platform for boutique hotels, premium residences, and corporate workspaces. Custom ambient tech deployments.', status: 'Live', tech: ['B2B', 'Smart Home', 'Enterprise'], link: 'https://homewizie.com' },
    { name: 'BREW Smart Coffee Hub', desc: 'Minimalist coffee machine with automatic bean detection, cup size sensing, and custom morning schedules.', status: 'In Development', tech: ['IoT', 'Sensors', 'Hardware'] },
    { name: 'AER Smart Purifier', desc: 'Fabric-wrapped air purifier with True HEPA H13 filtration, ultra-low power sleep mode, and organic light indicators.', status: 'Concept', tech: ['IoT', 'HEPA', 'Design'] },
  ];

  const skills = ['Marine Engineering', 'B2B Sales', 'IoT Systems', 'Product Design', 'Smart Home Tech', 'Thermodynamics', 'Hardware', 'Strategic Planning', 'React', 'TypeScript', 'Node.js', 'AI Integration'];

  return (
    <>
      <LoadingScreen visible={loading} />

      <main className={`portfolio-main ${ready ? 'portfolio-main--visible' : ''}`}>

        {/* Left sticky panel with animated boat */}
        <section className="left-panel">
          <BoatScene />
          <div className="left-panel-shadow-bottom" />
        </section>

        {/* Right scrollable content */}
        <section className="right-panel">

          {/* Hero */}
          <div className="hero-section glass-warm">
            <div className="hero-top">
              <div className="profile-ring-wrap">
                <div className="profile-ring">
                  <div className="profile-img-inner">
                    <img src="/profile.jpg" alt="Paolo Ando" className="profile-img" />
                  </div>
                </div>
              </div>
              <div className="hero-identity">
                <h1 className="gradient-text">Paolo Ando</h1>
                <p className="hero-role">Full Stack Ecom B2B and DTC Partner📈</p>
              </div>
            </div>

            <div className="hero-body">
              <div className="hero-bio">
                <p className="bio-primary">Marine Systems Engineer turned tech entrepreneur. I build smart ambient hardware that disappears into beautiful spaces.</p>
                <p className="bio-secondary">From managing ship engines on trans-oceanic vessels to leading Homewizie's B2B smart space division â€” I bring industrial-grade reliability to premium consumer technology.</p>
                <div className="hero-buttons">
                  <button className="btn-3d" onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>Get in touch</button>
                  <a href="/resume.pdf" download className="btn-outline-3d">
                    <Download size={14} />
                    Download CV
                  </a>
                </div>
              </div>
              <GitHubCalendar />
            </div>
          </div>

          {/* About */}
          <div className="content-section">
            <h2 className="section-heading">About</h2>
            <p className="section-text">I started my career as a Marine Systems Engineer operating heavy propulsion plants and diesel engines on cargo vessels. That obsession with system precision and zero failure tolerance now drives how I build and sell technology. I founded Homewizie to deploy premium ambient smart devices for hotels, residences, and workspaces.</p>
            <p className="section-text" style={{ marginTop: '0.75rem' }}>I also run a web design agency helping businesses get more clients through fast, modern, AI-automated websites.</p>
            <div className="skills-chips">
              {skills.map(s => <span key={s} className="skill-chip">{s}</span>)}
            </div>
          </div>

          {/* Experience */}
          <div className="content-section">
            <h2 className="section-heading">Experience</h2>
            <div className="timeline-list">
              <div className="timeline-entry">
                <div className="timeline-dot" />
                <div className="timeline-entry-body">
                  <div className="timeline-header">
                    <span className="timeline-role">CEO &amp; Founder</span>
                    <span className="timeline-period">2026 â€” Present</span>
                  </div>
                  <span className="timeline-company">Homewizie Inc.</span>
                  <p className="timeline-desc">Leading B2B enterprise smart space integrations for luxury hotels, premium residences, and corporate environments. Managing high-ticket sales pipeline, product distribution, and strategic partnerships.</p>
                  <div className="timeline-tags">
                    <span className="tl-tag">B2B Enterprise</span>
                    <span className="tl-tag">Smart Home</span>
                    <span className="tl-tag">High-Ticket Sales</span>
                    <span className="tl-tag">Product Launch</span>
                  </div>
                </div>
              </div>
              <div className="timeline-entry">
                <div className="timeline-dot" />
                <div className="timeline-entry-body">
                  <div className="timeline-header">
                    <span className="timeline-role">Marine Systems Engineer</span>
                    <span className="timeline-period">2025 â€” 2026</span>
                  </div>
                  <span className="timeline-company">Global Maritime Cargo Fleets</span>
                  <p className="timeline-desc">Operated and maintained gas turbines, multi-megawatt diesel engines, hydraulic steering systems, and electrical distribution plants on trans-oceanic vessels. Managed engine room crew under heavy sea conditions.</p>
                  <div className="timeline-tags">
                    <span className="tl-tag">Thermodynamics</span>
                    <span className="tl-tag">Propulsion Plants</span>
                    <span className="tl-tag">Hydraulic Systems</span>
                    <span className="tl-tag">System Safety</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="content-section">
            <h2 className="section-heading">Projects</h2>
            <div className="projects-grid">
              {projects.map(p => (
                <div key={p.name} className="project-card glass-warm">
                  <div className="project-card-top">
                    <div>
                      <span className={`project-status-badge ${p.status === 'Launched' || p.status === 'Live' ? 'badge-live' : p.status === 'In Development' ? 'badge-dev' : 'badge-concept'}`}>{p.status}</span>
                      <h3 className="project-name">{p.name}</h3>
                    </div>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link-btn" aria-label="View project">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tech">
                    {p.tech.map(t => <span key={t} className="tech-chip">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="content-section" id="contact-section">
            <h2 className="section-heading">Get in Touch</h2>
            <p className="section-text">Whether it's a Homewizie project, smart space deployment, or business opportunity â€” reach out directly.</p>
            <div className="contact-row">
              <a href="mailto:paolo@homewizie.com" className="contact-email-link"><Mail size={16} />paolo@homewizie.com</a>
              <a href="https://homewizie.com" target="_blank" rel="noopener noreferrer" className="contact-email-link"><ExternalLink size={16} />homewizie.com</a>
            </div>
            {formSent ? (
              <div className="form-success glass-warm"><p>âœ… Message sent! I'll get back to you soon.</p></div>
            ) : (
              <form className="contact-form glass-warm" onSubmit={e => { e.preventDefault(); if (formData.name && formData.email && formData.message) setFormSent(true); }}>
                <div className="form-row">
                  <div className="form-field"><label>Name</label><input type="text" required placeholder="Your Name" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} /></div>
                  <div className="form-field"><label>Email</label><input type="email" required placeholder="your@email.com" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} /></div>
                </div>
                <div className="form-field"><label>Message</label><textarea required placeholder="What's on your mind?" rows={5} value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} /></div>
                <button type="submit" className="btn-3d">Send Message</button>
              </form>
            )}
          </div>

          <footer className="portfolio-footer">
            <p>Paolo Ando Â© {new Date().getFullYear()} Â· Built with precision, engineered for calm.</p>
          </footer>
        </section>
      </main>

      {/* AI Chatbot */}
      <button className="chatbot-float-btn" onClick={() => setChatOpen(!chatOpen)} aria-label="Toggle chat">
        {chatOpen ? <X size={22} /> : <MessageSquare size={22} />}
      </button>
      <div className={`chatbot-panel ${chatOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="chat-avatar"><div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} /></div>
            <div><div className="chat-title">Paolo's Assistant</div><div className="chat-status">Online</div></div>
          </div>
          <button className="chat-close-btn" onClick={() => setChatOpen(false)} aria-label="Close chat"><X size={18} /></button>
        </div>
        <div className="chat-messages">
          {chatMessages.map((msg, i) => <div key={i} className={`chat-bubble ${msg.role}`}>{msg.content}</div>)}
          {chatLoading && <div className="chat-bubble assistant"><div className="loading-dots"><span /><span /><span /></div></div>}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-suggestions">
          <button className="suggestion-chip" onClick={() => sendChat("What is Homewizie's B2B model?")}>Homewizie B2B?</button>
          <button className="suggestion-chip" onClick={() => sendChat("Tell me about Paolo's engineering background.")}>Engineering background?</button>
          <button className="suggestion-chip" onClick={() => sendChat("How can I partner with Homewizie?")}>Partner with Homewizie?</button>
        </div>
        <form onSubmit={e => { e.preventDefault(); sendChat(chatInput); }} className="chat-input-form">
          <input type="text" className="chat-input" placeholder="Ask anything..." value={chatInput} onChange={e => setChatInput(e.target.value)} disabled={chatLoading} />
          <button type="submit" className="chat-send-btn" disabled={chatLoading} aria-label="Send message"><Send size={16} /></button>
        </form>
      </div>
    </>
  );
}
