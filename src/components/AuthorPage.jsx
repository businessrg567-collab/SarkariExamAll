import React, { useEffect } from 'react';
import { ArrowLeft, Home, GraduationCap, Award, BookOpen, Users, Mail, CheckCircle2, Star, Target, TrendingUp } from 'lucide-react';

const AuthorPage = ({ onBack, onHome, onSelectBlog }) => {
    useEffect(() => window.scrollTo(0, 0), []);

    const expertise = [
        "UPSC Civil Services Examination Pattern & Strategy",
        "SSC CGL / CHSL Tier-wise Preparation",
        "Banking Exams (IBPS PO, SBI PO, RBI Grade B)",
        "Railway Recruitment Board (RRB NTPC, Group D)",
        "State Public Service Commission Exams",
        "Defence Services (NDA, CDS, AFCAT)",
        "Government Job Eligibility & Documentation",
        "Career Counseling for Govt Job Aspirants"
    ];

    const publications = [
        { title: "Complete UPSC CSE 2026 Preparation Roadmap", category: "UPSC", reads: "45K+" },
        { title: "SSC CGL 2026 Tier-I & Tier-II Strategy Guide", category: "SSC", reads: "38K+" },
        { title: "Banking Sector Career Guide for 2026", category: "Banking", reads: "29K+" },
        { title: "Best Govt Jobs After 12th – Complete List 2026", category: "Career Guide", reads: "52K+" },
        { title: "Railway Jobs Full Guide – RRB NTPC & Group D", category: "Railways", reads: "41K+" },
        { title: "UP Police Preparation Tips & Strategy 2026", category: "State PSC", reads: "33K+" }
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

                {/* Author Hero */}
                <div className="glass-card" style={{ padding: '3rem 2rem', marginBottom: '3rem', background: 'linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(245,158,11,0.05) 100%)', border: '2px solid rgba(139,92,246,0.3)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', textAlign: 'center' }}>
                        <div style={{ width: '140px', height: '140px', borderRadius: '50%', background: 'linear-gradient(135deg, #8B5CF6, #F59E0B)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', border: '4px solid rgba(245,158,11,0.5)', flexShrink: 0 }}>
                            👩‍💼
                        </div>
                        <div>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1.2rem', background: 'rgba(16,185,129,0.1)', border: '1px solid #10B981', borderRadius: '20px', marginBottom: '1rem' }}>
                                <CheckCircle2 size={14} color="#10B981" />
                                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#10B981' }}>VERIFIED EXPERT AUTHOR</span>
                            </div>
                            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'white', marginBottom: '0.5rem', fontWeight: 800 }}>Guriya Kumari</h1>
                            <p style={{ color: '#F59E0B', fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem' }}>Senior Govt Exam Research Analyst & Career Counselor</p>
                            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto' }}>
                                With over 3 years of dedicated research in government examination patterns, eligibility criteria, and career guidance, Guriya Kumari has helped thousands of aspirants navigate the complex landscape of Sarkari Naukri. Her in-depth articles are trusted by 5 lakh+ readers across India.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Credentials Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}
                  className="credentials-grid">
                    <div className="glass-card" style={{ padding: '1.8rem', textAlign: 'center' }}>
                        <GraduationCap size={36} color="#F59E0B" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ color: '#F59E0B', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Education</h3>
                        <p style={{ color: 'white', fontSize: '0.95rem', lineHeight: '1.6' }}>Graduate (B.A. Political Science)<br />University of Lucknow</p>
                    </div>
                    <div className="glass-card" style={{ padding: '1.8rem', textAlign: 'center' }}>
                        <Award size={36} color="#10B981" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ color: '#10B981', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Experience</h3>
                        <p style={{ color: 'white', fontSize: '0.95rem', lineHeight: '1.6' }}>3+ Years in Govt Exam Research<br />& Career Counseling</p>
                    </div>
                    <div className="glass-card" style={{ padding: '1.8rem', textAlign: 'center' }}>
                        <BookOpen size={36} color="#8B5CF6" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ color: '#8B5CF6', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Articles Written</h3>
                        <p style={{ color: 'white', fontSize: '0.95rem', lineHeight: '1.6' }}>60+ In-depth Guides<br />3000+ Words Each</p>
                    </div>
                    <div className="glass-card" style={{ padding: '1.8rem', textAlign: 'center' }}>
                        <Users size={36} color="#EC4899" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ color: '#EC4899', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Students Helped</h3>
                        <p style={{ color: 'white', fontSize: '0.95rem', lineHeight: '1.6' }}>5 Lakh+ Aspirants<br />Across India</p>
                    </div>
                </div>

                {/* About the Author */}
                <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
                    <h2 style={{ color: '#F59E0B', fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <Target size={28} /> About Guriya Kumari
                    </h2>
                    <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1.5rem' }}>
                        Guriya Kumari is a passionate government exam researcher and career counselor based in Lucknow, Uttar Pradesh. After completing her graduation in Political Science, she developed a deep interest in the Indian civil services and public sector recruitment ecosystem. Recognizing the lack of reliable, comprehensive guidance for rural and semi-urban aspirants, she joined SarkariExamAll in 2023 to bridge this information gap.
                    </p>
                    <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1.5rem' }}>
                        Over the past 3 years, Guriya has meticulously researched and written over 60 long-form articles covering UPSC, SSC, Banking, Railways, Defence, and State PSC examinations. Her writing style is known for being practical, data-driven, and aspirant-friendly — breaking down complex eligibility criteria and exam patterns into easy-to-understand language.
                    </p>
                    <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9' }}>
                        She specializes in helping first-generation government job aspirants — students from small towns and villages who lack access to premium coaching institutes. Her guides on document requirements, eligibility checks, and preparation strategies have been instrumental in helping thousands of students apply correctly and prepare effectively for their dream government jobs.
                    </p>
                </div>

                {/* Areas of Expertise */}
                <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
                    <h2 style={{ color: '#8B5CF6', fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <Star size={28} /> Areas of Expertise
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                        {expertise.map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', padding: '0.8rem', background: 'rgba(139,92,246,0.05)', borderRadius: '8px', border: '1px solid rgba(139,92,246,0.2)' }}>
                                <CheckCircle2 size={18} color="#8B5CF6" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                                <span style={{ color: 'white', fontSize: '0.95rem', lineHeight: '1.5' }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Featured Publications */}
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: '#10B981', fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <TrendingUp size={28} /> Featured Publications
                    </h2>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {publications.map((pub, i) => (
                            <div key={i} className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', cursor: 'pointer', border: '1px solid rgba(16,185,129,0.2)', transition: 'all 0.3s ease' }}>
                                <div style={{ flex: 1 }}>
                                    <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 700, background: 'rgba(16,185,129,0.1)', padding: '0.2rem 0.8rem', borderRadius: '12px', marginBottom: '0.5rem', display: 'inline-block' }}>{pub.category}</span>
                                    <h4 style={{ color: 'white', fontSize: '1rem', marginTop: '0.5rem' }}>{pub.title}</h4>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '1.1rem' }}>{pub.reads}</div>
                                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>Reads</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact */}
                <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', border: '2px solid rgba(245,158,11,0.3)' }}>
                    <h3 style={{ color: '#F59E0B', fontSize: '1.5rem', marginBottom: '1rem' }}>Connect with Guriya</h3>
                    <p style={{ color: 'white', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                        Have questions about a specific exam or need personalized career guidance? Reach out directly.
                    </p>
                    <a href="mailto:info@sarkariexamall.com" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Mail size={18} /> info@sarkariexamall.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AuthorPage;
