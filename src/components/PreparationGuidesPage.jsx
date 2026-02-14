import React, { useEffect, useState } from 'react';
import { Home, BookOpen, Target, TrendingUp, Award, Clock, Users, Zap, CheckCircle2, Star, Filter, ArrowLeft } from 'lucide-react';
import { blogs } from '../data/articles';

const PreparationGuidesPage = ({ onSelectBlog, onBack }) => {
    useEffect(() => window.scrollTo(0, 0), []);

    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'UPSC', 'SSC', 'Banking', 'Railways', 'State PSC', 'Defence'];

    const filteredBlogs = selectedCategory === 'All'
        ? blogs
        : blogs.filter(blog => blog.category === selectedCategory);

    const studyPlans = [
        {
            title: "6-Month Intensive Plan",
            exam: "SSC CGL",
            duration: "6 months",
            hours: "6-8 hours/day",
            phases: ["Foundation (2 months)", "Practice (2 months)", "Revision (1.5 months)", "Mock Tests (0.5 month)"],
            color: "#8B5CF6"
        },
        {
            title: "12-Month Comprehensive Plan",
            exam: "UPSC CSE",
            duration: "12 months",
            hours: "8-10 hours/day",
            phases: ["Prelims Prep (5 months)", "Mains Prep (5 months)", "Interview Prep (2 months)"],
            color: "#F59E0B"
        },
        {
            title: "4-Month Fast Track",
            exam: "IBPS PO",
            duration: "4 months",
            hours: "5-6 hours/day",
            phases: ["Concept Building (1.5 months)", "Practice (1.5 months)", "Mocks (1 month)"],
            color: "#10B981"
        },
        {
            title: "9-Month Strategic Plan",
            exam: "State PSC",
            duration: "9 months",
            hours: "6-7 hours/day",
            phases: ["State GK Focus (3 months)", "Standard Books (3 months)", "Answer Writing (2 months)", "State-Spec Mock (1 month)"],
            color: "#6366F1"
        }
    ];

    const expertTips = [
        {
            tip: "Master Time Management",
            description: "Create a realistic timetable and stick to it. Allocate specific hours for each subject. Use the Pomodoro technique (25 min study + 5 min break) to maintain focus.",
            icon: <Clock size={28} color="#F59E0B" />
        },
        {
            tip: "Focus on NCERT First",
            description: "For UPSC and State PSCs, NCERT books (Class 6-12) are the foundation. Read them thoroughly before moving to advanced books. Make notes while reading.",
            icon: <BookOpen size={28} color="#F59E0B" />
        },
        {
            tip: "Practice Daily Current Affairs",
            description: "Dedicate 1-2 hours daily to current affairs. Read The Hindu editorial, PIB releases, and Yojana magazine. Maintain monthly current affairs notes.",
            icon: <Zap size={28} color="#F59E0B" />
        },
        {
            tip: "Solve Previous Year Papers",
            description: "Solve at least 10 years of previous papers. This reveals exam pattern, frequently asked topics, and difficulty level. Time yourself to improve speed.",
            icon: <Target size={28} color="#F59E0B" />
        },
        {
            tip: "Join Quality Test Series",
            description: "Enroll in test series 3-4 months before exam. Regular mocks improve time management, identify weak areas, and build exam temperament.",
            icon: <TrendingUp size={28} color="#F59E0B" />
        },
        {
            tip: "Revise, Revise, Revise",
            description: "Allocate 30% of study time for revision. Make concise notes during first reading. Revise multiple times. Last month should be pure revision.",
            icon: <CheckCircle2 size={28} color="#F59E0B" />
        }
    ];

    const successStrategies = [
        {
            strategy: "Consistency Over Intensity",
            detail: "Studying 6 hours daily for 6 months is better than 12 hours for 3 months. Consistent effort builds long-term retention and prevents burnout."
        },
        {
            strategy: "Quality Over Quantity",
            detail: "Don't collect 50 books and read none properly. Select 2-3 standard books per subject and read them multiple times. Depth matters more than breadth."
        },
        {
            strategy: "Active Learning Techniques",
            detail: "Don't just read passively. Make notes, create mind maps, teach concepts to others, solve questions. Active engagement improves retention by 80%."
        },
        {
            strategy: "Regular Self-Assessment",
            detail: "Take weekly tests to track progress. Identify weak topics and work on them immediately. Don't wait for the final month to discover gaps."
        },
        {
            strategy: "Balanced Preparation",
            detail: "Don't neglect any section. A weak area can pull down your overall score. Allocate time proportional to weightage and your current proficiency."
        },
        {
            strategy: "Stay Physically and Mentally Fit",
            detail: "Exercise 30 minutes daily, sleep 7-8 hours, eat healthy. A healthy body supports a sharp mind. Meditation helps manage exam stress."
        }
    ];

    return (
        <div className="page-wrapper">
            <div className="container">
                <button onClick={onBack} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
                    <ArrowLeft size={18} /> Back
                </button>

                {/* Hero Section */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.6rem 1.5rem',
                        background: 'rgba(234, 88, 12, 0.1)',
                        border: '2px solid #EA580C',
                        borderRadius: '30px',
                        marginBottom: '2rem'
                    }}>
                        <Star size={18} color="#EA580C" />
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#EA580C', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Expert-Written 3000+ Word Guides
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                        background: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 50%, #FCD34D 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        Preparation Guides
                    </h1>

                    <p style={{
                        fontSize: '1.1rem',
                        color: 'white',
                        maxWidth: '100%',
                        margin: '0 auto 3rem',
                        lineHeight: '1.8',
                        opacity: 0.95
                    }}>
                        Comprehensive preparation strategies written by successful candidates and exam experts. Every guide is 3000+ words covering syllabus, study plan, resources, and success tips.
                    </p>

                    <div className="grid-responsive" style={{ gap: '1.5rem' }}>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#EA580C', marginBottom: '0.5rem' }}>30+</div>
                            <div style={{ color: 'white', fontSize: '0.9rem' }}>Expert Guides</div>
                        </div>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#EA580C', marginBottom: '0.5rem' }}>3000+</div>
                            <div style={{ color: 'white', fontSize: '0.9rem' }}>Words Per Guide</div>
                        </div>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#EA580C', marginBottom: '0.5rem' }}>100%</div>
                            <div style={{ color: 'white', fontSize: '0.9rem' }}>Success Proven</div>
                        </div>
                    </div>
                </div>

                <div style={{ marginBottom: '4rem' }}>
                    <div className="grid-responsive" style={{ gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className="btn"
                                style={{
                                    padding: '0.7rem 1.5rem',
                                    background: selectedCategory === cat ? '#EA580C' : 'rgba(255, 255, 255, 0.05)',
                                    border: `2px solid ${selectedCategory === cat ? '#EA580C' : 'rgba(234, 88, 12, 0.3)'}`,
                                    borderRadius: '25px',
                                    color: 'white',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    fontSize: '0.95rem'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', color: 'white', fontSize: '1.05rem' }}>
                        Showing <span style={{ color: '#EA580C', fontWeight: 700 }}>{filteredBlogs.length}</span> guides
                    </div>
                </div>

                {/* Blog Grid */}
                <div style={{ marginBottom: '5rem' }}>
                    <div className="blog-grid">
                        {filteredBlogs.map((blog) => (
                            <div
                                key={blog.id}
                                className="blog-card"
                                onClick={() => onSelectBlog(blog)}
                                style={{
                                    cursor: 'pointer',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '2px solid rgba(234, 88, 12, 0.2)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div style={{ height: '220px', overflow: 'hidden', background: '#1E293B' }}>
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=60&w=500';
                                        }}
                                    />
                                </div>
                                <div className="blog-content">
                                    <span style={{
                                        display: 'inline-block',
                                        padding: '0.4rem 1rem',
                                        background: 'rgba(234, 88, 12, 0.1)',
                                        border: '1px solid #EA580C',
                                        borderRadius: '20px',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        color: '#EA580C',
                                        marginBottom: '1rem'
                                    }}>
                                        {blog.category}
                                    </span>
                                    <h3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '1rem' }}>{blog.title}</h3>
                                    <p style={{ fontSize: '0.95rem', color: 'white', marginBottom: '1.5rem', lineHeight: '1.7' }}>{blog.excerpt}</p>
                                    <span style={{ color: '#EA580C', fontSize: '0.9rem', fontWeight: 600 }}>
                                        Read Complete 3000+ Word Guide →
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Study Plans */}
                <div className="dedicated-content" style={{
                    marginBottom: '5rem',
                    background: 'rgba(245, 158, 11, 0.03)',
                    border: '2px solid rgba(245, 158, 11, 0.2)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ color: '#F59E0B', fontSize: 'clamp(1.8rem, 4.5vw, 2.2rem)', marginBottom: '1rem' }}>
                            Ready-Made Study Plans
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.7', width: '100%', margin: '0 auto' }}>
                            Proven study plans designed by toppers. Choose based on your target exam and available time.
                        </p>
                    </div>

                    <div className="grid-responsive" style={{ gap: '2rem' }}>
                        {studyPlans.map((plan, idx) => (
                            <div key={idx} className="glass-card" style={{
                                padding: '2rem 1.5rem',
                                background: 'rgba(255, 255, 255, 0.02)',
                                borderRadius: '16px',
                                border: `2px solid ${plan.color}40`,
                                width: '100%'
                            }}>
                                <div style={{
                                    display: 'inline-block',
                                    padding: '0.5rem 1.2rem',
                                    background: `${plan.color}15`,
                                    border: `2px solid ${plan.color}`,
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    fontWeight: 700,
                                    color: plan.color,
                                    marginBottom: '1.5rem'
                                }}>
                                    {plan.exam}
                                </div>

                                <h3 style={{ color: plan.color, fontSize: '1.8rem', marginBottom: '0.8rem', fontWeight: 700 }}>
                                    {plan.title}
                                </h3>

                                <div style={{ marginBottom: '2rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', padding: '0.8rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px' }}>
                                        <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Duration:</span>
                                        <span style={{ color: 'white', fontWeight: 600 }}>{plan.duration}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.8rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px' }}>
                                        <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Daily Hours:</span>
                                        <span style={{ color: 'white', fontWeight: 600 }}>{plan.hours}</span>
                                    </div>
                                </div>

                                <div>
                                    <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>
                                        Preparation Phases:
                                    </div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {plan.phases.map((phase, i) => (
                                            <li key={i} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.8rem',
                                                marginBottom: '0.5rem',
                                                padding: '0.6rem',
                                                background: 'rgba(255, 255, 255, 0.02)',
                                                borderRadius: '8px'
                                            }}>
                                                <CheckCircle2 size={16} color={plan.color} />
                                                <span style={{ color: 'white', fontSize: '0.95rem' }}>{phase}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Expert Tips */}
                <div style={{ marginBottom: '5rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
                            marginBottom: '1rem',
                            background: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 50%, #FCD34D 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Expert Preparation Tips
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', width: '100%', margin: '0 auto', lineHeight: '1.7' }}>
                            Time-tested strategies from successful candidates who cracked UPSC, SSC, and Banking exams.
                        </p>
                    </div>

                    <div className="grid-responsive" style={{ gap: '2rem' }}>
                        {expertTips.map((tip, idx) => (
                            <div key={idx} className="glass-card" style={{
                                padding: '2rem 1.5rem',
                                background: 'rgba(234, 88, 12, 0.03)',
                                border: '2px solid rgba(234, 88, 12, 0.2)',
                                width: '100%'
                            }}>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    {tip.icon}
                                </div>
                                <h3 style={{ color: '#F59E0B', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>
                                    {tip.tip}
                                </h3>
                                <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8', margin: 0 }}>
                                    {tip.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Success Strategies */}
                <div className="dedicated-content" style={{
                    marginBottom: '5rem',
                    background: 'rgba(234, 88, 12, 0.05)',
                    border: '2px solid rgba(234, 88, 12, 0.3)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ color: '#EA580C', fontSize: 'clamp(1.8rem, 4.5vw, 2.2rem)', marginBottom: '1rem' }}>
                            Proven Success Strategies
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.7', width: '100%', margin: '0 auto' }}>
                            These strategies have helped thousands of aspirants achieve their goals. Implement them in your preparation.
                        </p>
                    </div>

                    <div className="grid-responsive" style={{ gap: '2rem' }}>
                        {successStrategies.map((item, idx) => (
                            <div key={idx} className="glass-card" style={{
                                padding: '2rem 1.5rem',
                                background: 'rgba(255, 255, 255, 0.02)',
                                borderRadius: '12px',
                                border: '2px solid rgba(234, 88, 12, 0.2)',
                                width: '100%'
                            }}>
                                <div>
                                    <h3 style={{ color: '#EA580C', fontSize: '1.4rem', fontWeight: 700 }}>
                                        {item.strategy}
                                    </h3>
                                </div>
                                <div>
                                    <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8', margin: 0 }}>
                                        {item.detail}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="dedicated-content" style={{
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(234, 88, 12, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)',
                    border: '2px solid #EA580C'
                }}>
                    <h2 style={{ color: '#EA580C', fontSize: 'clamp(1.8rem, 4.5vw, 2.2rem)', marginBottom: '1.5rem' }}>
                        Start Your Preparation Journey Today
                    </h2>
                    <p style={{ color: 'white', fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: '1.8', width: '100%', margin: '0 auto 2.5rem' }}>
                        Access 30+ comprehensive preparation guides written by experts and successful candidates. Every guide is 3000+ words covering complete syllabus, strategy, and resources.
                    </p>
                    <div className="grid-responsive" style={{ gap: '1.5rem', justifyContent: 'center' }}>
                        <button onClick={() => window.scrollTo(0, 600)} className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>
                            <BookOpen size={20} /> Explore All Guides
                        </button>
                        <button onClick={onBack} className="btn btn-secondary">
                            <ArrowLeft size={20} /> Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreparationGuidesPage;
