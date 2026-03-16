import React, { useEffect } from 'react';
import { ArrowLeft, Home, AlertCircle, Info, FileText, CheckCircle2 } from 'lucide-react';

const DisclaimerPage = ({ onBack, onHome }) => {
    useEffect(() => window.scrollTo(0, 0), []);

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

                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.5rem', background: 'rgba(239,68,68,0.1)', border: '2px solid #EF4444', borderRadius: '30px', marginBottom: '2rem' }}>
                        <AlertCircle size={18} color="#EF4444" />
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#EF4444', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Important Notice</span>
                    </div>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1rem', fontWeight: 800 }}>Disclaimer</h1>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>Last Updated: February 7, 2026</p>
                </div>

                <div className="glass-card" style={{ padding: '2.5rem', maxWidth: '1000px', margin: '0 auto' }}>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#EF4444', fontSize: '1.8rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <Info size={26} /> General Disclaimer
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1rem' }}>
                            The information provided on SarkariExamAll (sarkariexamall.com) is for general informational and educational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
                        </p>
                        <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9' }}>
                            Any reliance you place on such information is therefore strictly at your own risk. SarkariExamAll shall not be held liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising from the use of this website.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#F59E0B', fontSize: '1.8rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FileText size={26} /> Exam Information Disclaimer
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1rem' }}>
                            SarkariExamAll is an independent educational portal and is NOT affiliated with, endorsed by, or officially connected to any government body, recruitment board, or examination authority including but not limited to:
                        </p>
                        <ul style={{ color: 'white', fontSize: '1.05rem', lineHeight: '2', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Union Public Service Commission (UPSC)</li>
                            <li>Staff Selection Commission (SSC)</li>
                            <li>Institute of Banking Personnel Selection (IBPS)</li>
                            <li>Railway Recruitment Boards (RRB)</li>
                            <li>State Public Service Commissions</li>
                            <li>Any other Central or State Government recruitment body</li>
                        </ul>
                        <div style={{ background: 'rgba(245,158,11,0.1)', padding: '1.5rem', borderRadius: '12px', border: '2px solid rgba(245,158,11,0.4)' }}>
                            <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8', margin: 0 }}>
                                <strong style={{ color: '#F59E0B' }}>Important:</strong> Always verify exam dates, eligibility criteria, application fees, and other details from the official websites of the respective recruitment bodies before applying. Official notifications supersede any information published on this website.
                            </p>
                        </div>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#10B981', fontSize: '1.8rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <CheckCircle2 size={26} /> Accuracy of Information
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1rem' }}>
                            We make every effort to ensure that the information published on SarkariExamAll is accurate and current. Our research team regularly reviews and updates content based on official notifications and government announcements. However:
                        </p>
                        <ul style={{ color: 'white', fontSize: '1.05rem', lineHeight: '2', marginLeft: '1.5rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Exam dates, vacancy counts, and eligibility criteria are subject to change by the respective authorities</li>
                            <li style={{ marginBottom: '0.5rem' }}>We cannot guarantee real-time accuracy of all information</li>
                            <li style={{ marginBottom: '0.5rem' }}>Typographical errors may occasionally occur despite our best efforts</li>
                            <li>Users should always cross-check critical information with official sources</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#8B5CF6', fontSize: '1.8rem', marginBottom: '1.2rem' }}>
                            Third-Party Links
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9' }}>
                            Our website may contain links to external websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s) and are not liable for any loss or damage that may arise from your use of them.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#EC4899', fontSize: '1.8rem', marginBottom: '1.2rem' }}>
                            Advertising Disclaimer
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1rem' }}>
                            SarkariExamAll may display advertisements through Google AdSense and other advertising networks. These advertisements are clearly distinguishable from our editorial content. We do not endorse the products or services advertised on our website.
                        </p>
                        <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9' }}>
                            The presence of advertisements does not constitute an endorsement of the advertised products or services. Readers should exercise their own judgment before making any purchase or enrollment decisions based on advertisements.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#F59E0B', fontSize: '1.8rem', marginBottom: '1.2rem' }}>
                            No Professional Advice
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9' }}>
                            The content on SarkariExamAll is intended for general informational purposes only and does not constitute professional legal, financial, or career advice. For specific guidance regarding your eligibility, application process, or career decisions, we recommend consulting with qualified professionals or directly contacting the relevant recruitment authority.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ color: '#10B981', fontSize: '1.8rem', marginBottom: '1.2rem' }}>
                            Contact Us
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1rem' }}>
                            If you have any questions about this Disclaimer or wish to report inaccurate information, please contact us:
                        </p>
                        <div style={{ background: 'rgba(16,185,129,0.1)', padding: '1.5rem', borderRadius: '12px', border: '2px solid #10B981' }}>
                            <p style={{ color: 'white', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                                <strong>Email:</strong> <a href="mailto:info@sarkariexamall.com" style={{ color: '#10B981' }}>info@sarkariexamall.com</a>
                            </p>
                            <p style={{ color: 'white', fontSize: '1.05rem' }}>
                                <strong>Phone:</strong> <a href="tel:+918077583921" style={{ color: '#10B981' }}>+91 8077583921</a>
                            </p>
                        </div>
                    </section>
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <button onClick={onBack} className="btn btn-primary">
                        <ArrowLeft size={20} /> Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DisclaimerPage;
