import React, { useEffect } from 'react';
import {
  ArrowLeft, Home, CheckCircle2, Target, GraduationCap, Users, BookOpen,
  Award, Zap, MapPin, FileText, ShieldCheck, TrendingUp, Mail, Phone
} from 'lucide-react';

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const AboutPage = ({ onBack, onNavigateToAuthor }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  const features = [
    {
      icon: <ShieldCheck size={28} color="#10B981" />,
      title: 'Eligibility Checker Tool',
      desc: 'AI-powered tool that instantly matches you with government exams you are eligible for based on your age and qualification. Covers 50+ central and state exams.',
      color: '#10B981',
    },
    {
      icon: <FileText size={28} color="#8B5CF6" />,
      title: 'Document Guide',
      desc: 'Complete document checklists for every major government exam — know exactly what to carry to avoid rejection at verification stage.',
      color: '#8B5CF6',
    },
    {
      icon: <BookOpen size={28} color="#F59E0B" />,
      title: 'Expert Preparation Guides',
      desc: '60+ in-depth articles of 1000–3000 words each, covering UPSC, SSC, Banking, Railways, Defence and State PSC exams with syllabus, strategy and resources.',
      color: '#F59E0B',
    },
    {
      icon: <Zap size={28} color="#EC4899" />,
      title: 'Free Aspirant Tools',
      desc: 'Exam Countdown Timer, Government Salary Calculator (7th Pay Commission), and Study Hours Planner — all free, all interactive.',
      color: '#EC4899',
    },
    {
      icon: <MapPin size={28} color="#06B6D4" />,
      title: 'City-wise Exam Centers',
      desc: 'Location-specific guides covering exam centers, coaching institutes, and preparation resources across India\'s major cities.',
      color: '#06B6D4',
    },
    {
      icon: <TrendingUp size={28} color="#F97316" />,
      title: 'Career Counseling',
      desc: 'Personalized guidance to help you choose the right exam based on your qualification, age, and career goals. Free one-on-one sessions available.',
      color: '#F97316',
    },
    {
      icon: <Target size={28} color="#A78BFA" />,
      title: 'Exam Hub',
      desc: 'Comprehensive hub covering all 2026 government recruitments — UPSC, SSC, IBPS, RRB, NDA, State PSC and more with official qualification standards.',
      color: '#A78BFA',
    },
    {
      icon: <Users size={28} color="#34D399" />,
      title: '5 Lakh+ Community',
      desc: 'Join India\'s largest government exam aspirant community. Get verified notification alerts, eligibility updates and preparation tips delivered to your inbox.',
      color: '#34D399',
    },
  ];

  const stats = [
    { value: '5L+', label: 'Active Aspirants', color: '#F59E0B' },
    { value: '50+', label: 'Exams Covered', color: '#10B981' },
    { value: '60+', label: 'Expert Articles', color: '#8B5CF6' },
    { value: '2020', label: 'Founded', color: '#EC4899' },
  ];

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <button onClick={onBack} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ArrowLeft size={18} /> Back
          </button>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.5rem 1.4rem', background: 'rgba(245,158,11,0.1)',
            border: '2px solid #F59E0B', borderRadius: '30px', marginBottom: '1.5rem'
          }}>
            <Award size={16} color="#F59E0B" />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              India's Trusted Govt Exam Portal Since 2020
            </span>
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1.2rem',
            background: 'linear-gradient(135deg, #FCD34D, #F59E0B)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
          }}>About SarkariExamAll</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            SarkariExamAll is India's dedicated educational portal for government job aspirants — built to democratize access to accurate, comprehensive, and timely information about government examinations for every student across India, regardless of their background.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.2rem', marginBottom: '4rem' }}>
          {stats.map((s, i) => (
            <div key={i} className="glass-card" style={{ padding: '1.8rem', textAlign: 'center', border: `2px solid ${s.color}30` }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', marginTop: '0.5rem' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3rem', border: '1px solid rgba(245,158,11,0.2)' }}>
          <h2 style={{ color: '#F59E0B', fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <Target size={26} /> Our Story
          </h2>
          <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1.2rem' }}>
            Every year, over 2 crore students appear for government examinations in India. Yet a large number — especially from small towns, villages, and economically weaker sections — lack access to reliable guidance. They miss application deadlines, apply for exams they are not eligible for, or prepare without a proper strategy.
          </p>
          <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1.2rem' }}>
            SarkariExamAll was founded in 2020 to solve exactly this problem. We built a platform where any aspirant — whether in Delhi or a remote village in Bihar — can access the same quality of information, tools, and guidance that was previously only available to students in big cities with access to premium coaching.
          </p>
          <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9' }}>
            Today, we serve 5 lakh+ aspirants monthly with verified exam notifications, eligibility checkers, expert preparation guides, document checklists, and free interactive tools — all in one place.
          </p>
        </div>

        {/* Features Grid */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '0.5rem', textAlign: 'center' }}>What We Offer</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '2.5rem', fontSize: '1rem' }}>
            Everything a government job aspirant needs — in one platform
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}
            className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="glass-card" style={{ padding: '1.8rem', border: `1px solid ${f.color}25`, transition: 'all 0.3s' }}>
                <div style={{ marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ color: f.color, fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.7rem' }}>{f.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', lineHeight: '1.7', margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Exams We Cover */}
        <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3rem', border: '1px solid rgba(139,92,246,0.2)' }}>
          <h2 style={{ color: '#8B5CF6', fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <GraduationCap size={26} /> Exams We Cover
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
            {['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'SSC MTS', 'IBPS PO', 'IBPS Clerk', 'SBI PO', 'SBI Clerk', 'RBI Grade B', 'RRB NTPC', 'RRB Group D', 'NDA', 'CDS', 'AFCAT', 'UPPSC PCS', 'BPSC', 'MPPSC', 'RPSC', 'UP Police', 'Delhi Police', 'Agnipath / Agniveer', 'CAPF AC', 'SSB', 'State PSC'].map((exam, i) => (
              <span key={i} style={{
                padding: '0.4rem 1rem', background: 'rgba(139,92,246,0.1)',
                border: '1px solid rgba(139,92,246,0.3)', borderRadius: '20px',
                color: 'white', fontSize: '0.85rem', fontWeight: 600
              }}>{exam}</span>
            ))}
          </div>
        </div>

        {/* Owner / Founder Box */}
        <div className="glass-card" style={{
          padding: '2.5rem', marginBottom: '3rem',
          background: 'linear-gradient(135deg, rgba(245,158,11,0.06) 0%, rgba(139,92,246,0.06) 100%)',
          border: '2px solid rgba(245,158,11,0.35)'
        }}>
          <h2 style={{ color: '#F59E0B', fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center' }}>
            Meet the Founder & Owner
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', textAlign: 'center' }}>
            {/* Avatar */}
            <div style={{
              width: '120px', height: '120px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #F59E0B, #8B5CF6)',
              border: '4px solid rgba(245,158,11,0.5)', flexShrink: 0,
              overflow: 'hidden'
            }}>
              <img
                src="/radhika.jpg"
                alt="Radhika Gupta - Founder SarkariExamAll"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  objectPosition: 'top center', 
                  display: 'block',
                  imageRendering: 'high-quality'
                }}
                loading="eager"
                onError={e => { e.target.style.display='none'; e.target.parentNode.style.display='flex'; e.target.parentNode.style.alignItems='center'; e.target.parentNode.style.justifyContent='center'; e.target.parentNode.style.fontSize='3rem'; e.target.parentNode.innerHTML='👩‍💻'; }}
              />
            </div>

            <div style={{ maxWidth: '700px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.3rem 1rem', background: 'rgba(16,185,129,0.1)',
                border: '1px solid #10B981', borderRadius: '20px', marginBottom: '0.8rem'
              }}>
                <CheckCircle2 size={13} color="#10B981" />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10B981' }}>FOUNDER & OWNER</span>
              </div>

              <h3 style={{ color: 'white', fontSize: '2rem', fontWeight: 800, marginBottom: '0.4rem' }}>Radhika Gupta</h3>
              <p style={{ color: '#F59E0B', fontSize: '1.05rem', fontWeight: 600, marginBottom: '1.2rem' }}>
                Founder, SarkariExamAll · Govt Exam Research Expert · Career Counselor
              </p>

              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: '1.85', marginBottom: '1.2rem' }}>
                Radhika Gupta is the founder and owner of SarkariExamAll. With a passion for making government job information accessible to every aspirant in India, she built this platform from the ground up in 2020. Her vision was simple — no student should miss a government job opportunity just because they didn't have access to the right information.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: '1.85', marginBottom: '1.2rem' }}>
                Before founding SarkariExamAll, Radhika worked at <strong style={{ color: '#F59E0B' }}>WebNovaCrew.com</strong>, where she gained valuable experience in building scalable digital platforms and understanding user needs. This experience helped her create a platform that truly serves the aspirant community.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: '1.85', marginBottom: '2rem' }}>
                Under her leadership, SarkariExamAll has grown into a trusted portal serving 5 lakh+ aspirants monthly. Radhika personally oversees all content quality, ensuring every article, guide, and tool on the platform is accurate, practical, and genuinely helpful for students from all backgrounds.
              </p>

              {/* Credential chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center', marginBottom: '2rem' }}>
                {['Govt Exam Research Expert', '3+ Years Experience', 'Career Counselor', '5L+ Students Helped', 'SarkariExamAll Founder'].map((tag, i) => (
                  <span key={i} style={{
                    padding: '0.35rem 0.9rem', background: 'rgba(245,158,11,0.1)',
                    border: '1px solid rgba(245,158,11,0.35)', borderRadius: '20px',
                    color: '#FCD34D', fontSize: '0.82rem', fontWeight: 600
                  }}>{tag}</span>
                ))}
              </div>

              {/* Social Links */}
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://www.instagram.com/radhikata_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                    padding: '0.75rem 1.5rem', borderRadius: '30px',
                    background: 'linear-gradient(135deg, #F58529, #DD2A7B, #8134AF, #515BD4)',
                    color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  @radhikata_
                </a>
                <a
                  href="https://www.linkedin.com/in/radhika-gupta-3a2555391"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                    padding: '0.75rem 1.5rem', borderRadius: '30px',
                    background: '#0077B5',
                    color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem'
                  }}
                >
                  <LinkedInIcon /> Radhika Gupta
                </a>
                <a
                  href="https://wa.me/918077583921"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                    padding: '0.75rem 1.5rem', borderRadius: '30px',
                    background: '#25D366',
                    color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  WhatsApp
                </a>
                <a
                  href="mailto:info@sarkariexamall.com"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                    padding: '0.75rem 1.5rem', borderRadius: '30px',
                    background: 'rgba(245,158,11,0.15)', border: '2px solid #F59E0B',
                    color: '#F59E0B', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem'
                  }}
                >
                  <Mail size={18} /> info@sarkariexamall.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Office Location Section */}
        <div className="glass-card" style={{
          padding: '2.5rem', marginBottom: '3rem',
          background: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(16,185,129,0.08) 100%)',
          border: '2px solid rgba(59,130,246,0.35)'
        }}>
          <h2 style={{ color: '#3B82F6', fontSize: '1.8rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem', justifyContent: 'center' }}>
            <MapPin size={28} /> Our Office Location
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', textAlign: 'center', marginBottom: '2rem', fontSize: '1rem' }}>
            Visit us or reach out for career counseling, partnerships, or any queries
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }} className="location-grid">
            {/* Address Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid rgba(59,130,246,0.25)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: 'linear-gradient(135deg, #3B82F6, #1E40AF)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Home size={24} color="white" />
                  </div>
                  <div>
                    <h3 style={{ color: '#60A5FA', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                      Registered Office
                    </h3>
                    <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8', margin: 0 }}>
                      Bisalpur Road, Faridpur<br />
                      District Bareilly<br />
                      Uttar Pradesh 243123<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid rgba(16,185,129,0.25)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: 'linear-gradient(135deg, #10B981, #047857)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={24} color="white" />
                  </div>
                  <div>
                    <h3 style={{ color: '#34D399', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                      Contact Details
                    </h3>
                    <p style={{ color: 'white', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
                      <strong style={{ color: '#34D399' }}>Phone:</strong> +91 8077583921<br />
                      <strong style={{ color: '#34D399' }}>Email:</strong> info@sarkariexamall.com<br />
                      <strong style={{ color: '#34D399' }}>Hours:</strong> Mon-Sat, 9 AM - 6 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid rgba(245,158,11,0.25)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: 'linear-gradient(135deg, #F59E0B, #D97706)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin size={24} color="white" />
                  </div>
                  <div>
                    <h3 style={{ color: '#FBBF24', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                      Nearby Landmarks
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: '1.8', margin: 0 }}>
                      • Near Bareilly Junction Railway Station<br />
                      • 15 km from Bareilly City Center<br />
                      • Well connected by road and rail
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed - High Quality Bisalpur Road, Faridpur, Bareilly location */}
            <div style={{ 
              position: 'relative', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              border: '2px solid rgba(59,130,246,0.3)', 
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              width: '100%',
              height: '500px'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.8!2d79.4167!3d28.3667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a007e3b5e6e5e5%3A0x1234567890abcdef!2sBisalpur%20Road%2C%20Faridpur%2C%20Bareilly%2C%20Uttar%20Pradesh%20243123!5e1!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin&z=15"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SarkariExamAll Office - Bisalpur Road, Faridpur, Bareilly, Uttar Pradesh"
              ></iframe>
              <div style={{
                position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem',
                background: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(12px)',
                padding: '1rem', borderRadius: '12px', border: '1px solid rgba(59,130,246,0.3)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                  <MapPin size={20} color="#3B82F6" />
                  <span style={{ color: 'white', fontWeight: 700, fontSize: '1rem' }}>📍 Bisalpur Road, Faridpur, Bareilly, UP 243123</span>
                </div>
                <a
                  href="https://www.google.com/maps/dir//Bisalpur+Road,+Faridpur,+Bareilly,+Uttar+Pradesh+243123/@28.3667,79.4167,15z"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.5rem 1rem', borderRadius: '20px',
                    background: 'linear-gradient(135deg, #3B82F6, #1E40AF)',
                    color: 'white', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem'
                  }}
                >
                  <MapPin size={16} /> Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', border: '1px solid rgba(16,185,129,0.3)' }}>
          <h3 style={{ color: '#10B981', fontSize: '1.4rem', marginBottom: '0.8rem' }}>Get In Touch</h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
            Have questions, partnership inquiries, or need career guidance? We're here to help.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+918077583921" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', textDecoration: 'none', padding: '0.7rem 1.4rem', background: 'rgba(255,255,255,0.07)', borderRadius: '25px', border: '1px solid rgba(255,255,255,0.15)', fontWeight: 600, fontSize: '0.95rem' }}>
              <Phone size={16} color="#10B981" /> +91 8077583921
            </a>
            <a href="mailto:info@sarkariexamall.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', textDecoration: 'none', padding: '0.7rem 1.4rem', background: 'rgba(255,255,255,0.07)', borderRadius: '25px', border: '1px solid rgba(255,255,255,0.15)', fontWeight: 600, fontSize: '0.95rem' }}>
              <Mail size={16} color="#10B981" /> info@sarkariexamall.com
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
