import React, { useEffect, useState } from 'react';
import {
  ArrowLeft, Home, CheckCircle2, Heart, BookOpen, Lightbulb,
  TrendingUp, Users, Award, Mail, Globe, Star, Target
} from 'lucide-react';

const LinkedInIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const StatBox = ({ value, label, color }) => (
  <div className="glass-card" style={{
    padding: '1.5rem', textAlign: 'center',
    border: `2px solid ${color}30`, flex: '1 1 130px'
  }}>
    <div style={{ fontSize: '2rem', fontWeight: 800, color, lineHeight: 1 }}>{value}</div>
    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', marginTop: '0.4rem' }}>{label}</div>
  </div>
);

const FounderPage = ({ onBack, onHome, onContact }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  const [activeSection, setActiveSection] = useState(null);

  const timeline = [
    {
      year: '2018', icon: '📖', color: '#8B5CF6',
      title: 'The Spark — Class 9, Lucknow',
      desc: 'While most students were focused on marks, Radhika was asking a different question — why do so many bright students from small towns miss government job opportunities simply because no one told them the rules? That curiosity planted the seed for everything that followed.'
    },
    {
      year: '2020', icon: '💻', color: '#10B981',
      title: 'Learning to Build — Web Development Begins',
      desc: 'During the COVID lockdown, Radhika started learning web development under the mentorship of Sateesh Kumar Rawat, a young tech entrepreneur from Lucknow. What started as a skill-building exercise turned into a full creative partnership. She discovered she had a natural instinct for building things people actually needed.'
    },
    {
      year: '2021', icon: '🔍', color: '#F59E0B',
      title: 'Research Phase — Understanding the Gap',
      desc: 'Radhika spent months researching how aspirants from Tier-2 and Tier-3 cities prepare for government exams. She interviewed students, visited coaching centers, and mapped out exactly where the information gap was. The findings were clear — students had the drive, but not the right guidance.'
    },
    {
      year: '2022', icon: '✍️', color: '#EC4899',
      title: 'First Articles — Writing for Real People',
      desc: 'She began writing detailed exam guides — not the generic copy-paste content that flooded the internet, but real, researched, practical guides written in plain language. Her first few articles on UPSC and SSC eligibility got shared widely in student WhatsApp groups. She knew she was onto something.'
    },
    {
      year: '2023', icon: '🚀', color: '#06B6D4',
      title: 'SarkariExamAll — The Platform Goes Live',
      desc: 'SarkariExamAll launched as a full platform — with an eligibility checker, document guides, preparation articles, and city-wise exam center information. Within months, it was serving thousands of aspirants daily. No paid promotions. Just word of mouth from students who found it genuinely useful.'
    },
    {
      year: '2025', icon: '🌟', color: '#F97316',
      title: 'Co-founding Ubiduby — Beyond Exams',
      desc: 'Alongside SarkariExamAll, Radhika co-founded Ubiduby — a premium fashion brand built on the idea that personal style is a form of self-expression. Two very different ventures, one common thread: building things that help people show up as their best selves.'
    },
  ];

  const values = [
    { icon: <BookOpen size={22} color="#F59E0B" />, title: 'Clarity Over Complexity', desc: 'Every guide on SarkariExamAll is written to be understood by a first-generation aspirant from a small town — no jargon, no fluff.', color: '#F59E0B' },
    { icon: <Target size={22} color="#10B981" />, title: 'Accuracy First', desc: 'Every eligibility criterion, document requirement, and exam date is cross-verified with official government sources before publishing.', color: '#10B981' },
    { icon: <Users size={22} color="#8B5CF6" />, title: 'Built for the Underdog', desc: 'The platform was built specifically for students who don\'t have access to premium coaching or well-connected networks.', color: '#8B5CF6' },
    { icon: <Lightbulb size={22} color="#EC4899" />, title: 'Tools, Not Just Content', desc: 'From the eligibility checker to the salary calculator — Radhika insisted on building interactive tools, not just articles.', color: '#EC4899' },
  ];

  const ventures = [
    {
      name: 'SarkariExamAll', year: '2023', role: 'Founder & Owner',
      desc: 'India\'s dedicated government exam portal. Covers 50+ exams with eligibility tools, document guides, expert articles, and city-wise preparation resources. Serves 5 lakh+ aspirants monthly.',
      color: '#F59E0B', emoji: '🎯', tag: 'EdTech · Active'
    },
    {
      name: 'Ubiduby', year: '2025', role: 'Co-Founder',
      desc: 'A premium fashion brand — The Unwritten Rules of Style. Co-founded with Sateesh Kumar Rawat. Built on the belief that how you present yourself shapes how the world receives you.',
      color: '#EC4899', emoji: '✨', tag: 'Fashion · Active'
    },
  ];

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh' }}>
      <div className="container">

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <button onClick={onBack} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ArrowLeft size={18} /> Back
          </button>
          <button onClick={onHome} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Home size={18} /> Home
          </button>
        </div>

        {/* ── HERO ── */}
        <div className="glass-card" style={{
          padding: '3rem 2rem', marginBottom: '3rem', textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(245,158,11,0.07) 0%, rgba(236,72,153,0.05) 100%)',
          border: '2px solid rgba(245,158,11,0.3)'
        }}>
          <div style={{
            width: '130px', height: '130px', borderRadius: '50%', margin: '0 auto 1.5rem',
            background: 'linear-gradient(135deg, #F59E0B, #EC4899)',
            border: '4px solid rgba(245,158,11,0.5)',
            overflow: 'hidden', flexShrink: 0
          }}>
            <img
              src="/radhika.jpg"
              alt="Radhika Gupta - Founder SarkariExamAll"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                objectPosition: 'center center', 
                display: 'block',
                imageRendering: 'high-quality'
              }}
              loading="eager"
              onError={e => { e.target.style.display='none'; e.target.parentNode.style.display='flex'; e.target.parentNode.style.alignItems='center'; e.target.parentNode.style.justifyContent='center'; e.target.parentNode.style.fontSize='3.5rem'; e.target.parentNode.innerHTML='👩‍💻'; }}
            />
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 1.2rem', background: 'rgba(16,185,129,0.1)', border: '1px solid #10B981', borderRadius: '20px', marginBottom: '1rem' }}>
            <CheckCircle2 size={13} color="#10B981" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Founder & Owner — SarkariExamAll</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'white', fontWeight: 800, marginBottom: '0.5rem' }}>
            Radhika Gupta
          </h1>
          <p style={{ color: '#F59E0B', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>
            Entrepreneur · Govt Exam Research Expert · Career Counselor · Lucknow, UP
          </p>
          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1rem', lineHeight: '1.85', maxWidth: '700px', margin: '0 auto 2rem' }}>
            Radhika Gupta built SarkariExamAll from a simple observation — millions of students in India work incredibly hard for government jobs, but fail not because of lack of effort, but because of lack of the right information at the right time. She decided to fix that.
          </p>

          <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {['Lucknow, UP', '2 Ventures', 'Self-Built', '5L+ Students Helped', 'No Shortcuts'].map((tag, i) => (
              <span key={i} style={{ padding: '0.35rem 0.9rem', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '20px', color: '#FCD34D', fontSize: '0.82rem', fontWeight: 600 }}>{tag}</span>
            ))}
          </div>

          <blockquote style={{ padding: '1.2rem 2rem', background: 'rgba(245,158,11,0.07)', borderLeft: '4px solid #F59E0B', borderRadius: '0 12px 12px 0', textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
            <p style={{ color: 'white', fontSize: '1.05rem', fontStyle: 'italic', lineHeight: '1.7', margin: 0 }}>
              "Information is the most powerful tool an aspirant can have. I just made sure it was free, accurate, and actually useful."
            </p>
            <footer style={{ color: '#F59E0B', fontSize: '0.85rem', fontWeight: 700, marginTop: '0.6rem' }}>— Radhika Gupta</footer>
          </blockquote>
        </div>

        {/* ── STATS ── */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
          <StatBox value="5L+" label="Aspirants Served" color="#F59E0B" />
          <StatBox value="50+" label="Exams Covered" color="#10B981" />
          <StatBox value="60+" label="Expert Articles" color="#8B5CF6" />
          <StatBox value="2" label="Ventures Founded" color="#EC4899" />
        </div>

        {/* ── THE STORY ── */}
        <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2rem', border: '1px solid rgba(245,158,11,0.2)' }}>
          <h2 style={{ color: '#F59E0B', fontSize: '1.7rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            🌱 Where It All Started
          </h2>
          <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1.2rem' }}>
            Radhika Gupta grew up in Lucknow, Uttar Pradesh — a city that produces thousands of government exam aspirants every year. From an early age, she noticed something that bothered her deeply: students around her were smart, hardworking, and motivated — but they were constantly losing out on opportunities because they didn't know the right eligibility criteria, didn't have the right documents, or simply missed a notification deadline.
          </p>
          <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1.2rem' }}>
            The information existed — it was just scattered across government websites, coaching pamphlets, and WhatsApp forwards that were often outdated or wrong. There was no single, reliable, student-friendly place to get it all.
          </p>
          <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9' }}>
            That gap became her mission. Not just to fill it — but to build something that would genuinely change how aspirants across India prepare for the most important exams of their lives.
          </p>
        </div>

        {/* ── TECH JOURNEY ── */}
        <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2rem', background: 'rgba(16,185,129,0.03)', border: '1px solid rgba(16,185,129,0.2)' }}>
          <h2 style={{ color: '#10B981', fontSize: '1.7rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            💻 Learning to Build — The Tech Chapter
          </h2>
          <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1.2rem' }}>
            Having a vision is one thing. Building it is another. Radhika knew she needed to learn web development to bring her idea to life. During the COVID-19 lockdown period, she began learning under the guidance of <strong style={{ color: '#10B981' }}>Sateesh Kumar Rawat</strong>, a young tech entrepreneur from Lucknow who had already built a reputation for his work in web and app development.
          </p>
          <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1.2rem' }}>
            The learning curve was steep. But Radhika approached it the same way she approached everything — with patience, consistency, and a refusal to give up. She didn't just learn to code; she learned to think like a product builder. What does the user actually need? How do you make complex information simple? How do you build something that works for someone with a slow internet connection in a small town?
          </p>
          <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9' }}>
            These questions shaped every design decision she made for SarkariExamAll — from the eligibility checker to the document guides to the free tools for aspirants.
          </p>
        </div>

        {/* ── WHAT MAKES HER DIFFERENT ── */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'white', fontSize: '1.7rem', marginBottom: '0.5rem', textAlign: 'center' }}>What Sets Her Apart</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', textAlign: 'center', marginBottom: '2rem', fontSize: '0.95rem' }}>The principles behind every decision she makes</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.2rem' }} className="founder-values-grid">
            {values.map((v, i) => (
              <div key={i} className="glass-card" style={{ padding: '1.8rem', border: `1px solid ${v.color}25` }}>
                <div style={{ marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{ color: v.color, fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.6rem' }}>{v.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── TIMELINE ── */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'white', fontSize: '1.7rem', marginBottom: '0.5rem', textAlign: 'center' }}>The Journey So Far</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', textAlign: 'center', marginBottom: '2.5rem', fontSize: '0.95rem' }}>Key milestones that shaped the founder</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {timeline.map((t, i) => (
              <div
                key={i}
                className="glass-card"
                onClick={() => setActiveSection(activeSection === i ? null : i)}
                style={{
                  padding: '1.5rem', cursor: 'pointer',
                  display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                  border: `1px solid ${activeSection === i ? t.color : t.color + '25'}`,
                  background: activeSection === i ? `${t.color}08` : undefined,
                  transition: 'all 0.25s'
                }}
              >
                <div style={{ textAlign: 'center', flexShrink: 0, minWidth: '56px' }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.3rem' }}>{t.icon}</div>
                  <div style={{ color: t.color, fontWeight: 800, fontSize: '0.95rem' }}>{t.year}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: t.color, fontSize: '1.05rem', fontWeight: 700, marginBottom: activeSection === i ? '0.7rem' : 0 }}>{t.title}</h3>
                  {activeSection === i && (
                    <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.95rem', lineHeight: '1.75', margin: 0 }}>{t.desc}</p>
                  )}
                </div>
                <div style={{ color: t.color, fontSize: '1.2rem', flexShrink: 0 }}>{activeSection === i ? '▲' : '▼'}</div>
              </div>
            ))}
          </div>
          <p style={{ color: 'rgba(255,255,255,0.4)', textAlign: 'center', fontSize: '0.82rem', marginTop: '1rem' }}>Tap any milestone to expand</p>
        </div>

        {/* ── VENTURES ── */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'white', fontSize: '1.7rem', marginBottom: '0.5rem', textAlign: 'center' }}>Ventures She Built</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', textAlign: 'center', marginBottom: '2rem', fontSize: '0.95rem' }}>Two very different industries, one common purpose</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {ventures.map((v, i) => (
              <div key={i} className="glass-card" style={{ padding: '2rem', border: `2px solid ${v.color}30` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>{v.emoji}</span>
                  <span style={{ fontSize: '0.72rem', color: v.color, background: `${v.color}15`, border: `1px solid ${v.color}40`, padding: '0.25rem 0.7rem', borderRadius: '12px', fontWeight: 700 }}>{v.tag}</span>
                </div>
                <h3 style={{ color: v.color, fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.3rem' }}>{v.name}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.8rem' }}>{v.role} · {v.year}</p>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: '1.75', margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── PHILOSOPHY BOX ── */}
        <div className="glass-card" style={{
          padding: '2.5rem', marginBottom: '3rem',
          background: 'linear-gradient(135deg, rgba(139,92,246,0.06) 0%, rgba(245,158,11,0.04) 100%)',
          border: '2px solid rgba(139,92,246,0.25)'
        }}>
          <h2 style={{ color: '#A78BFA', fontSize: '1.6rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <Star size={22} color="#A78BFA" /> Her Philosophy on Education & Access
          </h2>
          <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1.2rem' }}>
            Radhika believes that the gap between a student who cracks a government exam and one who doesn't is rarely about intelligence or hard work. More often, it's about access — access to the right information, the right tools, and the right guidance at the right time.
          </p>
          <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1.2rem' }}>
            "A student in Delhi with a good coaching institute and internet access has a fundamentally different preparation experience than a student in a small UP town who is figuring everything out alone," she says. "SarkariExamAll exists to close that gap — not partially, but completely."
          </p>
          <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9' }}>
            This is why every tool on the platform is free. Every article is written in plain language. Every guide is built for someone who is navigating this journey without a mentor, without a coaching center, and without a safety net.
          </p>
        </div>

        {/* ── THE SATEESH CHAPTER ── */}
        <div className="glass-card" style={{
          padding: '2.5rem', marginBottom: '3rem',
          background: 'linear-gradient(135deg, rgba(236,72,153,0.05) 0%, rgba(139,92,246,0.04) 100%)',
          border: '2px solid rgba(236,72,153,0.25)'
        }}>
          <h2 style={{ color: '#EC4899', fontSize: '1.7rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <Heart size={24} color="#EC4899" /> The Chapter She Doesn't Hide
          </h2>
          <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1.2rem' }}>
            Radhika has always believed in honesty — even when it's uncomfortable. So here it is.
          </p>
          <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1.2rem' }}>
            Working closely with <strong style={{ color: '#EC4899' }}>Sateesh Kumar Rawat</strong> — the person who taught her web development and became her closest collaborator — Radhika developed feelings for him. She didn't hide it. She told him directly, because that's who she is. Sateesh, not wanting to hurt someone who had stood by him through some of his hardest days, said yes.
          </p>
          <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1.2rem' }}>
            For about a year, they worked side by side — building Ubiduby together, growing professionally, and finding a kind of quiet stability in each other's company. It was, by most measures, a good chapter.
          </p>

          {/* Caste pressure box */}
          <div style={{
            padding: '1.5rem', borderRadius: '12px', marginBottom: '1.2rem',
            background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)'
          }}>
            <p style={{ color: '#FCD34D', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.7rem' }}>⚠️ The Pressure That Broke It</p>
            <p style={{ color: 'white', fontSize: '1rem', lineHeight: '1.85', margin: 0 }}>
              But the world outside wasn't as accepting. Radhika's friends and social circle couldn't look past one thing — caste. Sateesh came from a lower caste; Radhika from an upper one. The taunts started. "You're wrong for this." "Think of your family's reputation." "This is not how things are done." The pressure was relentless, and it came from people she trusted.
            </p>
          </div>

          <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1.2rem' }}>
            Caught between her feelings and the weight of social expectations, Radhika began directing that frustration inward — and sometimes outward, toward Sateesh. The taunts about caste, the constant questioning of whether the relationship was "appropriate" — it wore them both down. Sateesh, who had never been fully certain about the relationship to begin with, found himself in an impossible position.
          </p>
          <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1.2rem' }}>
            He chose to leave — not out of anger, but out of clarity. And Radhika, looking back, understands why.
          </p>

          {/* Reflection box */}
          <div style={{
            padding: '1.5rem', borderRadius: '12px',
            background: 'rgba(236,72,153,0.06)', border: '1px solid rgba(236,72,153,0.2)'
          }}>
            <p style={{ color: '#F9A8D4', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.7rem' }}>💬 Radhika's Reflection</p>
            <p style={{ color: 'white', fontSize: '1rem', lineHeight: '1.85', fontStyle: 'italic', margin: 0 }}>
              "I don't regret being honest about how I felt. I do regret letting other people's opinions become my own. Caste should never be a reason to measure someone's worth — and I learned that lesson the hard way. Today we are no longer together, but I carry no bitterness. Only gratitude for what that chapter taught me about myself."
            </p>
            <p style={{ color: '#EC4899', fontSize: '0.85rem', fontWeight: 700, marginTop: '0.8rem', margin: '0.8rem 0 0' }}>— Radhika Gupta</p>
          </div>
        </div>

        {/* ── PEOPLE IN HER JOURNEY ── */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'white', fontSize: '1.7rem', marginBottom: '0.5rem', textAlign: 'center' }}>People Who Shaped Her Journey</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', textAlign: 'center', marginBottom: '2.5rem', fontSize: '0.95rem' }}>Every founder's story has people behind it</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.2rem' }} className="founder-people-grid">

            {/* Sateesh */}
            <div className="glass-card" style={{ padding: '1.8rem', border: '2px solid rgba(139,92,246,0.35)', background: 'rgba(139,92,246,0.04)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>👨‍💻</div>
              <h4 style={{ color: '#A78BFA', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.3rem' }}>Sateesh Kumar Rawat</h4>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.8rem' }}>Mentor · Tech Partner · Co-founder, Ubiduby</p>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: '1.75', margin: 0 }}>
                The person who taught Radhika web development and became her closest creative collaborator. Together they built Ubiduby. Their personal chapter ended, but the professional respect remains. Sateesh is the founder of Web Nova Crew and Estato — one of Lucknow's most driven young entrepreneurs.
              </p>
            </div>

            {/* Guriya Kumari */}
            <div className="glass-card" style={{ padding: '1.8rem', border: '1px solid rgba(245,158,11,0.2)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>✍️</div>
              <h4 style={{ color: '#F59E0B', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.3rem' }}>Guriya Kumari</h4>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.8rem' }}>Senior Content Analyst · Lead Writer</p>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: '1.75', margin: 0 }}>
                B.A. Political Science, University of Lucknow. 3+ years of government exam research experience. Guriya is the voice behind every article on SarkariExamAll — her practical, student-first writing style has helped 5 lakh+ aspirants navigate their exam journeys.
              </p>
            </div>

            {/* Vipin */}
            <div className="glass-card" style={{ padding: '1.8rem', border: '1px solid rgba(16,185,129,0.2)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>🤝</div>
              <h4 style={{ color: '#10B981', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.3rem' }}>Vipin Kumar Rawat</h4>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.8rem' }}>Early Supporter · Sateesh's Elder Brother</p>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: '1.75', margin: 0 }}>
                Vipin's early financial support — contributing ₹4,000 toward Sateesh's first PC — was the quiet foundation that made everything possible. Sometimes the biggest contributions come in the smallest moments.
              </p>
            </div>

            {/* Raj */}
            <div className="glass-card" style={{ padding: '1.8rem', border: '1px solid rgba(6,182,212,0.2)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>🏙️</div>
              <h4 style={{ color: '#06B6D4', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.3rem' }}>Raj Kumar Rawat</h4>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.8rem' }}>Key Contributor · Estato Growth</p>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: '1.75', margin: 0 }}>
                Raj played an important role in the early growth of Estato — the AI-powered property platform built by Sateesh. His on-ground support helped the platform reach thousands of residents across Lucknow.
              </p>
            </div>

            {/* Bipin */}
            <div className="glass-card" style={{ padding: '1.8rem', border: '1px solid rgba(249,115,22,0.2)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>🏠</div>
              <h4 style={{ color: '#F97316', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.3rem' }}>Bipin Kumar Rawat</h4>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.8rem' }}>The Inspiration Behind Estato</p>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: '1.75', margin: 0 }}>
                Bipin's struggle to find a rental room in Lucknow — navigating a completely unorganized market of paper posters and word-of-mouth — directly inspired Sateesh to build Estato. Real problems make the best products.
              </p>
            </div>

            {/* Simran */}
            <div className="glass-card" style={{ padding: '1.8rem', border: '1px solid rgba(167,139,250,0.2)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>📚</div>
              <h4 style={{ color: '#A78BFA', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.3rem' }}>Simran Sahni</h4>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.8rem' }}>School Friend · Sateesh's First Supporter</p>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: '1.75', margin: 0 }}>
                When Sateesh couldn't afford printed notes in school, Simran was the only classmate who shared hers without hesitation. A small act — but one that kept him going during the toughest days of his early life.
              </p>
            </div>

          </div>
        </div>

        {/* ── CONNECT ── */}
        <div className="glass-card" style={{
          padding: '2.5rem', textAlign: 'center',
          border: '2px solid rgba(245,158,11,0.3)',
          background: 'linear-gradient(135deg, rgba(245,158,11,0.05) 0%, rgba(236,72,153,0.04) 100%)'
        }}>
          <div style={{
            width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 1rem',
            background: 'linear-gradient(135deg, #F59E0B, #EC4899)',
            border: '3px solid rgba(245,158,11,0.5)', overflow: 'hidden'
          }}>
            <img
              src="/radhika.jpg"
              alt="Radhika Gupta"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                objectPosition: 'center center', 
                display: 'block',
                imageRendering: 'high-quality'
              }}
              loading="eager"
              onError={e => { e.target.style.display='none'; e.target.parentNode.innerHTML='👩‍💻'; e.target.parentNode.style.display='flex'; e.target.parentNode.style.alignItems='center'; e.target.parentNode.style.justifyContent='center'; e.target.parentNode.style.fontSize='2.5rem'; }}
            />
          </div>
          <h3 style={{ color: '#F59E0B', fontSize: '1.6rem', marginBottom: '0.5rem' }}>Connect with Radhika</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: '1.7', maxWidth: '500px', margin: '0 auto 2rem', fontSize: '0.95rem' }}>
            Founder of SarkariExamAll & Co-founder of Ubiduby. Open to conversations about education, entrepreneurship, and building things that matter.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://www.instagram.com/radhikata_/" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.75rem 1.5rem', borderRadius: '30px', background: 'linear-gradient(135deg, #F58529, #DD2A7B, #8134AF, #515BD4)', color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              @radhikata_
            </a>
            <a href="https://www.linkedin.com/in/radhika-gupta-3a2555391" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.75rem 1.5rem', borderRadius: '30px', background: '#0077B5', color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem' }}>
              <LinkedInIcon size={16} /> LinkedIn
            </a>
            <a href="https://wa.me/918077583921" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.75rem 1.5rem', borderRadius: '30px', background: '#25D366', color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              WhatsApp
            </a>
            <button onClick={onContact}
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.75rem 1.5rem', borderRadius: '30px', background: 'rgba(245,158,11,0.12)', border: '2px solid #F59E0B', color: '#F59E0B', cursor: 'pointer', fontWeight: 700, fontSize: '0.95rem' }}>
              <Mail size={16} /> Get In Touch
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FounderPage;
