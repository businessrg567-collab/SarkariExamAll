import React, { useState } from 'react';
import { Search, CheckCircle2, XCircle, FileCheck, ClipboardList, Briefcase } from 'lucide-react';

const examData = [
    { name: 'SSC CGL 2026', minAge: 18, maxAge: 32, degree: 'Graduation', finalYear: true },
    { name: 'UPSC CSE 2026', minAge: 21, maxAge: 32, degree: 'Graduation', finalYear: true },
    { name: 'IBPS PO 2026', minAge: 20, maxAge: 30, degree: 'Graduation', finalYear: true },
    { name: 'SBI Clerk 2026', minAge: 20, maxAge: 28, degree: 'Graduation', finalYear: true },
    { name: 'RRB NTPC 2026', minAge: 18, maxAge: 33, degree: '12th/Graduation', finalYear: true },
    { name: 'CDS 2026', minAge: 19, maxAge: 24, degree: 'Graduation', finalYear: false }
];

const EligibilityChecker = () => {
    const [formData, setFormData] = useState({
        age: '',
        qualification: 'Graduation',
        isFinalYear: 'No'
    });
    const [results, setResults] = useState(null);

    const checkEligibility = (e) => {
        e.preventDefault();
        const age = parseInt(formData.age);
        const eligible = examData.filter(exam => {
            const ageMatch = age >= exam.minAge && age <= exam.maxAge;
            const statusMatch = formData.isFinalYear === 'Yes' ? exam.finalYear : true;
            return ageMatch && statusMatch;
        });
        setResults(eligible);
    };

    return (
        <div className="premium-checker-card reveal">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 className="gradient-text-gold" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Eligibility Checker</h3>
                <p style={{ color: 'white', opacity: 0.9, fontSize: '1rem', fontWeight: 500 }}>Input your profile details for 2026 instant matching.</p>
            </div>

            <form onSubmit={checkEligibility} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.6rem', fontSize: '0.9rem', fontWeight: 700, color: 'var(--secondary)' }}>Target Age (2026)</label>
                    <input
                        type="number"
                        placeholder="e.g. 21"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className="form-input checker-input"
                        required
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.6rem', fontSize: '0.9rem', fontWeight: 700, color: 'var(--secondary)' }}>Educational Status</label>
                    <select
                        value={formData.isFinalYear}
                        onChange={(e) => setFormData({ ...formData, isFinalYear: e.target.value })}
                        className="form-input checker-input"
                    >
                        <option value="10th">10th Pass</option>
                        <option value="12th">12th Pass</option>
                        <option value="Diploma">Diploma Holder</option>
                        <option value="FinalYear">Final Year Student (Graduation)</option>
                        <option value="No">Graduation Completed</option>
                        <option value="PostGrad">Post Graduation</option>
                        <option value="Professional">Professional Degree (CA/CS/Engineering)</option>
                    </select>
                </div>
                <div style={{ alignSelf: 'end' }}>
                    <button type="submit" className="btn btn-primary btn-pulse" style={{ width: '100%', padding: '1rem', border: 'none' }}>
                        <Search size={18} style={{ marginRight: '0.5rem' }} /> Match My Exams
                    </button>
                </div>
            </form>

            {results && (
                <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.8rem' }}>Eligible Opportunities:</h4>
                    <div style={{ display: 'grid', gap: '0.6rem' }}>
                        {results.length > 0 ? results.map((exam, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '0.8rem 1rem',
                                background: 'rgba(100, 255, 218, 0.05)',
                                borderRadius: '6px',
                                border: '1px solid rgba(100, 255, 218, 0.1)',
                                flexWrap: 'wrap',
                                gap: '0.5rem'
                            }}>
                                <span style={{ fontWeight: '600', color: 'white' }}>{exam.name}</span>
                                <span style={{ fontSize: '0.75rem', color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <CheckCircle2 size={12} /> Verified
                                </span>
                            </div>
                        )) : (
                            <p style={{ color: '#FF7675', fontSize: '0.9rem' }}>No direct matches for the current age input. Check for age relaxations.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default EligibilityChecker;
