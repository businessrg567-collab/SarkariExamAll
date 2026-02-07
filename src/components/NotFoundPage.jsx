import React from 'react';
import { Home, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            paddingTop: '10rem',
            paddingBottom: '6rem',
            background: 'var(--primary)',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
                <AlertCircle size={80} color="#EF4444" style={{ marginBottom: '2rem' }} />

                <h1 style={{
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    color: '#EF4444',
                    marginBottom: '1rem',
                    fontWeight: 800
                }}>
                    404
                </h1>

                <h2 style={{
                    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                    color: 'white',
                    marginBottom: '1.5rem'
                }}>
                    Page Not Available
                </h2>

                <p style={{
                    fontSize: '1.1rem',
                    color: 'white',
                    opacity: 0.8,
                    marginBottom: '3rem',
                    lineHeight: '1.7'
                }}>
                    The page you are looking for doesn't exist or has been moved. Please check the URL or return to the homepage.
                </p>

                <button
                    onClick={() => navigate('/')}
                    className="btn btn-primary"
                    style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}
                >
                    <Home size={20} /> Back to Home
                </button>
            </div>
        </div>
    );
};

export default NotFoundPage;
