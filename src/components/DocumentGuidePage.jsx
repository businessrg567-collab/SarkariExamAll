import React, { useEffect } from 'react';
import { Home, FileText, CheckCircle2, AlertCircle, AlertTriangle, Download, Search, Info, ArrowLeft, Shield, BookOpen, Award, Clock, Upload, FileCheck } from 'lucide-react';
import ExamHub from './ExamHub';

const DocumentGuidePage = ({ onBack, onNavigateToExamRequirements }) => {
    useEffect(() => window.scrollTo(0, 0), []);

    const essentialDocuments = [
        {
            category: "Identity Proof",
            documents: ["Aadhaar Card", "PAN Card", "Voter ID", "Passport", "Driving License"],
            priority: "Mandatory",
            color: "#10B981",
            icon: <Shield size={32} color="#10B981" />
        },
        {
            category: "Educational Certificates",
            documents: ["10th Marksheet", "12th Marksheet", "Graduation Degree", "Provisional Certificate", "Migration Certificate"],
            priority: "Mandatory",
            color: "#10B981",
            icon: <BookOpen size={32} color="#10B981" />
        },
        {
            category: "Category Certificates",
            documents: ["Caste Certificate (SC/ST/OBC)", "EWS Certificate", "PwD Certificate", "Ex-Servicemen Certificate"],
            priority: "If Applicable",
            color: "#F59E0B",
            icon: <Award size={32} color="#F59E0B" />
        },
        {
            category: "Age Proof",
            documents: ["Birth Certificate", "10th Certificate", "School Leaving Certificate", "Passport"],
            priority: "Mandatory",
            color: "#10B981",
            icon: <Clock size={32} color="#10B981" />
        },
        {
            category: "Photographs",
            documents: ["Passport Size Photos (10-15)", "Signature Specimens", "Scanned Photo (JPEG)", "Scanned Signature (JPEG)"],
            priority: "Mandatory",
            color: "#10B981",
            icon: <Upload size={32} color="#10B981" />
        },
        {
            category: "Experience Certificates",
            documents: ["Service Certificate", "Experience Letter", "Salary Slips", "Relieving Letter"],
            priority: "If Applicable",
            color: "#F59E0B",
            icon: <FileCheck size={32} color="#F59E0B" />
        }
    ];

    const documentSpecifications = [
        {
            exam: "UPSC CSE",
            photoSize: "4.5cm x 3.5cm",
            photoFormat: "JPEG (10-40 KB)",
            signatureSize: "3cm x 1cm",
            signatureFormat: "JPEG (10-40 KB)",
            specialRequirements: "White background, 80% face coverage, recent photo (within 3 months)"
        },
        {
            exam: "SSC CGL/CHSL",
            photoSize: "4cm x 3cm",
            photoFormat: "JPEG (20-50 KB)",
            signatureSize: "4cm x 2cm",
            signatureFormat: "JPEG (10-20 KB)",
            specialRequirements: "Light background, clear face, no filters or editing"
        },
        {
            exam: "IBPS PO/Clerk",
            photoSize: "200 x 230 pixels",
            photoFormat: "JPEG (20-50 KB)",
            signatureSize: "140 x 60 pixels",
            signatureFormat: "JPEG (10-20 KB)",
            specialRequirements: "Colored photo, white/light background, signature on white paper with black ink"
        },
        {
            exam: "RRB NTPC/Group D",
            photoSize: "3.5cm x 3.5cm",
            photoFormat: "JPEG (20-50 KB)",
            signatureSize: "4cm x 2cm",
            signatureFormat: "JPEG (10-20 KB)",
            specialRequirements: "Recent photo, clear signature, no scribbles"
        }
    ];

    const stateSpecificDocs = [
        {
            state: "Maharashtra",
            additionalDocs: ["Domicile Certificate", "Non-Creamy Layer Certificate (valid for current year)", "Marathi Language Proficiency Certificate"],
            validity: "Caste certificate: 3 years, NCL: 1 year"
        },
        {
            state: "Uttar Pradesh",
            additionalDocs: ["Domicile Certificate", "Character Certificate", "Income Certificate (for EWS)"],
            validity: "Income certificate: 6 months"
        },
        {
            state: "Tamil Nadu",
            additionalDocs: ["Community Certificate", "Nativity Certificate", "First Graduate Certificate (if applicable)"],
            validity: "Community certificate: No expiry"
        },
        {
            state: "Karnataka",
            additionalDocs: ["Domicile Certificate", "Income Certificate", "Kannada Language Certificate"],
            validity: "Income certificate: 1 year"
        },
        {
            state: "West Bengal",
            additionalDocs: ["Residential Certificate", "Caste Certificate from SDO", "Bengali Language Certificate"],
            validity: "Caste certificate: Permanent"
        }
    ];

    const commonMistakes = [
        {
            mistake: "Using old or expired certificates",
            consequence: "Rejection at document verification stage",
            solution: "Always check validity period. Get fresh certificates if expired. OBC NCL must be within current financial year."
        },
        {
            mistake: "Mismatch in name across documents",
            consequence: "Application rejection or legal complications",
            solution: "Ensure exact name match on all documents. If name changed after marriage, carry marriage certificate and gazette notification."
        },
        {
            mistake: "Poor quality scanned documents",
            consequence: "Application rejection during online verification",
            solution: "Scan at 200-300 DPI, ensure clear text, no shadows, proper cropping. File size within specified limits."
        },
        {
            mistake: "Wrong photo/signature specifications",
            consequence: "Application rejection at initial stage",
            solution: "Read notification carefully. Each exam has specific dimensions and file size. Use online tools to resize properly."
        },
        {
            mistake: "Not carrying original documents",
            consequence: "Disqualification at document verification",
            solution: "Carry originals + 2 sets of self-attested photocopies. Never submit originals unless specifically asked."
        },
        {
            mistake: "Expired caste/category certificates",
            consequence: "Loss of reservation benefits",
            solution: "OBC NCL certificate must be issued in current financial year. SC/ST certificates are usually permanent but check notification."
        }
    ];

    const verificationChecklist = [
        { item: "All certificates are self-attested", icon: <CheckCircle2 size={20} color="#10B981" /> },
        { item: "Name spelling is identical across all documents", icon: <CheckCircle2 size={20} color="#10B981" /> },
        { item: "Date of birth matches on all certificates", icon: <CheckCircle2 size={20} color="#10B981" /> },
        { item: "Caste certificate is from competent authority (Tehsildar/SDM)", icon: <CheckCircle2 size={20} color="#10B981" /> },
        { item: "OBC NCL certificate is within current financial year", icon: <CheckCircle2 size={20} color="#10B981" /> },
        { item: "Educational certificates have proper seal and signature", icon: <CheckCircle2 size={20} color="#10B981" /> },
        { item: "Photo and signature meet exact specifications", icon: <CheckCircle2 size={20} color="#10B981" /> },
        { item: "All documents are clearly legible (no blur or shadows)", icon: <CheckCircle2 size={20} color="#10B981" /> },
        { item: "Experience certificates mention exact duration and designation", icon: <CheckCircle2 size={20} color="#10B981" /> },
        { item: "Domicile certificate is from correct state (if required)", icon: <CheckCircle2 size={20} color="#10B981" /> }
    ];

    const preparationTimeline = [
        {
            phase: "3 Months Before Application",
            tasks: [
                "Verify all existing certificates for validity",
                "Apply for new/renewed certificates if needed",
                "Get passport size photos (15-20 copies)",
                "Prepare digital copies of all documents"
            ],
            urgency: "Start Now"
        },
        {
            phase: "1 Month Before Application",
            tasks: [
                "Scan all documents at proper resolution",
                "Resize photo and signature to required specifications",
                "Create a checklist of required documents",
                "Make 3 sets of photocopies of all documents"
            ],
            urgency: "Important"
        },
        {
            phase: "1 Week Before Application",
            tasks: [
                "Double-check all scanned files for clarity",
                "Verify file sizes are within limits",
                "Test upload on exam portal (if test facility available)",
                "Keep all originals in a safe folder"
            ],
            urgency: "Critical"
        },
        {
            phase: "During Application",
            tasks: [
                "Upload documents in correct format",
                "Preview before final submission",
                "Take screenshot of submitted application",
                "Download and print application form"
            ],
            urgency: "Final Step"
        }
    ];

    return (
        <div className="page-wrapper">
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
                        background: 'rgba(16, 185, 129, 0.1)',
                        border: '2px solid #10B981',
                        borderRadius: '30px',
                        marginBottom: '2rem'
                    }}>
                        <FileCheck size={18} color="#10B981" />
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Complete Document Verification Guide
                        </span>
                    </div>

                    <h1 className="gradient-text-teal" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Document Guide 2026
                    </h1>

                    <p style={{
                        fontSize: '1.1rem',
                        color: 'white',
                        maxWidth: '100%',
                        margin: '0 auto 3rem',
                        lineHeight: '1.8',
                        opacity: 0.95
                    }}>
                        Complete information about essential documents required for government exams, verified by official sources. Every guide is 3000+ words covering requirements, format, and common issues.
                    </p>

                    <div className="grid-responsive" style={{ gap: '1.5rem' }}>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 800, color: '#10B981', marginBottom: '0.5rem' }}>50+</div>
                            <div style={{ color: 'white', fontSize: '1rem' }}>Exams Covered</div>
                        </div>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 800, color: '#10B981', marginBottom: '0.5rem' }}>100+</div>
                            <div style={{ color: 'white', fontSize: '1rem' }}>Document Types</div>
                        </div>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 800, color: '#10B981', marginBottom: '0.5rem' }}>Zero</div>
                            <div style={{ color: 'white', fontSize: '1rem' }}>Rejection Risk</div>
                        </div>
                    </div>
                </div>

                {/* Exam Hub Component */}
                <div id="exam-hub-section" className="glass-card" style={{
                    padding: '2rem 1rem',
                    marginBottom: '5rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '2px solid rgba(16, 185, 129, 0.3)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ color: '#10B981', fontSize: '2.5rem', marginBottom: '1rem' }}>
                            Exam-Specific Document Requirements
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.7' }}>
                            Select your target exam below to view detailed document requirements and specifications.
                        </p>
                    </div>
                    <ExamHub />
                </div>

                {/* Essential Documents */}
                <div style={{ marginBottom: '5rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="gradient-text-teal" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
                            Essential Documents Checklist
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
                            Keep these documents ready for any government exam application. Organize them category-wise for quick access.
                        </p>
                    </div>

                    <div className="grid-responsive" style={{ gap: '2rem' }}>
                        {essentialDocuments.map((doc, idx) => (
                            <div key={idx} className="glass-card" style={{
                                padding: '2.5rem',
                                background: 'rgba(16, 185, 129, 0.03)',
                                border: `2px solid ${doc.color}40`,
                                transition: 'all 0.3s ease'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                                    <div>{doc.icon}</div>
                                    <div style={{
                                        padding: '0.4rem 1rem',
                                        background: `${doc.color}15`,
                                        border: `2px solid ${doc.color}`,
                                        borderRadius: '20px',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        color: doc.color
                                    }}>
                                        {doc.priority}
                                    </div>
                                </div>

                                <h3 style={{ color: doc.color, fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 700 }}>
                                    {doc.category}
                                </h3>

                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {doc.documents.map((item, i) => (
                                        <li key={i} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.8rem',
                                            padding: '0.8rem',
                                            background: 'rgba(255, 255, 255, 0.02)',
                                            borderRadius: '8px',
                                            marginBottom: '0.5rem'
                                        }}>
                                            <CheckCircle2 size={16} color={doc.color} />
                                            <span style={{ color: 'white', fontSize: '0.95rem' }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Photo & Signature Specifications */}
                <div className="glass-card" style={{
                    padding: '4rem',
                    marginBottom: '5rem',
                    background: 'rgba(245, 158, 11, 0.03)',
                    border: '2px solid rgba(245, 158, 11, 0.2)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ color: '#F59E0B', fontSize: '2.5rem', marginBottom: '1rem' }}>
                            Photo & Signature Specifications by Exam
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto' }}>
                            Each exam has specific requirements for photograph and signature. Wrong specifications lead to instant rejection.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gap: '2rem' }}>
                        {documentSpecifications.map((spec, idx) => (
                            <div key={idx} style={{
                                padding: '2.5rem',
                                background: 'rgba(255, 255, 255, 0.02)',
                                borderRadius: '16px',
                                border: '2px solid rgba(245, 158, 11, 0.2)'
                            }}>
                                <h3 style={{ color: '#F59E0B', fontSize: '1.8rem', marginBottom: '2rem', fontWeight: 700 }}>
                                    {spec.exam}
                                </h3>

                                <div className="grid-responsive" style={{ gap: '1rem', marginBottom: '2rem' }}>
                                    <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px' }}>
                                        <div style={{ color: '#F59E0B', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase' }}>
                                            📸 Photograph
                                        </div>
                                        <div style={{ marginBottom: '0.8rem' }}>
                                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>Size: </span>
                                            <span style={{ color: 'white', fontWeight: 600 }}>{spec.photoSize}</span>
                                        </div>
                                        <div>
                                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>Format: </span>
                                            <span style={{ color: 'white', fontWeight: 600 }}>{spec.photoFormat}</span>
                                        </div>
                                    </div>
                                    <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px' }}>
                                        <div style={{ color: '#F59E0B', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase' }}>
                                            ✍️ Signature
                                        </div>
                                        <div style={{ marginBottom: '0.8rem' }}>
                                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>Size: </span>
                                            <span style={{ color: 'white', fontWeight: 600 }}>{spec.signatureSize}</span>
                                        </div>
                                        <div>
                                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>Format: </span>
                                            <span style={{ color: 'white', fontWeight: 600 }}>{spec.signatureFormat}</span>
                                        </div>
                                    </div>
                                </div>

                                <div style={{
                                    padding: '1.2rem',
                                    background: 'rgba(245, 158, 11, 0.05)',
                                    border: '2px solid rgba(245, 158, 11, 0.3)',
                                    borderRadius: '10px'
                                }}>
                                    <div style={{ color: '#F59E0B', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                                        ⚠️ Special Requirements:
                                    </div>
                                    <p style={{ color: 'white', fontSize: '1rem', lineHeight: '1.7', margin: 0 }}>
                                        {spec.specialRequirements}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* State-Specific Documents */}
                <div style={{ marginBottom: '5rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="gradient-text-teal" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
                            State-Specific Additional Documents
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
                            State PSC exams require additional documents. Know what's needed for your state.
                        </p>
                    </div>

                    <div className="grid-responsive" style={{ gap: '2rem' }}>
                        {stateSpecificDocs.map((state, idx) => (
                            <div key={idx} className="glass-card" style={{
                                padding: '2.5rem',
                                background: 'rgba(16, 185, 129, 0.03)',
                                border: '2px solid rgba(16, 185, 129, 0.2)'
                            }}>
                                <h3 style={{ color: '#10B981', fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 700 }}>
                                    {state.state}
                                </h3>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>
                                        Additional Documents Required:
                                    </div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {state.additionalDocs.map((doc, i) => (
                                            <li key={i} style={{
                                                display: 'flex',
                                                alignItems: 'start',
                                                gap: '0.8rem',
                                                marginBottom: '0.8rem'
                                            }}>
                                                <CheckCircle2 size={16} color="#10B981" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                                                <span style={{ color: 'white', fontSize: '0.95rem', lineHeight: '1.6' }}>{doc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div style={{
                                    padding: '1rem',
                                    background: 'rgba(245, 158, 11, 0.05)',
                                    border: '2px solid rgba(245, 158, 11, 0.3)',
                                    borderRadius: '8px'
                                }}>
                                    <div style={{ color: '#F59E0B', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                                        📅 Validity Period:
                                    </div>
                                    <p style={{ color: 'white', fontSize: '0.9rem', margin: 0 }}>
                                        {state.validity}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Common Mistakes */}
                <div style={{ marginBottom: '5rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="gradient-text-teal" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
                            Common Document Mistakes to Avoid
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
                            These mistakes have cost thousands of candidates their selection. Learn and avoid them.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gap: '2rem' }}>
                        {commonMistakes.map((item, idx) => (
                            <div key={idx} className="glass-card" style={{
                                padding: '2.5rem',
                                background: 'rgba(239, 68, 68, 0.03)',
                                border: '2px solid rgba(239, 68, 68, 0.2)'
                            }}>
                                <div className="grid-responsive" style={{ gap: '1.5rem', alignItems: 'start' }}>
                                    <div>
                                        <div style={{
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            color: '#EF4444',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            marginBottom: '0.8rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            <AlertTriangle size={16} />
                                            Mistake
                                        </div>
                                        <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                                            {item.mistake}
                                        </p>
                                    </div>
                                    <div>
                                        <div style={{
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            color: '#F59E0B',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            marginBottom: '0.8rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            <AlertTriangle size={16} />
                                            Consequence
                                        </div>
                                        <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                                            {item.consequence}
                                        </p>
                                    </div>
                                    <div>
                                        <div style={{
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            color: '#10B981',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            marginBottom: '0.8rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            <CheckCircle2 size={16} />
                                            Solution
                                        </div>
                                        <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                                            {item.solution}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Document Verification Checklist */}
                <div className="dedicated-content" style={{
                    marginBottom: '5rem',
                    background: 'rgba(234, 88, 12, 0.05)',
                    border: '2px solid rgba(234, 88, 12, 0.3)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ color: '#EA580C', fontSize: 'clamp(1.8rem, 4.5vw, 2.2rem)', marginBottom: '1rem' }}>
                            Success Document Preparation
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.7', width: '100%', margin: '0 auto' }}>
                            Learn from experts how to prepare your documents properly to avoid rejection at the final stage.
                        </p>
                    </div>

                    <div className="grid-responsive" style={{ gap: '1.5rem' }}>
                        {verificationChecklist.map((item, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1.5rem',
                                background: 'rgba(255, 255, 255, 0.02)',
                                borderRadius: '12px',
                                border: '2px solid rgba(16, 185, 129, 0.2)'
                            }}>
                                {item.icon}
                                <span style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                    {item.item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Preparation Timeline */}
                <div style={{ marginBottom: '5rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="gradient-text-teal" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
                            Document Preparation Timeline
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
                            Follow this timeline to ensure you have all documents ready well before the application deadline.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gap: '2rem' }}>
                        {preparationTimeline.map((phase, idx) => (
                            <div key={idx} className="glass-card" style={{
                                padding: '2.5rem',
                                background: 'rgba(16, 185, 129, 0.03)',
                                border: '2px solid rgba(16, 185, 129, 0.2)',
                                position: 'relative'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '2.5rem',
                                    right: '2.5rem',
                                    padding: '0.5rem 1.2rem',
                                    background: idx === 0 ? 'rgba(239, 68, 68, 0.1)' : idx === 1 ? 'rgba(245, 158, 11, 0.1)' : idx === 2 ? 'rgba(245, 158, 11, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                                    border: `2px solid ${idx === 0 ? '#EF4444' : idx === 1 ? '#F59E0B' : idx === 2 ? '#F59E0B' : '#10B981'}`,
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    fontWeight: 700,
                                    color: idx === 0 ? '#EF4444' : idx === 1 ? '#F59E0B' : idx === 2 ? '#F59E0B' : '#10B981'
                                }}>
                                    {phase.urgency}
                                </div>

                                <h3 style={{ color: '#10B981', fontSize: '1.8rem', marginBottom: '2rem', fontWeight: 700 }}>
                                    {phase.phase}
                                </h3>

                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {phase.tasks.map((task, i) => (
                                        <li key={i} style={{
                                            display: 'flex',
                                            alignItems: 'start',
                                            gap: '1rem',
                                            marginBottom: '1rem',
                                            padding: '1rem',
                                            background: 'rgba(255, 255, 255, 0.02)',
                                            borderRadius: '8px'
                                        }}>
                                            <CheckCircle2 size={20} color="#10B981" style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                                            <span style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.7' }}>{task}</span>
                                        </li>
                                    ))}
                                </ul>
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
                        Ensure Your Document Success Today
                    </h2>
                    <p style={{ color: 'white', fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: '1.8', width: '100%', margin: '0 auto 2.5rem' }}>
                        Access 30+ comprehensive document guides written by official verification experts. Every guide is 3000+ words covering complete requirements, format, and issue resolution.
                    </p>
                    <div className="grid-responsive" style={{ gap: '1.5rem', justifyContent: 'center' }}>
                        <button onClick={onNavigateToExamRequirements} className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>
                            <Download size={20} /> View Exam Requirements
                        </button>
                        <button onClick={onBack} className="btn btn-secondary">
                            <Home size={20} /> Back to Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocumentGuidePage;
