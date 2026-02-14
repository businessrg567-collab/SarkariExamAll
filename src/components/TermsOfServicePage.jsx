import React, { useEffect } from 'react';
import { Home, FileText, AlertCircle, CheckCircle2, Scale, Shield, ArrowLeft } from 'lucide-react';

const TermsOfServicePage = ({ onBack }) => {
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="page-wrapper" style={{ minHeight: '100vh' }}>
            <div className="container">
                <button onClick={onBack} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
                    <ArrowLeft size={18} /> Back
                </button>

                {/* Header */}
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
                        <Scale size={18} color="#8B5CF6" />
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#8B5CF6', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Legal Agreement
                        </span>
                    </div>

                    <h1 className="gradient-text" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Terms of Service
                    </h1>

                    <p style={{ fontSize: '1.2rem', color: 'white', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', opacity: 0.95 }}>
                        Last Updated: February 7, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="glass-card" style={{ padding: '2rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}>

                    {/* Introduction */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#8B5CF6', fontSize: '2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FileText size={28} /> Agreement to Terms
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            Welcome to SarkariExamAll. These Terms of Service ("Terms") govern your access to and use of our website located at sarkariexamall.onrender.com (the "Website"), operated by SarkariExamAll ("we," "us," or "our").
                        </p>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            By accessing or using our Website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Website.
                        </p>
                        <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1.5rem', borderRadius: '12px', border: '2px solid #EF4444' }}>
                            <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8' }}>
                                <strong>Important:</strong> Please read these Terms carefully before using our Website. Your continued use of the Website constitutes acceptance of these Terms.
                            </p>
                        </div>
                    </section>

                    {/* Use of Website */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#8B5CF6', fontSize: '2rem', marginBottom: '1.5rem' }}>
                            1. Use of Website
                        </h2>

                        <h3 style={{ color: '#F59E0B', fontSize: '1.5rem', marginBottom: '1rem', marginTop: '2rem' }}>
                            1.1 Permitted Use
                        </h3>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            You may use our Website for lawful purposes only. You agree to use the Website in accordance with all applicable laws and regulations.
                        </p>

                        <h3 style={{ color: '#F59E0B', fontSize: '1.5rem', marginBottom: '1rem', marginTop: '2rem' }}>
                            1.2 Prohibited Activities
                        </h3>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            You agree NOT to:
                        </p>
                        <ul style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8', marginLeft: '1.5rem' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Use the Website for any illegal or unauthorized purpose</li>
                            <li style={{ marginBottom: '0.8rem' }}>Attempt to gain unauthorized access to any part of the Website</li>
                            <li style={{ marginBottom: '0.8rem' }}>Interfere with or disrupt the Website or servers</li>
                            <li style={{ marginBottom: '0.8rem' }}>Transmit viruses, malware, or any harmful code</li>
                            <li style={{ marginBottom: '0.8rem' }}>Scrape, copy, or reproduce content without permission</li>
                            <li style={{ marginBottom: '0.8rem' }}>Impersonate any person or entity</li>
                            <li>Use automated systems to access the Website without consent</li>
                        </ul>
                    </section>

                    {/* Intellectual Property */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#8B5CF6', fontSize: '2rem', marginBottom: '1.5rem' }}>
                            2. Intellectual Property Rights
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            All content on this Website, including but not limited to text, graphics, logos, images, articles, and software, is the property of SarkariExamAll or its content suppliers and is protected by Indian and international copyright laws.
                        </p>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit any content from our Website without our prior written permission.
                        </p>
                        <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1.5rem', borderRadius: '12px', border: '2px solid #10B981' }}>
                            <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8' }}>
                                <strong>Fair Use:</strong> You may share links to our content and use brief excerpts for educational or informational purposes with proper attribution.
                            </p>
                        </div>
                    </section>

                    {/* Disclaimer */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#8B5CF6', fontSize: '2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <AlertCircle size={28} /> 3. Disclaimer of Warranties
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            The information provided on this Website is for general informational and educational purposes only. While we strive to provide accurate and up-to-date information:
                        </p>
                        <ul style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li style={{ marginBottom: '0.8rem' }}>We make no representations or warranties of any kind, express or implied</li>
                            <li style={{ marginBottom: '0.8rem' }}>We do not guarantee the accuracy, completeness, or timeliness of information</li>
                            <li style={{ marginBottom: '0.8rem' }}>Exam requirements, dates, and eligibility criteria may change - always verify with official sources</li>
                            <li>The Website is provided "as is" without warranty of any kind</li>
                        </ul>
                        <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1.5rem', borderRadius: '12px', border: '2px solid #EF4444' }}>
                            <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8' }}>
                                <strong>Important Notice:</strong> Always verify exam information, eligibility criteria, and application deadlines from official government websites and notifications. We are not responsible for any decisions made based solely on information from our Website.
                            </p>
                        </div>
                    </section>

                    {/* Limitation of Liability */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#8B5CF6', fontSize: '2rem', marginBottom: '1.5rem' }}>
                            4. Limitation of Liability
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            To the fullest extent permitted by law, SarkariExamAll shall not be liable for:
                        </p>
                        <ul style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8', marginLeft: '1.5rem' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Any direct, indirect, incidental, special, or consequential damages</li>
                            <li style={{ marginBottom: '0.8rem' }}>Loss of data, profits, or business opportunities</li>
                            <li style={{ marginBottom: '0.8rem' }}>Damages arising from your use or inability to use the Website</li>
                            <li style={{ marginBottom: '0.8rem' }}>Errors or omissions in content</li>
                            <li>Any actions taken based on information from our Website</li>
                        </ul>
                    </section>

                    {/* Third-Party Links */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#8B5CF6', fontSize: '2rem', marginBottom: '1.5rem' }}>
                            5. Third-Party Links and Content
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            Our Website may contain links to third-party websites or services that are not owned or controlled by SarkariExamAll. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites.
                        </p>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            You acknowledge and agree that we shall not be liable for any damage or loss caused by your use of any third-party content or services.
                        </p>
                    </section>

                    {/* Advertising */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#8B5CF6', fontSize: '2rem', marginBottom: '1.5rem' }}>
                            6. Advertising and Sponsorship
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            We use Google AdSense to display advertisements on our Website. These advertisements are served by Google and may be based on your browsing history and preferences.
                        </p>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            We are not responsible for the content of advertisements or the products/services advertised. Any dealings with advertisers are solely between you and the advertiser.
                        </p>
                    </section>

                    {/* User Content */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#8B5CF6', fontSize: '2rem', marginBottom: '1.5rem' }}>
                            7. User-Generated Content
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            If you submit any content to our Website (comments, feedback, suggestions), you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display such content.
                        </p>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            You represent that you own or have the necessary rights to any content you submit and that it does not violate any third-party rights.
                        </p>
                    </section>

                    {/* Indemnification */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#8B5CF6', fontSize: '2rem', marginBottom: '1.5rem' }}>
                            8. Indemnification
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            You agree to indemnify and hold harmless SarkariExamAll, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Website or violation of these Terms.
                        </p>
                    </section>

                    {/* Termination */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#8B5CF6', fontSize: '2rem', marginBottom: '1.5rem' }}>
                            9. Termination
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            We reserve the right to terminate or suspend your access to the Website at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
                        </p>
                    </section>

                    {/* Changes to Terms */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#8B5CF6', fontSize: '2rem', marginBottom: '1.5rem' }}>
                            10. Changes to Terms
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            We reserve the right to modify these Terms at any time. We will notify users of any material changes by updating the "Last Updated" date. Your continued use of the Website after changes constitutes acceptance of the modified Terms.
                        </p>
                    </section>

                    {/* Governing Law */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#8B5CF6', fontSize: '2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <Scale size={28} /> 11. Governing Law
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the courts in India.
                        </p>
                    </section>

                    {/* Contact */}
                    <section>
                        <h2 style={{ color: '#8B5CF6', fontSize: '2rem', marginBottom: '1.5rem' }}>
                            12. Contact Information
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            If you have any questions about these Terms of Service, please contact us:
                        </p>
                        <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '1.5rem', borderRadius: '12px', border: '2px solid #8B5CF6' }}>
                            <p style={{ color: 'white', fontSize: '1.05rem', marginBottom: '0.8rem' }}>
                                <strong>Email:</strong> <a href="mailto:info@sarkariexamall.com" style={{ color: '#8B5CF6', textDecoration: 'underline' }}>info@sarkariexamall.com</a>
                            </p>
                            <p style={{ color: 'white', fontSize: '1.05rem', marginBottom: '0.8rem' }}>
                                <strong>Phone:</strong> <a href="tel:8077583921" style={{ color: '#8B5CF6', textDecoration: 'underline' }}>8077583921</a>
                            </p>
                            <p style={{ color: 'white', fontSize: '1.05rem' }}>
                                <strong>Website:</strong> sarkariexamall.onrender.com
                            </p>
                        </div>
                    </section>

                </div>

                {/* Acknowledgment */}
                <div className="glass-card" style={{ padding: '2rem', maxWidth: '1000px', margin: '3rem auto', background: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10B981' }}>
                    <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                        <CheckCircle2 size={32} color="#10B981" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                        <div>
                            <h3 style={{ color: '#10B981', fontSize: '1.5rem', marginBottom: '1rem' }}>
                                Acknowledgment
                            </h3>
                            <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8' }}>
                                By using SarkariExamAll, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <button onClick={onBack} className="btn btn-primary" style={{ margin: '0 auto' }}>
                        <ArrowLeft size={20} /> Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TermsOfServicePage;
