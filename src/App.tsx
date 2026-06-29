import { useState, useEffect, useRef } from 'react';
import { Send, X, MessageSquare, Mail, ExternalLink, Download } from 'lucide-react';
import './index.css';

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Animated Boat Scene Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
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
            <stop offset="0%" stopColor="#3b0a24" />
            <stop offset="100%" stopColor="#0f0c2e" />
          </linearGradient>
          <linearGradient id="sailGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f8f8ff" />
            <stop offset="100%" stopColor="#fce7f3" />
          </linearGradient>
          <filter id="portGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <clipPath id="seaClip"><rect x="0" y="270" width="800" height="230" /></clipPath>
        </defs>
        <rect width="800" height="500" fill="url(#skyGrad)" />
        <ellipse cx="400" cy="340" rx="25" ry="120" fill="rgba(249,168,212,0.06)" />
        <rect x="0" y="270" width="800" height="230" fill="url(#seaGrad)" />
        <g clipPath="url(#seaClip)">
          <path className="wave wave1" d="M-100,280 Q50,265 200,280 Q350,295 500,280 Q650,265 800,280 Q950,295 1100,280 L1100,500 L-100,500 Z" fill="rgba(236,72,153,0.12)" />
          <path className="wave wave2" d="M-100,295 Q100,280 300,295 Q500,310 700,295 Q900,280 1100,295 L1100,500 L-100,500 Z" fill="rgba(236,72,153,0.10)" />
          <path className="wave wave3" d="M-100,308 Q150,295 400,308 Q650,321 900,308 Q1050,295 1200,308 L1200,500 L-100,500 Z" fill="rgba(219,39,119,0.15)" />
        </g>
        <g className="boat-bob">
          {/* â”€â”€ Luxury Yacht â”€â”€ */}

          {/* Main hull â€” wide, sleek, pointed bow */}
          <path d="M210,308 L530,308 L545,318 Q400,332 255,318 Z" fill="url(#hullGrad)" stroke="#be185d" strokeWidth="1.5" />
          {/* Hull waterline accent stripe */}
          <path d="M255,318 Q400,328 545,318" stroke="#ec4899" strokeWidth="2" fill="none" opacity="0.8" />
          {/* Bow point */}
          <path d="M530,308 L555,310 Q548,320 545,318 L530,318 Z" fill="#3b0a24" stroke="#be185d" strokeWidth="1" />

          {/* Main deck surface */}
          <rect x="220" y="296" width="310" height="13" rx="2" fill="#1a0614" stroke="#9d174d" strokeWidth="1" />

          {/* Lower cabin (main body) */}
          <rect x="260" y="262" width="220" height="35" rx="4" fill="url(#hullGrad)" stroke="#be185d" strokeWidth="1.2" />
          {/* Lower cabin windows â€” row of 5 */}
          <rect x="272" y="270" width="22" height="14" rx="3" fill="rgba(249,168,212,0.18)" stroke="#ec4899" strokeWidth="1" />
          <rect x="303" y="270" width="22" height="14" rx="3" fill="rgba(249,168,212,0.18)" stroke="#ec4899" strokeWidth="1" />
          <rect x="334" y="270" width="22" height="14" rx="3" fill="rgba(249,168,212,0.18)" stroke="#ec4899" strokeWidth="1" />
          <rect x="365" y="270" width="22" height="14" rx="3" fill="rgba(249,168,212,0.18)" stroke="#ec4899" strokeWidth="1" />
          <rect x="396" y="270" width="22" height="14" rx="3" fill="rgba(249,168,212,0.15)" stroke="#ec4899" strokeWidth="1" />
          {/* Window inner glow */}
          <rect x="274" y="272" width="18" height="10" rx="2" fill="rgba(236,72,153,0.12)" />
          <rect x="305" y="272" width="18" height="10" rx="2" fill="rgba(236,72,153,0.12)" />
          <rect x="336" y="272" width="18" height="10" rx="2" fill="rgba(236,72,153,0.12)" />
          <rect x="367" y="272" width="18" height="10" rx="2" fill="rgba(236,72,153,0.12)" />

          {/* Bridge deck (upper cabin) */}
          <rect x="290" y="237" width="165" height="28" rx="4" fill="#2d0a1e" stroke="#be185d" strokeWidth="1.2" />
          {/* Bridge windows â€” panoramic wraparound */}
          <rect x="298" y="242" width="148" height="14" rx="3" fill="rgba(249,168,212,0.2)" stroke="#ec4899" strokeWidth="1" />
          <line x1="340" y1="242" x2="340" y2="256" stroke="rgba(236,72,153,0.3)" strokeWidth="1" />
          <line x1="380" y1="242" x2="380" y2="256" stroke="rgba(236,72,153,0.3)" strokeWidth="1" />
          <line x1="420" y1="242" x2="420" y2="256" stroke="rgba(236,72,153,0.3)" strokeWidth="1" />

          {/* Top sundeck */}
          <rect x="305" y="225" width="135" height="13" rx="3" fill="#1a0614" stroke="#9d174d" strokeWidth="1" />

          {/* Radar mast */}
          <line x1="370" y1="225" x2="370" y2="185" stroke="#e2e8f0" strokeWidth="2" />
          <line x1="355" y1="195" x2="385" y2="195" stroke="#e2e8f0" strokeWidth="1.5" />
          {/* Radar dish */}
          <ellipse cx="370" cy="192" rx="12" ry="5" fill="none" stroke="#f9a8d4" strokeWidth="1.5" />
          <line x1="370" y1="192" x2="370" y2="187" stroke="#f9a8d4" strokeWidth="1.5" />
          {/* Radar spin glow */}
          <circle cx="370" cy="192" r="3" fill="#ec4899" opacity="0.7" filter="url(#portGlow)" />
          {/* Antenna */}
          <line x1="440" y1="225" x2="440" y2="200" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="440" cy="199" r="2" fill="#f9a8d4" />

          {/* Deck railings */}
          <line x1="220" y1="296" x2="220" y2="285" stroke="#475569" strokeWidth="1" />
          <line x1="530" y1="296" x2="530" y2="285" stroke="#475569" strokeWidth="1" />
          <line x1="220" y1="291" x2="530" y2="291" stroke="#334155" strokeWidth="0.8" />

          {/* Person silhouette on upper sundeck */}
          {/* Body */}
          <rect x="415" y="213" width="7" height="13" rx="2" fill="#f472b6" />
          {/* Head */}
          <circle cx="418" cy="210" r="4.5" fill="#f9a8d4" />
          {/* Arm holding flag pole up */}
          <line x1="422" y1="216" x2="438" y2="196" stroke="#f472b6" strokeWidth="2.5" strokeLinecap="round" />
          {/* Flag pole */}
          <line x1="438" y1="196" x2="438" y2="178" stroke="#e2e8f0" strokeWidth="1.8" />
          {/* Flag banner */}
          <rect x="438" y="178" width="32" height="13" rx="2" fill="#ec4899" />
          {/* SCALE text on flag */}
          <text x="454" y="188" textAnchor="middle" fontSize="6" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">SCALE</text>
          {/* Flag tip */}
          <circle cx="438" cy="178" r="1.5" fill="#f9a8d4" />
          {/* Legs */}
          <line x1="416" y1="226" x2="414" y2="233" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" />
          <line x1="420" y1="226" x2="422" y2="233" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" />

          {/* Bow wake spray */}
          <path d="M545,315 Q565,305 580,310 Q565,318 545,320 Z" fill="rgba(249,168,212,0.12)" />
          <path d="M548,318 Q570,310 585,316" stroke="rgba(249,168,212,0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Stern flag */}
          <line x1="220" y1="285" x2="220" y2="270" stroke="#94a3b8" strokeWidth="1.5" />
          <path d="M220,270 L235,274 L220,278 Z" fill="#ec4899" />
        </g>
        <g opacity="0.3">
          <line className="shimmer" x1="150" y1="340" x2="250" y2="340" stroke="#f9a8d4" strokeWidth="1.5" strokeLinecap="round" />
          <line className="shimmer shimmer2" x1="540" y1="355" x2="630" y2="355" stroke="#f9a8d4" strokeWidth="1" strokeLinecap="round" />
          <line className="shimmer shimmer3" x1="100" y1="370" x2="180" y2="370" stroke="#f9a8d4" strokeWidth="1" strokeLinecap="round" />
          <line className="shimmer" x1="600" y1="380" x2="700" y2="380" stroke="#f9a8d4" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      </svg>
      <div className="scene-bottom-fade" />
    </div>
  );
};

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Loading Screen Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
const LoadingScreen = ({ visible }: { visible: boolean }) => (
  <div className={`loading-screen ${visible ? '' : 'loading-screen--hidden'}`}>
    <div className="loading-spinner-wrap">
      <div className="loading-ring" />
      <div className="loading-ring-spin" />
    </div>
    <p className="loading-text">LOADING</p>
  </div>
);

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ GitHub Calendar Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
const GitHubCalendar = () => (
  <div className="github-calendar-floating">
    <h3 className="gh-cal-title">
      <svg role="img" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ color: '#ec4899', flexShrink: 0 }}>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
      GitHub Contributions
    </h3>
    <div className="gh-cal-img-wrap">
      <img src="https://ghchart.rshah.org/ec4899/Lilpaolo67" alt="Lilpaolo67 GitHub Contributions" style={{ width: '100%', height: 'auto', display: 'block' }} />
    </div>
  </div>
);

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Main App Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
/* ─── Main App ────────────────────────────────────────── */
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
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'experience' | 'skills' | 'projects'>('experience');
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
    { name: 'FUR AI SMART FEEDER', desc: 'AI-powered automatic pet feeder with 1080p camera, app control, and airtight food preservation. Currently live on e-commerce.', status: 'Launched', tech: ['Figma', 'Canva', 'Shopify', 'Hardware'], link: 'https://fur.homewizie.com/' },
    { name: 'Homewizie B2B & DTC Platform', desc: 'Homewizie e-commerce store where we sell our products directly to customers and handle wholesale orders for businesses.', status: 'Live', tech: ['Shopify', 'Stripe', 'PayPal', 'Klaviyo', 'Meta Ads'], link: 'https://homewizie.com' },
    { name: 'AI Automation Agency', desc: 'Done-for-you AI automation systems for B2B and DTC brands. We build workflows, lead gen systems, and sales pipelines powered by AI.', status: 'Live', tech: ['Python', 'Make.com', 'Zapier', 'Cursor', 'GitHub'] },
  ];

  const skillCategories = [
    {
      title: 'Languages & Markup',
      skills: [
        {
          name: 'JavaScript',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#F7DF1E" style={{ marginRight: 6 }}>
              <rect width="24" height="24" rx="3"/>
              <text x="13" y="19" fill="#000000" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">JS</text>
            </svg>
          )
        },
        {
          name: 'TypeScript',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#3178C6" style={{ marginRight: 6 }}>
              <rect width="24" height="24" rx="3"/>
              <text x="13" y="19" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">TS</text>
            </svg>
          )
        },
        {
          name: 'Python',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#3776AB" style={{ marginRight: 6 }}>
              <path d="M11.89 2C8.75 2 8.35 2.14 7.12 2.69c-1.37.6-2.12 1.54-2.12 3.16v2.18h4.25v.6H3.14c-1.62 0-2.56.75-3.1 2.12C0 12 0 12.4 0 13.56c0 1.17.05 1.57.6 2.8 1.11 2.5 2.87 2.64 4.54 2.64h1.4v-2c0-2 1.65-3.66 3.66-3.66h4.59c1.55 0 2.8-1.25 2.8-2.8V5.95c0-1.55-1.25-2.8-2.8-2.8h-2.9V2h-.01z" />
              <path d="M12.11 22c3.14 0 3.54-.14 4.77-.69 1.37-.6 2.12-1.54 2.12-3.16v-2.18h-4.25v-.6h6.12c1.62 0 2.56-.75 3.1-2.12.05-.33.13-.73.13-1.89 0-1.17-.05-1.57-.6-2.8-1.11-2.5-2.87-2.64-4.54-2.64h-1.4v2c0 2-1.65 3.66-3.66 3.66H9.33c-1.55 0-2.8 1.25-2.8 2.8v4.59c0 1.55 1.25 2.8 2.8 2.8h2.9v1.15z" fill="#FFD343" />
            </svg>
          )
        },
        {
          name: 'C',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#00599C" style={{ marginRight: 6 }}>
              <rect width="24" height="24" rx="3"/>
              <text x="7" y="17" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">C</text>
            </svg>
          )
        },
        {
          name: 'HTML',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#E34F26" style={{ marginRight: 6 }}>
              <path d="M1.5 22L0 0h24l-1.5 22L12 24z M12 2.7v7.5h6.3L17.7 17l-5.7 1.6V21.3l8.8-2.4 1.2-13.6z M12 2.7L3.2 5.3l1.2 13.6 8.8 2.4V18.6l-5.7-1.6L7.2 13H12V10.2H5.3l-.2-2.7H12z" />
            </svg>
          )
        },
        {
          name: 'CSS',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#1572B6" style={{ marginRight: 6 }}>
              <path d="M1.5 22L0 0h24l-1.5 22L12 24z M12 2.7v7.5h6.3L17.7 17l-5.7 1.6V21.3l8.8-2.4 1.2-13.6z M12 2.7L3.2 5.3l1.2 13.6 8.8 2.4V18.6l-5.7-1.6L7.2 13H12V10.2H5.3l-.2-2.7H12z" />
            </svg>
          )
        }
      ]
    },
    {
      title: 'Marketing Tools',
      skills: [
        {
          name: 'Higgsfield',
          icon: <img src="/higgsfield.png" alt="Higgsfield" style={{ width: 14, height: 14, marginRight: 6, borderRadius: 2 }} />
        },
        {
          name: 'Kling AI',
          icon: <img src="/kling.png" alt="Kling AI" style={{ width: 14, height: 14, marginRight: 6, borderRadius: '50%' }} />
        },
        {
          name: 'Klaviyo',
          icon: <img src="/klaviyo.png" alt="Klaviyo" style={{ width: 14, height: 14, marginRight: 6 }} />
        },
        {
          name: 'Meta Ads',
          icon: <img src="/meta.png" alt="Meta Ads" style={{ width: 14, height: 14, marginRight: 6 }} />
        }
      ]
    },
    {
      title: 'Databases & Services',
      skills: [
        {
          name: 'PostgreSQL',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#336791" style={{ marginRight: 6 }}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.09 14.14c-.06.05-.12.09-.19.12-.4.18-.89.14-1.28-.12-.08-.05-.14-.11-.2-.18-.28-.31-.41-.72-.37-1.13.04-.41.22-.79.52-1.07.2-.18.46-.28.73-.28h.07c.56.03 1.05.39 1.21.93.12.4-.01.83-.32 1.13l-.47.6zM15 10.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5z" />
            </svg>
          )
        },
        {
          name: 'MySQL',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#00758F" style={{ marginRight: 6 }}>
              <path d="M12.11 3C8.12 3 5 6.12 5 10c0 2.12.88 4.02 2.29 5.37L5.5 21h13l-1.79-5.63C18.12 14.02 19 12.12 19 10c0-3.88-3.12-7-6.89-7z" />
            </svg>
          )
        },
        {
          name: 'Supabase',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#3ECF8E" style={{ marginRight: 6 }}>
              <path d="M18.235 10H12.5V3l-7 11h5.735v7z" />
            </svg>
          )
        },
        {
          name: 'Cloudflare R2',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#F38020" style={{ marginRight: 6 }}>
              <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 21h15.3l-.62-3.39C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9z"/>
            </svg>
          )
        },
        {
          name: 'Stripe',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#635BFF" style={{ marginRight: 6 }}>
              <path d="M13.962 10.455c0-1.042-.74-1.564-1.922-1.564-1.464 0-2.31.547-2.31 1.564 0 1.58 2.124 1.3 2.124 2.378 0 1.096-.836 1.63-2.08 1.63-1.636 0-2.616-.628-2.616-1.724H5c0 2.23 1.83 3.633 4.412 3.633 2.926 0 4.55-1.436 4.55-3.633 0-2.528-2.124-2.126-2.124-3.328 0-.962.72-1.412 1.832-1.412 1.34 0 2.054.498 2.054 1.455h2.238z" />
            </svg>
          )
        },
        {
          name: 'PayPal',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#003087" style={{ marginRight: 6 }}>
              <path d="M20.06 6.8c-.37-1.85-1.63-3.2-3.48-3.6C15.3 2.95 13.72 3 12.11 3H6c-.55 0-1 .45-1 1l-3 15c-.1.5.3.9.8.9h4.3l.9-4.5c.1-.5.5-.8 1-.8h2.3c3.6 0 6.3-1.4 7.1-5.1.5-2.2.2-4.1-1.3-5.2z M17.2 9.5c-.5 2.5-2.3 3.5-4.8 3.5H9.6L10.3 9h2.1c2.2 0 3.9-.3 4.4.5.3.3.4.8.4 1.3z" fill="#003087"/>
              <path d="M17.06 7.8c-.37-1.85-1.63-3.2-3.48-3.6C12.3 3.95 10.72 4 9.11 4H3c-.55 0-1 .45-1 1l-3 15c-.1.5.3.9.8.9h4.3l.9-4.5c.1-.5.5-.8 1-.8h2.3c3.6 0 6.3-1.4 7.1-5.1.5-2.2.2-4.1-1.3-5.2z M14.2 10.5c-.5 2.5-2.3 3.5-4.8 3.5H6.6L7.3 10h2.1c2.2 0 3.9-.3 4.4.5.3.3.4.8.4 1.3z" fill="#0079C1" opacity="0.8"/>
            </svg>
          )
        }
      ]
    },
    {
      title: 'Design Tools',
      skills: [
        {
          name: 'Figma',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" style={{ marginRight: 6 }}>
              <path d="M8.5 0C6 0 4 2 4 4.5S6 9 8.5 9H12V0H8.5z" fill="#F24E1E"/>
              <path d="M15.5 0C13 0 11 2 11 4.5S13 9 15.5 9H19V0H15.5z" fill="#FF7262"/>
              <path d="M8.5 9C6 9 4 11 4 13.5S6 18 8.5 18H12V9H8.5z" fill="#A259FF"/>
              <path d="M4 22.5C4 20 6 18 8.5 18H12V22.5C12 25 10 27 8.5 27S4 25 4 22.5z" fill="#1ABC9C"/>
              <path d="M15.5 9C18 9 20 11 20 13.5S18 18 15.5 18H12V9h3.5z" fill="#18A0FB"/>
            </svg>
          )
        },
        {
          name: 'Canva',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#00C4CC" style={{ marginRight: 6 }}>
              <circle cx="12" cy="12" r="12" fill="url(#canvaGrad)"/>
              <defs>
                <linearGradient id="canvaGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7d2ae8"/>
                  <stop offset="100%" stopColor="#00c4cc"/>
                </linearGradient>
              </defs>
              <text x="12" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">C</text>
            </svg>
          )
        },
        {
          name: 'Spline',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#FF5E62" strokeWidth="2.5" style={{ marginRight: 6 }}>
              <path d="M4 12c4-8 12 8 16 0" strokeLinecap="round"/>
            </svg>
          )
        },
        {
          name: 'Lucidchart',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#F05A28" style={{ marginRight: 6 }}>
              <rect x="2" y="9" width="6" height="6" rx="1"/>
              <rect x="16" y="9" width="6" height="6" rx="1"/>
              <line x1="8" y1="12" x2="16" y2="12" stroke="#F05A28" strokeWidth="2"/>
              <polyline points="13,9 16,12 13,15" stroke="#F05A28" strokeWidth="2" fill="none"/>
            </svg>
          )
        },
        {
          name: 'Shopify',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#95BF47" style={{ marginRight: 6 }}>
              <path d="M19.14 7.14l-1.92-4.8C17.04 1.62 16.2 1 15.24 1H8.76c-.96 0-1.8.62-1.98 1.34L4.86 7.14C4.32 7.38 4 7.92 4 8.52v12.24C4 21.98 5.02 23 6.26 23h11.48c1.24 0 2.26-1.02 2.26-2.24V8.52c0-.6-.32-1.14-.86-1.38zM12 3c.83 0 1.5.67 1.5 1.5S12.83 6 12 6s-1.5-.67-1.5-1.5S11.17 3 12 3zm4.5 15.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S14.17 17 15 17s1.5.67 1.5 1.5z" />
            </svg>
          )
        }
      ]
    },
    {
      title: 'Dev Tools',
      skills: [
        {
          name: 'Git',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#F05032" style={{ marginRight: 6 }}>
              <path d="M23.3 11.7L12.3.7c-.5-.5-1.2-.5-1.7 0L8.8 2.5l2.6 2.6c.4-.1.8.1 1 .4.3.3.3.8 0 1.1-.3.3-.8.3-1.1 0-.3-.2-.4-.6-.3-1L8.4 3 6 5.4l2.6 2.6c.4-.1.8.1 1 .4.3.3.3.8 0 1.1-.3.3-.8.3-1.1 0-.3-.2-.4-.6-.3-1L5.6 6 .7 10.9c-.5.5-.5 1.2 0 1.7l11 11c.5.5 1.2.5 1.7 0l9.9-9.9c.5-.5.5-1.2 0-1.7z" />
            </svg>
          )
        },
        {
          name: 'GitHub',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#FFFFFF" style={{ marginRight: 6 }}>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          )
        },
        {
          name: 'VS Code',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#007ACC" style={{ marginRight: 6 }}>
              <rect width="24" height="24" rx="3"/><text x="4" y="17" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">VS</text>
            </svg>
          )
        },
        {
          name: 'Postman',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#FF6C37" style={{ marginRight: 6 }}>
              <circle cx="12" cy="12" r="10" fill="#FF6C37"/>
              <path d="M8.5 8.5L12 5l3.5 3.5H13v6h-2v-6H8.5z" fill="#FFF"/>
            </svg>
          )
        },
        {
          name: 'Insomnia',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#5856d6" style={{ marginRight: 6 }}>
              <rect width="24" height="24" rx="3"/><text x="4" y="17" fill="white" fontSize="13" fontWeight="bold" fontFamily="Georgia, serif">I</text>
            </svg>
          )
        },
        {
          name: 'DBeaver',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#8B5A2B" style={{ marginRight: 6 }}>
              <rect width="24" height="24" rx="3"/><text x="5" y="17" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">DB</text>
            </svg>
          )
        }
      ]
    },
    {
      title: 'Monorepo',
      skills: [
        {
          name: 'Turborepo',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#EF4444" style={{ marginRight: 6 }}>
              <path d="M12 2L2 22h20L12 2z"/>
            </svg>
          )
        },
        {
          name: 'Nx',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#10B981" style={{ marginRight: 6 }}>
              <rect width="24" height="24" rx="3"/><text x="5" y="17" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">Nx</text>
            </svg>
          )
        }
      ]
    },
    {
      title: 'Security & Testing',
      skills: [
        {
          name: 'OAuth',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#3B82F6" style={{ marginRight: 6 }}>
              <circle cx="12" cy="12" r="10" fill="none" stroke="#3B82F6" strokeWidth="2"/><path d="M12 7v5h3" stroke="#3B82F6" strokeWidth="2" fill="none"/>
            </svg>
          )
        },
        {
          name: 'bcrypt',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#10B981" style={{ marginRight: 6 }}>
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10z"/>
            </svg>
          )
        },
        {
          name: 'Argon2',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#F59E0B" style={{ marginRight: 6 }}>
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
          )
        },
        {
          name: 'Jest',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#C21325" style={{ marginRight: 6 }}>
              <rect width="24" height="24" rx="3"/><text x="6" y="17" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">J</text>
            </svg>
          )
        }
      ]
    },
    {
      title: 'AI Coding Tools',
      skills: [
        {
          name: 'Antigravity',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#ec4899" style={{ marginRight: 6 }}>
              <path d="M12 2L2 22h4l3-6h6l3 6h4L12 2zm-2 11l2-4 2 4H10z" />
            </svg>
          )
        },
        {
          name: 'Codex',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#10B981" style={{ marginRight: 6 }}>
              <rect width="24" height="24" rx="3"/><text x="4" y="17" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">Cx</text>
            </svg>
          )
        },
        {
          name: 'Cursor',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#00E5FF" style={{ marginRight: 6 }}>
              <polygon points="9,4 18,13 13,13 16,19 14,20 11,14 9,16" />
            </svg>
          )
        },
        {
          name: 'Windsurf',
          icon: (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#3B82F6" style={{ marginRight: 6 }}>
              <polygon points="12,2 22,22 12,18 2,22" />
            </svg>
          )
        }
      ]
    }
  ];

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
                <p className="bio-primary">Full Stack E-commerce B2B and DTC Partner. I build and grow B2B and DTC brands by connecting professional supply chain logistics with direct-to-customer sales.</p>
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

          {/* Navigation Tabs */}
          <div className="portfolio-tabs">
            <button
              onClick={() => setActiveTab('experience')}
              className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
            >
              Projects
            </button>
          </div>

          {activeTab === 'experience' && (
            <>
              {/* About */}
              <div className="content-section">
                <h2 className="section-heading">About</h2>
                <p className="section-text">I started as a Marine Engineer on cargo ships. Every failure on those vessels taught me something — and that same mindset is what I bring to everything I do now. I launched my own products, built my own brand from scratch, and I help other B2B and DTC businesses scale and grow.</p>
                <p className="section-text" style={{ marginTop: '0.75rem' }}>I also run a web design agency helping businesses get more clients through fast, modern, AI-automated websites.</p>
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
                        <span className="timeline-period">2026 to Present</span>
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
                        <span className="timeline-period">2025 to 2026</span>
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
            </>
          )}

          {activeTab === 'skills' && (
            /* Skills & Tools */
            <div className="content-section">
              <h2 className="section-heading">Skills & Tools</h2>
              <p className="section-text" style={{ marginBottom: '1.25rem' }}>
                Technologies and platforms I work with. Click any skill below to highlight related projects in the Projects tab.
              </p>
              <div className="skills-categories-grid">
                {skillCategories.map(cat => (
                  <div key={cat.title} className="skills-category-card glass-warm">
                    <h3 className="skills-category-title">{cat.title}</h3>
                    <div className="skills-items-wrap">
                      {cat.skills.map(skill => {
                        const isSelected = selectedSkill === skill.name;
                        return (
                          <button
                            key={skill.name}
                            onClick={() => setSelectedSkill(isSelected ? null : skill.name)}
                            className={`skill-interactive-btn ${isSelected ? 'active' : ''}`}
                          >
                            {skill.icon}
                            <span>{skill.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            /* Projects */
            <div className="content-section">
              <h2 className="section-heading">Projects</h2>
              <div className="projects-grid">
                {projects.map(p => {
                  const isHighlighted = !selectedSkill || p.tech.some(t => t.toLowerCase() === selectedSkill.toLowerCase());
                  return (
                    <div key={p.name} className={`project-card glass-warm ${!isHighlighted ? 'project-card-dimmed' : ''}`}>
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
                  );
                })}
              </div>
            </div>
          )}

          {/* Contact */}
          <div className="content-section" id="contact-section">
            <h2 className="section-heading">Get in Touch</h2>
            <p className="section-text">Whether it's a B2B deal, AI automation project, or business opportunity — reach out directly.</p>
            <div className="contact-row">
              <a href="mailto:paolo@homewizie.com" className="contact-email-link"><Mail size={16} />paolo@homewizie.com</a>
              <a href="https://homewizie.com" target="_blank" rel="noopener noreferrer" className="contact-email-link"><ExternalLink size={16} />homewizie.com</a>
            </div>
            {formSent ? (
              <div className="form-success glass-warm"><p>✅ Message sent! I'll get back to you soon.</p></div>
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
            <p>PAOLO ANDO {new Date().getFullYear()}</p>
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

