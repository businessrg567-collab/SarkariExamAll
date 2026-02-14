import React from 'react';
import { FileText, ShieldCheck, Award, BookOpen, CheckCircle2, ChevronRight, ClipboardList } from 'lucide-react';

const examHubData = [
    {
        category: 'Central Services',
        exams: [
            {
                name: 'UPSC Civil Services 2026',
                docs: ['Aadhaar Card', 'Graduation Certificate', 'Caste Certificate (if applicable)', 'DAF Photo & Signature'],
                qualification: 'Graduate in any discipline from recognized university',
                link: '#'
            },
            {
                name: 'SSC CGL 2026',
                docs: ['10th Marksheet for DOB', 'Provisional Degree Certificate', 'Payment Receipt', 'Valid ID Proof'],
                qualification: 'Bachelor Degree in any discipline',
                link: '#'
            },
            {
                name: 'SSC CHSL 2026',
                docs: ['10th Certificate', '12th Certificate', 'Category Certificate', 'Recent Photograph'],
                qualification: '12th Pass from recognized board',
                link: '#'
            }
        ]
    },
    {
        category: 'Banking and Finance',
        exams: [
            {
                name: 'IBPS PO 2026',
                docs: ['Registration Confirmation', 'Graduation Marksheets', 'Category Certificate', 'Passport Size Photo'],
                qualification: 'Bachelor Degree with minimum 60 percent',
                link: '#'
            },
            {
                name: 'SBI PO 2026',
                docs: ['Call Letter', 'Degree Certificate', 'Identity Proof', 'Category Certificate'],
                qualification: 'Graduation in any discipline',
                link: '#'
            },
            {
                name: 'RBI Grade B 2026',
                docs: ['Educational Certificates', 'Work Experience (if any)', 'Identity Documents', 'Caste Certificate'],
                qualification: 'Graduate with 60 percent marks',
                link: '#'
            }
        ]
    },
    {
        category: 'Railway Recruitment',
        exams: [
            {
                name: 'RRB NTPC 2026',
                docs: ['10th Certificate', '12th or Graduation Certificate', 'Community Certificate', 'Photo and Signature'],
                qualification: '12th Pass or Graduate depending on post',
                link: '#'
            },
            {
                name: 'RRB Group D 2026',
                docs: ['10th Certificate', 'ITI Certificate (if applicable)', 'Caste Certificate', 'Medical Fitness Certificate'],
                qualification: '10th Pass or ITI',
                link: '#'
            },
            {
                name: 'RRB JE 2026',
                docs: ['Diploma/Degree in Engineering', 'Caste Certificate', 'Aadhaar Card', 'Passport Size Photo'],
                qualification: 'Diploma or Degree in Engineering',
                link: '#'
            }
        ]
    },
    {
        category: 'Defense Services',
        exams: [
            {
                name: 'NDA 2026',
                docs: ['10th and 12th Certificates', 'Birth Certificate', 'Character Certificate', 'Medical Fitness Certificate'],
                qualification: '12th Pass for Army, 12th with Physics and Maths for Air Force and Navy',
                link: '#'
            },
            {
                name: 'CDS 2026',
                docs: ['Graduation Certificate', 'Character Certificate from College', 'Medical Fitness Certificate', 'NOC if employed'],
                qualification: 'Graduate from recognized university',
                link: '#'
            },
            {
                name: 'AFCAT 2026',
                docs: ['Graduation Marksheets', 'Aadhaar Card', 'Commercial Pilot License (if applicable)', 'Recent Photo'],
                qualification: 'Graduation with 60% marks and Physics/Maths in 12th',
                link: '#'
            }
        ]
    }
];

const ExamHub = () => {
    return (
        <div className="reveal">
            <div className="grid grid-2" style={{ gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                {examHubData.map((cat, i) => (
                    <div key={i} className="glass-card" style={{ padding: '1.5rem' }}>
                        <h3 className="gradient-text-teal" style={{ marginBottom: '1.2rem', fontSize: '1.3rem' }}>{cat.category}</h3>
                        {cat.exams.map((exam, j) => (
                            <div key={j} style={{ marginBottom: '1.5rem', paddingBottom: '0.8rem', borderBottom: j < cat.exams.length - 1 ? '1px solid var(--glass-border)' : 'none' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                                    <h4 style={{ color: 'white', fontSize: '1rem' }}>{exam.name}</h4>
                                    <span className="badge-trust" style={{ margin: 0, fontSize: '0.6rem', padding: '0.2rem 0.5rem' }}>Official</span>
                                </div>
                                <div style={{ marginTop: '0.8rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <span style={{ fontSize: '0.7rem', color: 'var(--secondary)', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>MANDATORY DOCUMENTS</span>
                                        <ul style={{ listStyle: 'none', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                                            {exam.docs.map((doc, k) => (
                                                <li key={k} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', marginBottom: '0.3rem' }}>
                                                    <CheckCircle2 size={12} color="var(--secondary)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                                                    <span>{doc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: '0.7rem', color: 'var(--secondary)', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>QUALIFICATION</span>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', lineHeight: '1.5' }}>{exam.qualification}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExamHub;
