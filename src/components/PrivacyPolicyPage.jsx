import React, { useEffect } from 'react';
import { Home, Shield, FileText, AlertCircle, CheckCircle2, Cookie, Database, Lock } from 'lucide-react';

const PrivacyPolicyPage = ({ onBack }) => {
    useEffect(() => window.scrollTo(0, 0), []);

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

                {/* Header */}
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
                        <Shield size={18} color="#10B981" />
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Your Privacy Matters
                        </span>
                    </div>

                    <h1 className="gradient-text" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Privacy Policy
                    </h1>

                    <p style={{ fontSize: '1.2rem', color: 'white', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', opacity: 0.95 }}>
                        Last Updated: February 7, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="glass-card" style={{ padding: '4rem', maxWidth: '1000px', margin: '0 auto' }}>

                    {/* Introduction */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#10B981', fontSize: '2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FileText size={28} /> Introduction
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            Welcome to SarkariExamAll ("we," "our," or "us"). We are committed to protecting your privacy and ensuring transparency about how we collect, use, and protect your information. This Privacy Policy explains our practices regarding data collection and usage when you visit our website at sarkariexamall.onrender.com (the "Website").
                        </p>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            By using our Website, you agree to the collection and use of information in accordance with this policy.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#10B981', fontSize: '2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <Database size={28} /> Information We Collect
                        </h2>

                        <h3 style={{ color: '#F59E0B', fontSize: '1.5rem', marginBottom: '1rem', marginTop: '2rem' }}>
                            1. Information You Provide
                        </h3>
                        <ul style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8', marginLeft: '1.5rem' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Contact information when you reach out to us via email or contact forms</li>
                            <li style={{ marginBottom: '0.8rem' }}>Information you enter in our eligibility checker tool (processed locally, not stored)</li>
                            <li>Any other information you voluntarily provide through our Website</li>
                        </ul>

                        <h3 style={{ color: '#F59E0B', fontSize: '1.5rem', marginBottom: '1rem', marginTop: '2rem' }}>
                            2. Automatically Collected Information
                        </h3>
                        <ul style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8', marginLeft: '1.5rem' }}>
                            <li style={{ marginBottom: '0.8rem' }}><strong>Log Data:</strong> IP address, browser type, operating system, pages visited, time spent on pages</li>
                            <li style={{ marginBottom: '0.8rem' }}><strong>Cookies:</strong> Small data files stored on your device (see Cookies section below)</li>
                            <li>Device information and usage patterns</li>
                        </ul>
                    </section>

                    {/* Cookies */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#10B981', fontSize: '2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <Cookie size={28} /> Cookies and Tracking Technologies
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            We use cookies and similar tracking technologies to enhance your experience on our Website. Cookies are small text files stored on your device that help us:
                        </p>
                        <ul style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Remember your preferences and settings</li>
                            <li style={{ marginBottom: '0.8rem' }}>Analyze website traffic and usage patterns</li>
                            <li style={{ marginBottom: '0.8rem' }}>Improve website functionality and user experience</li>
                            <li>Serve relevant advertisements through Google AdSense</li>
                        </ul>
                        <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8', background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #10B981' }}>
                            <strong>Note:</strong> You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.
                        </p>
                    </section>

                    {/* Google AdSense */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#10B981', fontSize: '2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <AlertCircle size={28} /> Third-Party Advertising (Google AdSense)
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            We use Google AdSense to display advertisements on our Website. Google AdSense uses cookies and web beacons to serve ads based on your prior visits to our Website or other websites.
                        </p>

                        <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '1.5rem', borderRadius: '12px', border: '2px solid #F59E0B', marginBottom: '1.5rem' }}>
                            <h3 style={{ color: '#F59E0B', fontSize: '1.3rem', marginBottom: '1rem' }}>
                                Google's Use of Advertising Cookies
                            </h3>
                            <ul style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8', marginLeft: '1.5rem' }}>
                                <li style={{ marginBottom: '0.8rem' }}>Google uses cookies to serve ads based on your previous visits to this website</li>
                                <li style={{ marginBottom: '0.8rem' }}>Google's use of advertising cookies enables it and its partners to serve ads based on your visit to this site and/or other sites on the Internet</li>
                                <li style={{ marginBottom: '0.8rem' }}>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: '#F59E0B', textDecoration: 'underline' }}>Google Ads Settings</a></li>
                                <li>Alternatively, you can opt out of third-party vendor's use of cookies by visiting <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" style={{ color: '#F59E0B', textDecoration: 'underline' }}>aboutads.info</a></li>
                            </ul>
                        </div>

                        <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8' }}>
                            For more information about Google's privacy practices, please visit the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#10B981', textDecoration: 'underline' }}>Google Privacy & Terms page</a>.
                        </p>
                    </section>

                    {/* How We Use Information */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#10B981', fontSize: '2rem', marginBottom: '1.5rem' }}>
                            How We Use Your Information
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            We use the collected information for the following purposes:
                        </p>
                        <ul style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8', marginLeft: '1.5rem' }}>
                            <li style={{ marginBottom: '0.8rem' }}>To provide and maintain our Website</li>
                            <li style={{ marginBottom: '0.8rem' }}>To improve user experience and website functionality</li>
                            <li style={{ marginBottom: '0.8rem' }}>To analyze website usage and trends</li>
                            <li style={{ marginBottom: '0.8rem' }}>To respond to your inquiries and support requests</li>
                            <li style={{ marginBottom: '0.8rem' }}>To send you updates and notifications (only if you opt-in)</li>
                            <li>To display relevant advertisements through Google AdSense</li>
                        </ul>
                    </section>

                    {/* Data Security */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#10B981', fontSize: '2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <Lock size={28} /> Data Security
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            We take the security of your data seriously and implement appropriate technical and organizational measures to protect your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
                        </p>
                        <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8', background: 'rgba(239, 68, 68, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #EF4444' }}>
                            <strong>Important:</strong> Our eligibility checker tool processes all data locally in your browser. We do not store or transmit any information you enter in the eligibility checker.
                        </p>
                    </section>

                    {/* Third-Party Links */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#10B981', fontSize: '2rem', marginBottom: '1.5rem' }}>
                            Third-Party Links
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Our Website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                        </p>
                    </section>

                    {/* Children's Privacy */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#10B981', fontSize: '2rem', marginBottom: '1.5rem' }}>
                            Children's Privacy
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Our Website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                        </p>
                    </section>

                    {/* Your Rights */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#10B981', fontSize: '2rem', marginBottom: '1.5rem' }}>
                            Your Rights
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            You have the right to:
                        </p>
                        <ul style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8', marginLeft: '1.5rem' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Access the personal information we hold about you</li>
                            <li style={{ marginBottom: '0.8rem' }}>Request correction of inaccurate information</li>
                            <li style={{ marginBottom: '0.8rem' }}>Request deletion of your personal information</li>
                            <li style={{ marginBottom: '0.8rem' }}>Opt-out of marketing communications</li>
                            <li>Disable cookies through your browser settings</li>
                        </ul>
                    </section>

                    {/* Changes to Policy */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: '#10B981', fontSize: '2rem', marginBottom: '1.5rem' }}>
                            Changes to This Privacy Policy
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
                        </p>
                    </section>

                    {/* Contact */}
                    <section>
                        <h2 style={{ color: '#10B981', fontSize: '2rem', marginBottom: '1.5rem' }}>
                            Contact Us
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            If you have any questions about this Privacy Policy or our data practices, please contact us:
                        </p>
                        <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1.5rem', borderRadius: '12px', border: '2px solid #10B981' }}>
                            <p style={{ color: 'white', fontSize: '1.05rem', marginBottom: '0.8rem' }}>
                                <strong>Email:</strong> <a href="mailto:info@sarkariexamall.com" style={{ color: '#10B981', textDecoration: 'underline' }}>info@sarkariexamall.com</a>
                            </p>
                            <p style={{ color: 'white', fontSize: '1.05rem', marginBottom: '0.8rem' }}>
                                <strong>Phone:</strong> <a href="tel:8077583921" style={{ color: '#10B981', textDecoration: 'underline' }}>8077583921</a>
                            </p>
                            <p style={{ color: 'white', fontSize: '1.05rem' }}>
                                <strong>Website:</strong> sarkariexamall.onrender.com
                            </p>
                        </div>
                    </section>

                </div>

                {/* Back Button */}
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <button onClick={onBack} className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>
                        <Home size={20} /> Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
