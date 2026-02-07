import React, { useEffect } from 'react';
import { Home, CheckCircle2, Award, Users, TrendingUp, BookOpen, Target, FileCheck, Calendar, GraduationCap, Zap, ShieldCheck } from 'lucide-react';
import EligibilityChecker from './EligibilityChecker';

const EligibilityCheckerPage = ({ onBack }) => {
    useEffect(() => window.scrollTo(0, 0), []);

    const eligibilityCriteria = [
        {
            exam: "UPSC Civil Services",
            age: "21-32 years",
            qualification: "Bachelor's Degree",
            attempts: "6 attempts (General)",
            icon: <Award size={32} color="#8B5CF6" />
        },
        {
            exam: "SSC CGL",
            age: "18-32 years (varies by post)",
            qualification: "Bachelor's Degree",
            attempts: "No limit",
            icon: <FileCheck size={32} color="#8B5CF6" />
        },
        {
            exam: "IBPS PO",
            age: "20-30 years",
            qualification: "Bachelor's Degree (60%)",
            attempts: "No limit",
            icon: <TrendingUp size={32} color="#8B5CF6" />
        },
        {
            exam: "RRB NTPC",
            age: "18-33 years",
            qualification: "12th Pass / Graduate",
            attempts: "No limit",
            icon: <Target size={32} color="#8B5CF6" />
        },
        {
            exam: "State PSC",
            age: "21-40 years (varies)",
            qualification: "Bachelor's Degree",
            attempts: "Varies by state",
            icon: <GraduationCap size={32} color="#8B5CF6" />
        },
        {
            exam: "SSC CHSL",
            age: "18-27 years",
            qualification: "12th Pass",
            attempts: "No limit",
            icon: <BookOpen size={32} color="#8B5CF6" />
        }
    ];

    const ageRelaxations = [
        { category: "OBC (Non-Creamy Layer)", relaxation: "3 years", color: "#10B981" },
        { category: "SC/ST", relaxation: "5 years", color: "#10B981" },
        { category: "PwD (General)", relaxation: "10 years", color: "#10B981" },
        { category: "PwD (OBC)", relaxation: "13 years", color: "#10B981" },
        { category: "PwD (SC/ST)", relaxation: "15 years", color: "#10B981" },
        { category: "Ex-Servicemen", relaxation: "Service period + 3 years", color: "#10B981" },
        { category: "J&K Domicile (1980-89)", relaxation: "5 years", color: "#F59E0B" },
        { category: "Defence Personnel (Ops)", relaxation: "5 years", color: "#F59E0B" }
    ];

    const commonMistakes = [
        {
            mistake: "Applying without checking age on cut-off date",
            solution: "Always calculate age as on the cut-off date mentioned in notification, not application date",
            impact: "Application rejection"
        },
        {
            mistake: "Ignoring educational qualification percentage",
            solution: "Some exams require minimum percentage (e.g., IBPS PO needs 60%). Check notification carefully",
            impact: "Disqualification at document verification"
        },
        {
            mistake: "Not claiming age relaxation benefits",
            solution: "If you belong to reserved category, claim your relaxation. Keep caste/category certificate ready",
            impact: "Missing eligible opportunities"
        },
        {
            mistake: "Applying for wrong post based on qualification",
            solution: "Match your degree stream with post requirements. Engineering degree needed for technical posts",
            impact: "Application rejection or wrong posting"
        },
        {
            mistake: "Forgetting about attempt limits",
            solution: "UPSC has attempt limits. Plan your attempts strategically. Don't waste attempts without preparation",
            impact: "Losing future opportunities"
        },
        {
            mistake: "Not checking physical standards",
            solution: "Posts like Police, Defence have height, chest, eyesight requirements. Verify before applying",
            impact: "Rejection at medical examination"
        }
    ];

    const preparationTips = [
        {
            title: "Start Early, Plan Smart",
            description: "Once you confirm eligibility, start preparation immediately. Government exams require 6-12 months of dedicated study. Create a realistic study plan based on syllabus and your current knowledge level.",
            icon: <Calendar size={28} color="#8B5CF6" />
        },
        {
            title: "Understand Syllabus Thoroughly",
            description: "Download official syllabus from exam conducting body. Break it into topics and subtopics. Prioritize high-weightage areas. Don't waste time on topics not in syllabus.",
            icon: <BookOpen size={28} color="#8B5CF6" />
        },
        {
            title: "Practice Previous Year Papers",
            description: "Solve at least 10 years of previous papers. This reveals exam pattern, difficulty level, and frequently asked topics. Time yourself to improve speed and accuracy.",
            icon: <Target size={28} color="#8B5CF6" />
        },
        {
            title: "Stay Updated with Current Affairs",
            description: "Read newspapers daily (The Hindu, Indian Express). Follow PIB releases. Maintain monthly current affairs notes. This is crucial for prelims and mains.",
            icon: <Zap size={28} color="#8B5CF6" />
        },
        {
            title: "Join Test Series",
            description: "Enroll in quality test series 3-4 months before exam. Regular mock tests improve time management, identify weak areas, and build exam temperament.",
            icon: <TrendingUp size={28} color="#8B5CF6" />
        },
        {
            title: "Revision is Key",
            description: "Allocate 30% of study time for revision. Make concise notes during first reading. Revise multiple times. Last month should be pure revision and mock tests.",
            icon: <CheckCircle2 size={28} color="#8B5CF6" />
        }
    ];

    return (
        <div style={{
            paddingTop: '10rem',
            paddingBottom: '6rem',
            background: 'var(--primary)',
            minHeight: '100vh'
        }}>
            <div className="container">
                <button onClick={onBack} className="btn btn-secondary" style={{ marginBottom: '3rem' }}>
                    <Home size={16} /> Back to Home
                </button>

                {/* Hero Section */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.6rem 1.5rem',
                        background: 'rgba(139, 92, 246, 0.1)',
                        border: '2px solid #8B5CF6',
                        borderRadius: '30px',
                        marginBottom: '2rem'
                    }}>
                        <ShieldCheck size={18} color="#8B5CF6" />
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#8B5CF6', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            AI-Powered Eligibility Verification
                        </span>
                    </div>

                    <h1 className="gradient-text-purple" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Intelligent Eligibility Checker
                    </h1>

                    <p style={{
                        fontSize: '1.3rem',
                        color: 'white',
                        maxWidth: '900px',
                        margin: '0 auto 3rem',
                        lineHeight: '1.8',
                        opacity: 0.95
                    }}>
                        Discover all government exams you're eligible for in 2026. Our advanced algorithm analyzes 50+ central and state notifications to match you with the perfect opportunities based on your age, qualification, and category.
                    </p>

                    {/* Stats */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>
                        <div className="glass-card" style={{ padding: '2rem', background: 'rgba(139, 92, 246, 0.05)', border: '2px solid rgba(139, 92, 246, 0.2)' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 800, color: '#8B5CF6', marginBottom: '0.5rem' }}>50+</div>
                            <div style={{ color: 'white', fontSize: '1rem' }}>Exams Covered</div>
                        </div>
                        <div className="glass-card" style={{ padding: '2rem', background: 'rgba(139, 92, 246, 0.05)', border: '2px solid rgba(139, 92, 246, 0.2)' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 800, color: '#8B5CF6', marginBottom: '0.5rem' }}>100%</div>
                            <div style={{ color: 'white', fontSize: '1rem' }}>Accurate Results</div>
                        </div>
                        <div className="glass-card" style={{ padding: '2rem', background: 'rgba(139, 92, 246, 0.05)', border: '2px solid rgba(139, 92, 246, 0.2)' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 800, color: '#8B5CF6', marginBottom: '0.5rem' }}>5L+</div>
                            <div style={{ color: 'white', fontSize: '1rem' }}>Users Trust Us</div>
                        </div>
                    </div>
                </div>

                {/* Eligibility Checker Component */}
                <div id="eligibility-checker-section" className="glass-card" style={{
                    padding: '4rem',
                    marginBottom: '5rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '2px solid rgba(139, 92, 246, 0.3)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ color: '#8B5CF6', fontSize: '2.5rem', marginBottom: '1rem' }}>
                            Check Your Eligibility Now
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.7' }}>
                            Enter your details below to get instant results. Our system will show you all exams you qualify for.
                        </p>
                    </div>
                    <EligibilityChecker />
                </div>

                {/* Popular Exam Eligibility Criteria */}
                <div style={{ marginBottom: '5rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="gradient-text-purple" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
                            Popular Exam Eligibility Criteria 2026
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
                            Quick reference guide for major government examinations. Always verify with official notification.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                        {eligibilityCriteria.map((exam, idx) => (
                            <div key={idx} className="glass-card" style={{
                                padding: '2.5rem',
                                background: 'rgba(139, 92, 246, 0.03)',
                                border: '2px solid rgba(139, 92, 246, 0.2)',
                                transition: 'all 0.3s ease'
                            }}>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    {exam.icon}
                                </div>
                                <h3 style={{ color: '#8B5CF6', fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 700 }}>
                                    {exam.exam}
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.8rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px' }}>
                                        <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>Age Limit:</span>
                                        <span style={{ color: 'white', fontWeight: 600, fontSize: '0.95rem' }}>{exam.age}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.8rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px' }}>
                                        <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>Qualification:</span>
                                        <span style={{ color: 'white', fontWeight: 600, fontSize: '0.95rem' }}>{exam.qualification}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.8rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px' }}>
                                        <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>Attempts:</span>
                                        <span style={{ color: 'white', fontWeight: 600, fontSize: '0.95rem' }}>{exam.attempts}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Age Relaxation Guide */}
                <div className="glass-card" style={{
                    padding: '4rem',
                    marginBottom: '5rem',
                    background: 'rgba(16, 185, 129, 0.03)',
                    border: '2px solid rgba(16, 185, 129, 0.2)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ color: '#10B981', fontSize: '2.5rem', marginBottom: '1rem' }}>
                            Age Relaxation Benefits
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto' }}>
                            Government of India provides age relaxation for reserved categories and special cases. Know your benefits!
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {ageRelaxations.map((item, idx) => (
                            <div key={idx} style={{
                                padding: '1.5rem',
                                background: 'rgba(255, 255, 255, 0.02)',
                                borderRadius: '12px',
                                border: `2px solid ${item.color}20`,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <div>
                                    <div style={{ color: 'white', fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.3rem' }}>
                                        {item.category}
                                    </div>
                                    <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>
                                        Relaxation
                                    </div>
                                </div>
                                <div style={{
                                    padding: '0.6rem 1.2rem',
                                    background: `${item.color}15`,
                                    border: `2px solid ${item.color}`,
                                    borderRadius: '20px',
                                    color: item.color,
                                    fontWeight: 700,
                                    fontSize: '0.9rem'
                                }}>
                                    {item.relaxation}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        marginTop: '3rem',
                        padding: '1.5rem',
                        background: 'rgba(245, 158, 11, 0.05)',
                        border: '2px solid rgba(245, 158, 11, 0.3)',
                        borderRadius: '12px'
                    }}>
                        <p style={{ color: 'white', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
                            <strong style={{ color: '#F59E0B' }}>Important Note:</strong> Age relaxations are cumulative in some cases (e.g., PwD + SC/ST). Always check the official notification for exact relaxation applicable to your case. Keep valid certificates ready for document verification.
                        </p>
                    </div>
                </div>

                {/* Common Mistakes Section */}
                <div style={{ marginBottom: '5rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="gradient-text-purple" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
                            Common Eligibility Mistakes to Avoid
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
                            Learn from others' mistakes. These errors have cost thousands of aspirants their dream jobs.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gap: '2rem' }}>
                        {commonMistakes.map((item, idx) => (
                            <div key={idx} className="glass-card" style={{
                                padding: '2.5rem',
                                background: 'rgba(239, 68, 68, 0.03)',
                                border: '2px solid rgba(239, 68, 68, 0.2)'
                            }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', alignItems: 'start' }}>
                                    <div>
                                        <div style={{
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            color: '#EF4444',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            marginBottom: '0.8rem'
                                        }}>
                                            ❌ Common Mistake
                                        </div>
                                        <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                                            {item.mistake}
                                        </p>
                                    </div>
                                    <div>
                                        <div style={{
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            color: '#10B981',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            marginBottom: '0.8rem'
                                        }}>
                                            ✓ Correct Approach
                                        </div>
                                        <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                                            {item.solution}
                                        </p>
                                    </div>
                                    <div>
                                        <div style={{
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            color: '#F59E0B',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            marginBottom: '0.8rem'
                                        }}>
                                            ⚠️ Impact
                                        </div>
                                        <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                                            {item.impact}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Preparation Tips After Eligibility Confirmation */}
                <div className="glass-card" style={{
                    padding: '4rem',
                    marginBottom: '5rem',
                    background: 'rgba(139, 92, 246, 0.05)',
                    border: '2px solid rgba(139, 92, 246, 0.3)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ color: '#8B5CF6', fontSize: '2.5rem', marginBottom: '1rem' }}>
                            Next Steps After Confirming Eligibility
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto' }}>
                            You've confirmed you're eligible. Now what? Follow these expert-recommended steps to maximize your success chances.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                        {preparationTips.map((tip, idx) => (
                            <div key={idx} style={{
                                padding: '2.5rem',
                                background: 'rgba(255, 255, 255, 0.02)',
                                borderRadius: '16px',
                                border: '2px solid rgba(139, 92, 246, 0.2)'
                            }}>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    {tip.icon}
                                </div>
                                <h3 style={{ color: '#8B5CF6', fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 700 }}>
                                    {tip.title}
                                </h3>
                                <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8', margin: 0 }}>
                                    {tip.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="glass-card" style={{
                    padding: '4rem',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
                    border: '2px solid #8B5CF6'
                }}>
                    <h2 style={{ color: '#8B5CF6', fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                        Ready to Start Your Journey?
                    </h2>
                    <p style={{ color: 'white', fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                        Join 5 lakh+ aspirants who trust SarkariExamAll for accurate eligibility information and comprehensive preparation guidance. Your dream government job is just one eligibility check away!
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button onClick={() => {
                            const checker = document.getElementById('eligibility-checker-section');
                            if (checker) checker.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }} className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>
                            <CheckCircle2 size={20} /> Check Eligibility Again
                        </button>
                        <button onClick={onBack} className="btn btn-secondary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>
                            <Home size={20} /> Explore More Resources
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EligibilityCheckerPage;
