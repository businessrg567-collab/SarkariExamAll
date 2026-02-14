import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, FileText, Award, BookOpen, Calendar, CheckCircle2, AlertCircle, Download, ArrowLeft, ShieldCheck } from 'lucide-react';
import ExamHub from './ExamHub';

const ExamRequirementsPage = ({ onBack, onHome }) => {
    const navigate = useNavigate();
    useEffect(() => window.scrollTo(0, 0), []);

    const examCategories = [
        {
            category: "UPSC Exams",
            exams: ["Civil Services (IAS/IPS/IFS)", "CAPF", "CDS", "NDA", "Engineering Services"],
            icon: <Award size={32} color="#F59E0B" />
        },
        {
            category: "SSC Exams",
            exams: ["SSC CGL", "SSC CHSL", "SSC MTS", "SSC CPO", "SSC JE"],
            icon: <FileText size={32} color="#10B981" />
        },
        {
            category: "Banking Exams",
            exams: ["IBPS PO", "IBPS Clerk", "SBI PO", "SBI Clerk", "RBI Grade B"],
            icon: <BookOpen size={32} color="#8B5CF6" />
        },
        {
            category: "Railway Exams",
            exams: ["RRB NTPC", "RRB Group D", "RRB JE", "RRB ALP", "RRB RPF"],
            icon: <Calendar size={32} color="#06B6D4" />
        },
        {
            category: "Defense Exams",
            exams: ["NDA", "CDS", "AFCAT", "CAPF", "Indian Coast Guard"],
            icon: <ShieldCheck size={32} color="#EF4444" />
        },
        {
            category: "State PSC Exams",
            exams: ["UPPSC", "BPSC", "MPPSC", "RPSC", "MPSC"],
            icon: <Award size={32} color="#8B5CF6" />
        }
    ];

    return (
        <div className="page-wrapper">
            <div className="container">
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                    <button onClick={onBack} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <ArrowLeft size={18} /> Back
                    </button>
                    <button onClick={onHome} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Home size={18} /> Home
                    </button>
                </div>

                {/* Hero Section */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.6rem 1.5rem',
                        background: 'rgba(245, 158, 11, 0.1)',
                        border: '2px solid #F59E0B',
                        borderRadius: '30px',
                        marginBottom: '2rem'
                    }}>
                        <FileText size={18} color="#F59E0B" />
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Complete Exam Requirements Guide
                        </span>
                    </div>

                    <h1 className="gradient-text" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Exam Requirements 2026
                    </h1>

                    <p style={{
                        fontSize: '1.1rem',
                        color: 'white',
                        maxWidth: '100%',
                        margin: '0 auto 3rem',
                        lineHeight: '1.8',
                        opacity: 0.95
                    }}>
                        Comprehensive requirements for all major government examinations. Find detailed eligibility criteria, educational qualifications, age limits, and document requirements for your target exam.
                    </p>

                    <div className="grid-responsive" style={{ gap: '1.5rem' }}>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#F59E0B', marginBottom: '0.5rem' }}>50+</div>
                            <div style={{ color: 'white', fontSize: '0.9rem' }}>Exams Covered</div>
                        </div>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#F59E0B', marginBottom: '0.5rem' }}>100%</div>
                            <div style={{ color: 'white', fontSize: '0.9rem' }}>Accurate Data</div>
                        </div>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#F59E0B', marginBottom: '0.5rem' }}>2026</div>
                            <div style={{ color: 'white', fontSize: '0.9rem' }}>Updated Info</div>
                        </div>
                    </div>
                </div>

                {/* Exam Categories */}
                <div style={{ marginBottom: '5rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="gradient-text" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom: '1rem' }}>
                            Browse by Exam Category
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', width: '100%', margin: '0 auto', lineHeight: '1.7' }}>
                            Select your exam category to view detailed requirements and eligibility criteria.
                        </p>
                    </div>

                    <div className="grid-responsive" style={{ gap: '2rem', marginBottom: '5rem' }}>
                        {examCategories.map((cat, idx) => (
                            <div key={idx} className="glass-card" style={{
                                padding: '2rem 1.5rem',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '2px solid rgba(245, 158, 11, 0.2)',
                                transition: 'all 0.3s ease',
                                width: '100%'
                            }}>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    {cat.icon}
                                </div>
                                <h3 style={{ color: '#F59E0B', fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 700 }}>
                                    {cat.category}
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {cat.exams.map((exam, i) => (
                                        <li key={i} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.8rem',
                                            padding: '0.8rem',
                                            background: 'rgba(255, 255, 255, 0.02)',
                                            borderRadius: '8px',
                                            marginBottom: '0.5rem'
                                        }}>
                                            <CheckCircle2 size={16} color="#10B981" />
                                            <span style={{ color: 'white', fontSize: '0.95rem' }}>{exam}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Exam Hub - Interactive Exam Selector */}
                <div className="glass-card" style={{
                    padding: '2rem 1.5rem',
                    marginBottom: '5rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '2px solid rgba(245, 158, 11, 0.3)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ color: '#F59E0B', fontSize: '2.2rem', marginBottom: '1rem' }}>
                            Detailed Exam Requirements
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.7' }}>
                            Select your target exam below to view complete eligibility criteria, educational qualifications, age limits, and required documents.
                        </p>
                    </div>
                    <ExamHub />
                </div>

                {/* Important Notes */}
                <div className="glass-card" style={{
                    padding: '3rem',
                    marginBottom: '5rem',
                    background: 'rgba(239, 68, 68, 0.05)',
                    border: '2px solid rgba(239, 68, 68, 0.3)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'start', gap: '1.5rem' }}>
                        <AlertCircle size={32} color="#EF4444" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                        <div>
                            <h3 style={{ color: '#EF4444', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 700 }}>
                                Important Notes
                            </h3>
                            <ul style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8', margin: 0 }}>
                                <li style={{ marginBottom: '0.8rem' }}>Always verify requirements from official exam notifications before applying</li>
                                <li style={{ marginBottom: '0.8rem' }}>Age relaxation applies for reserved categories (SC/ST/OBC/PwD/Ex-Servicemen)</li>
                                <li style={{ marginBottom: '0.8rem' }}>Educational qualifications must be from recognized universities/boards</li>
                                <li style={{ marginBottom: '0.8rem' }}>Keep all original documents ready for verification stage</li>
                                <li>Requirements may change - check official websites regularly</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="glass-card" style={{
                    padding: '4rem',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
                    border: '2px solid #F59E0B'
                }}>
                    <h2 style={{ color: '#F59E0B', fontSize: '2.2rem', marginBottom: '1.5rem' }}>
                        Ready to Check Your Eligibility?
                    </h2>
                    <p style={{ color: 'white', fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                        Use our eligibility checker to instantly find out which exams you qualify for based on your age, education, and category.
                    </p>
                    <div className="grid-responsive" style={{ gap: '1.5rem', justifyContent: 'center' }}>
                        <button onClick={() => navigate('/eligibility-checker')} className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>
                            <CheckCircle2 size={20} /> Check Eligibility Now
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

export default ExamRequirementsPage;
